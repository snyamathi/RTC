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
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(12)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (LodashLight) {
    'use strict';

    return LodashLight;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(8)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (assert) {
    return assert;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
    'use strict';

    function DetectBrowser(userAgent) {
        this._userAgent = userAgent;
    }

    DetectBrowser.prototype.detect = function () {
        var browser = 'Unknown';
        var version = '?';
        var browserMatch = this._userAgent.match(/(Chrome|Chromium|Firefox|Opera|Safari)+\//);
        var versionMatch = this._userAgent.match(/(Chrome|Chromium|Firefox|Version)+\/([0-9]+)\./);

        if (browserMatch && browserMatch.length >= 2) {
            browser = browserMatch[1];
        } else if (this._userAgent.match(/^\(?Mozilla/)) {
            browser = 'Mozilla';

            if (this._userAgent.match(/MSIE/)
                || this._userAgent.match(/; Trident\/.*rv:[0-9]+/)) {
                browser = 'IE';

                versionMatch = this._userAgent.match(/MSIE [0-9]+.*MSIE ([0-9]+)/) ||
                    this._userAgent.match(/MSIE ([0-9]+)/) ||
                    this._userAgent.match(/rv:([0-9]+)/);

                if (versionMatch) {
                    version = parseInt(versionMatch[1], 10);
                }
            }
        }

        if (browser === 'Chrome' && this._userAgent.match(/OPR\//)) {
            // Opera pretends to be Chrome
            browser = 'Opera';
            versionMatch = this._userAgent.match(/(OPR)\/([0-9]+)\./);
        } else if (browser === 'Chrome' && this._userAgent.match(/Edge\//)) {
            // Edge pretends to be Chrome
            browser = 'Edge';
            versionMatch = this._userAgent.match(/(Edge)\/([0-9]+)\./);
        } else if ((browser === 'Firefox' || browser === 'IE') && this._userAgent.match(/Opera/)) {
            // Opera pretends to be Firefox or IE
            browser = 'Opera';
            versionMatch = this._userAgent.match(/(Opera) ([0-9]+)\./);
        }

        if (browser !== 'IE' && versionMatch && versionMatch.length >= 3) {
            version = parseInt(versionMatch[2], 10);
        }

        return {
            browser: browser,
            version: version
        };
    };

    return DetectBrowser;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(11)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert, disposable) {
    'use strict';

    function Observable(initialValue, beforeChange) {
        this.latestValue = null;
        this.subscribeCallbacks = {};
        this.subscriptionTimeout = 100;
        this.subscriptionCount = 0;
        this.resetOnChange = false;
        this.lastChangeTime = 0;
        this.isPendingChanges = false;
        this.beforeChange = beforeChange;

        setLatestValue.call(this, initialValue);
    }

    Observable.prototype.getValue = function getValue() {
        return clone(this.latestValue);
    };

    Observable.prototype.setValue = function setValue(value) {
        if (value !== this.latestValue) {
            setLatestValue.call(this, value);
            onSubscribeCallback.call(this, this.subscriptionTimeout);
        }
    };

    Observable.prototype.subscribe = function subscribe(callback, options) {
        assert.isFunction(callback, 'callback');

        if (options) {
            assert.isObject(options, 'options');
        }

        var that = this;
        var key = _.uniqueId();
        var listenForChanges;

        that.subscribeCallbacks[key] = callback;
        that.subscriptionCount += 1;

        if (options) {
            if (options.initial === 'notify') {
                onSubscribeCallback.call(that, that.subscriptionTimeout, true);
            }

            if (options.listenForChanges) {
                listenForChanges = setInterval(function() {
                    var valueAtInterval = options.listenForChanges.callback();

                    if (valueAtInterval !== that.latestValue) {
                        that.setValue(valueAtInterval);
                    }
                }, options.listenForChanges.timeout);
            }
        }

        return new disposable.Disposable(function dispose() {
            delete that.subscribeCallbacks[key];

            if (listenForChanges) {
                clearInterval(listenForChanges);

                listenForChanges = null;
            }

            that.subscriptionCount -= 1;
        });
    };

    Observable.prototype.extend = function extend(options) {
        assert.isObject(options, 'options');

        switch (options.method) {
        case 'notifyWhenChangesStop':
            this.subscriptionTimeout = options.timeout;
            this.resetOnChange = true;

            break;
        case 'notifyAtFixedRate':
            this.subscriptionTimeout = options.timeout;

            break;
        default:
            break;
        }

        if (_.isNumber(options.rateLimit)) {
            this.subscriptionTimeout = options.rateLimit;
        }

        return this;
    };

    function clone(value) {
        if (typeof value === 'undefined' || value === null) {
            return value;
        }

        // Necessary for observable array. Subsequent comparison must not be equal in order to trigger updates.
        if (_.isArray(value)) {
            return value.slice();
        }

        return value;
    }

    function setLatestValue(value) {
        var valueToSet = value;

        if (this.beforeChange) {
            valueToSet = this.beforeChange(value);
        }

        this.latestValue = clone(valueToSet);
    }

    function onSubscribeCallback(timeoutLength, noTimeout) {
        this.lastChangeTime = _.now();

        if (!this.isPendingChanges && this.subscriptionCount !== 0) {
            this.isPendingChanges = true;

            if (noTimeout) {
                return notifySubscribers.call(this);
            }

            continueAfterTimeout.call(this, timeoutLength);
        }
    }

    function continueAfterTimeout(timeoutLength) {
        var that = this;

        setTimeout(function() {
            var timeElapsedSinceLastChange = _.now() - that.lastChangeTime;

            if (that.resetOnChange && timeElapsedSinceLastChange < that.subscriptionTimeout) {
                continueAfterTimeout.call(that, that.subscriptionTimeout - timeElapsedSinceLastChange);
            } else {
                notifySubscribers.call(that);
            }
        }, timeoutLength);
    }

    function notifySubscribers() {
        try {
            executeSubscriptionCallbacks.call(this);
        } finally {
            this.isPendingChanges = false;
        }
    }

    function executeSubscriptionCallbacks() {
        var that = this;

        _.forOwn(that.subscribeCallbacks, function (callback) {
            if (_.isFunction(callback)) {
                callback(that.latestValue);
            }
        });
    }

    return Observable;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(3),
    __webpack_require__(13),
    __webpack_require__(14)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (Observable, ObservableArray, ObservableMonitor) {
    'use strict';

    return {
        Observable: Observable,
        ObservableArray: ObservableArray,
        ObservableMonitor: ObservableMonitor
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (DetectBrowser) {
    'use strict';

    var browser = new DetectBrowser(navigator.userAgent).detect();
    var ReadyStateComplete = 4;

    function WaitFor(timeout) {
        this._timeout = timeout || 15000;
    }

    var logError = function () {
        console.error.apply(console, arguments);
    } || console.log;

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
            } else if (element.phenixVersion) { // Property is available
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
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(2),
    __webpack_require__(20),
    __webpack_require__(18)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert, obserervable, DetectBrowser, webRTC, PhenixRTC) {
    'use strict';

    var browser = new DetectBrowser(navigator.userAgent).detect();
    var adapter = {
        RTCPeerConnection: webRTC.RTCPeerConnection,
        RTCSessionDescription: webRTC.RTCSessionDescription,
        RTCIceCandidate: webRTC.RTCIceCandidate,
        getSources: webRTC.getSources,
        getUserMedia: webRTC.getUserMedia,
        getStats: webRTC.getStats,
        attachMediaStream: webRTC.attachMediaStream,
        reattachMediaStream: webRTC.reattachMediaStream,
        browser: browser.browser,
        browserVersion: browser.version,
        webrtcSupported: webRTC.webrtcSupported,
        phenixSupported: false,
        isPhenixEnabled: function () {
            return false;
        },
        onLoaded: undefined
    };

    if (PhenixRTC.isSupported()) {
        adapter.phenixSupported = true;

        var phenixRTC = new PhenixRTC();

        var enablePhenix = function enablePhenix() {
            adapter.RTCPeerConnection = phenixRTC.getRTCPeerConnectionConstructor();
            adapter.RTCSessionDescription = phenixRTC.getRTCSessionDescriptionConstructor();
            adapter.RTCIceCandidate = phenixRTC.getRTCIceCandidateConstructor();
            adapter.getSources = phenixRTC.getSourcesDelegate();
            adapter.getUserMedia = phenixRTC.getUserMediaDelegate();
            adapter.getStats = phenixRTC.getStatsDelegate();

            if (Function.prototype.bind) {
                adapter.attachMediaStream = phenixRTC.attachMediaStream.bind(phenixRTC);
                adapter.reattachMediaStream = phenixRTC.reattachMediaStream.bind(phenixRTC);
                adapter.isPhenixEnabled = phenixRTC.isEnabled.bind(phenixRTC);
            } else {
                adapter.attachMediaStream = function () {
                    phenixRTC.attachMediaStream.apply(phenixRTC, arguments);
                };
                adapter.reattachMediaStream = function () {
                    phenixRTC.reattachMediaStream.apply(phenixRTC, arguments);
                };
                adapter.isPhenixEnabled = function () {
                    return phenixRTC.isEnabled();
                };
            }

            adapter.webrtcSupported = true;
            adapter.phenixSupported = true;
            adapter.phenixVersion = phenixRTC.getVersion();

            if (adapter.onLoaded) {
                adapter.onLoaded.call();
            }
        };

        if (phenixRTC.isEnabled()) {
            enablePhenix();
        } else {
            phenixRTC.onReady(function (enabled) {
                if (enabled) {
                    enablePhenix();

                    if (adapter.onload && typeof adapter.onload === 'function') {
                        adapter.onload();
                    }
                }
            });
        }

        phenixRTC.onLoaded(function () {
            enablePhenix();
        });
    } else {
        adapter.phenixSupported = false;
    }

    return adapter;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
    'use strict';

    var exportGlobal = function exportGlobal(adapter) {
        window.RTCPeerConnection = adapter.RTCPeerConnection;
        window.RTCSessionDescription = adapter.RTCSessionDescription;
        window.RTCIceCandidate = adapter.RTCIceCandidate;
    };

    return exportGlobal;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (_) {
    var Assert = function() {

    };

    Assert.prototype.isObject = function isObject(obj, name) {
        Assert.prototype.isString('name', name);

        var error = '"' + name + '" must be an object';

        if (!_.isObject(obj)) {
            throw new Error(error);
        }
    };

    Assert.prototype.isArray = function isArray(array, name) {
        Assert.prototype.isString('name', name);

        var error = '"' + name + '" must be an array';

        if (!_.isArray(array)) {
            throw new Error(error);
        }
    };

    Assert.prototype.isString = function isString(string, name) {
        var error = '"' + name + '" must be a string';

        if (!_.isString(name)) {
            throw new Error('"name" must be a string');
        }

        if (!_.isString(string)) {
            throw new Error(error);
        }
    };

    Assert.prototype.isBoolean = function isBoolean(bool, name) {
        Assert.prototype.isString('name', name);

        var error = '"' + name + '" must be a boolean';

        if (!_.isBoolean(bool)) {
            throw new Error(error);
        }
    };

    Assert.prototype.isNumber = function isNumber(number, name) {
        Assert.prototype.isString('name', name);

        var error = '"' + name + '" must be a number';

        if (!_.isNumber(number)) {
            throw new Error(error);
        }
    };

    Assert.prototype.isFunction = function isFunction(callback, name) {
        Assert.prototype.isString('name', name);

        var error = '"' + name + '" must be a function';

        if (!_.isFunction(callback)) {
            throw new Error(error);
        }
    };

    // TODO (dcy) remove once all dependencies have been updated
    Assert.prototype.stringNotEmpty = function stringNotEmpty(string, name) {
        Assert.prototype.isStringNotEmpty(string, name);
    };

    Assert.prototype.isStringNotEmpty = function stringNotEmpty(string, name) {
        Assert.prototype.isString('name', name);

        var error = '"' + name + '" must not be empty';

        Assert.prototype.isString(string, name);

        if (string === '') {
            throw new Error(error);
        }
    };

    Assert.prototype.isInstanceOf = function (object, clazz, name) {
        Assert.prototype.isString('name', name);

        if (!_.isObject(object)) {
            throw new Error('"' + name + '" must be an instance');
        }

        if (!(object instanceof clazz)) {
            throw new Error('"' + name + '" must be a valid instance of class');
        }
    };

    Assert.prototype.isNotUndefined = function (value, name) {
        Assert.prototype.isString('name', name);

        if (_.isUndefined(value)) {
            throw new Error('"' + name + '" must not be undefined');
        }
    };

    Assert.prototype.isValidType = function (type, types, name) {
        Assert.prototype.isStringNotEmpty(name, 'name');

        type = _.getEnumName(types, type);

        if (_.isNullOrUndefined(type)) {
            throw new Error('"' + name + '" must be a valid type');
        }

        return type;
    };

    return new Assert();
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2017 PhenixP2P Inc. Confidential and Proprietary. All Rights Reserved.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert) {
    'use strict';

    /**
     * Create a new disposable object.
     *
     * @param cleanup The callback to perform whatever cleanup is required when this object is disposed.
     * @constructor
     */
    function Disposable(cleanup) {
        assert.isFunction(cleanup, 'cleanup');

        this._cleanup = cleanup;
    }

    Disposable.prototype.dispose = function () {
        return this._cleanup.call();
    };

    Disposable.prototype.toString = function () {
        return _.toString(this);
    };

    return Disposable;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2017 PhenixP2P Inc. Confidential and Proprietary. All Rights Reserved.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (_) {
    'use strict';

    function DisposableList() {
        this._list = [];
    }

    DisposableList.prototype.add = function (disposable) {
        if (!disposable || !_.isFunction(disposable.dispose)) {
            throw new Error('"disposable" must be a disposable or implement dispose');
        }

        this._list.push(disposable);
    };

    DisposableList.prototype.dispose = function () {
        var results = [];

        _.forEach(this._list, function (disposable) {
            results.push(disposable.dispose());
        });

        this._list = [];

        return results;
    };

    DisposableList.prototype.toString = function () {
        return _.toString(this);
    };

    return DisposableList;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(9),
    __webpack_require__(10)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (Disposable, DisposableList) {
    return {
        Disposable: Disposable,
        DisposableList: DisposableList
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
    'use strict';

    var _ = function() {

    };

    _.bind = function bind(callback, that) {
        var argsAfterContext = Array.prototype.slice.call(arguments, 2);

        return function boundFunction() {
            if (!_.isFunction(callback)) {
                throw new TypeError('_.bind - callback must be a function');
            }

            var combinedArguments = argsAfterContext.concat(Array.prototype.slice.call(arguments));

            return callback.apply(that, combinedArguments);
        };
    };

    _.now = function now() {
        return new Date().getTime();
    };

    _.utc = function utc(date) {
        if (_.isNumber(date)) {
            return date;
        } else if (!date) {
            return NaN;
        }

        return Math.floor(date);
    };

    _.isoString = function isoString() {
        var now = new Date();

        if (now.toISOString) {
            return now.toISOString();
        }

        return now.getUTCFullYear() +
            '-' + _.pad(now.getUTCMonth() + 1, 2) +
            '-' + _.pad(now.getUTCDate(), 2) +
            'T' + _.pad(now.getUTCHours(), 2) +
            ':' + _.pad(now.getUTCMinutes(), 2) +
            ':' + _.pad(now.getUTCSeconds(), 2) +
            '.' + (now.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
            'Z';
    };

    _.map = function map(collection, callback) {
        assertIsObject(collection, 'collection');

        var newArray = [];

        if (collection.constructor === Array) {
            _.forEach(collection, function mapCollection(item, index) {
                if (_.isString(callback) && _.isObject(item)) {
                    newArray.push(item[callback]);
                } else if (_.isFunction(callback)) {
                    newArray.push(callback(item, index));
                }
            });
        } else {
            _.forOwn(collection, function mapCollection(value, key) {
                if (_.isFunction(callback)) {
                    newArray.push(callback(value, key));
                }
            });
        }

        return newArray;
    };

    _.values = function (collection) {
        if (!_.isObject(collection) || _.isArray(collection)) {
            throw new Error('Collection must be an object.');
        }

        return _.map(collection, function (value) {
            return value;
        });
    };

    _.keys = function (collection) {
        if (!_.isObject(collection) || _.isArray(collection)) {
            throw new Error('Collection must be an object.');
        }

        return _.map(collection, function (value, key) {
            return key;
        });
    };

    _.forEach = function forEach(collection, callback) {
        if (!_.isFunction(callback)) {
            throw new Error('Callback must be a function');
        }

        assertIsArray(collection, 'collection');

        for (var i = 0; i < collection.length; i++) {
            callback(collection[i], i);
        }
    };

    _.forOwn = function forOwn(objectWithProperties, callback) {
        if (!_.isFunction(callback)) {
            throw new Error('Callback must be a function');
        }

        assertIsObject(objectWithProperties, 'objectWithProperties');

        var keys = Object.keys(objectWithProperties);

        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];

            if (objectWithProperties.hasOwnProperty(key) || Object.prototype.hasOwnProperty.call(objectWithProperties, key)) {
                callback(objectWithProperties[key], key);
            }
        }
    };

    _.argumentsToArray = function(args) {
        if (!_.isObject(args) || !args.length) {
            throw new Error('Collection must be arguments');
        }

        var collection = [];

        for (var i = 0; i < args.length; i++) {
            collection.push(args[i]);
        }

        return collection;
    };

    _.assign = function assign(target) {
        assertIsObject(target, 'target');

        var sources = _.argumentsToArray(arguments);

        sources.shift();

        _.forEach(sources, function(source, index) {
            assertIsObject(source, 'source ' + index);

            _.forOwn(source, function(value, key) {
                target[key] = value;
            });
        });

        return target;
    };

    _.includes = function includes(collection, value) {
        if (_.isString(collection)) {
            assertIsString(value, 'Includes value and search parameter');

            return collection.indexOf(value) > -1;
        }

        if (_.isUndefined(collection) || _.isUndefined(value)) {
            return false;
        }

        assertIsObject(collection, 'collection');

        var hasValue = false;

        var checkCollection = function checkCollection(currentValue) {
            if (currentValue === value) {
                hasValue = true;
            }
        };

        if (collection.constructor === Array) {
            _.forEach(collection, checkCollection);
        } else {
            _.forOwn(collection, checkCollection);
        }

        return hasValue;
    };

    _.reduce = function reduce(collection, callback, initialValue) {
        assertIsObject(collection, 'collection');

        var result = initialValue === _.noop() ? null : initialValue;

        if (collection.constructor === Array) {
            _.forEach(collection, function (item) {
                result = callback(result, item);
            });
        } else {
            _.forOwn(collection, function (value, key) {
                result = callback(result, value, key);
            });
        }

        return result;
    };

    _.sample = function sample(collection) {
        assertIsArray(collection, 'collection');

        return collection[Math.floor(Math.random() * collection.length)];
    };

    _.uniqueId = function () {
        return (_.now() * Math.random()).toString();
    };

    _.find = function find(collection, callback, initialIndex) {
        assertIsArray(collection, 'collection');

        var hasItem;

        _.forEach(collection, function findInCollection(value, index) {
            if (callback(value) && index >= (initialIndex || 0)) {
                hasItem = value;

                return hasItem;
            }
        });

        return hasItem;
    };

    _.findIndex = function find(collection, callback, initialIndex) {
        assertIsArray(collection, 'collection');

        var hasItem;

        _.forEach(collection, function findInCollection(value, index) {
            if (callback(value, index) && index >= (initialIndex || 0)) {
                hasItem = index;

                return hasItem;
            }
        });

        return hasItem;
    };

    _.filter = function filter(collection, callback) {
        assertIsArray(collection, 'collection');

        var newCollection = [];

        _.forEach(collection, function findInCollection(value) {
            if (callback(value)) {
                newCollection.push(value);
            }
        });

        return newCollection;
    };

    _.remove = function remove(collection, callback) {
        assertIsArray(collection, 'collection');

        var filterCallback = function filterCallback(value) {
            return !callback(value);
        };

        return _.filter(collection, filterCallback);
    };

    _.take = function take(collection, size) {
        assertIsArray(collection, 'collection');

        return collection.slice(0, size);
    };

    _.hasDifferences = function hasDifferences(collectionA, collectionB, deep) {
        return _.findDifferences(collectionA, collectionB, deep).length > 0;
    };

    _.findDifferences = function findDifferences(collectionA, collectionB, deep) {
        var differences = [];
        var visitedKeys = {};

        function getDifferences(value, indexOrKey) {
            visitedKeys[indexOrKey] = 1;

            if ((_.isObject(value) || _.isArray(value)) && deep) {
                if (!_.hasIndexOrKey(collectionB, indexOrKey)) {
                    differences.push(indexOrKey);
                } else if (!_.sameTypes(collectionA[indexOrKey], collectionB[indexOrKey])) {
                    differences.push(indexOrKey);
                } else if (_.hasDifferences(collectionA[indexOrKey], collectionB[indexOrKey], deep)) {
                    differences.push(indexOrKey);
                }
            } else if (collectionA[indexOrKey] !== collectionB[indexOrKey]) {
                differences.push(indexOrKey);
            }
        }

        if (_.isArray(collectionA) && _.isArray(collectionB)) {
            if (collectionA.length > collectionB.length) {
                _.forEach(collectionA, getDifferences);
            } else {
                _.forEach(collectionB, getDifferences);
            }
        } else if (_.isObject(collectionA) && _.isObject(collectionB) && !_.isArray(collectionA) && !_.isArray(collectionB)) {
            _.forOwn(collectionA, getDifferences);

            _.forOwn(collectionB, function (value, key) {
                if (!visitedKeys.hasOwnProperty(key)) {
                    differences.push(key);
                }
            });
        } else {
            throw new Error('Object types do not match');
        }

        return differences;
    };

    _.hasIndexOrKey = function hasIndexOrKey(collection, indexOrKey) {
        if (_.isArray(collection)) {
            return collection.length > parseInt(indexOrKey);
        } else if (_.isObject(collection)) {
            return collection.hasOwnProperty(indexOrKey);
        }

        return false;
    };

    _.startsWith = function startsWith(value, prefix) {
        assertIsString(value, 'value');
        assertIsString(prefix, 'prefix');

        return value.indexOf(prefix) === 0;
    };

    _.sameTypes = function sameTypes(first, second) {
        if (_.isNullOrUndefined(first) || _.isNullOrUndefined(second)) {
            return _.isNullOrUndefined(first) && _.isNullOrUndefined(second);
        }

        if (_.isArray(first) || _.isArray(second)) {
            return _.isArray(first) && _.isArray(second);
        }

        return typeof first === typeof second;
    };

    _.freeze = function freeze(obj) {
        if ('freeze' in Object) {
            return Object.freeze(obj);
        }

        return obj;
    };

    _.noop = function () {
        return undefined;
    };

    _.isObject = function isObject(obj) {
        if (obj === null) {
            return false;
        }

        return typeof obj === 'object';
    };

    _.isArray = function isArray(array) {
        if (!_.isObject(array)) {
            return false;
        }

        return array.constructor === Array;
    };

    _.isString = function isString(string) {
        return typeof string === 'string';
    };

    _.isNumber = function isNumber(number) {
        if (isNaN(number)) {
            return false;
        }

        return typeof number === 'number';
    };

    _.isBoolean = function isBoolean(bool) {
        return typeof bool === 'boolean';
    };

    _.isFunction = function isFunction(func) {
        return typeof func === 'function';
    };

    _.isNullOrUndefined = function isNullOrUndefined(value) {
        return value === null || _.isUndefined(value);
    };

    _.isUndefined = function isUndefined(value) {
        return typeof value === 'undefined';
    };

    _.getEnumName = function getEnumName(enums, nameOrId) {
        var enumObject = null;

        var enumArray = _.map(enums, function (value) {
            return value;
        });

        if (_.isNumber(nameOrId)) {
            enumObject = _.find(enumArray, function (current) {
                return current.id === nameOrId;
            });
        } else if (_.isString(nameOrId)) {
            enumObject = _.find(enumArray, function (current) {
                return current.name.toLowerCase() === nameOrId.toLowerCase();
            });
        }

        if (enumObject) {
            return enumObject.name;
        }

        return null;
    };

    _.toString = function toString(data) {
        if (_.isString(data)) {
            return data;
        }

        if (_.isBoolean(data)) {
            return data ? 'true' : 'false';
        }

        if (_.isNumber(data)) {
            return data.toString();
        }

        var toStringStr = '';

        if (data) {
            if (_.isFunction(data.toString)) {
                toStringStr = data.toString();
            } else if (_.isObject(data.toString)) {
                try {
                    toStringStr = data.toString();
                } catch (e) {
                    toStringStr = '[object invalid toString()]';
                }
            }
        }

        if (toStringStr.indexOf('[object') !== 0) {
            return toStringStr;
        }

        var cache = [];

        return toStringStr + JSON.stringify(data, function (key, value) {
            if (_.isObject(value) && !_.isNullOrUndefined(value)) {
                if (_.includes(cache, value)) {
                    return '<recursive>';
                }

                cache.push(value);
            }

            return key === '' ? value : _.toString(value);
        });
    };

    _.pad = function padNumber(value, numberToPad) {
        assertIsNumber(value, 'value');
        assertIsNumber(numberToPad, 'numberToPad');

        var valueLength = value.toString().length;

        for (var i = 0; i < numberToPad - valueLength; i++) {
            value = '0' + value.toString();
        }

        return value.toString();
    };

    _.addEventListener = function addEventListener(target, eventName, listener, useCapture) {
        assertIsObject(target, 'target');
        assertIsString(eventName, 'eventName');
        assertIsFunction(listener, 'listener');

        if (target.phenixAddEventListener) {
            target.phenixAddEventListener.call(target, eventName, listener, !!useCapture);
        } else if (target.addEventListener) {
            target.addEventListener(eventName, listener, !!useCapture);
        } else if (target.attachEvent) {
            target.attachEvent("on" + eventName, listener);
        }
    };

    _.removeEventListener = function removeEventListener(target, eventName, listener, useCapture) {
        assertIsObject(target, 'target');
        assertIsString(eventName, 'eventName');
        assertIsFunction(listener, 'listener');

        if (target.phenixRemoveEventListener) {
            target.phenixRemoveEventListener.call(target, eventName, listener, !!useCapture);
        } else if(target.removeEventListener) {
            target.removeEventListener(eventName, listener, !!useCapture);
        } else if (target.detachEvent) {
            target.detachEvent("on" + eventName, listener);
        }
    };

    var assertIsArray = function assertIsArray(collection) {
        if (!_.isArray(collection)) {
            throw new Error('Array must be an array.');
        }
    };

    var assertIsNumber = function assertIsNumber(number, name) {
        assertIsString(name, 'name');

        if (!_.isNumber(number)) {
            throw new Error(name + ' must be a number.');
        }
    };

    var assertIsObject = function assertIsObject(collection, name) {
        assertIsString(name, 'name');

        if (!_.isObject(collection)) {
            throw new Error('collection type not supported - ' + name +' must be an array or object.');
        }
    };

    var assertIsFunction = function assertIsFunction(callback, name) {
        assertIsString(name, 'name');

        if (!_.isFunction(callback)) {
            throw new Error(name + ' must be a function.');
        }
    };

    var assertIsString = function assertIsFunction(value, name) {
        if (!_.isString(value)) {
            throw new Error('Name must be a string.');
        }

        if (!_.isString(value)) {
            throw new Error(name + ' must be a string.');
        }
    };

    return _;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert, Observable) {
    'use strict';

    function ObservableArray(initialValues, beforeChange) {
        var valuesToSet = initialValues;

        if (valuesToSet === undefined || valuesToSet === null) {
            valuesToSet = [];
        }

        assert.isArray(valuesToSet, 'valuesToSet');

        this.observableArray = new Observable(valuesToSet, beforeChange);
    }

    ObservableArray.prototype.getValue = function getValue() {
        return this.observableArray.getValue();
    };

    ObservableArray.prototype.setValue = function setValue(values) {
        if (values === undefined || values === null) {
            values = [];
        }

        if (values !== undefined) {
            assert.isArray(values, 'values');
        }

        return this.observableArray.setValue(values);
    };

    ObservableArray.prototype.subscribe = function subscribe(callback, options) {
        return this.observableArray.subscribe(callback, options);
    };

    ObservableArray.prototype.push = function push(value) {
        var array = this.observableArray.getValue();
        array.push(value);

        this.observableArray.setValue(array);
    };

    ObservableArray.prototype.pop = function pop() {
        var array = this.observableArray.getValue();
        var value = array.pop();

        this.observableArray.setValue(array);

        return value;
    };

    ObservableArray.prototype.remove = function remove(valueOrFunction) {
        var array = this.observableArray.getValue();

        var filterFunction = function (value) {
            return _.isFunction(valueOrFunction) ? valueOrFunction(value) : value === valueOrFunction;
        };

        var valuesToRemove = _.filter(array, filterFunction);

        if (valuesToRemove.length > 0) {
            this.observableArray.setValue(_.remove(array, filterFunction));
        }

        return valuesToRemove;
    };

    ObservableArray.prototype.removeAll = function removeAll() {
        var array = this.observableArray.getValue();

        this.observableArray.setValue([]);

        return array;
    };

    ObservableArray.prototype.extend = function extend(options) {
        this.observableArray.extend(options);

        return this;
    };

    return ObservableArray;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert) {
    'use strict';

    function ObservableMonitor(observable) {
        assert.isObject(observable, 'observable');

        this._observable = observable;
        this._listenerSubscription = null;
        this._isEnabled = false;
    }

    ObservableMonitor.prototype.start = function start(checkForChanges, timeout) {
        this._isEnabled = true;

        this._listenerSubscription = this._observable.subscribe(_.noop, {
            listenForChanges: {
                callback: checkForChanges,
                timeout: timeout || 500
            }
        });
    };

    ObservableMonitor.prototype.stop = function stop() {
        this._isEnabled = false;

        if (this._listenerSubscription) {
            this._listenerSubscription.dispose();
        }

        this._listenerSubscription = null;
    };

    ObservableMonitor.prototype.isEnabled = function isEnabled() {
        return this._isEnabled;
    };

    return ObservableMonitor;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;(function(f){if(true){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.adapter = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return require(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
 /* eslint-env node */
'use strict';

// SDP helpers.
var SDPUtils = {};

// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier = function() {
  return Math.random().toString(36).substr(2, 10);
};

// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName = SDPUtils.generateIdentifier();

// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines = function(blob) {
  return blob.trim().split('\n').map(function(line) {
    return line.trim();
  });
};
// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections = function(blob) {
  var parts = blob.split('\nm=');
  return parts.map(function(part, index) {
    return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
  });
};

// Returns lines that start with a certain prefix.
SDPUtils.matchPrefix = function(blob, prefix) {
  return SDPUtils.splitLines(blob).filter(function(line) {
    return line.indexOf(prefix) === 0;
  });
};

// Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
SDPUtils.parseCandidate = function(line) {
  var parts;
  // Parse both variants.
  if (line.indexOf('a=candidate:') === 0) {
    parts = line.substring(12).split(' ');
  } else {
    parts = line.substring(10).split(' ');
  }

  var candidate = {
    foundation: parts[0],
    component: parseInt(parts[1], 10),
    protocol: parts[2].toLowerCase(),
    priority: parseInt(parts[3], 10),
    ip: parts[4],
    port: parseInt(parts[5], 10),
    // skip parts[6] == 'typ'
    type: parts[7]
  };

  for (var i = 8; i < parts.length; i += 2) {
    switch (parts[i]) {
      case 'raddr':
        candidate.relatedAddress = parts[i + 1];
        break;
      case 'rport':
        candidate.relatedPort = parseInt(parts[i + 1], 10);
        break;
      case 'tcptype':
        candidate.tcpType = parts[i + 1];
        break;
      case 'ufrag':
        candidate.ufrag = parts[i + 1]; // for backward compability.
        candidate.usernameFragment = parts[i + 1];
        break;
      default: // extension handling, in particular ufrag
        candidate[parts[i]] = parts[i + 1];
        break;
    }
  }
  return candidate;
};

// Translates a candidate object into SDP candidate attribute.
SDPUtils.writeCandidate = function(candidate) {
  var sdp = [];
  sdp.push(candidate.foundation);
  sdp.push(candidate.component);
  sdp.push(candidate.protocol.toUpperCase());
  sdp.push(candidate.priority);
  sdp.push(candidate.ip);
  sdp.push(candidate.port);

  var type = candidate.type;
  sdp.push('typ');
  sdp.push(type);
  if (type !== 'host' && candidate.relatedAddress &&
      candidate.relatedPort) {
    sdp.push('raddr');
    sdp.push(candidate.relatedAddress); // was: relAddr
    sdp.push('rport');
    sdp.push(candidate.relatedPort); // was: relPort
  }
  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
    sdp.push('tcptype');
    sdp.push(candidate.tcpType);
  }
  if (candidate.ufrag) {
    sdp.push('ufrag');
    sdp.push(candidate.ufrag);
  }
  return 'candidate:' + sdp.join(' ');
};

// Parses an ice-options line, returns an array of option tags.
// a=ice-options:foo bar
SDPUtils.parseIceOptions = function(line) {
  return line.substr(14).split(' ');
}

// Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2
SDPUtils.parseRtpMap = function(line) {
  var parts = line.substr(9).split(' ');
  var parsed = {
    payloadType: parseInt(parts.shift(), 10) // was: id
  };

  parts = parts[0].split('/');

  parsed.name = parts[0];
  parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
  // was: channels
  parsed.numChannels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
  return parsed;
};

// Generate an a=rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap = function(codec) {
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
      (codec.numChannels !== 1 ? '/' + codec.numChannels : '') + '\r\n';
};

// Parses an a=extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap = function(line) {
  var parts = line.substr(9).split(' ');
  return {
    id: parseInt(parts[0], 10),
    direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
    uri: parts[1]
  };
};

// Generates a=extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap = function(headerExtension) {
  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
      (headerExtension.direction && headerExtension.direction !== 'sendrecv'
          ? '/' + headerExtension.direction
          : '') +
      ' ' + headerExtension.uri + '\r\n';
};

// Parses an ftmp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on
SDPUtils.parseFmtp = function(line) {
  var parsed = {};
  var kv;
  var parts = line.substr(line.indexOf(' ') + 1).split(';');
  for (var j = 0; j < parts.length; j++) {
    kv = parts[j].trim().split('=');
    parsed[kv[0].trim()] = kv[1];
  }
  return parsed;
};

// Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeFmtp = function(codec) {
  var line = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.parameters && Object.keys(codec.parameters).length) {
    var params = [];
    Object.keys(codec.parameters).forEach(function(param) {
      params.push(param + '=' + codec.parameters[param]);
    });
    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
  }
  return line;
};

// Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi
SDPUtils.parseRtcpFb = function(line) {
  var parts = line.substr(line.indexOf(' ') + 1).split(' ');
  return {
    type: parts.shift(),
    parameter: parts.join(' ')
  };
};
// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeRtcpFb = function(codec) {
  var lines = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
    // FIXME: special handling for trr-int?
    codec.rtcpFeedback.forEach(function(fb) {
      lines += 'a=rtcp-fb:' + pt + ' ' + fb.type +
      (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
          '\r\n';
    });
  }
  return lines;
};

// Parses an RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something
SDPUtils.parseSsrcMedia = function(line) {
  var sp = line.indexOf(' ');
  var parts = {
    ssrc: parseInt(line.substr(7, sp - 7), 10)
  };
  var colon = line.indexOf(':', sp);
  if (colon > -1) {
    parts.attribute = line.substr(sp + 1, colon - sp - 1);
    parts.value = line.substr(colon + 1);
  } else {
    parts.attribute = line.substr(sp + 1);
  }
  return parts;
};

// Extracts the MID (RFC 5888) from a media section.
// returns the MID or undefined if no mid line was found.
SDPUtils.getMid = function(mediaSection) {
  var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
  if (mid) {
    return mid.substr(6);
  }
}

SDPUtils.parseFingerprint = function(line) {
  var parts = line.substr(14).split(' ');
  return {
    algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
    value: parts[1]
  };
};

// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
      'a=fingerprint:');
  // Note: a=setup line is ignored since we use the 'auto' role.
  // Note2: 'algorithm' is not case sensitive except in Edge.
  return {
    role: 'auto',
    fingerprints: lines.map(SDPUtils.parseFingerprint)
  };
};

// Serializes DTLS parameters to SDP.
SDPUtils.writeDtlsParameters = function(params, setupType) {
  var sdp = 'a=setup:' + setupType + '\r\n';
  params.fingerprints.forEach(function(fp) {
    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
  });
  return sdp;
};
// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.splitLines(mediaSection);
  // Search in session part, too.
  lines = lines.concat(SDPUtils.splitLines(sessionpart));
  var iceParameters = {
    usernameFragment: lines.filter(function(line) {
      return line.indexOf('a=ice-ufrag:') === 0;
    })[0].substr(12),
    password: lines.filter(function(line) {
      return line.indexOf('a=ice-pwd:') === 0;
    })[0].substr(10)
  };
  return iceParameters;
};

// Serializes ICE parameters to SDP.
SDPUtils.writeIceParameters = function(params) {
  return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
      'a=ice-pwd:' + params.password + '\r\n';
};

// Parses the SDP media section and returns RTCRtpParameters.
SDPUtils.parseRtpParameters = function(mediaSection) {
  var description = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: [],
    rtcp: []
  };
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  for (var i = 3; i < mline.length; i++) { // find all codecs from mline[3..]
    var pt = mline[i];
    var rtpmapline = SDPUtils.matchPrefix(
        mediaSection, 'a=rtpmap:' + pt + ' ')[0];
    if (rtpmapline) {
      var codec = SDPUtils.parseRtpMap(rtpmapline);
      var fmtps = SDPUtils.matchPrefix(
          mediaSection, 'a=fmtp:' + pt + ' ');
      // Only the first a=fmtp:<pt> is considered.
      codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
      codec.rtcpFeedback = SDPUtils.matchPrefix(
          mediaSection, 'a=rtcp-fb:' + pt + ' ')
        .map(SDPUtils.parseRtcpFb);
      description.codecs.push(codec);
      // parse FEC mechanisms from rtpmap lines.
      switch (codec.name.toUpperCase()) {
        case 'RED':
        case 'ULPFEC':
          description.fecMechanisms.push(codec.name.toUpperCase());
          break;
        default: // only RED and ULPFEC are recognized as FEC mechanisms.
          break;
      }
    }
  }
  SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function(line) {
    description.headerExtensions.push(SDPUtils.parseExtmap(line));
  });
  // FIXME: parse rtcp.
  return description;
};

// Generates parts of the SDP media section describing the capabilities /
// parameters.
SDPUtils.writeRtpDescription = function(kind, caps) {
  var sdp = '';

  // Build the mline.
  sdp += 'm=' + kind + ' ';
  sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
  sdp += ' UDP/TLS/RTP/SAVPF ';
  sdp += caps.codecs.map(function(codec) {
    if (codec.preferredPayloadType !== undefined) {
      return codec.preferredPayloadType;
    }
    return codec.payloadType;
  }).join(' ') + '\r\n';

  sdp += 'c=IN IP4 0.0.0.0\r\n';
  sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

  // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
  caps.codecs.forEach(function(codec) {
    sdp += SDPUtils.writeRtpMap(codec);
    sdp += SDPUtils.writeFmtp(codec);
    sdp += SDPUtils.writeRtcpFb(codec);
  });
  var maxptime = 0;
  caps.codecs.forEach(function(codec) {
    if (codec.maxptime > maxptime) {
      maxptime = codec.maxptime;
    }
  });
  if (maxptime > 0) {
    sdp += 'a=maxptime:' + maxptime + '\r\n';
  }
  sdp += 'a=rtcp-mux\r\n';

  caps.headerExtensions.forEach(function(extension) {
    sdp += SDPUtils.writeExtmap(extension);
  });
  // FIXME: write fecMechanisms.
  return sdp;
};

// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
  var encodingParameters = [];
  var description = SDPUtils.parseRtpParameters(mediaSection);
  var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
  var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

  // filter a=ssrc:... cname:, ignore PlanB-msid
  var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
  .map(function(line) {
    return SDPUtils.parseSsrcMedia(line);
  })
  .filter(function(parts) {
    return parts.attribute === 'cname';
  });
  var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
  var secondarySsrc;

  var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID')
  .map(function(line) {
    var parts = line.split(' ');
    parts.shift();
    return parts.map(function(part) {
      return parseInt(part, 10);
    });
  });
  if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
    secondarySsrc = flows[0][1];
  }

  description.codecs.forEach(function(codec) {
    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
      var encParam = {
        ssrc: primarySsrc,
        codecPayloadType: parseInt(codec.parameters.apt, 10),
        rtx: {
          ssrc: secondarySsrc
        }
      };
      encodingParameters.push(encParam);
      if (hasRed) {
        encParam = JSON.parse(JSON.stringify(encParam));
        encParam.fec = {
          ssrc: secondarySsrc,
          mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
        };
        encodingParameters.push(encParam);
      }
    }
  });
  if (encodingParameters.length === 0 && primarySsrc) {
    encodingParameters.push({
      ssrc: primarySsrc
    });
  }

  // we support both b=AS and b=TIAS but interpret AS as TIAS.
  var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
  if (bandwidth.length) {
    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
      bandwidth = parseInt(bandwidth[0].substr(7), 10);
    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
      // use formula from JSEP to convert b=AS to TIAS value.
      bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95
          - (50 * 40 * 8);
    } else {
      bandwidth = undefined;
    }
    encodingParameters.forEach(function(params) {
      params.maxBitrate = bandwidth;
    });
  }
  return encodingParameters;
};

