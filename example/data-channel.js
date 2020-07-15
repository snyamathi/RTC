/**
 * Copyright 2020 Phenix Real Time Solutions, Inc. All Rights Reserved.
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
        'phenix-web-observable': 'phenix-web-observable/dist/phenix-web-observable.min'
    }
});

var peerConnectionConfig = {
    iceServers: [{urls: 'stun:stun.l.google.com:19302'}, {urls: 'stun:stun1.l.google.com:19302'}
    ]
};

requirejs([
    'jquery',
    'lodash',
    'phenix-rtc'
], function($, _, rtc) {
    var init = function init() {
        var connectButton = document.getElementById('connectButton');
        var disconnectButton = document.getElementById('disconnectButton');
        var sendButton = document.getElementById('sendButton');
        var messageInputBox = document.getElementById('message');
        var receiveBox = document.getElementById('receivebox');
        var pcSender = null;
        var pcReceiver = null;
        var sendChannel = null;
        var receiveChannel = null;

        var onFailure = function onFailure(e) {
            alert(e); // eslint-disable-line no-alert
        };

        function handleLocalAddCandidateSuccess() {
            connectButton.disabled = true;
        }

        function handleRemoteAddCandidateSuccess() {
            disconnectButton.disabled = false;
        }

        function handleSendChannelStatusChange() {
            if (sendChannel) {
                var state = sendChannel.readyState;

                if (state === "open") {
                    messageInputBox.disabled = false;
                    messageInputBox.focus();
                    sendButton.disabled = false;
                    disconnectButton.disabled = false;
                    connectButton.disabled = true;
                } else {
                    messageInputBox.disabled = true;
                    sendButton.disabled = true;
                    connectButton.disabled = false;
                    disconnectButton.disabled = true;
                }
            }
        }

        function handleReceiveChannelStatusChange() {
            if (receiveChannel) {
                console.log("Receive channel's status has changed to " +
                    receiveChannel.readyState);
            }
        }

        function receiveChannelCallback(event) {
            receiveChannel = event.channel;
            receiveChannel.onmessage = handleReceiveMessage;
            receiveChannel.onopen = handleReceiveChannelStatusChange;
            receiveChannel.onclose = handleReceiveChannelStatusChange;
        }

        function handleReceiveMessage(event) {
            var el = document.createElement("p");
            var txtNode = document.createTextNode(event.data);

            el.appendChild(txtNode);
            receiveBox.appendChild(el);
        }

        function sendMessage() {
            var message = messageInputBox.value;
            sendChannel.send(message.split(' '));

            messageInputBox.value = "";
            messageInputBox.focus();
        }

        var setupPeerConnection = function setupPeerConnection() {
            pcSender = new rtc.RTCPeerConnection(peerConnectionConfig);
            pcReceiver = new rtc.RTCPeerConnection(peerConnectionConfig);

            sendChannel = pcSender.createDataChannel("sendChannel");
            sendChannel.onopen = handleSendChannelStatusChange;
            sendChannel.onclose = handleSendChannelStatusChange;

            console.log('Created local data channel');

            pcReceiver.ondatachannel = receiveChannelCallback;

            var onCreateOfferSuccess = function onCreateOfferSuccess(offerSdp) {
                console.log('Created offer: ' + offerSdp.sdp);

                function onSetLocalDescriptionSuccess() {
                    console.log('Set local description (offer)');

                    function onSetRemoteDescriptionSuccess() {
                        console.log('Set remote description (offer)');

                        function onCreateAnswerSuccess(answerSdp) {
                            console.log('Created answer: ' + answerSdp.sdp);

                            function onSetLocalDescriptionSuccess() {
                                console.log('Set local description (answer)');

                                function onSetRemoteDescriptionSuccess() {
                                    console.log('Set remote description (answer)');
                                }

                                pcSender.setRemoteDescription(answerSdp, onSetRemoteDescriptionSuccess, onFailure);
                            }

                            pcReceiver.setLocalDescription(answerSdp, onSetLocalDescriptionSuccess, onFailure);
                        }

                        pcReceiver.createAnswer(onCreateAnswerSuccess, onFailure);
                    }

                    pcReceiver.setRemoteDescription(offerSdp, onSetRemoteDescriptionSuccess, onFailure);
                }

                pcSender.setLocalDescription(offerSdp, onSetLocalDescriptionSuccess, onFailure);
            };

            pcSender.oniceconnectionstatechange = function() {
                console.log('Sender ICE state: ' + pcSender.iceConnectionState);
            };
            pcReceiver.oniceconnectionstatechange = function() {
                console.log('Receiver ICE state: ' + pcReceiver.iceConnectionState);
            };
            pcSender.onconnectionstatechange = function() {
                console.log('Sender Connection state: ' + pcSender.connectionState);
            };
            pcReceiver.onconnectionstatechange = function() {
                console.log('Receiver Connection state: ' + pcReceiver.connectionState);
            };
            pcSender.onsignalingstatechange = function() {
                console.log('Sender Signaling state: ' + pcSender.signalingState);
            };
            pcReceiver.onsignalingstatechange = function() {
                console.log('Receiver Signaling state: ' + pcReceiver.signalingState);
            };

            pcSender.onicecandidate = function(event) {
                var candidate = event.candidate;

                if (candidate) {
                    console.log('ICE candidate (sender): ' + JSON.stringify(candidate));
                } else {
                    console.log('ICE candidate discovery complete (sender)');
                }

                pcReceiver.addIceCandidate(candidate);

                handleLocalAddCandidateSuccess();
            };

            pcReceiver.onicecandidate = function(event) {
                var candidate = event.candidate;

                if (candidate) {
                    console.log('ICE candidate (receiver): ' + candidate.sdpMid + ' ' + candidate.sdpMLineIndex + ' ' + candidate.candidate);
                } else {
                    console.log('ICE candidate discovery complete (receiver)');
                }

                pcSender.addIceCandidate(candidate);

                handleRemoteAddCandidateSuccess();
            };

            pcSender.createOffer(onCreateOfferSuccess, onFailure);
        };

        var closePeerConnection = function closePeerConnection() {
            if (pcSender && pcSender.close) {
                pcSender.close();
            }

            if (pcReceiver && pcReceiver.close) {
                pcReceiver.close();
            }

            if (sendChannel && sendChannel.close) {
                sendChannel.close();
            }

            if (receiveChannel && receiveChannel.close) {
                receiveChannel.close();
            }

            connectButton.disabled = false;
            disconnectButton.disabled = true;
            sendButton.disabled = true;

            messageInputBox.value = "";
            messageInputBox.disabled = true;
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

        $('#connectButton').click(setupPeerConnection);
        $('#disconnectButton').click(closePeerConnection);
        $('#sendButton').click(sendMessage);
    };

    $(function() {
        init();

        // Plugin might load with delay
        if (rtc.phenixSupported && !rtc.isPhenixEnabled()) {
            rtc.onload = init;
        }
    });
});