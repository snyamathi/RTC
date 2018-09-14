/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* global requirejs */
requirejs.config({
    paths: {
        'phenix-rtc': 'main',
        'jquery': '//code.jquery.com/jquery-2.1.3.min',
        'lodash': '//cdnjs.cloudflare.com/ajax/libs/lodash.js/3.5.0/lodash.min',
        'bootstrap': '//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min',
        'webrtc-adapter': '/webrtc-adapter/out/adapter',
        'phenix-web-lodash-light': 'phenix-web-lodash-light/dist/phenix-web-lodash-light.min',
        'phenix-web-assert': 'phenix-web-assert/dist/phenix-web-assert.min',
        'phenix-web-event': 'phenix-web-event/dist/phenix-web-event.min',
        'phenix-web-observable': 'phenix-web-observable/dist/phenix-web-observable.min',
        'phenix-web-disposable': 'phenix-web-disposable/dist/phenix-web-disposable.min',
        'phenix-web-detect-browser': 'phenix-web-detect-browser/dist/phenix-web-detect-browser.min'
    }
});

var peerConnectionConfig = {
    iceServers: [{urls: 'stun:stun.l.google.com:19302'}, {urls: 'stun:stun1.l.google.com:19302'}
    ]
};
var peerConnectionConstraints = {
    'optional': [{DtlsSrtpKeyAgreement: true}, {RtpDataChannels: false}
    ]
};

var sendingConstraints = {
    offerToReceiveVideo: false,
    offerToReceiveAudio: false
};
var receivingConstraints = {
    offerToReceiveVideo: true,
    offerToReceiveAudio: true
};