// parses http://draft.ortc.org/#rtcrtcpparameters*
SDPUtils.parseRtcpParameters = function(mediaSection) {
  var rtcpParameters = {};

  var cname;
  // Gets the first SSRC. Note that with RTX there might be multiple
  // SSRCs.
  var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
      .map(function(line) {
        return SDPUtils.parseSsrcMedia(line);
      })
      .filter(function(obj) {
        return obj.attribute === 'cname';
      })[0];
  if (remoteSsrc) {
    rtcpParameters.cname = remoteSsrc.value;
    rtcpParameters.ssrc = remoteSsrc.ssrc;
  }

  // Edge uses the compound attribute instead of reducedSize
  // compound is !reducedSize
  var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
  rtcpParameters.reducedSize = rsize.length > 0;
  rtcpParameters.compound = rsize.length === 0;

  // parses the rtcp-mux attrіbute.
  // Note that Edge does not support unmuxed RTCP.
  var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
  rtcpParameters.mux = mux.length > 0;

  return rtcpParameters;
};

// parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.
SDPUtils.parseMsid = function(mediaSection) {
  var parts;
  var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
  if (spec.length === 1) {
    parts = spec[0].substr(7).split(' ');
    return {stream: parts[0], track: parts[1]};
  }
  var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
  .map(function(line) {
    return SDPUtils.parseSsrcMedia(line);
  })
  .filter(function(parts) {
    return parts.attribute === 'msid';
  });
  if (planB.length > 0) {
    parts = planB[0].value.split(' ');
    return {stream: parts[0], track: parts[1]};
  }
};

