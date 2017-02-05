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
    'lodash',
    'rtc/WebRTCAdapter'
], function (_, WebRTCAdapter) {
    'use strict';

    describe('When loading the WebRTC adapter', function () {
        it('defines RTCPeerConnection', function () {
            expect(WebRTCAdapter).to.have.property('RTCPeerConnection');
        });
        it('defines RTCSessionDescription', function () {
            expect(WebRTCAdapter).to.have.property('RTCSessionDescription');
        });
        it('defines RTCIceCandidate', function () {
            expect(WebRTCAdapter).to.have.property('RTCIceCandidate');
        });
        it('defines getSources', function () {
            expect(WebRTCAdapter).to.have.property('getSources');
        });
        it('defines getUserMedia', function () {
            expect(WebRTCAdapter).to.have.property('getUserMedia');
        });
        it('defines attachMediaStream', function () {
            expect(WebRTCAdapter).to.have.property('attachMediaStream');
        });
        it('defines reattachMediaStream', function () {
            expect(WebRTCAdapter).to.have.property('reattachMediaStream');
        });
        it('defines webrtcSupported boolean flag', function () {
            expect(WebRTCAdapter.webrtcSupported).to.be.a('boolean');
        });
        it('defines the api to export it global', function () {
            expect(WebRTCAdapter.exportGlobal).to.be.a('function');
        });
    });
});