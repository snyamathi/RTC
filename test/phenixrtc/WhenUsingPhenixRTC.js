/**
 * Copyright 2016 PhenixP2P Inc. All Rights Reserved.
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
    'jquery',
    'bowser',
    'rtc/PhenixRTC'
], function (_, $, bowser, PhenixRTC) {
    'use strict';

    var supported = bowser.safari === true || bowser.msie === true;

    describe('When using PhenixRTC', function () {
        var rtc = new PhenixRTC();

        before(function (done) {
            if (!supported) {
                done();
            } else {
                rtc.onReady(function () {
                    done();
                });
            }
        });

        it('indicates if it is supported', function () {
            expect(PhenixRTC.isSupported()).to.be.equal(supported);
        });
        it('indicates if it is enabled', function () {
            expect(rtc.isEnabled()).to.be.equal(supported);
        });

        if (rtc.isEnabled()) {
            it('has a valid version', function () {
                expect(rtc.getVersion()).to.be.a('string');
                expect(rtc.getVersion().length).to.not.be.equal('');
            });

            it('provides the RTCPeerConnection constructor', function () {
                expect(rtc.getRTCPeerConnectionConstructor()).to.be.defined;
            });

            it('provides the RTCSessionDescription constructor', function () {
                expect(rtc.getRTCSessionDescriptionConstructor()).to.be.defined;
            });

            it('provides the RTCIceCandidate constructor', function () {
                expect(rtc.getRTCIceCandidateConstructor()).to.be.defined;
            });

            it('provides the UserMedia function', function () {
                expect(rtc.getUserMediaDelegate()).to.be.a('function');
            });

            it('provides the getSources function', function () {
                expect(rtc.getSourcesDelegate()).to.be.a('function');
            });
        }
    });
});