requirejs([
    'phenix-web-lodash-light',
    'jquery',
    'phenix-rtc'
], function(_, $, rtc) {
    var init = function init() {
        var localVideoEl = $('#localVideo')[0];
        var remoteVideoEl = $('#remoteVideo')[0];
        var userMediaStream = null;
        var pcSender = null;
        var pcReceiver = null;
        var pcSenderOfferSdp = null;
        var pcReceiverAnswerSdp = null;

        var onUserMediaSuccess = function onUserMediaSuccess(stream) {
            log('Got user media stream [%s]', localVideoEl.id);

            // **********
            // IMPORTANT: update reference to element as some RTC implementation will replace the element in the DOM
            // **********
            localVideoEl = rtc.attachMediaStream(localVideoEl, stream);

            userMediaStream = stream;
        };

        var onLoadedMetaData = function onLoadedMetaData(video) {
            log('Meta data, width=' + video.videoWidth + ', height=' + video.videoHeight);

            if (rtc.browser !== 'Edge' && rtc.browser !== 'IE') {
                video.width = video.videoWidth;
                video.height = video.videoHeight;
            }
        };

        var onFailure = function onFailure(e) {
            alert(e); // eslint-disable-line no-alert
        };

        var getUserMedia = function getUserMedia() {
            if (!userMediaStream || userMediaStream.ended) {
                rtc.getUserMedia({
                    audio: true,
                    video: true
                }, onUserMediaSuccess, onFailure);
            }
        };

        var monitorPeerConnection = function monitorUpload(pc, stateEl, audioBitrateEl, videoBitrateEl) {
            if (typeof pc.getStats === 'function' || typeof pc.getStats === 'object') {
                var last = {};
                var update = function update() {
                    stateEl.val(pc.signalingState + '/' + pc.iceGatheringState + '/' + pc.iceConnectionState);

                    rtc.getStats(pc, null /* all*/, function(stats) {
                        if (typeof stats.result === 'function') {
                            _.forEach(stats.result(), function(statsReport) {
                                if (statsReport.type === 'ssrc') {
                                    var ssrc = statsReport.stat('ssrc');
                                    var bytesTx = statsReport.stat('bytesSent');
                                    var bytesRx = statsReport.stat('bytesReceived');
                                    var codec = _.includes(statsReport.names(), 'googCodecName')
                                        ? statsReport.stat('googCodecName').toLowerCase()
                                        : _.includes(statsReport.names(), 'googFrameRateOutput') ? 'vp8' : '?';

                                    if (ssrc) {
                                        var tbefore = 0;

                                        if (!_.hasIndexOrKey(last, ssrc)) {
                                            last[ssrc] = {timestamp: 0};
                                        } else {
                                            tbefore = last[ssrc].timestamp;
                                            last[ssrc].timestamp = statsReport.timestamp.getTime();
                                        }

                                        var tdelta = statsReport.timestamp.getTime() - tbefore;
                                        var up = '0bps';
                                        var down = '0bps';

                                        if (bytesTx) {
                                            var bytesTxBefore = last[ssrc].bytesTx || 0;
                                            var bpsTx = 8 * 1000 * (bytesTx - bytesTxBefore) / tdelta;

                                            last[ssrc].bytesTx = bytesTx;
                                            up = Math.round(bpsTx / 1000) + 'kbps';
                                        }

                                        if (bytesRx) {
                                            var bytesRxBefore = last[ssrc].bytesRx || 0;
                                            var bpsRx = 8 * 1000 * (bytesRx - bytesRxBefore) / tdelta;

                                            last[ssrc].bytesRx = bytesRx;
                                            down = Math.round(bpsRx / 1000) + 'kbps';
                                        }

                                        if (codec === 'opus') {
                                            audioBitrateEl.val('↑' + up + '/↓' + down);
                                        } else if (codec === 'vp8') {
                                            videoBitrateEl.val('↑' + up + '/↓' + down);
                                        }
                                    }
                                }
                            });
                        } else {
                            stats.forEach(function(statsReport) {
                                if (statsReport['ssrcIds']) {
                                    statsReport['ssrc'] = statsReport['ssrcIds'][0];
                                }

                                if (_.hasIndexOrKey(statsReport, 'ssrc')) {
                                    if (!statsReport.ssrc || statsReport.id.indexOf('rtcp') > -1) {
                                        return;
                                    }

                                    var key = statsReport.id || statsReport.ssrc;
                                    var bytesTx = statsReport.bytesSent || 0;
                                    var bytesRx = statsReport.bytesReceived || 0;
                                    var mediaType = statsReport.mediaType;

                                    if (!mediaType && statsReport.id.toLowerCase().indexOf('audio') > -1) {
                                        mediaType = 'audio';
                                    }

                                    if (!mediaType && statsReport.id.toLowerCase().indexOf('video') > -1) {
                                        mediaType = 'video';
                                    }

                                    var tbefore = 0;

                                    if (!_.hasIndexOrKey(last, key)) {
                                        last[key] = {timestamp: 0};
                                    } else {
                                        tbefore = last[key].timestamp;
                                        last[key].timestamp = statsReport.timestamp;
                                    }

                                    var tdelta = statsReport.timestamp - tbefore;
                                    var up = '0bps';
                                    var down = '0bps';

                                    if (bytesTx) {
                                        var bytesTxBefore = last[key].bytesTx || 0;
                                        var bpsTx = 8 * 1000 * (bytesTx - bytesTxBefore) / tdelta;

                                        last[key].bytesTx = bytesTx;
                                        up = Math.round(bpsTx / 1000) + 'kbps';
                                    }

                                    if (bytesRx) {
                                        var bytesRxBefore = last[key].bytesRx || 0;
                                        var bpsRx = 8 * 1000 * (bytesRx - bytesRxBefore) / tdelta;

                                        last[key].bytesRx = bytesRx;
                                        down = Math.round(bpsRx / 1000) + 'kbps';
                                    }

                                    if (mediaType === 'audio') {
                                        audioBitrateEl.val('↑' + up + '/↓' + down);
                                    } else if (mediaType === 'video') {
                                        videoBitrateEl.val('↑' + up + '/↓' + down);
                                    }
                                }
                            });
                        }
                    }, function(e) {
                        log('getStats failed: ' + e);
                    });

                    if (pc.signalingState !== 'closed') {
                        setTimeout(update, 1000);
                    }
                };

                update();
            }
        };

        var listSources = function listSources() {
            function onGetSources(sources) {
                log(JSON.stringify(sources));

                var sourcesEl = $('#sources');

                sourcesEl.empty();

                sourcesEl.append($('<tr><th>Kind</th><th>ID</th><th>Label</th></tr>'));

                for (var i = 0; i < sources.length; i++) {
                    sourcesEl.append($('<tr><td>' + sources[i].kind + '</td><td>' + sources[i].id + '</td><td>' + sources[i].label + '</td></tr>'));
                }
            }

            rtc.getSources(onGetSources);
        };

        var setupPeerConnection = function setupPeerConnection() {
            closePeerConnection();

            pcSender = new RTCPeerConnection(peerConnectionConfig, peerConnectionConstraints);
            pcReceiver = new RTCPeerConnection(peerConnectionConfig, peerConnectionConstraints);

            monitorPeerConnection(pcSender, $('#localState'), $('#localAudioBitRate'), $('#localVideoBitRate'));
            monitorPeerConnection(pcReceiver, $('#remoteState'), $('#remoteAudioBitRate'), $('#remoteVideoBitRate'));

            var onAddStream = function onAddStream(event) {
                var stream = event.stream;

                log('Got a remote stream');

                // **********
                // IMPORTANT: update reference to element as some RTC implementation will replace the element in the DOM
                // **********
                log(remoteVideoEl.id);
                remoteVideoEl = rtc.attachMediaStream(remoteVideoEl, stream);
            };

            _.addEventListener(pcReceiver, 'addstream', onAddStream);

            function onUserMediaPeerConnectionSuccess(stream) {
                pcSender.addStream(stream);

                function onCreateOfferSuccess(offerSdp) {
                    offerSdp.sdp = replaceAllExceptH264(offerSdp.sdp);

                    log('Created offer: ' + offerSdp.sdp);
                    pcSenderOfferSdp = offerSdp;

                    function onSetLocalDescriptionSuccess() {
                        log('Set local description (offer)');

                        function onSetRemoteDescriptionSuccess() {
                            log('Set remote description (offer)');

                            function onCreateAnswerSuccess(answerSdp) {
                                // AnswerSdp.sdp = swapH264(answerSdp.sdp);
                                log('Created answer: ' + answerSdp.sdp);
                                pcReceiverAnswerSdp = answerSdp;

                                function onSetLocalDescriptionSuccess() {
                                    log('Set local description (answer)');

                                    function onSetRemoteDescriptionSuccess() {
                                        log('Set remote description (answer)');
                                    }

                                    pcReceiver.setRemoteDescription(answerSdp, onSetRemoteDescriptionSuccess, onFailure);
                                }

                                pcSender.setLocalDescription(answerSdp, onSetLocalDescriptionSuccess, onFailure);
                            }

                            var mediaConstraints = {mandatory: {}};

                            if (rtc.browser === 'chrome') {
                                mediaConstraints.mandatory.OfferToReceiveVideo = sendingConstraints.offerToReceiveVideo === true;
                                mediaConstraints.mandatory.OfferToReceiveAudio = sendingConstraints.offerToReceiveAudio === true;
                            } else {
                                mediaConstraints.mandatory.offerToReceiveVideo = sendingConstraints.offerToReceiveVideo === true;
                                mediaConstraints.mandatory.offerToReceiveAudio = sendingConstraints.offerToReceiveAudio === true;
                            }

                            pcSender.createAnswer(onCreateAnswerSuccess, onFailure, mediaConstraints);
                        }

                        pcSender.setRemoteDescription(offerSdp, onSetRemoteDescriptionSuccess, onFailure);
                    }

                    pcReceiver.setLocalDescription(offerSdp, onSetLocalDescriptionSuccess, onFailure);
                }

                // TODO (DCY) remove when webrtc adapter fixes https://github.com/webrtc/adapter/issues/661
                if (rtc.browser === 'Safari' && rtc.browserVersion >= 11) {
                    if (receivingConstraints.offerToReceiveAudio) {
                        pcReceiver.addTransceiver('audio');
                    }

                    if (receivingConstraints.offerToReceiveVideo) {
                        pcReceiver.addTransceiver('video');
                    }
                }

                pcReceiver.createOffer(onCreateOfferSuccess, onFailure, receivingConstraints);
            }

            pcSender.oniceconnectionstatechange = function() {
                log('Sender ICE state: ' + pcSender.iceConnectionState);
            };
            pcReceiver.oniceconnectionstatechange = function() {
                log('Receiver ICE state: ' + pcReceiver.iceConnectionState);
            };
            pcSender.onconnectionstatechange = function() {
                log('Sender Connection state: ' + pcSender.connectionState);
            };
            pcReceiver.onconnectionstatechange = function() {
                log('Receiver Connection state: ' + pcReceiver.connectionState);
            };
            pcSender.onsignalingstatechange = function() {
                log('Sender Signaling state: ' + pcSender.signalingState);
            };
            pcReceiver.onsignalingstatechange = function() {
                log('Receiver Signaling state: ' + pcReceiver.signalingState);
            };

            _.addEventListener(pcSender, 'icecandidate', function(event) {
                var candidate = event.candidate;

                if (candidate) {
                    log('ICE candidate (sender): ' + JSON.stringify(candidate));
                } else {
                    log('ICE candidate discovery complete (sender)');
                }

                pcReceiver.addIceCandidate(candidate);
            });

            _.addEventListener(pcReceiver, 'icecandidate', function(event) {
                var candidate = event.candidate;

                if (candidate) {
                    log('ICE candidate (receiver): ' + candidate.sdpMid + ' ' + candidate.sdpMLineIndex + ' ' + candidate.candidate);
                } else {
                    log('ICE candidate discovery complete (receiver)');
                }

                pcSender.addIceCandidate(candidate);
            });

            if (userMediaStream && !userMediaStream.ended) {
                onUserMediaPeerConnectionSuccess(userMediaStream);
            } else {
                rtc.getUserMedia({
                    audio: true,
                    video: false
                }, function(mediaStream) {
                    onUserMediaSuccess(mediaStream);
                    onUserMediaPeerConnectionSuccess(mediaStream);
                }, onFailure);
            }
        };

        var stopUserMedia = function stopUserMedia() {
            if (userMediaStream) {
                if (userMediaStream.stop) {
                    userMediaStream.stop();
                } else if (userMediaStream.getTracks) {
                    userMediaStream.getTracks().forEach(function(track) {
                        track.stop();
                    });
                }
            }
        };

        var stopLocalVideo = function stopLocalVideo() {
            localVideoEl.src = '';
        };

        var stopRemoteVideo = function stopRemoteVideo() {
            remoteVideoEl.src = '';
        };

        var muteLocalVideo = function muteLocalVideo() {
            localVideoEl.muted = true;
        };

        var unmuteLocalVideo = function unmuteLocalVideo() {
            localVideoEl.muted = false;
        };

        var muteRemoteVideo = function muteRemoteVideo() {
            remoteVideoEl.muted = true;
        };

        var unmuteRemoteVideo = function unmuteRemoteVideo() {
            remoteVideoEl.muted = false;
        };

        var closePeerConnection = function closePeerConnection() {
            if (pcSender && pcSender.close) {
                pcSender.close();
            }

            if (pcReceiver && pcReceiver.close) {
                pcReceiver.close();
            }
        };

        var stringify = function stringify() {
            log(JSON.stringify(userMediaStream));
            log(JSON.stringify(pcSender));
            log(JSON.stringify(pcReceiver));

            if (pcReceiverAnswerSdp) {
                log(JSON.stringify(pcReceiverAnswerSdp));
            }

            if (pcSenderOfferSdp) {
                log(JSON.stringify(pcSenderOfferSdp));
            }
        };

        localVideoEl.onloadedmetadata = function() {
            onLoadedMetaData(localVideoEl);
        };
        remoteVideoEl.onloadedmetadata = function() {
            onLoadedMetaData(remoteVideoEl);
        };
        remoteVideoEl.onresize = function() {
            log('remote video resize event');
        };

        $('#phenixRTCVersion').text(rtc.phenixVersion);
        $('#browser').text(rtc.browser);
        $('#browserVersion').text(rtc.browserVersion);

        if (rtc.webrtcSupported) {
            $('#webrtc').addClass('success');
        } else {
            $('#webrtc').addClass('danger');
        }

        if (rtc.isPhenixEnabled()) {
            $('#phenix').addClass('success');
        } else if (rtc.phenixSupported) {
            $('#phenix').addClass('warning');
        } else {
            $('#phenix').addClass('danger');
        }

        $('#listSources').click(listSources);
        $('#getUserMedia').click(getUserMedia);
        $('#stopUserMedia').click(stopUserMedia);
        $('#stopLocalVideo').click(stopLocalVideo);
        $('#muteLocalVideo').click(muteLocalVideo);
        $('#unmuteLocalVideo').click(unmuteLocalVideo);

        $('#setupPeerConnection').click(setupPeerConnection);
        $('#closePeerConnection').click(closePeerConnection);
        $('#stopRemoteVideo').click(stopRemoteVideo);
        $('#stringify').click(stringify);
        $('#muteRemoteVideo').click(muteRemoteVideo);
        $('#unmuteRemoteVideo').click(unmuteRemoteVideo);
    };

    window.onerror = function() {
        log.apply(null, arguments);
    };

    function log() {
        console.log.apply(null, arguments);

        $.ajax({
            url: '/log',
            accepts: 'application/json',
            contentType: 'application/json',
            method: 'POST',
            data: JSON.stringify({messages: arguments})
        });
    }

    $(function() {
        init();

        // Plugin might load with delay
        if (rtc.phenixSupported && !rtc.isPhenixEnabled()) {
            rtc.onload = init;
        }
    });

    var h264Query = /:(.*?(?= H264))/g;
    var videoMLineNumbersQuery = /m=video.*/g;

    function swapH264Ignored(sdp) {
        var h264Id = sdp.match(h264Query)[0].substring(1, 4);
        var stringToReplace = sdp.match(videoMLineNumbersQuery)[0].split('UDP/TLS/RTP/SAVPF ')[1];
        var originalString = stringToReplace;

        stringToReplace.replace(h264Id + ' ', '');
        stringToReplace = h264Id + ' ' + stringToReplace;

        sdp = sdp.replace(originalString, stringToReplace);

        return sdp;
    }

    function replaceAllExceptH264(sdp) {
        log('Before replace sdp is [%s]', sdp);

        var h264Id = sdp.match(h264Query)[0].substring(1, 4);
        var stringToReplace = sdp.match(videoMLineNumbersQuery)[0].split('UDP/TLS/RTP/SAVPF ')[1];
        var originalString = stringToReplace;
        var codecs = stringToReplace.split(' ');

        _.forEach(codecs, function(codec) {
            if (codec === h264Id) {
                return;
            }

            var codecLinesQuery = new RegExp("a=(.*[^fingerprint])" + codec + ".*\r\n", "gm");
            var linesToReplace = sdp.match(codecLinesQuery);

            _.forEach(linesToReplace, function(line) {
                sdp = sdp.replace(line, '');
            });
        });

        stringToReplace.replace(h264Id + ' ', '');
        stringToReplace = h264Id;

        sdp = sdp.replace(originalString, stringToReplace);

        return sdp;
    }
});