// Generate a session ID for SDP.
// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
// recommends using a cryptographically random +ve 64-bit value
// but right now this should be acceptable and within the right range
SDPUtils.generateSessionId = function() {
  return Math.random().toString().substr(2, 21);
};

// Write boilder plate for start of SDP
// sessId argument is optional - if not supplied it will
// be generated randomly
// sessVersion is optional and defaults to 2
SDPUtils.writeSessionBoilerplate = function(sessId, sessVer) {
  var sessionId;
  var version = sessVer !== undefined ? sessVer : 2;
  if (sessId) {
    sessionId = sessId;
  } else {
    sessionId = SDPUtils.generateSessionId();
  }
  // FIXME: sess-id should be an NTP timestamp.
  return 'v=0\r\n' +
      'o=thisisadapterortc ' + sessionId + ' ' + version + ' IN IP4 127.0.0.1\r\n' +
      's=-\r\n' +
      't=0 0\r\n';
};

SDPUtils.writeMediaSection = function(transceiver, caps, type, stream) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

  // Map ICE parameters (ufrag, pwd) to SDP.
  sdp += SDPUtils.writeIceParameters(
      transceiver.iceGatherer.getLocalParameters());

  // Map DTLS parameters to SDP.
  sdp += SDPUtils.writeDtlsParameters(
      transceiver.dtlsTransport.getLocalParameters(),
      type === 'offer' ? 'actpass' : 'active');

  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.direction) {
    sdp += 'a=' + transceiver.direction + '\r\n';
  } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    // spec.
    var msid = 'msid:' + stream.id + ' ' +
        transceiver.rtpSender.track.id + '\r\n';
    sdp += 'a=' + msid;

    // for Chrome.
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
        ' ' + msid;
    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
          ' ' + msid;
      sdp += 'a=ssrc-group:FID ' +
          transceiver.sendEncodingParameters[0].ssrc + ' ' +
          transceiver.sendEncodingParameters[0].rtx.ssrc +
          '\r\n';
    }
  }
  // FIXME: this should be written by writeRtpDescription.
  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
      ' cname:' + SDPUtils.localCName + '\r\n';
  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
        ' cname:' + SDPUtils.localCName + '\r\n';
  }
  return sdp;
};

