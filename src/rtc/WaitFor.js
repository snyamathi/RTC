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
define('rtc/WaitFor',
    [
        'rtc/DetectBrowser'
    ], function (DetectBrowser) {
        'use strict';

        var browser = new DetectBrowser(navigator.userAgent).detect();
        var ReadyStateComplete = 4;

        function WaitFor(timeout) {
            this._timeout = timeout || 15000;
        }

        var logError = function () {
                console.error.apply(console, arguments);
            } || log;

        WaitFor.prototype.waitForReadyWithTimeout = function (element, loaded, timeout) {
            var triggered = false;
            var waitFor = 1;
            var sum = waitFor;

            var guardedLoaded = function (success) {
                if (!triggered) {
                    triggered = true;
                    loaded(success);
                }
            };

            var checkLoaded = function checkLoaded() {
                if (element.readyState === ReadyStateComplete) { // IE
                    guardedLoaded(true);
                } else if (element.phenixVersion) { // property is available
                    guardedLoaded(true);
                } else {
                    waitFor = Math.min(waitFor + 1000, 2 * waitFor);
                    sum += waitFor;

                    if (sum > timeout) {
                        logError('Timed out while waiting for <object> to load');
                        guardedLoaded(false);
                    } else {
                        setTimeout(checkLoaded, waitFor);
                    }
                }
            };

            if (!(element.hasOwnProperty && element.hasOwnProperty('onload'))) {
                //  There are no events in IE to detect when it is loaded
                if (browser.browser !== 'IE') {
                    logError('No means of detecting when <object> is loaded');
                }
            }

            element.onload = function () {
                guardedLoaded(true);
            };

            checkLoaded();
        };

        WaitFor.prototype.waitForReady = function (element, loaded) {
            if (element.phenixVersion) { // Already loaded
                loaded(true);
            } else {
                this.waitForReadyWithTimeout(element, loaded, this._timeout);
            }
        };

        return WaitFor;
    });