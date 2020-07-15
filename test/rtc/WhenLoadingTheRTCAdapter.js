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

define([
    'lodash',
    'rtc/RTCAdapter'
], function(_, RTCAdapter) {
    'use strict';

    describe('When loading the RTC adapter', function() {
        it('defines RTCPeerConnection', function() {
            expect(RTCAdapter).to.have.property('RTCPeerConnection');
        });
        it('defines RTCSessionDescription', function() {
            expect(RTCAdapter).to.have.property('RTCSessionDescription');
        });
        it('defines RTCIceCandidate', function() {
            expect(RTCAdapter).to.have.property('RTCIceCandidate');
        });
        it('defines getSources', function() {
            expect(RTCAdapter).to.have.property('getSources');
        });
        it('defines getUserMedia', function() {
            expect(RTCAdapter).to.have.property('getUserMedia');
        });
        it('defines attachMediaStream', function() {
            expect(RTCAdapter).to.have.property('attachMediaStream');
        });
        it('defines reattachMediaStream', function() {
            expect(RTCAdapter).to.have.property('reattachMediaStream');
        });
        it('defines webrtcDetectedBrowser', function() {
            expect(RTCAdapter).to.have.property('browser');
        });
        it('defines webrtcDetectedVersion', function() {
            expect(RTCAdapter).to.have.property('browserVersion');
        });
        it('defines webrtcSupported boolean flag', function() {
            expect(RTCAdapter.webrtcSupported).to.be.a('boolean');
        });
        it('defines global object', function() {
            expect(RTCAdapter).to.have.property('global');
        });
        it('defines shim function', function() {
            expect(RTCAdapter.shim).to.be.a('function');
        });
    });
});