// Gets the direction from the mediaSection or the sessionpart.
SDPUtils.getDirection = function(mediaSection, sessionpart) {
  // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
  var lines = SDPUtils.splitLines(mediaSection);
  for (var i = 0; i < lines.length; i++) {
    switch (lines[i]) {
      case 'a=sendrecv':
      case 'a=sendonly':
      case 'a=recvonly':
      case 'a=inactive':
        return lines[i].substr(2);
      default:
        // FIXME: What should happen here?
    }
  }
  if (sessionpart) {
    return SDPUtils.getDirection(sessionpart);
  }
  return 'sendrecv';
};

SDPUtils.getKind = function(mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  return mline[0].substr(2);
};

SDPUtils.isRejected = function(mediaSection) {
  return mediaSection.split(' ', 2)[1] === '0';
};

SDPUtils.parseMLine = function(mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  return {
    kind: mline[0].substr(2),
    port: parseInt(mline[1], 10),
    protocol: mline[2],
    fmt: mline.slice(3).join(' ')
  };
};

// Expose public methods.
if (typeof module === 'object') {
  module.exports = SDPUtils;
}

},{}],3:[function(require,module,exports){
(function (global){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */

'use strict';

var adapterFactory = require('./adapter_factory.js');
module.exports = adapterFactory({window: global.window});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./adapter_factory.js":4}],4:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */

'use strict';

var utils = require('./utils');
// Shimming starts here.
module.exports = function(dependencies, opts) {
  var window = dependencies && dependencies.window;

  var options = {
    shimChrome: true,
    shimFirefox: true,
    shimEdge: true,
    shimSafari: true,
  };

  for (var key in opts) {
    if (hasOwnProperty.call(opts, key)) {
      options[key] = opts[key];
    }
  }

  // Utils.
  var logging = utils.log;
  var browserDetails = utils.detectBrowser(window);

  // Export to the adapter global object visible in the browser.
  var adapter = {
    browserDetails: browserDetails,
    extractVersion: utils.extractVersion,
    disableLog: utils.disableLog,
    disableWarnings: utils.disableWarnings
  };

  // Uncomment the line below if you want logging to occur, including logging
  // for the switch statement below. Can also be turned on in the browser via
  // adapter.disableLog(false), but then logging from the switch statement below
  // will not appear.
  // require('./utils').disableLog(false);

  // Browser shims.
  var chromeShim = require('./chrome/chrome_shim') || null;
  var edgeShim = require('./edge/edge_shim') || null;
  var firefoxShim = require('./firefox/firefox_shim') || null;
  var safariShim = require('./safari/safari_shim') || null;
  var commonShim = require('./common_shim') || null;

  // Shim browser if found.
  switch (browserDetails.browser) {
    case 'chrome':
      if (!chromeShim || !chromeShim.shimPeerConnection ||
          !options.shimChrome) {
        logging('Chrome shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming chrome.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = chromeShim;
      commonShim.shimCreateObjectURL(window);

      chromeShim.shimGetUserMedia(window);
      chromeShim.shimMediaStream(window);
      chromeShim.shimSourceObject(window);
      chromeShim.shimPeerConnection(window);
      chromeShim.shimOnTrack(window);
      chromeShim.shimAddTrackRemoveTrack(window);
      chromeShim.shimGetSendersWithDtmf(window);

      commonShim.shimRTCIceCandidate(window);
      break;
    case 'firefox':
      if (!firefoxShim || !firefoxShim.shimPeerConnection ||
          !options.shimFirefox) {
        logging('Firefox shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming firefox.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = firefoxShim;
      commonShim.shimCreateObjectURL(window);

      firefoxShim.shimGetUserMedia(window);
      firefoxShim.shimSourceObject(window);
      firefoxShim.shimPeerConnection(window);
      firefoxShim.shimOnTrack(window);

      commonShim.shimRTCIceCandidate(window);
      break;
    case 'edge':
      if (!edgeShim || !edgeShim.shimPeerConnection || !options.shimEdge) {
        logging('MS edge shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming edge.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = edgeShim;
      commonShim.shimCreateObjectURL(window);

      edgeShim.shimGetUserMedia(window);
      edgeShim.shimPeerConnection(window);
      edgeShim.shimReplaceTrack(window);

      // the edge shim implements the full RTCIceCandidate object.
      break;
    case 'safari':
      if (!safariShim || !options.shimSafari) {
        logging('Safari shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming safari.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = safariShim;
      commonShim.shimCreateObjectURL(window);

      safariShim.shimRTCIceServerUrls(window);
      safariShim.shimCallbacksAPI(window);
      safariShim.shimLocalStreamsAPI(window);
      safariShim.shimRemoteStreamsAPI(window);
      safariShim.shimTrackEventTransceiver(window);
      safariShim.shimGetUserMedia(window);

      commonShim.shimRTCIceCandidate(window);
      break;
    default:
      logging('Unsupported browser!');
      break;
  }

  return adapter;
};

},{"./chrome/chrome_shim":5,"./common_shim":7,"./edge/edge_shim":1,"./firefox/firefox_shim":8,"./safari/safari_shim":10,"./utils":11}],5:[function(require,module,exports){

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';
var utils = require('../utils.js');
var logging = utils.log;

var chromeShim = {
  shimMediaStream: function(window) {
    window.MediaStream = window.MediaStream || window.webkitMediaStream;
  },

  shimOnTrack: function(window) {
    if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
        window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
        get: function() {
          return this._ontrack;
        },
        set: function(f) {
          if (this._ontrack) {
            this.removeEventListener('track', this._ontrack);
          }
          this.addEventListener('track', this._ontrack = f);
        }
      });
      var origSetRemoteDescription =
          window.RTCPeerConnection.prototype.setRemoteDescription;
      window.RTCPeerConnection.prototype.setRemoteDescription = function() {
        var pc = this;
        if (!pc._ontrackpoly) {
          pc._ontrackpoly = function(e) {
            // onaddstream does not fire when a track is added to an existing
            // stream. But stream.onaddtrack is implemented so we use that.
            e.stream.addEventListener('addtrack', function(te) {
              var receiver;
              if (window.RTCPeerConnection.prototype.getReceivers) {
                receiver = pc.getReceivers().find(function(r) {
                  return r.track && r.track.id === te.track.id;
                });
              } else {
                receiver = {track: te.track};
              }

              var event = new Event('track');
              event.track = te.track;
              event.receiver = receiver;
              event.transceiver = {receiver: receiver};
              event.streams = [e.stream];
              pc.dispatchEvent(event);
            });
            e.stream.getTracks().forEach(function(track) {
              var receiver;
              if (window.RTCPeerConnection.prototype.getReceivers) {
                receiver = pc.getReceivers().find(function(r) {
                  return r.track && r.track.id === track.id;
                });
              } else {
                receiver = {track: track};
              }
              var event = new Event('track');
              event.track = track;
              event.receiver = receiver;
              event.transceiver = {receiver: receiver};
              event.streams = [e.stream];
              pc.dispatchEvent(event);
            });
          };
          pc.addEventListener('addstream', pc._ontrackpoly);
        }
        return origSetRemoteDescription.apply(pc, arguments);
      };
    }
  },

  shimGetSendersWithDtmf: function(window) {
    // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
    if (typeof window === 'object' && window.RTCPeerConnection &&
        !('getSenders' in window.RTCPeerConnection.prototype) &&
        'createDTMFSender' in window.RTCPeerConnection.prototype) {
      var shimSenderWithDtmf = function(pc, track) {
        return {
          track: track,
          get dtmf() {
            if (this._dtmf === undefined) {
              if (track.kind === 'audio') {
                this._dtmf = pc.createDTMFSender(track);
              } else {
                this._dtmf = null;
              }
            }
            return this._dtmf;
          },
          _pc: pc
        };
      };

      // augment addTrack when getSenders is not available.
      if (!window.RTCPeerConnection.prototype.getSenders) {
        window.RTCPeerConnection.prototype.getSenders = function() {
          this._senders = this._senders || [];
          return this._senders.slice(); // return a copy of the internal state.
        };
        var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
        window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
          var pc = this;
          var sender = origAddTrack.apply(pc, arguments);
          if (!sender) {
            sender = shimSenderWithDtmf(pc, track);
            pc._senders.push(sender);
          }
          return sender;
        };

        var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
        window.RTCPeerConnection.prototype.removeTrack = function(sender) {
          var pc = this;
          origRemoveTrack.apply(pc, arguments);
          var idx = pc._senders.indexOf(sender);
          if (idx !== -1) {
            pc._senders.splice(idx, 1);
          }
        };
      }
      var origAddStream = window.RTCPeerConnection.prototype.addStream;
      window.RTCPeerConnection.prototype.addStream = function(stream) {
        var pc = this;
        pc._senders = pc._senders || [];
        origAddStream.apply(pc, [stream]);
        stream.getTracks().forEach(function(track) {
          pc._senders.push(shimSenderWithDtmf(pc, track));
        });
      };

      var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
      window.RTCPeerConnection.prototype.removeStream = function(stream) {
        var pc = this;
        pc._senders = pc._senders || [];
        origRemoveStream.apply(pc, [(pc._streams[stream.id] || stream)]);

        stream.getTracks().forEach(function(track) {
          var sender = pc._senders.find(function(s) {
            return s.track === track;
          });
          if (sender) {
            pc._senders.splice(pc._senders.indexOf(sender), 1); // remove sender
          }
        });
      };
    } else if (typeof window === 'object' && window.RTCPeerConnection &&
               'getSenders' in window.RTCPeerConnection.prototype &&
               'createDTMFSender' in window.RTCPeerConnection.prototype &&
               window.RTCRtpSender &&
               !('dtmf' in window.RTCRtpSender.prototype)) {
      var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
      window.RTCPeerConnection.prototype.getSenders = function() {
        var pc = this;
        var senders = origGetSenders.apply(pc, []);
        senders.forEach(function(sender) {
          sender._pc = pc;
        });
        return senders;
      };

      Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
        get: function() {
          if (this._dtmf === undefined) {
            if (this.track.kind === 'audio') {
              this._dtmf = this._pc.createDTMFSender(this.track);
            } else {
              this._dtmf = null;
            }
          }
          return this._dtmf;
        }
      });
    }
  },

  shimSourceObject: function(window) {
    var URL = window && window.URL;

    if (typeof window === 'object') {
      if (window.HTMLMediaElement &&
        !('srcObject' in window.HTMLMediaElement.prototype)) {
        // Shim the srcObject property, once, when HTMLMediaElement is found.
        Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
          get: function() {
            return this._srcObject;
          },
          set: function(stream) {
            var self = this;
            // Use _srcObject as a private property for this shim
            this._srcObject = stream;
            if (this.src) {
              URL.revokeObjectURL(this.src);
            }

            if (!stream) {
              this.src = '';
              return undefined;
            }
            this.src = URL.createObjectURL(stream);
            // We need to recreate the blob url when a track is added or
            // removed. Doing it manually since we want to avoid a recursion.
            stream.addEventListener('addtrack', function() {
              if (self.src) {
                URL.revokeObjectURL(self.src);
              }
              self.src = URL.createObjectURL(stream);
            });
            stream.addEventListener('removetrack', function() {
              if (self.src) {
                URL.revokeObjectURL(self.src);
              }
              self.src = URL.createObjectURL(stream);
            });
          }
        });
      }
    }
  },

  shimAddTrackRemoveTrack: function(window) {
    var browserDetails = utils.detectBrowser(window);
    // shim addTrack and removeTrack.
    if (window.RTCPeerConnection.prototype.addTrack &&
        browserDetails.version >= 62) {
      return;
    }

    // also shim pc.getLocalStreams when addTrack is shimmed
    // to return the original streams.
    var origGetLocalStreams = window.RTCPeerConnection.prototype
        .getLocalStreams;
    window.RTCPeerConnection.prototype.getLocalStreams = function() {
      var self = this;
      var nativeStreams = origGetLocalStreams.apply(this);
      self._reverseStreams = self._reverseStreams || {};
      return nativeStreams.map(function(stream) {
        return self._reverseStreams[stream.id];
      });
    };

    var origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function(stream) {
      var pc = this;
      pc._streams = pc._streams || {};
      pc._reverseStreams = pc._reverseStreams || {};

      stream.getTracks().forEach(function(track) {
        var alreadyExists = pc.getSenders().find(function(s) {
          return s.track === track;
        });
        if (alreadyExists) {
          throw new DOMException('Track already exists.',
              'InvalidAccessError');
        }
      });
      // Add identity mapping for consistency with addTrack.
      // Unless this is being used with a stream from addTrack.
      if (!pc._reverseStreams[stream.id]) {
        var newStream = new window.MediaStream(stream.getTracks());
        pc._streams[stream.id] = newStream;
        pc._reverseStreams[newStream.id] = stream;
        stream = newStream;
      }
      origAddStream.apply(pc, [stream]);
    };

    var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function(stream) {
      var pc = this;
      pc._streams = pc._streams || {};
      pc._reverseStreams = pc._reverseStreams || {};

      origRemoveStream.apply(pc, [(pc._streams[stream.id] || stream)]);
      delete pc._reverseStreams[(pc._streams[stream.id] ?
          pc._streams[stream.id].id : stream.id)];
      delete pc._streams[stream.id];
    };

    window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
      var pc = this;
      if (pc.signalingState === 'closed') {
        throw new DOMException(
          'The RTCPeerConnection\'s signalingState is \'closed\'.',
          'InvalidStateError');
      }
      var streams = [].slice.call(arguments, 1);
      if (streams.length !== 1 ||
          !streams[0].getTracks().find(function(t) {
            return t === track;
          })) {
        // this is not fully correct but all we can manage without
        // [[associated MediaStreams]] internal slot.
        throw new DOMException(
          'The adapter.js addTrack polyfill only supports a single ' +
          ' stream which is associated with the specified track.',
          'NotSupportedError');
      }

      var alreadyExists = pc.getSenders().find(function(s) {
        return s.track === track;
      });
      if (alreadyExists) {
        throw new DOMException('Track already exists.',
            'InvalidAccessError');
      }

      pc._streams = pc._streams || {};
      pc._reverseStreams = pc._reverseStreams || {};
      var oldStream = pc._streams[stream.id];
      if (oldStream) {
        // this is using odd Chrome behaviour, use with caution:
        // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
        // Note: we rely on the high-level addTrack/dtmf shim to
        // create the sender with a dtmf sender.
        oldStream.addTrack(track);

        // Trigger ONN async.
        Promise.resolve().then(function() {
          pc.dispatchEvent(new Event('negotiationneeded'));
        });
      } else {
        var newStream = new window.MediaStream([track]);
        pc._streams[stream.id] = newStream;
        pc._reverseStreams[newStream.id] = stream;
        pc.addStream(newStream);
      }
      return pc.getSenders().find(function(s) {
        return s.track === track;
      });
    };

    // replace the internal stream id with the external one and
    // vice versa.
    function replaceInternalStreamId(pc, description) {
      var sdp = description.sdp;
      Object.keys(pc._reverseStreams || []).forEach(function(internalId) {
        var externalStream = pc._reverseStreams[internalId];
        var internalStream = pc._streams[externalStream.id];
        sdp = sdp.replace(new RegExp(internalStream.id, 'g'),
            externalStream.id);
      });
      return new RTCSessionDescription({
        type: description.type,
        sdp: sdp
      });
    }
    function replaceExternalStreamId(pc, description) {
      var sdp = description.sdp;
      Object.keys(pc._reverseStreams || []).forEach(function(internalId) {
        var externalStream = pc._reverseStreams[internalId];
        var internalStream = pc._streams[externalStream.id];
        sdp = sdp.replace(new RegExp(externalStream.id, 'g'),
            internalStream.id);
      });
      return new RTCSessionDescription({
        type: description.type,
        sdp: sdp
      });
    }
    ['createOffer', 'createAnswer'].forEach(function(method) {
      var nativeMethod = window.RTCPeerConnection.prototype[method];
      window.RTCPeerConnection.prototype[method] = function() {
        var pc = this;
        var args = arguments;
        var isLegacyCall = arguments.length &&
            typeof arguments[0] === 'function';
        if (isLegacyCall) {
          return nativeMethod.apply(pc, [
            function(description) {
              var desc = replaceInternalStreamId(pc, description);
              args[0].apply(null, [desc]);
            },
            function(err) {
              if (args[1]) {
                args[1].apply(null, err);
              }
            }, arguments[2]
          ]);
        }
        return nativeMethod.apply(pc, arguments)
        .then(function(description) {
          return replaceInternalStreamId(pc, description);
        });
      };
    });

    var origSetLocalDescription =
        window.RTCPeerConnection.prototype.setLocalDescription;
    window.RTCPeerConnection.prototype.setLocalDescription = function() {
      var pc = this;
      if (!arguments.length || !arguments[0].type) {
        return origSetLocalDescription.apply(pc, arguments);
      }
      arguments[0] = replaceExternalStreamId(pc, arguments[0]);
      return origSetLocalDescription.apply(pc, arguments);
    };

    // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier

    var origLocalDescription = Object.getOwnPropertyDescriptor(
        window.RTCPeerConnection.prototype, 'localDescription');
    Object.defineProperty(window.RTCPeerConnection.prototype,
        'localDescription', {
          get: function() {
            var pc = this;
            var description = origLocalDescription.get.apply(this);
            if (description.type === '') {
              return description;
            }
            return replaceInternalStreamId(pc, description);
          }
        });

    window.RTCPeerConnection.prototype.removeTrack = function(sender) {
      var pc = this;
      if (pc.signalingState === 'closed') {
        throw new DOMException(
          'The RTCPeerConnection\'s signalingState is \'closed\'.',
          'InvalidStateError');
      }
      // We can not yet check for sender instanceof RTCRtpSender
      // since we shim RTPSender. So we check if sender._pc is set.
      if (!sender._pc) {
        throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' +
            'does not implement interface RTCRtpSender.', 'TypeError');
      }
      var isLocal = sender._pc === pc;
      if (!isLocal) {
        throw new DOMException('Sender was not created by this connection.',
            'InvalidAccessError');
      }

      // Search for the native stream the senders track belongs to.
      pc._streams = pc._streams || {};
      var stream;
      Object.keys(pc._streams).forEach(function(streamid) {
        var hasTrack = pc._streams[streamid].getTracks().find(function(track) {
          return sender.track === track;
        });
        if (hasTrack) {
          stream = pc._streams[streamid];
        }
      });

      if (stream) {
        if (stream.getTracks().length === 1) {
          // if this is the last track of the stream, remove the stream. This
          // takes care of any shimmed _senders.
          pc.removeStream(stream);
        } else {
          // relying on the same odd chrome behaviour as above.
          stream.removeTrack(sender.track);
        }
        pc.dispatchEvent(new Event('negotiationneeded'));
      }
    };
  },

  shimPeerConnection: function(window) {
    var browserDetails = utils.detectBrowser(window);

    // The RTCPeerConnection object.
    if (!window.RTCPeerConnection) {
      window.RTCPeerConnection = function(pcConfig, pcConstraints) {
        // Translate iceTransportPolicy to iceTransports,
        // see https://code.google.com/p/webrtc/issues/detail?id=4869
        // this was fixed in M56 along with unprefixing RTCPeerConnection.
        logging('PeerConnection');
        if (pcConfig && pcConfig.iceTransportPolicy) {
          pcConfig.iceTransports = pcConfig.iceTransportPolicy;
        }

        return new window.webkitRTCPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype =
          window.webkitRTCPeerConnection.prototype;
      // wrap static methods. Currently just generateCertificate.
      if (window.webkitRTCPeerConnection.generateCertificate) {
        Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
          get: function() {
            return window.webkitRTCPeerConnection.generateCertificate;
          }
        });
      }
    } else {
      // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
      var OrigPeerConnection = window.RTCPeerConnection;
      window.RTCPeerConnection = function(pcConfig, pcConstraints) {
        if (pcConfig && pcConfig.iceServers) {
          var newIceServers = [];
          for (var i = 0; i < pcConfig.iceServers.length; i++) {
            var server = pcConfig.iceServers[i];
            if (!server.hasOwnProperty('urls') &&
                server.hasOwnProperty('url')) {
              utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
              server = JSON.parse(JSON.stringify(server));
              server.urls = server.url;
              newIceServers.push(server);
            } else {
              newIceServers.push(pcConfig.iceServers[i]);
            }
          }
          pcConfig.iceServers = newIceServers;
        }
        return new OrigPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
      // wrap static methods. Currently just generateCertificate.
      Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
        get: function() {
          return OrigPeerConnection.generateCertificate;
        }
      });
    }

    var origGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function(selector,
        successCallback, errorCallback) {
      var self = this;
      var args = arguments;

      // If selector is a function then we are in the old style stats so just
      // pass back the original getStats format to avoid breaking old users.
      if (arguments.length > 0 && typeof selector === 'function') {
        return origGetStats.apply(this, arguments);
      }

      // When spec-style getStats is supported, return those when called with
      // either no arguments or the selector argument is null.
      if (origGetStats.length === 0 && (arguments.length === 0 ||
          typeof arguments[0] !== 'function')) {
        return origGetStats.apply(this, []);
      }

      var fixChromeStats_ = function(response) {
        var standardReport = {};
        var reports = response.result();
        reports.forEach(function(report) {
          var standardStats = {
            id: report.id,
            timestamp: report.timestamp,
            type: {
              localcandidate: 'local-candidate',
              remotecandidate: 'remote-candidate'
            }[report.type] || report.type
          };
          report.names().forEach(function(name) {
            standardStats[name] = report.stat(name);
          });
          standardReport[standardStats.id] = standardStats;
        });

        return standardReport;
      };

      // shim getStats with maplike support
      var makeMapStats = function(stats) {
        return new Map(Object.keys(stats).map(function(key) {
          return [key, stats[key]];
        }));
      };

      if (arguments.length >= 2) {
        var successCallbackWrapper_ = function(response) {
          args[1](makeMapStats(fixChromeStats_(response)));
        };

        return origGetStats.apply(this, [successCallbackWrapper_,
          arguments[0]]);
      }

      // promise-support
      return new Promise(function(resolve, reject) {
        origGetStats.apply(self, [
          function(response) {
            resolve(makeMapStats(fixChromeStats_(response)));
          }, reject]);
      }).then(successCallback, errorCallback);
    };

    // add promise support -- natively available in Chrome 51
    if (browserDetails.version < 51) {
      ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
          .forEach(function(method) {
            var nativeMethod = window.RTCPeerConnection.prototype[method];
            window.RTCPeerConnection.prototype[method] = function() {
              var args = arguments;
              var self = this;
              var promise = new Promise(function(resolve, reject) {
                nativeMethod.apply(self, [args[0], resolve, reject]);
              });
              if (args.length < 2) {
                return promise;
              }
              return promise.then(function() {
                args[1].apply(null, []);
              },
              function(err) {
                if (args.length >= 3) {
                  args[2].apply(null, [err]);
                }
              });
            };
          });
    }

    // promise support for createOffer and createAnswer. Available (without
    // bugs) since M52: crbug/619289
    if (browserDetails.version < 52) {
      ['createOffer', 'createAnswer'].forEach(function(method) {
        var nativeMethod = window.RTCPeerConnection.prototype[method];
        window.RTCPeerConnection.prototype[method] = function() {
          var self = this;
          if (arguments.length < 1 || (arguments.length === 1 &&
              typeof arguments[0] === 'object')) {
            var opts = arguments.length === 1 ? arguments[0] : undefined;
            return new Promise(function(resolve, reject) {
              nativeMethod.apply(self, [resolve, reject, opts]);
            });
          }
          return nativeMethod.apply(this, arguments);
        };
      });
    }

    // shim implicit creation of RTCSessionDescription/RTCIceCandidate
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
        .forEach(function(method) {
          var nativeMethod = window.RTCPeerConnection.prototype[method];
          window.RTCPeerConnection.prototype[method] = function() {
            arguments[0] = new ((method === 'addIceCandidate') ?
                window.RTCIceCandidate :
                window.RTCSessionDescription)(arguments[0]);
            return nativeMethod.apply(this, arguments);
          };
        });

    // support for addIceCandidate(null or undefined)
    var nativeAddIceCandidate =
        window.RTCPeerConnection.prototype.addIceCandidate;
    window.RTCPeerConnection.prototype.addIceCandidate = function() {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };
  }
};


