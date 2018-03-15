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
        'phenix-web-observable': 'phenix-web-observable/dist/phenix-web-observable.min',
        'phenix-web-detect-browser': 'phenix-web-detect-browser/dist/phenix-web-detect-browser.min'
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
        var header = document.getElementById('header');
        var orderedCheckBox = document.getElementById('orderedCheckBox');
        var reliableCheckBox = document.getElementById('reliableCheckBox');

        var sendButton1000 = document.getElementById('sendButton1000');
        var sendButton10000 = document.getElementById('sendButton10000');

        var pc = null;
        var dataChannel = null;
        var webSocket = null;
        var connectionId = null;

        var onFailure = function onFailure(e) {
            alert(e); // eslint-disable-line no-alert
        };

        function handleLocalAddCandidateSuccess() {
            connectButton.disabled = true;
        }

        function handleRemoteAddCandidateSuccess() {
            disconnectButton.disabled = false;
        }

        function handleDataChannelStatusChange() {
            if (dataChannel) {
                var state = dataChannel.readyState;

                if (state === "open") {
                    messageInputBox.disabled = false;
                    messageInputBox.focus();
                    sendButton.disabled = false;
                    sendButton1000.disabled = false;
                    sendButton10000.disabled = false;
                    disconnectButton.disabled = false;
                    connectButton.disabled = true;
                    orderedCheckBox.disabled = true;
                    reliableCheckBox.disabled = true;
                } else {
                    messageInputBox.disabled = true;
                    sendButton.disabled = true;
                    sendButton1000.disabled = true;
                    sendButton10000.disabled = true;
                    connectButton.disabled = false;
                    disconnectButton.disabled = true;
                    orderedCheckBox.disabled = false;
                    reliableCheckBox.disabled = false;
                }
            }
        }

        function receiveChannelCallback(event) {
            dataChannel = event.channel;

            orderedCheckBox.checked = dataChannel.ordered;
            reliableCheckBox.checked = dataChannel.reliable;

            setupDataChannel(dataChannel);
        }

        function setupDataChannel(dataChannel) {
            dataChannel.onmessage = handleReceiveMessage;
            dataChannel.onopen = handleDataChannelStatusChange;
            dataChannel.onclose = handleDataChannelStatusChange;

            if (dataChannel.readyState !== 'connecting') {
                handleDataChannelStatusChange(dataChannel);
            }
        }

        var isStreaming = false;

        function handleReceiveMessage(event) {
            if (event.data === 'STREAMING') {
                return isStreaming = true;
            }

            if (event.data === 'ACK') {
                return dataChannel.dispatchEvent(new Event('ack'));
            }

            if (event.data === 'DONE') {
                isStreaming = false;

                return sendChannelMessage('ACK');
            }

            if (isStreaming) {
                return;
            }

            var el = document.createElement("p");
            var txtNode = document.createTextNode(event.data);

            el.appendChild(txtNode);
            receiveBox.appendChild(el);
        }

        function sendChannelMessage(message) {
            try {
                dataChannel.send(message);
            } catch (e) {
                console.error(e);
            }

            messageInputBox.value = "";
            messageInputBox.focus();
        }

        var createWebSocket = function() {
            webSocket = new WebSocket('wss://' + window.location.host);

            webSocket.onopen = _.bind(onWebSocketOpen, this);
            webSocket.onclose = _.bind(onWebSocketClose, this);
            webSocket.onmessage = _.bind(onWebSocketMessage, this);
            webSocket.onerror = _.bind(onWebSocketError, this);
        };

        var onWebSocketOpen = function() {
            connectButton.disabled = false;
            orderedCheckBox.disabled = false;
            reliableCheckBox.disabled = false;
        };

        var onWebSocketClose = function() {
            connectButton.disabled = true;
            orderedCheckBox.disabled = true;
            reliableCheckBox.disabled = true;
        };

        var onWebSocketMessage = function(message) {
            var decodedMessage = JSON.parse(message.data);

            console.log(decodedMessage);

            switch (decodedMessage.type) {
            case 'CreateAnswer':
                return createAnswer(decodedMessage.sdp);
            case 'SetRemoteDescription':
                return setRemoteDescription(decodedMessage.sdp);
            case 'AddRemoteCandidate':
                return addRemoteCandidate(decodedMessage.candidate);
            case 'Initialized':
                return connectionId = decodedMessage.connectionId;
            default:
                return console.log(decodedMessage);
            }
        };

        var sendMessage = function(message) {
            var messageToSend = Object.assign({connectionId: connectionId}, message);

            webSocket.send(JSON.stringify(messageToSend));
        };

        var onWebSocketError = function(e) {
            console.error(e);
        };

        var createOffer = function() {
            pc = new rtc.RTCPeerConnection(peerConnectionConfig);

            header.innerHTML = '(Offer)';

            var dataChannelOptions = {
                ordered: orderedCheckBox.checked,
                reliable: reliableCheckBox.checked
            };

            if (!reliableCheckBox.checked) {
                dataChannelOptions.maxRetransmits = 0;
            }

            dataChannel = pc.createDataChannel("dataChannel", dataChannelOptions);

            setupDataChannel(dataChannel);

            console.log('Created local data channel');

            var onCreateOfferSuccess = function onCreateOfferSuccess(offerSdp) {
                console.log('Created offer: ' + offerSdp.sdp);

                function onSetLocalDescriptionSuccess() {
                    console.log('Set local description (offer)');

                    sendMessage({
                        type: 'CreateAnswer',
                        sdp: offerSdp
                    });
                }

                pc.setLocalDescription(offerSdp, onSetLocalDescriptionSuccess, onFailure);
            };

            setupPeerConnectionEventListeners();

            pc.createOffer(onCreateOfferSuccess, onFailure);
        };

        var createAnswer = function(offerSdp) {
            pc = new rtc.RTCPeerConnection(peerConnectionConfig);

            header.innerHTML = '(Answer)';

            pc.ondatachannel = receiveChannelCallback;

            setupPeerConnectionEventListeners();

            console.log('Ready to establish data channel');

            function onSetRemoteDescriptionSuccess() {
                console.log('Set remote description (offer)');

                function onCreateAnswerSuccess(answerSdp) {
                    console.log('Created answer: ' + answerSdp.sdp);

                    function onSetLocalDescriptionSuccess() {
                        console.log('Set local description (answer)');

                        sendMessage({
                            type: 'SetRemoteDescription',
                            sdp: answerSdp
                        });
                    }

                    pc.setLocalDescription(answerSdp, onSetLocalDescriptionSuccess, onFailure);
                }

                pc.createAnswer(onCreateAnswerSuccess, onFailure);
            }

            pc.setRemoteDescription(offerSdp, onSetRemoteDescriptionSuccess, onFailure);
        };

        var setRemoteDescription = function(answerSdp) {
            function onSetRemoteDescriptionSuccess() {
                console.log('Set remote description (answer)');
            }

            console.log(dataChannel.readyState);

            pc.setRemoteDescription(answerSdp, onSetRemoteDescriptionSuccess, onFailure);
        };

        var addRemoteCandidate = function(candidate) {
            if (candidate) {
                console.log('ICE candidate (receiver): ' + candidate.sdpMid + ' ' + candidate.sdpMLineIndex + ' ' + candidate.candidate);
            } else {
                console.log('ICE candidate discovery complete (receiver)');
            }

            pc.addIceCandidate(candidate);

            handleRemoteAddCandidateSuccess();
        };

        var setupPeerConnectionEventListeners = function() {
            pc.oniceconnectionstatechange = function() {
                console.log('ICE state: ' + pc.iceConnectionState);
            };
            pc.onconnectionstatechange = function() {
                console.log('Connection state: ' + pc.connectionState);
            };
            pc.onsignalingstatechange = function() {
                console.log('Sender Signaling state: ' + pc.signalingState);
            };
            pc.onicecandidate = function(event) {
                var candidate = event.candidate;

                if (candidate) {
                    console.log('ICE candidate (sender): ' + JSON.stringify(candidate));
                } else {
                    console.log('ICE candidate discovery complete (sender)');
                }

                sendMessage({
                    type: 'AddRemoteCandidate',
                    candidate: candidate
                });

                handleLocalAddCandidateSuccess();
            };
        };

        var closePeerConnection = function closePeerConnection() {
            if (pc && pc.close) {
                pc.close();
            }

            if (dataChannel && dataChannel.close) {
                dataChannel.close();
            }

            connectButton.disabled = false;
            orderedCheckBox.disabled = false;
            reliableCheckBox.disabled = false;
            disconnectButton.disabled = true;
            sendButton.disabled = true;
            sendButton1000.disabled = true;
            sendButton10000.disabled = true;

            messageInputBox.value = "";
            messageInputBox.disabled = true;

            header.innerHTML = '';
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

        $('#connectButton').click(createOffer);
        $('#disconnectButton').click(closePeerConnection);
        $('#sendButton').click(function() {
            sendChannelMessage(messageInputBox.value);
        });
        $('#sendButton1000').click(testWithContinuation.bind(null, 16000));
        $('#sendButton10000').click(function() {
            dataChannel.send(generateString(100000));
        });

        var averages = {};

        function testWithContinuation(maxMessageSize) {
            var currentMessageSize = 1000;
            var start = Date.now();

            dataChannel.addEventListener('ack', function listenForAck() {
                averages[currentMessageSize] = Date.now() - start;

                start = Date.now();

                if (currentMessageSize < maxMessageSize && currentMessageSize * 10 > maxMessageSize) {
                    currentMessageSize = maxMessageSize;
                } else {
                    currentMessageSize = currentMessageSize * 10;
                }

                if (currentMessageSize <= maxMessageSize) {
                    sendChannelMessage('STREAMING');
                    test(currentMessageSize);
                    sendChannelMessage('DONE');
                } else {
                    console.log(averages);

                    dataChannel.removeEventListener('ack', listenForAck);
                }
            });

            sendChannelMessage('STREAMING');
            test(currentMessageSize);
            sendChannelMessage('DONE');
        }

        function test(messageSize) {
            var numToAverageOver = 1000;

            for (var j = 0; j < numToAverageOver; j++) {
                sendChannelMessage(generateString(messageSize));
            }
        }

        createWebSocket();
    };

    function generateString(size) {
        var response = '';

        for (var i = 0; i < size; i++) {
            response = response + '0';
        }

        return response;
    }

    $(function() {
        init();

        // Plugin might load with delay
        if (rtc.phenixSupported && !rtc.isPhenixEnabled()) {
            rtc.onload = init;
        }
    });
});