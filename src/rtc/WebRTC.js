/**
 * Copyright 2017 PhenixP2P Inc. All Rights Reserved.
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
define([
    './DetectBrowser',
    'webrtc-adapter'
], function (DetectBrowser, webRtcAdapter) { // eslint-disable-line no-unused-vars
    'use strict';

    var log = function () {
        console.log.apply(console, arguments);
    };

    var browser = new DetectBrowser(navigator.userAgent).detect();

    var RTCPeerConnection = window.RTCPeerConnection;
    var RTCSessionDescription = window.RTCSessionDescription;
    var RTCIceCandidate = window.RTCIceCandidate;
    var getSources = null;
    var getUserMedia = null;
    var getStats = null;
    var attachMediaStream = null;
    var reattachMediaStream = null;
    var webrtcSupported = false;

    var navigatorMediaDevicesEnumerateDevicesWrapper = function getSources(callback) {
        navigator.mediaDevices.enumerateDevices().then(function (devices) {
            var sources = [];

            devices.forEach(function (device) {
                if (device.kind === 'audioinput') {
                    sources.push({
                        kind: 'audio',
                        id: device.deviceId,
                        label: device.label
                    });
                } else if (device.kind === 'videoinput') {
                    sources.push({
                        kind: 'video',
                        id: device.deviceId,
                        label: device.label
                    });
                }
            });

            callback(sources);
        });
    };

    if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
        getSources = navigatorMediaDevicesEnumerateDevicesWrapper;
    }

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        getUserMedia = function (constraints, successCallback, errorCallback) {
            var onSuccess = function (stream) {
                setTimeout(function () {
                    var tracks = stream.getTracks();

                    for (var i = 0; i < tracks.length; i++) {
                        var track = tracks[i];

                        track.onended = function (event) {
                            log(event.timeStamp, 'Track', track.id, track.label, 'ended');
                        };

                        log('Track', track.id, track.label, tracks[i].kind, 'readyState=', tracks[i].readyState);

                        if (track.readyState === 'ended') {
                            return handleGetUserMediaUnavailable('User media not available', errorCallback, tracks);
                        }
                    }

                    var requestedTrackCount = (constraints.audio ? 1 : 0) + (constraints.video ? 1 : 0);

                    // Edge sometimes only gets a subset of tracks requested
                    if (tracks.length !== requestedTrackCount) {
                        return handleGetUserMediaUnavailable('Unable to get all requested user media.', errorCallback, tracks);
                    }

                    successCallback(stream);
                }, 100);
            };

            navigator.getUserMedia(constraints, onSuccess, errorCallback);
        };

        var handleGetUserMediaUnavailable = function(message, errorCallback, tracks) {
            try {
                var error = new Error(message);

                error.code = 'unavailable';

                errorCallback(error);
            } finally {
                stopAllTracks(tracks);
            }

            return;
        };

        var stopAllTracks = function (tracks) {
            for (var j = 0; j < tracks.length; j++) {
                tracks[j].stop();
            }
        };
    }

    if (RTCPeerConnection && RTCPeerConnection.prototype.getStats) {
        getStats = function (pc, track, successCallback, errorCallback) {
            pc.getStats(successCallback, track, errorCallback);
        };
    }

    if (browser.browser === 'Firefox') {
        log('Firefox detected', browser);

        // Attach a media stream to an element.
        attachMediaStream = function (element, stream) {
            log('Attaching media stream');

            var muted = element.muted;

            element.mozSrcObject = stream;
            element.play();

            if (muted === true) {
                // FF unmutes upon play()
                element.muted = true;
            }

            return element;
        };

        reattachMediaStream = function (to, from) {
            log('Reattaching media stream');

            var muted = to.muted;

            to.mozSrcObject = from.mozSrcObject;
            to.play();

            if (muted === true) {
                // FF unmutes upon play()
                to.muted = true;
            }

            return to;
        };

        webrtcSupported = true;
    } else if (browser.browser === 'Chrome') {
        log('Webkit detected', browser);

        // Attach a media stream to an element.
        attachMediaStream = function (element, stream) {
            if (typeof element.srcObject !== 'undefined') {
                element.srcObject = stream;
            } else if (typeof element.mozSrcObject !== 'undefined') {
                element.mozSrcObject = stream;
            } else if (typeof element.src !== 'undefined') {
                element.src = URL.createObjectURL(stream);
            } else {
                log('Error attaching stream to element.');
            }

            element.play();

            return element;
        };

        reattachMediaStream = function (to, from) {
            to.src = from.src;

            return to;
        };

        webrtcSupported = true;
    } else if (browser.browser === 'Edge') {
        log('Edge detected', browser);

        // Attach a media stream to an element.
        attachMediaStream = function (element, stream) {
            if (typeof element.srcObject !== 'undefined') {
                element.srcObject = stream;
            } else if (typeof element.mozSrcObject !== 'undefined') {
                element.mozSrcObject = stream;
            } else if (typeof element.src !== 'undefined') {
                element.src = URL.createObjectURL(stream);
            } else {
                log('Error attaching stream to element.');
            }

            element.play();

            return element;
        };

        reattachMediaStream = function (to, from) {
            to.src = from.src;

            return to;
        };

        webrtcSupported = true;
    } else {
        log('Browser does not appear to be WebRTC-capable', browser);
    }

    var adapter = {
        RTCPeerConnection: RTCPeerConnection,
        RTCSessionDescription: RTCSessionDescription,
        RTCIceCandidate: RTCIceCandidate,
        getSources: getSources,
        getUserMedia: getUserMedia,
        getStats: getStats,
        attachMediaStream: attachMediaStream,
        reattachMediaStream: reattachMediaStream,
        webrtcSupported: webrtcSupported
    };

    adapter.exportGlobal = function () {
        window.RTCPeerConnection = adapter.RTCPeerConnection;
        window.RTCSessionDescription = adapter.RTCSessionDescription;
        window.RTCIceCandidate = adapter.RTCIceCandidate;
    };

    return adapter;
});