// Expose public methods.
module.exports = {
  shimMediaStream: chromeShim.shimMediaStream,
  shimOnTrack: chromeShim.shimOnTrack,
  shimAddTrackRemoveTrack: chromeShim.shimAddTrackRemoveTrack,
  shimGetSendersWithDtmf: chromeShim.shimGetSendersWithDtmf,
  shimSourceObject: chromeShim.shimSourceObject,
  shimPeerConnection: chromeShim.shimPeerConnection,
  shimGetUserMedia: require('./getusermedia')
};

},{"../utils.js":11,"./getusermedia":6}],6:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';
var utils = require('../utils.js');
var logging = utils.log;

// Expose public methods.
module.exports = function(window) {
  var browserDetails = utils.detectBrowser(window);
  var navigator = window && window.navigator;

  var constraintsToChrome_ = function(c) {
    if (typeof c !== 'object' || c.mandatory || c.optional) {
      return c;
    }
    var cc = {};
    Object.keys(c).forEach(function(key) {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }
      var r = (typeof c[key] === 'object') ? c[key] : {ideal: c[key]};
      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }
      var oldname_ = function(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return (name === 'deviceId') ? 'sourceId' : name;
      };
      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        var oc = {};
        if (typeof r.ideal === 'number') {
          oc[oldname_('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname_('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname_('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname_('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(function(mix) {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_(mix, key)] = r[mix];
          }
        });
      }
    });
    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }
    return cc;
  };

  var shimConstraints_ = function(constraints, func) {
    constraints = JSON.parse(JSON.stringify(constraints));
    if (constraints && typeof constraints.audio === 'object') {
      var remap = function(obj, a, b) {
        if (a in obj && !(b in obj)) {
          obj[b] = obj[a];
          delete obj[a];
        }
      };
      constraints = JSON.parse(JSON.stringify(constraints));
      remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
      remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
      constraints.audio = constraintsToChrome_(constraints.audio);
    }
    if (constraints && typeof constraints.video === 'object') {
      // Shim facingMode for mobile & surface pro.
      var face = constraints.video.facingMode;
      face = face && ((typeof face === 'object') ? face : {ideal: face});
      var getSupportedFacingModeLies = browserDetails.version < 61;

      if ((face && (face.exact === 'user' || face.exact === 'environment' ||
                    face.ideal === 'user' || face.ideal === 'environment')) &&
          !(navigator.mediaDevices.getSupportedConstraints &&
            navigator.mediaDevices.getSupportedConstraints().facingMode &&
            !getSupportedFacingModeLies)) {
        delete constraints.video.facingMode;
        var matches;
        if (face.exact === 'environment' || face.ideal === 'environment') {
          matches = ['back', 'rear'];
        } else if (face.exact === 'user' || face.ideal === 'user') {
          matches = ['front'];
        }
        if (matches) {
          // Look for matches in label, or use last cam for back (typical).
          return navigator.mediaDevices.enumerateDevices()
          .then(function(devices) {
            devices = devices.filter(function(d) {
              return d.kind === 'videoinput';
            });
            var dev = devices.find(function(d) {
              return matches.some(function(match) {
                return d.label.toLowerCase().indexOf(match) !== -1;
              });
            });
            if (!dev && devices.length && matches.indexOf('back') !== -1) {
              dev = devices[devices.length - 1]; // more likely the back cam
            }
            if (dev) {
              constraints.video.deviceId = face.exact ? {exact: dev.deviceId} :
                                                        {ideal: dev.deviceId};
            }
            constraints.video = constraintsToChrome_(constraints.video);
            logging('chrome: ' + JSON.stringify(constraints));
            return func(constraints);
          });
        }
      }
      constraints.video = constraintsToChrome_(constraints.video);
    }
    logging('chrome: ' + JSON.stringify(constraints));
    return func(constraints);
  };

  var shimError_ = function(e) {
    return {
      name: {
        PermissionDeniedError: 'NotAllowedError',
        InvalidStateError: 'NotReadableError',
        DevicesNotFoundError: 'NotFoundError',
        ConstraintNotSatisfiedError: 'OverconstrainedError',
        TrackStartError: 'NotReadableError',
        MediaDeviceFailedDueToShutdown: 'NotReadableError',
        MediaDeviceKillSwitchOn: 'NotReadableError'
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraintName,
      toString: function() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  var getUserMedia_ = function(constraints, onSuccess, onError) {
    shimConstraints_(constraints, function(c) {
      navigator.webkitGetUserMedia(c, onSuccess, function(e) {
        if (onError) {
          onError(shimError_(e));
        }
      });
    });
  };

  navigator.getUserMedia = getUserMedia_;

  // Returns the result of getUserMedia as a Promise.
  var getUserMediaPromise_ = function(constraints) {
    return new Promise(function(resolve, reject) {
      navigator.getUserMedia(constraints, resolve, reject);
    });
  };

  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {
      getUserMedia: getUserMediaPromise_,
      enumerateDevices: function() {
        return new Promise(function(resolve) {
          var kinds = {audio: 'audioinput', video: 'videoinput'};
          return window.MediaStreamTrack.getSources(function(devices) {
            resolve(devices.map(function(device) {
              return {label: device.label,
                kind: kinds[device.kind],
                deviceId: device.id,
                groupId: ''};
            }));
          });
        });
      },
      getSupportedConstraints: function() {
        return {
          deviceId: true, echoCancellation: true, facingMode: true,
          frameRate: true, height: true, width: true
        };
      }
    };
  }

  // A shim for getUserMedia method on the mediaDevices object.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (!navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
      return getUserMediaPromise_(constraints);
    };
  } else {
    // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
    // function which returns a Promise, it does not accept spec-style
    // constraints.
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(cs) {
      return shimConstraints_(cs, function(c) {
        return origGetUserMedia(c).then(function(stream) {
          if (c.audio && !stream.getAudioTracks().length ||
              c.video && !stream.getVideoTracks().length) {
            stream.getTracks().forEach(function(track) {
              track.stop();
            });
            throw new DOMException('', 'NotFoundError');
          }
          return stream;
        }, function(e) {
          return Promise.reject(shimError_(e));
        });
      });
    };
  }

  // Dummy devicechange event methods.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (typeof navigator.mediaDevices.addEventListener === 'undefined') {
    navigator.mediaDevices.addEventListener = function() {
      logging('Dummy mediaDevices.addEventListener called.');
    };
  }
  if (typeof navigator.mediaDevices.removeEventListener === 'undefined') {
    navigator.mediaDevices.removeEventListener = function() {
      logging('Dummy mediaDevices.removeEventListener called.');
    };
  }
};

},{"../utils.js":11}],7:[function(require,module,exports){
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';

var SDPUtils = require('sdp');
var utils = require('./utils');

// Wraps the peerconnection event eventNameToWrap in a function
// which returns the modified event object.
function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
  if (!window.RTCPeerConnection) {
    return;
  }
  var proto = window.RTCPeerConnection.prototype;
  var nativeAddEventListener = proto.addEventListener;
  proto.addEventListener = function(nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap) {
      return nativeAddEventListener.apply(this, arguments);
    }
    var wrappedCallback = function(e) {
      cb(wrapper(e));
    };
    this._eventMap = this._eventMap || {};
    this._eventMap[cb] = wrappedCallback;
    return nativeAddEventListener.apply(this, [nativeEventName,
      wrappedCallback]);
  };

  var nativeRemoveEventListener = proto.removeEventListener;
  proto.removeEventListener = function(nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap || !this._eventMap
        || !this._eventMap[cb]) {
      return nativeRemoveEventListener.apply(this, arguments);
    }
    var unwrappedCb = this._eventMap[cb];
    delete this._eventMap[cb];
    return nativeRemoveEventListener.apply(this, [nativeEventName,
      unwrappedCb]);
  };

  Object.defineProperty(proto, 'on' + eventNameToWrap, {
    get: function() {
      return this['_on' + eventNameToWrap];
    },
    set: function(cb) {
      if (this['_on' + eventNameToWrap]) {
        this.removeEventListener(eventNameToWrap,
            this['_on' + eventNameToWrap]);
        delete this['_on' + eventNameToWrap];
      }
      if (cb) {
        this.addEventListener(eventNameToWrap,
            this['_on' + eventNameToWrap] = cb);
      }
    }
  });
}

module.exports = {
  shimRTCIceCandidate: function(window) {
    // foundation is arbitrarily chosen as an indicator for full support for
    // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
    if (window.RTCIceCandidate && 'foundation' in
        window.RTCIceCandidate.prototype) {
      return;
    }

    var NativeRTCIceCandidate = window.RTCIceCandidate;
    window.RTCIceCandidate = function(args) {
      // Remove the a= which shouldn't be part of the candidate string.
      if (typeof args === 'object' && args.candidate &&
          args.candidate.indexOf('a=') === 0) {
        args = JSON.parse(JSON.stringify(args));
        args.candidate = args.candidate.substr(2);
      }

      // Augment the native candidate with the parsed fields.
      var nativeCandidate = new NativeRTCIceCandidate(args);
      var parsedCandidate = SDPUtils.parseCandidate(args.candidate);
      var augmentedCandidate = Object.assign(nativeCandidate,
          parsedCandidate);

      // Add a serializer that does not serialize the extra attributes.
      augmentedCandidate.toJSON = function() {
        return {
          candidate: augmentedCandidate.candidate,
          sdpMid: augmentedCandidate.sdpMid,
          sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
          usernameFragment: augmentedCandidate.usernameFragment,
        };
      };
      return augmentedCandidate;
    };

    // Hook up the augmented candidate in onicecandidate and
    // addEventListener('icecandidate', ...)
    wrapPeerConnectionEvent(window, 'icecandidate', function(e) {
      if (e.candidate) {
        Object.defineProperty(e, 'candidate', {
          value: new window.RTCIceCandidate(e.candidate),
          writable: 'false'
        });
      }
      return e;
    });
  },

  // shimCreateObjectURL must be called before shimSourceObject to avoid loop.

  shimCreateObjectURL: function(window) {
    var URL = window && window.URL;

    if (!(typeof window === 'object' && window.HTMLMediaElement &&
          'srcObject' in window.HTMLMediaElement.prototype &&
        URL.createObjectURL && URL.revokeObjectURL)) {
      // Only shim CreateObjectURL using srcObject if srcObject exists.
      return undefined;
    }

    var nativeCreateObjectURL = URL.createObjectURL.bind(URL);
    var nativeRevokeObjectURL = URL.revokeObjectURL.bind(URL);
    var streams = new Map(), newId = 0;

    URL.createObjectURL = function(stream) {
      if ('getTracks' in stream) {
        var url = 'polyblob:' + (++newId);
        streams.set(url, stream);
        utils.deprecated('URL.createObjectURL(stream)',
            'elem.srcObject = stream');
        return url;
      }
      return nativeCreateObjectURL(stream);
    };
    URL.revokeObjectURL = function(url) {
      nativeRevokeObjectURL(url);
      streams.delete(url);
    };

    var dsc = Object.getOwnPropertyDescriptor(window.HTMLMediaElement.prototype,
                                              'src');
    Object.defineProperty(window.HTMLMediaElement.prototype, 'src', {
      get: function() {
        return dsc.get.apply(this);
      },
      set: function(url) {
        this.srcObject = streams.get(url) || null;
        return dsc.set.apply(this, [url]);
      }
    });

    var nativeSetAttribute = window.HTMLMediaElement.prototype.setAttribute;
    window.HTMLMediaElement.prototype.setAttribute = function() {
      if (arguments.length === 2 &&
          ('' + arguments[0]).toLowerCase() === 'src') {
        this.srcObject = streams.get(arguments[1]) || null;
      }
      return nativeSetAttribute.apply(this, arguments);
    };
  }
};

},{"./utils":11,"sdp":2}],8:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';

var utils = require('../utils');

var firefoxShim = {
  shimOnTrack: function(window) {
    if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
        window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
        get: function() {
          return this._ontrack;
        },
        set: function(f) {
          if (this._ontrack) {
            this.removeEventListener('track', this._ontrack);
            this.removeEventListener('addstream', this._ontrackpoly);
          }
          this.addEventListener('track', this._ontrack = f);
          this.addEventListener('addstream', this._ontrackpoly = function(e) {
            e.stream.getTracks().forEach(function(track) {
              var event = new Event('track');
              event.track = track;
              event.receiver = {track: track};
              event.transceiver = {receiver: event.receiver};
              event.streams = [e.stream];
              this.dispatchEvent(event);
            }.bind(this));
          }.bind(this));
        }
      });
    }
    if (typeof window === 'object' && window.RTCTrackEvent &&
        ('receiver' in window.RTCTrackEvent.prototype) &&
        !('transceiver' in window.RTCTrackEvent.prototype)) {
      Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
        get: function() {
          return {receiver: this.receiver};
        }
      });
    }
  },

  shimSourceObject: function(window) {
    // Firefox has supported mozSrcObject since FF22, unprefixed in 42.
    if (typeof window === 'object') {
      if (window.HTMLMediaElement &&
        !('srcObject' in window.HTMLMediaElement.prototype)) {
        // Shim the srcObject property, once, when HTMLMediaElement is found.
        Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
          get: function() {
            return this.mozSrcObject;
          },
          set: function(stream) {
            this.mozSrcObject = stream;
          }
        });
      }
    }
  },

  shimPeerConnection: function(window) {
    var browserDetails = utils.detectBrowser(window);

    if (typeof window !== 'object' || !(window.RTCPeerConnection ||
        window.mozRTCPeerConnection)) {
      return; // probably media.peerconnection.enabled=false in about:config
    }
    // The RTCPeerConnection object.
    if (!window.RTCPeerConnection) {
      window.RTCPeerConnection = function(pcConfig, pcConstraints) {
        if (browserDetails.version < 38) {
          // .urls is not supported in FF < 38.
          // create RTCIceServers with a single url.
          if (pcConfig && pcConfig.iceServers) {
            var newIceServers = [];
            for (var i = 0; i < pcConfig.iceServers.length; i++) {
              var server = pcConfig.iceServers[i];
              if (server.hasOwnProperty('urls')) {
                for (var j = 0; j < server.urls.length; j++) {
                  var newServer = {
                    url: server.urls[j]
                  };
                  if (server.urls[j].indexOf('turn') === 0) {
                    newServer.username = server.username;
                    newServer.credential = server.credential;
                  }
                  newIceServers.push(newServer);
                }
              } else {
                newIceServers.push(pcConfig.iceServers[i]);
              }
            }
            pcConfig.iceServers = newIceServers;
          }
        }
        return new window.mozRTCPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype =
          window.mozRTCPeerConnection.prototype;

      // wrap static methods. Currently just generateCertificate.
      if (window.mozRTCPeerConnection.generateCertificate) {
        Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
          get: function() {
            return window.mozRTCPeerConnection.generateCertificate;
          }
        });
      }

      window.RTCSessionDescription = window.mozRTCSessionDescription;
      window.RTCIceCandidate = window.mozRTCIceCandidate;
    }

    // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
        .forEach(function(method) {
          var nativeMethod = window.RTCPeerConnection.prototype[method];
          window.RTCPeerConnection.prototype[method] = function() {
            arguments[0] = new ((method === 'addIceCandidate') ?
                window.RTCIceCandidate :
                window.RTCSessionDescription)(arguments[0]);
            return nativeMethod.apply(this, arguments);
          };
        });

    // support for addIceCandidate(null or undefined)
    var nativeAddIceCandidate =
        window.RTCPeerConnection.prototype.addIceCandidate;
    window.RTCPeerConnection.prototype.addIceCandidate = function() {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };

    // shim getStats with maplike support
    var makeMapStats = function(stats) {
      var map = new Map();
      Object.keys(stats).forEach(function(key) {
        map.set(key, stats[key]);
        map[key] = stats[key];
      });
      return map;
    };

    var modernStatsTypes = {
      inboundrtp: 'inbound-rtp',
      outboundrtp: 'outbound-rtp',
      candidatepair: 'candidate-pair',
      localcandidate: 'local-candidate',
      remotecandidate: 'remote-candidate'
    };

    var nativeGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function(
      selector,
      onSucc,
      onErr
    ) {
      return nativeGetStats.apply(this, [selector || null])
        .then(function(stats) {
          if (browserDetails.version < 48) {
            stats = makeMapStats(stats);
          }
          if (browserDetails.version < 53 && !onSucc) {
            // Shim only promise getStats with spec-hyphens in type names
            // Leave callback version alone; misc old uses of forEach before Map
            try {
              stats.forEach(function(stat) {
                stat.type = modernStatsTypes[stat.type] || stat.type;
              });
            } catch (e) {
              if (e.name !== 'TypeError') {
                throw e;
              }
              // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
              stats.forEach(function(stat, i) {
                stats.set(i, Object.assign({}, stat, {
                  type: modernStatsTypes[stat.type] || stat.type
                }));
              });
            }
          }
          return stats;
        })
        .then(onSucc, onErr);
    };
  }
};

// Expose public methods.
module.exports = {
  shimOnTrack: firefoxShim.shimOnTrack,
  shimSourceObject: firefoxShim.shimSourceObject,
  shimPeerConnection: firefoxShim.shimPeerConnection,
  shimGetUserMedia: require('./getusermedia')
};

},{"../utils":11,"./getusermedia":9}],9:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';

var utils = require('../utils');
var logging = utils.log;

// Expose public methods.
module.exports = function(window) {
  var browserDetails = utils.detectBrowser(window);
  var navigator = window && window.navigator;
  var MediaStreamTrack = window && window.MediaStreamTrack;

  var shimError_ = function(e) {
    return {
      name: {
        InternalError: 'NotReadableError',
        NotSupportedError: 'TypeError',
        PermissionDeniedError: 'NotAllowedError',
        SecurityError: 'NotAllowedError'
      }[e.name] || e.name,
      message: {
        'The operation is insecure.': 'The request is not allowed by the ' +
        'user agent or the platform in the current context.'
      }[e.message] || e.message,
      constraint: e.constraint,
      toString: function() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  // getUserMedia constraints shim.
  var getUserMedia_ = function(constraints, onSuccess, onError) {
    var constraintsToFF37_ = function(c) {
      if (typeof c !== 'object' || c.require) {
        return c;
      }
      var require = [];
      Object.keys(c).forEach(function(key) {
        if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
          return;
        }
        var r = c[key] = (typeof c[key] === 'object') ?
            c[key] : {ideal: c[key]};
        if (r.min !== undefined ||
            r.max !== undefined || r.exact !== undefined) {
          require.push(key);
        }
        if (r.exact !== undefined) {
          if (typeof r.exact === 'number') {
            r. min = r.max = r.exact;
          } else {
            c[key] = r.exact;
          }
          delete r.exact;
        }
        if (r.ideal !== undefined) {
          c.advanced = c.advanced || [];
          var oc = {};
          if (typeof r.ideal === 'number') {
            oc[key] = {min: r.ideal, max: r.ideal};
          } else {
            oc[key] = r.ideal;
          }
          c.advanced.push(oc);
          delete r.ideal;
          if (!Object.keys(r).length) {
            delete c[key];
          }
        }
      });
      if (require.length) {
        c.require = require;
      }
      return c;
    };
    constraints = JSON.parse(JSON.stringify(constraints));
    if (browserDetails.version < 38) {
      logging('spec: ' + JSON.stringify(constraints));
      if (constraints.audio) {
        constraints.audio = constraintsToFF37_(constraints.audio);
      }
      if (constraints.video) {
        constraints.video = constraintsToFF37_(constraints.video);
      }
      logging('ff37: ' + JSON.stringify(constraints));
    }
    return navigator.mozGetUserMedia(constraints, onSuccess, function(e) {
      onError(shimError_(e));
    });
  };

  // Returns the result of getUserMedia as a Promise.
  var getUserMediaPromise_ = function(constraints) {
    return new Promise(function(resolve, reject) {
      getUserMedia_(constraints, resolve, reject);
    });
  };

  // Shim for mediaDevices on older versions.
  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {getUserMedia: getUserMediaPromise_,
      addEventListener: function() { },
      removeEventListener: function() { }
    };
  }
  navigator.mediaDevices.enumerateDevices =
      navigator.mediaDevices.enumerateDevices || function() {
        return new Promise(function(resolve) {
          var infos = [
            {kind: 'audioinput', deviceId: 'default', label: '', groupId: ''},
            {kind: 'videoinput', deviceId: 'default', label: '', groupId: ''}
          ];
          resolve(infos);
        });
      };

  if (browserDetails.version < 41) {
    // Work around http://bugzil.la/1169665
    var orgEnumerateDevices =
        navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
    navigator.mediaDevices.enumerateDevices = function() {
      return orgEnumerateDevices().then(undefined, function(e) {
        if (e.name === 'NotFoundError') {
          return [];
        }
        throw e;
      });
    };
  }
  if (browserDetails.version < 49) {
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      return origGetUserMedia(c).then(function(stream) {
        // Work around https://bugzil.la/802326
        if (c.audio && !stream.getAudioTracks().length ||
            c.video && !stream.getVideoTracks().length) {
          stream.getTracks().forEach(function(track) {
            track.stop();
          });
          throw new DOMException('The object can not be found here.',
                                 'NotFoundError');
        }
        return stream;
      }, function(e) {
        return Promise.reject(shimError_(e));
      });
    };
  }
  if (!(browserDetails.version > 55 &&
      'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
    var remap = function(obj, a, b) {
      if (a in obj && !(b in obj)) {
        obj[b] = obj[a];
        delete obj[a];
      }
    };

    var nativeGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      if (typeof c === 'object' && typeof c.audio === 'object') {
        c = JSON.parse(JSON.stringify(c));
        remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
        remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
      }
      return nativeGetUserMedia(c);
    };

    if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
      var nativeGetSettings = MediaStreamTrack.prototype.getSettings;
      MediaStreamTrack.prototype.getSettings = function() {
        var obj = nativeGetSettings.apply(this, arguments);
        remap(obj, 'mozAutoGainControl', 'autoGainControl');
        remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
        return obj;
      };
    }

    if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
      var nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
      MediaStreamTrack.prototype.applyConstraints = function(c) {
        if (this.kind === 'audio' && typeof c === 'object') {
          c = JSON.parse(JSON.stringify(c));
          remap(c, 'autoGainControl', 'mozAutoGainControl');
          remap(c, 'noiseSuppression', 'mozNoiseSuppression');
        }
        return nativeApplyConstraints.apply(this, [c]);
      };
    }
  }
  navigator.getUserMedia = function(constraints, onSuccess, onError) {
    if (browserDetails.version < 44) {
      return getUserMedia_(constraints, onSuccess, onError);
    }
    // Replace Firefox 44+'s deprecation warning with unprefixed version.
    utils.deprecated('navigator.getUserMedia',
        'navigator.mediaDevices.getUserMedia');
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };
};

},{"../utils":11}],10:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
'use strict';
var utils = require('../utils');

var safariShim = {
  // TODO: DrAlex, should be here, double check against LayoutTests

  // TODO: once the back-end for the mac port is done, add.
  // TODO: check for webkitGTK+
  // shimPeerConnection: function() { },

  shimLocalStreamsAPI: function(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) {
      return;
    }
    if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
      window.RTCPeerConnection.prototype.getLocalStreams = function() {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        return this._localStreams;
      };
    }
    if (!('getStreamById' in window.RTCPeerConnection.prototype)) {
      window.RTCPeerConnection.prototype.getStreamById = function(id) {
        var result = null;
        if (this._localStreams) {
          this._localStreams.forEach(function(stream) {
            if (stream.id === id) {
              result = stream;
            }
          });
        }
        if (this._remoteStreams) {
          this._remoteStreams.forEach(function(stream) {
            if (stream.id === id) {
              result = stream;
            }
          });
        }
        return result;
      };
    }
    if (!('addStream' in window.RTCPeerConnection.prototype)) {
      var _addTrack = window.RTCPeerConnection.prototype.addTrack;
      window.RTCPeerConnection.prototype.addStream = function(stream) {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        if (this._localStreams.indexOf(stream) === -1) {
          this._localStreams.push(stream);
        }
        var self = this;
        stream.getTracks().forEach(function(track) {
          _addTrack.call(self, track, stream);
        });
      };

      window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
        if (stream) {
          if (!this._localStreams) {
            this._localStreams = [stream];
          } else if (this._localStreams.indexOf(stream) === -1) {
            this._localStreams.push(stream);
          }
        }
        _addTrack.call(this, track, stream);
      };
    }
    if (!('removeStream' in window.RTCPeerConnection.prototype)) {
      window.RTCPeerConnection.prototype.removeStream = function(stream) {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        var index = this._localStreams.indexOf(stream);
        if (index === -1) {
          return;
        }
        this._localStreams.splice(index, 1);
        var self = this;
        var tracks = stream.getTracks();
        this.getSenders().forEach(function(sender) {
          if (tracks.indexOf(sender.track) !== -1) {
            self.removeTrack(sender);
          }
        });
      };
    }
  },
  shimRemoteStreamsAPI: function(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) {
      return;
    }
    if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
      window.RTCPeerConnection.prototype.getRemoteStreams = function() {
        return this._remoteStreams ? this._remoteStreams : [];
      };
    }
    if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
        get: function() {
          return this._onaddstream;
        },
        set: function(f) {
          if (this._onaddstream) {
            this.removeEventListener('addstream', this._onaddstream);
            this.removeEventListener('track', this._onaddstreampoly);
          }
          this.addEventListener('addstream', this._onaddstream = f);
          this.addEventListener('track', this._onaddstreampoly = function(e) {
            var stream = e.streams[0];
            if (!this._remoteStreams) {
              this._remoteStreams = [];
            }
            if (this._remoteStreams.indexOf(stream) >= 0) {
              return;
            }
            this._remoteStreams.push(stream);
            var event = new Event('addstream');
            event.stream = e.streams[0];
            this.dispatchEvent(event);
          }.bind(this));
        }
      });
    }
  },
  shimCallbacksAPI: function(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) {
      return;
    }
    var prototype = window.RTCPeerConnection.prototype;
    var createOffer = prototype.createOffer;
    var createAnswer = prototype.createAnswer;
    var setLocalDescription = prototype.setLocalDescription;
    var setRemoteDescription = prototype.setRemoteDescription;
    var addIceCandidate = prototype.addIceCandidate;

    prototype.createOffer = function(successCallback, failureCallback) {
      var options = (arguments.length >= 2) ? arguments[2] : arguments[0];
      var promise = createOffer.apply(this, [options]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };

    prototype.createAnswer = function(successCallback, failureCallback) {
      var options = (arguments.length >= 2) ? arguments[2] : arguments[0];
      var promise = createAnswer.apply(this, [options]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };

    var withCallback = function(description, successCallback, failureCallback) {
      var promise = setLocalDescription.apply(this, [description]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.setLocalDescription = withCallback;

    withCallback = function(description, successCallback, failureCallback) {
      var promise = setRemoteDescription.apply(this, [description]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.setRemoteDescription = withCallback;

    withCallback = function(candidate, successCallback, failureCallback) {
      var promise = addIceCandidate.apply(this, [candidate]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.addIceCandidate = withCallback;
  },
  shimGetUserMedia: function(window) {
    var navigator = window && window.navigator;

    if (!navigator.getUserMedia) {
      if (navigator.webkitGetUserMedia) {
        navigator.getUserMedia = navigator.webkitGetUserMedia.bind(navigator);
      } else if (navigator.mediaDevices &&
          navigator.mediaDevices.getUserMedia) {
        navigator.getUserMedia = function(constraints, cb, errcb) {
          navigator.mediaDevices.getUserMedia(constraints)
          .then(cb, errcb);
        }.bind(navigator);
      }
    }
  },
  shimRTCIceServerUrls: function(window) {
    // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
    var OrigPeerConnection = window.RTCPeerConnection;
    window.RTCPeerConnection = function(pcConfig, pcConstraints) {
      if (pcConfig && pcConfig.iceServers) {
        var newIceServers = [];
        for (var i = 0; i < pcConfig.iceServers.length; i++) {
          var server = pcConfig.iceServers[i];
          if (!server.hasOwnProperty('urls') &&
              server.hasOwnProperty('url')) {
            utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
            server = JSON.parse(JSON.stringify(server));
            server.urls = server.url;
            delete server.url;
            newIceServers.push(server);
          } else {
            newIceServers.push(pcConfig.iceServers[i]);
          }
        }
        pcConfig.iceServers = newIceServers;
      }
      return new OrigPeerConnection(pcConfig, pcConstraints);
    };
    window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
    // wrap static methods. Currently just generateCertificate.
    if ('generateCertificate' in window.RTCPeerConnection) {
      Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
        get: function() {
          return OrigPeerConnection.generateCertificate;
        }
      });
    }
  },
  shimTrackEventTransceiver: function(window) {
    // Add event.transceiver member over deprecated event.receiver
    if (typeof window === 'object' && window.RTCPeerConnection &&
        ('receiver' in window.RTCTrackEvent.prototype) &&
        // can't check 'transceiver' in window.RTCTrackEvent.prototype, as it is
        // defined for some reason even when window.RTCTransceiver is not.
        !window.RTCTransceiver) {
      Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
        get: function() {
          return {receiver: this.receiver};
        }
      });
    }
  }
};

// Expose public methods.
module.exports = {
  shimCallbacksAPI: safariShim.shimCallbacksAPI,
  shimLocalStreamsAPI: safariShim.shimLocalStreamsAPI,
  shimRemoteStreamsAPI: safariShim.shimRemoteStreamsAPI,
  shimGetUserMedia: safariShim.shimGetUserMedia,
  shimRTCIceServerUrls: safariShim.shimRTCIceServerUrls,
  shimTrackEventTransceiver: safariShim.shimTrackEventTransceiver
  // TODO
  // shimPeerConnection: safariShim.shimPeerConnection
};

},{"../utils":11}],11:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';

var logDisabled_ = true;
var deprecationWarnings_ = true;

// Utility methods.
var utils = {
  disableLog: function(bool) {
    if (typeof bool !== 'boolean') {
      return new Error('Argument type: ' + typeof bool +
          '. Please use a boolean.');
    }
    logDisabled_ = bool;
    return (bool) ? 'adapter.js logging disabled' :
        'adapter.js logging enabled';
  },

  /**
   * Disable or enable deprecation warnings
   * @param {!boolean} bool set to true to disable warnings.
   */
  disableWarnings: function(bool) {
    if (typeof bool !== 'boolean') {
      return new Error('Argument type: ' + typeof bool +
          '. Please use a boolean.');
    }
    deprecationWarnings_ = !bool;
    return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
  },

  log: function() {
    if (typeof window === 'object') {
      if (logDisabled_) {
        return;
      }
      if (typeof console !== 'undefined' && typeof console.log === 'function') {
        console.log.apply(console, arguments);
      }
    }
  },

  /**
   * Shows a deprecation warning suggesting the modern and spec-compatible API.
   */
  deprecated: function(oldMethod, newMethod) {
    if (!deprecationWarnings_) {
      return;
    }
    console.warn(oldMethod + ' is deprecated, please use ' + newMethod +
        ' instead.');
  },

  /**
   * Extract browser version out of the provided user agent string.
   *
   * @param {!string} uastring userAgent string.
   * @param {!string} expr Regular expression used as match criteria.
   * @param {!number} pos position in the version string to be returned.
   * @return {!number} browser version.
   */
  extractVersion: function(uastring, expr, pos) {
    var match = uastring.match(expr);
    return match && match.length >= pos && parseInt(match[pos], 10);
  },

  /**
   * Browser detector.
   *
   * @return {object} result containing browser and version
   *     properties.
   */
  detectBrowser: function(window) {
    var navigator = window && window.navigator;

    // Returned result object.
    var result = {};
    result.browser = null;
    result.version = null;

    // Fail early if it's not a browser
    if (typeof window === 'undefined' || !window.navigator) {
      result.browser = 'Not a browser.';
      return result;
    }

    // Firefox.
    if (navigator.mozGetUserMedia) {
      result.browser = 'firefox';
      result.version = this.extractVersion(navigator.userAgent,
          /Firefox\/(\d+)\./, 1);
    } else if (navigator.webkitGetUserMedia) {
      // Chrome, Chromium, Webview, Opera, all use the chrome shim for now
      if (window.webkitRTCPeerConnection) {
        result.browser = 'chrome';
        result.version = this.extractVersion(navigator.userAgent,
          /Chrom(e|ium)\/(\d+)\./, 2);
      } else { // Safari (in an unpublished version) or unknown webkit-based.
        if (navigator.userAgent.match(/Version\/(\d+).(\d+)/)) {
          result.browser = 'safari';
          result.version = this.extractVersion(navigator.userAgent,
            /AppleWebKit\/(\d+)\./, 1);
        } else { // unknown webkit-based browser.
          result.browser = 'Unsupported webkit-based browser ' +
              'with GUM support but no WebRTC support.';
          return result;
        }
      }
    } else if (navigator.mediaDevices &&
        navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) { // Edge.
      result.browser = 'edge';
      result.version = this.extractVersion(navigator.userAgent,
          /Edge\/(\d+).(\d+)$/, 2);
    } else if (navigator.mediaDevices &&
        navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
        // Safari, with webkitGetUserMedia removed.
      result.browser = 'safari';
      result.version = this.extractVersion(navigator.userAgent,
          /AppleWebKit\/(\d+)\./, 1);
    } else { // Default fallthrough: not supported.
      result.browser = 'Not a supported browser.';
      return result;
    }

    return result;
  },

};

// Export.
module.exports = {
  log: utils.log,
  deprecated: utils.deprecated,
  disableLog: utils.disableLog,
  disableWarnings: utils.disableWarnings,
  extractVersion: utils.extractVersion,
  shimCreateObjectURL: utils.shimCreateObjectURL,
  detectBrowser: utils.detectBrowser.bind(utils)
};

},{}]},{},[3])(3)
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(6),
    __webpack_require__(7)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (adapter, exportGlobal) {
    adapter.onLoaded = function () {
        exportGlobal(adapter);
    };

    adapter.onLoaded();

    return adapter;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(5),
    __webpack_require__(19)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert, observable, WaitFor, PhenixVideo) {
    'use strict';

    var log = function () {
        console.log.apply(console, arguments);
    } || function () {
        };

    var logError = function () {
        console.error.apply(console, arguments);
    } || log;

    function PhenixRTC() {
        var that = this;

        this._root = createInvisibleParentNode();
        this._version = '?';

        var ready = function ready(success) {
            that._loaded = true;
            that._enabled = success === true;
            that._version = that._phenixRTC.phenixVersion || '?.?.?.?';

            if (success) {
                log('Phenix RTC ' + that._version);
            } else {
                log('No Phenix RTC');
            }

            if (that._onReady) {
                that._onReady(that._enabled);
            }
        };

        try {
            this._phenixRTC = createPhenixRTC(this._root);

            this._phenixRTC.onunload = function () {
                that._loaded = false;
            };

            var waitFor = new WaitFor();

            waitFor.waitForReady(this._phenixRTC, ready);
        } catch (e) {
            logError('Error while loading Phenix RTC' + e);
        }
    }

    PhenixRTC.prototype.onReady = function (callback) {
        var that = this;

        if (this._loaded) {
            setTimeout(function () {
                callback(that._enabled);
            }, 1);
        } else {
            this._onReady = callback;
        }
    };

    PhenixRTC.prototype.onLoaded = function (callback) {
        this._onLoaded = callback;
    };

    PhenixRTC.prototype.isLoaded = function () {
        return this._loaded === true;
    };

    // Static function
    PhenixRTC.isSupported = function () {
        if (navigator.plugins) {
            var plugins = navigator.plugins;

            for (var i = 0; i < plugins.length; i++) {
                if (plugins[i].name.indexOf('PhenixRTC') >= 0) {
                    return true;
                }
            }
        }

        if (navigator.userAgent.match(/MSIE/) || navigator.userAgent.match(/Trident/)) {
            try {
                new window.ActiveXObject('PhenixP2P.RTC');

                return true;
            } catch (e) {
                return false;
            }
        }

        return false;
    };

    PhenixRTC.prototype.isEnabled = function () {
        verifyPhenixRTCInDOM.call(this);

        return this._phenixRTC && this._phenixRTC.phenixVersion !== undefined;
    };

    PhenixRTC.prototype.getVersion = function () {
        verifyPhenixRTCInDOM.call(this);

        return this._version;
    };

    PhenixRTC.prototype.getRTCPeerConnectionConstructor = function () {
        verifyPhenixRTCInDOM.call(this);

        return wrapPhenixClass(this._phenixRTC.RTCPeerConnection);
    };

    PhenixRTC.prototype.getRTCSessionDescriptionConstructor = function () {
        verifyPhenixRTCInDOM.call(this);

        return wrapPhenixClass(this._phenixRTC.RTCSessionDescription);
    };

    PhenixRTC.prototype.getRTCIceCandidateConstructor = function () {
        verifyPhenixRTCInDOM.call(this);

        return wrapPhenixClass(this._phenixRTC.RTCIceCandidate);
    };

    PhenixRTC.prototype.getSourcesDelegate = function () {
        var that = this;

        return function (sourcesInfoCallback) {
            verifyPhenixRTCInDOM.call(that);

            return that._phenixRTC.getSources(sourcesInfoCallback);
        };
    };

    PhenixRTC.prototype.getUserMediaDelegate = function () {
        var that = this;

        return function (constraints, successCallback, failureCallback) {
            verifyPhenixRTCInDOM.call(that);

            return that._phenixRTC.getUserMedia(constraints, successCallback, failureCallback);
        };
    };

    PhenixRTC.prototype.getStatsDelegate = function () {
        return function (pc, track, successCallback, errorCallback) {
            return pc.getStats(track, successCallback, errorCallback);
        };
    };

    PhenixRTC.prototype.attachMediaStream = function (element, stream) {
        verifyPhenixRTCInDOM.call(this);

        return attachMediaStream.call(this, element, stream);
    };

    PhenixRTC.prototype.reattachMediaStream = function (to, from) {
        verifyPhenixRTCInDOM.call(this);

        return this.attachMediaStream(to, from.src);
    };

    function verifyPhenixRTCInDOM() {
        if (this._root && document.getElementById('phenixRTC') !== this._root) {
            document.body.appendChild(this._root);

            if (this._onLoaded) {
                this._onLoaded.call(this);
            }
        }
    }

    function createInvisibleParentNode() {
        var node = document.createElement('div');

        node.id = 'phenixRTC';
        node.style.cssText = 'visibility:hidden !important;width:0px !important;height:0px !important;' +
            'margin:0px !important;padding:0px !important;' +
            'border-style:none !important;border-width:0px !important;' +
            'max-width:0px !important;max-height:0px !important;outline:none !important';

        document.body.appendChild(node);

        return node;
    }

    function createPhenixRTC(parent) {
        var phenixRTC = document.createElement('object');

        phenixRTC.type = 'application/x-phenix-rtc';

        parent.appendChild(phenixRTC);

        return phenixRTC;
    }

    function attachMediaStream(element, stream) {
        if (!element) {
            throw new Error('Can not attach a stream to a undefined element');
        }

        if (element.phenixVersion) {
            // It's one of ours
            element.src = stream;

            return element;
        }

        var phenixVideo = new PhenixVideo(element, stream);

        phenixVideo.getElement().phenixPresenter = phenixVideo;

        return phenixVideo.getElement();
    }

    function wrapPhenixClass(PhenixClass) {
        var WrappedPhenixClass = function WrappedPhenixClass() {
            var phenixClass = null;

            // Phenix Classes do not have prototype, bind, apply, call, etc.
            switch (arguments.length) {
            case 0:
                phenixClass = new PhenixClass();

                break;
            case 1:
                phenixClass = new PhenixClass(arguments[0]);

                break;
            case 2:
                phenixClass = new PhenixClass(arguments[0], arguments[1]);

                break;
            case 3:
                phenixClass = new PhenixClass(arguments[0], arguments[1], arguments[2]);

                break;
            case 4:
                phenixClass = new PhenixClass(arguments[0], arguments[1], arguments[2], arguments[3]);

                break;
            case 5:
                phenixClass = new PhenixClass(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);

                break;
            default:
                throw new Error('Unsupported number of arguments in Phenix Object Constructor');
            }

            phenixClass.phenixAddEventListener = _.bind(addEventListener, phenixClass);
            phenixClass.phenixRemoveEventListener = _.bind(removeEventListener, phenixClass);

            return phenixClass;
        };

        _.forOwn(PhenixClass, function(value, key) {
            WrappedPhenixClass[key] = value;
        });

        return WrappedPhenixClass;
    }

    /**
     * All modern browsers including IE9+ support addEventListener
     * IE8 and less support attachEvent(...)
     * Phenix supports proprietary API to register events
     */
    function addEventListener(name, listener/* , useCapture */) {
        assert.stringNotEmpty(name, 'name');
        assert.isFunction(listener, 'listener');

        setPhenixEventListener.call(this, name);
        addObservableEventListener.call(this, name, listener);
    }

    function removeEventListener(name, listener/* , useCapture */) {
        removeObservableEventListener.call(this, name, listener);
    }

    function setPhenixEventListener(eventName) {
        if (this.events && this.events[eventName]) {
            return;
        }

        if (!this.events) {
            this.events = {};
        }

        var events = this.events;

        events[eventName] = {
            observable: new observable.Observable().extend({timeout: 0}),
            subscription: null,
            listeners: []
        };

        this.phenixSetEventListener(eventName, _.bind(events[eventName].observable.setValue, events[eventName].observable));

        events[eventName].subscription = events[eventName].observable.subscribe(function(event) {
            var observableEvent = events[eventName];
            var eventListeners = observableEvent.listeners;

            _.forEach(eventListeners, function(eventListener) {
                eventListener(event);
            });
        });
    }

    function addObservableEventListener(eventName, listener) {
        if (!this.events || !this.events[eventName]) {
            throw new Error('No event observable for event: ' + name);
        }

        this.events[eventName].listeners.push(listener);
    }

    function removeObservableEventListener(eventName, listener) {
        if (!this.events || !this.events.events[eventName]) {
            return;
        }

        this.events[eventName].listeners = _.filter(this.events[eventName].listeners, function(callback) {
            return listener !== callback;
        });
    }

    return PhenixRTC;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(5)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (WaitFor) {
    'use strict';

    var log = function () {
        console.log.apply(console, arguments);
    } || function () {
        };

    var logError = function () {
        console.error.apply(console, arguments);
    } || log;

    function PhenixVideo(ghost, stream) {
        var that = this;

        this._ghost = ghost;
        this._stream = stream;
        this._events = {};

        var loaded = function loaded(success) {
            that._loaded = true;
            that._enabled = success === true;

            if (success) {
                initialize.call(that);
            } else {
                logError('Failed to create Phenix video element');
            }

            if (that._onReady) {
                that._onReady(that._enabled);
            }
        };

        try {
            this._video = createPhenixVideoElement();
            this._video.className = this._ghost.className;
            this._video.height = this._ghost.height;
            this._video.width = this._ghost.width;

            this._ghost.style.cssText = 'visibility:hidden !important;width:0px !important;height:0px !important;' +
                'margin:0px !important;padding:0px !important;' +
                'border-style:none !important;border-width:0px !important;' +
                'max-width:0px !important;max-height:0px !important;outline:none !important';

            this._video.onunload = function () {
                that._loaded = false;
            };

            observeInsertion.call(this);

            if (!document.body || !document.body.contains) {
                log('document.body.contains is not supported');
            }

            if (document.body && document.body.contains && document.body.contains(this._ghost)) {
                this._ghost.parentNode.replaceChild(this._video, this._ghost);
            }

            var waitFor = new WaitFor();

            waitFor.waitForReady(this._video, loaded);
        } catch (e) {
            logError('Error while loading Phenix RTC' + e);
            loaded(false);
        }
    }

    PhenixVideo.prototype.hookUpEvents = function () {
        var that = this;
        var ghost = this._ghost;

        this.addEventListener('error', function () {
            dispatchEvent(ghost, 'error');
        });
        this.addEventListener('mute', function () {
            ghost.muted = that._video.muted;
            dispatchEvent(ghost, 'mute');
        });
        this.addEventListener('unmute', function () {
            ghost.muted = that._video.muted;
            dispatchEvent(ghost, 'unmute');
        });
        this.addEventListener('ended', function () {
            ghost.ended = that._video.ended;
            dispatchEvent(ghost, 'ended');
        });
        this.addEventListener('loadedmetadata', function () {
            log('Video loaded metadata', that._video.videoWidth, that._video.videoHeight);
            ghost.width = that._video.width;
            ghost.height = that._video.height;
            dispatchEvent(ghost, 'loadedmetadata');
        });
        this.addEventListener('loadeddata', function () {
            ghost.width = that._video.width;
            ghost.height = that._video.height;
            dispatchEvent(ghost, 'loadeddata');
        });
        this.addEventListener('resize', function () {
            ghost.width = that._video.width;
            ghost.height = that._video.height;
            dispatchEvent(ghost, 'resize');
        });
    };

    PhenixVideo.prototype.onReady = function (callback) {
        var that = this;

        if (this._loaded) {
            setTimeout(function () {
                callback(that._enabled);
            }, 1);
        } else {
            this._onReady = callback;
        }
    };

    PhenixVideo.prototype.getElement = function () {
        return this._video;
    };

    PhenixVideo.prototype.addEventListener = function (name, listener, useCapture) {
        addEventListener.call(this, name, listener, useCapture);
    };

    PhenixVideo.prototype.removeEventListener = function (name, listener, useCapture) {
        removeEventListener.call(this, name, listener, useCapture);
    };

    function createPhenixVideoElement() {
        var video = document.createElement('object');

        video.type = 'application/x-phenix-video';

        return video;
    }

    function addEventListener(name, listener, useCapture) { // eslint-disable-line no-unused-vars
        var listeners = this._events[name];

        if (!listeners) {
            listeners = this._events[name] = [];

            if (this._loaded) {
                registerEvent.call(this, name);
            }
        }

        listeners.push(listener);
    }

    function removeEventListener(name, listener, useCapture) { // eslint-disable-line no-unused-vars
        var listeners = this._events[name];

        if (listeners) {
            var idx = listeners.indexOf(listener);

            if (idx >= 0) {
                listeners = listeners.splice(idx, 1);

                if (listeners.length > 0) {
                    this._events[name] = listeners;
                } else {
                    delete this._events[name];
                }
            }
        }
    }

    function registerEvent(name) {
        var that = this;

        function listener() {
            var listeners = that._events[name];

            if (listeners) {
                for (var i = 0; i < listeners.length; i++) {
                    listeners[i].apply(that, arguments);
                }
            }
        }

        that._video.phenixSetEventListener(name, listener);
    }

    function dispatchEvent(source, name) {
        var event; // The custom event that will be created

        if (document.createEvent) {
            event = document.createEvent('HTMLEvents');
            event.initEvent(name, true, true);
        } else {
            event = document.createEventObject();
            event.eventType = name;
        }

        event.eventName = name;

        setTimeout(function () {
            if (document.createEvent) {
                source.dispatchEvent(event);
            } else {
                source.fireEvent('on' + event.eventType, event);
            }
        });
    }

    function initialize() {
        var events = Object.keys(this._events);

        for (var i = 0; i < events.length; i++) {
            registerEvent.call(this, events[i]);
        }

        this.hookUpEvents();

        propagateAttributeChanges.call(this);

        this._video.id = this._ghost.id;
        this._video.style.cssText = this._ghost.cssText;
        this._video.className = this._ghost.className;
        this._video.innerHtml = this._ghost.innerHtml;
        this._video.width = this._ghost.width;
        this._video.height = this._ghost.height;
        this._video.autoplay = this._ghost.autoplay;
        this._video.muted = this._ghost.muted;
        this._video.defaultMuted = this._ghost.defaultMuted;
        this._video.volume = this._ghost.volume;

        if (this._stream) {
            this._video.src = this._stream;
        }
    }

    function propagateAttributeChanges() {
        var that = this;
        var readonly = ['style'];

        if (window.MutationObserver) {
            // Newer browsers support an efficient way to observe DOM modifications
            var observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (mutation.type === 'attributes' && mutation.target === that._ghost && readonly.indexOf(mutation.attributeName) === -1) {
                        that._video[mutation.attributeName] = that._ghost[mutation.attributeName];
                    }
                });
            });

            var configAttributes = {attributes: true};

            observer.observe(that._ghost, configAttributes);
        } else {
            // For older browsers. There is a significant performance overhead with this method.
            // See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events
            log('Falling back to use of DOM event listeners. This results in degraded performance for further DOM modifications and does not work for IE prior to version 9. See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events for details.');

            if (that._ghost.addEventListener) {
                that._ghost.addEventListener('DOMAttrModified', function (event) {
                    that._video[event.target.tagName] = that._ghost[event.target.tagName];
                }, false);
            } else {
                that._ghost.attachEvent('onpropertychange', function (event) {
                    that._video[event.target.tagName] = that._ghost[event.target.tagName];
                });
            }
        }
    }

    function observeInsertion() {
        var that = this;

        if (window.MutationObserver) {
            // Newer browsers support an efficient way to observe DOM modifications
            var observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (mutation.type === 'childList') {
                        for (var i = 0; i < mutation.addedNodes.length; i++) {
                            var node = mutation.addedNodes[i];

                            if (mutation.target !== that._video) {
                                if (node === that._ghost) {
                                    // Replace element with our video element
                                    mutation.target.replaceChild(that._video, that._ghost);
                                    initialize.call(that);
                                } else if (isDescendant(mutation.target, that._ghost)) {
                                    that._ghost.parentNode.replaceChild(that._video, that._ghost);
                                    initialize.call(that);
                                }
                            }
                        }
                    }
                });
            });

            var configMutations = {
                childList: true,
                attributes: false,
                characterData: false,
                subtree: true
            };

            observer.observe(document.body, configMutations);
        } else {
            // For older browsers. There is a significant performance overhead with this method.
            // See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events
            log('Falling back to use of DOM event listeners. This results in degraded performance for further DOM modifications and does not work for IE prior to version 9. See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events for details.');

            addEventListener(that._ghost, 'DOMNodeInserted', function () {
                that._ghost.parentNode.replaceChild(that._video, that._ghost);
                // That._video.appendChild(that._ghost);
            }, false);
        }
    }

    function isDescendant(parent, child) {
        var node = child.parentNode;

        while (node !== null) {
            if (node === parent) {
                return true;
            }

            node = node.parentNode;
        }

        return false;
    }

    return PhenixVideo;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(2),
    __webpack_require__(16)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (DetectBrowser, webRtcAdapter) { // eslint-disable-line no-unused-vars
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

    switch (browser.browser) {
    case 'Firefox':
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

        break;
    case 'Chrome':
        log('Webkit detected', browser);

        attachMediaStream = attachStreamToElement;
        reattachMediaStream = reattachStreamToElement;

        webrtcSupported = true;

        break;
    case 'Edge':
        log('Edge detected', browser);

        attachMediaStream = attachStreamToElement;
        reattachMediaStream = reattachStreamToElement;

        webrtcSupported = true;

        break;
    case 'Safari':
        log('Safari detected', browser);

        if (browser.version < 11) {
            log('Safari browser version [%s] is not WebRTC-capable', browser.version);

            break;
        }

        attachMediaStream = attachStreamToElement;
        reattachMediaStream = reattachStreamToElement;

        webrtcSupported = true;

        break;
    default:
        log('Browser does not appear to be WebRTC-capable', browser);

        break;
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

    function attachStreamToElement(element, stream) {
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
    }

    function reattachStreamToElement(to, from) {
        to.src = from.src;

        return to;
    }

    return adapter;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })
/******/ ]);
});
//# sourceMappingURL=phenix-rtc-no-edge-bundled.js.map