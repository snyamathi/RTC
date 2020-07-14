/**
 * Copyright 2020 Phenix Real Time Solutions Inc. All Rights Reserved.
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
		module.exports = factory(require("phenix-web-lodash-light"), require("phenix-web-detect-browser"), require("phenix-web-assert"), require("phenix-web-disposable"), require("phenix-web-observable"), require("phenix-web-event"));
	else if(typeof define === 'function' && define.amd)
		define(["phenix-web-lodash-light", "phenix-web-detect-browser", "phenix-web-assert", "phenix-web-disposable", "phenix-web-observable", "phenix-web-event"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("phenix-web-lodash-light"), require("phenix-web-detect-browser"), require("phenix-web-assert"), require("phenix-web-disposable"), require("phenix-web-observable"), require("phenix-web-event")) : factory(root["phenix-web-lodash-light"], root["phenix-web-detect-browser"], root["phenix-web-assert"], root["phenix-web-disposable"], root["phenix-web-observable"], root["phenix-web-event"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_16__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2019 Phenix Real Time Solutions Inc. All Rights Reserved.
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
    'use strict';

    var getGlobal = function getGlobal() {
        if (typeof window === "object") { // eslint-disable-line no-restricted-globals
            return window; // eslint-disable-line no-restricted-globals
        }

        if (typeof global === "object") {
            return global; // eslint-disable-line no-undef
        }

        return {};
    };

    return getGlobal();
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2019 Phenix Real Time Solutions Inc. All Rights Reserved.
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
    __webpack_require__(1),
    __webpack_require__(6),
    __webpack_require__(4),
    __webpack_require__(0),
    __webpack_require__(12)
], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, disposable, WaitFor, envGlobal, FlashPlayer) {
    'use strict';

    var log = function() {
        console.log.apply(console, arguments);
    } || function() {
        };

    var logError = function() {
        console.error.apply(console, arguments);
    } || log;

    function PhenixVideo(ghost, stream, pluginType, options) {
        var that = this;

        this._ghost = ghost;
        this._stream = stream;
        this._isPhenixPlugin = pluginType === 'phenix';
        this._isFlash = pluginType === 'flash';
        this._options = options || {};
        this._events = {};
        this._disposables = new disposable.DisposableList();
        this._flashPlayer = null;

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
            this._video = createPhenixVideoElement.call(this);
            this._video.className = this._ghost.className;
            this._video.height = this._ghost.height;
            this._video.width = this._ghost.width;

            this._ghostInitStyleCssText = this._ghost.style.cssText;
            this._ghost.style.cssText = 'visibility:hidden !important;width:0px !important;height:0px !important;' +
                'margin:0px !important;padding:0px !important;' +
                'border-style:none !important;border-width:0px !important;' +
                'max-width:0px !important;max-height:0px !important;outline:none !important';

            this._disposables.add(new disposable.Disposable(function() {
                that._ghost.style.cssText = that._ghostInitStyleCssText;
            }));

            this._video.onunload = function() {
                that._loaded = false;
            };

            observeInsertion.call(this);

            if (!document.body || !document.body.contains) {
                log('document.body.contains is not supported');
            }

            if (document.body && document.body.contains && document.body.contains(this._ghost)) {
                this._ghost.parentNode.replaceChild(this._video, this._ghost);

                if (this._isFlash && this._flashPlayer) {
                    this._video = this._flashPlayer.finishInitializationInDom();
                }

                this._disposables.add(new disposable.Disposable(function() {
                    if (that._video.parentNode) {
                        that._video.parentNode.replaceChild(that._ghost, that._video);
                    }
                }));
            }

            if (!this._isPhenixPlugin) {
                return loaded(true);
            }

            var waitFor = new WaitFor();

            waitFor.waitForReady(this._video, loaded);
        } catch (e) {
            logError('Error while loading Phenix RTC' + e);
            loaded(false);
        }
    }

    PhenixVideo.prototype.hookUpEvents = function() {
        var that = this;
        var ghost = this._ghost;
        var onError = function onError() {
            dispatchEvent(ghost, 'error');
        };

        var onMute = function onMute() {
            ghost.muted = that._video.muted;
            dispatchEvent(ghost, 'mute');
        };

        var onUnmute = function onUnmute() {
            ghost.muted = that._video.muted;
            dispatchEvent(ghost, 'unmute');
        };

        var onEnded = function onEnded() {
            ghost.ended = that._video.ended;
            dispatchEvent(ghost, 'ended');
        };

        var onLoadedMetadata = function onLoadedMetadata() {
            ghost.width = that._video.width;
            ghost.height = that._video.height;
            dispatchEvent(ghost, 'loadedmetadata');
        };

        var onLoadedData = function onLoadedData() {
            ghost.width = that._video.width;
            ghost.height = that._video.height;
            dispatchEvent(ghost, 'loadeddata');
        };

        var onResize = function onResize() {
            ghost.width = that._video.width;
            ghost.height = that._video.height;
            dispatchEvent(ghost, 'resize');
        };

        this.addEventListener('error', onError);
        this.addEventListener('mute', onMute);
        this.addEventListener('unmute', onUnmute);
        this.addEventListener('ended', onEnded);
        this.addEventListener('loadedmetadata', onLoadedMetadata);
        this.addEventListener('loadeddata', onLoadedData);
        this.addEventListener('resize', onResize);

        var eventDisposable = new disposable.Disposable(function() {
            that.removeEventListener('error', onError);
            that.removeEventListener('mute', onMute);
            that.removeEventListener('unmute', onUnmute);
            that.removeEventListener('ended', onEnded);
            that.removeEventListener('loadedmetadata', onLoadedMetadata);
            that.removeEventListener('loadeddata', onLoadedData);
            that.removeEventListener('resize', onResize);
        });

        this._disposables.add(eventDisposable);

        return eventDisposable;
    };

    PhenixVideo.prototype.onReady = function(callback) {
        var that = this;

        if (this._loaded) {
            setTimeout(function() {
                callback(that._enabled);
            }, 1);
        } else {
            this._onReady = callback;
        }
    };

    PhenixVideo.prototype.getElement = function() {
        return this._video;
    };

    PhenixVideo.prototype.addEventListener = function(name, listener, useCapture) {
        addEventListener.call(this, name, listener, useCapture);
    };

    PhenixVideo.prototype.removeEventListener = function(name, listener, useCapture) {
        removeEventListener.call(this, name, listener, useCapture);
    };

    PhenixVideo.prototype.destroy = function() {
        this._disposables.dispose();
    };

    function createPhenixVideoElement() {
        var video = document.createElement('video');

        if (this._isPhenixPlugin) {
            video = document.createElement('object');

            video.type = 'application/x-phenix-video';
        }

        if (this._isFlash) {
            this._flashPlayer = new FlashPlayer(this._ghost, this._stream, this._options);

            var that = this;

            this._disposables.add(new disposable.Disposable(function() {
                that._flashPlayer.destroy();
            }));

            video = this._flashPlayer.getElement();
        }

        return video;
    }

    function addEventListener(name, listener, useCapture) {
        if (this._isFlash) {
            return this._flashPlayer.addEventListener(name, listener);
        }

        if (this._isPhenixPlugin) {
            var listeners = this._events[name];

            if (!listeners) {
                listeners = this._events[name] = [];

                if (this._loaded) {
                    registerEvent.call(this, name);
                }
            }

            return listeners.push(listener);
        }

        return this._video.addEventListener(name, listener, useCapture);
    }

    function removeEventListener(name, listener, useCapture) {
        if (this._isFlash) {
            return this._flashPlayer.removeEventListener(name, listener);
        }

        if (this._isPhenixPlugin) {
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

            return;
        }

        return this._video.removeEventListener(name, listener, useCapture);
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

        setTimeout(function() {
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
        this._video.style.cssText = this._ghostInitStyleCssText;
        this._video.className = this._ghost.className;
        this._video.innerHtml = this._ghost.innerHtml;
        this._video.width = this._ghost.width;
        this._video.height = this._ghost.height;
        this._video.autoplay = this._ghost.autoplay;
        this._video.muted = this._ghost.muted;
        this._video.defaultMuted = this._ghost.defaultMuted;
        this._video.volume = this._ghost.volume;

        if (this._stream && !this._isFlash) {
            this._video.src = this._stream;
        }
    }

    function propagateAttributeChanges() {
        var that = this;
        var readonly = ['style'];

        if (_.get(envGlobal, ['MutationObserver'])) {
            // Newer browsers support an efficient way to observe DOM modifications
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'attributes' && mutation.target === that._ghost && readonly.indexOf(mutation.attributeName) === -1) {
                        that._video[mutation.attributeName] = that._ghost[mutation.attributeName];
                    }
                });
            });

            var configAttributes = {attributes: true};

            observer.observe(that._ghost, configAttributes);

            that._disposables.add(new disposable.Disposable(function() {
                observer.disconnect();
            }));
        } else {
            // For older browsers. There is a significant performance overhead with this method.
            // See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events
            log('Falling back to use of DOM event listeners. This results in degraded performance for further DOM modifications and does not work for IE prior to version 9. See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events for details.');

            var handleModifiedEvent = function handleModifiedEvent(event) {
                that._video[event.target.tagName] = that._ghost[event.target.tagName];
            };

            if (that._ghost.addEventListener) {
                that._ghost.addEventListener('DOMAttrModified', handleModifiedEvent, false);

                that._disposables.add(new disposable.Disposable(function() {
                    that._ghost.removeEventListener('DOMAttrModified', handleModifiedEvent, false);
                }));
            } else {
                that._ghost.attachEvent('onpropertychange', handleModifiedEvent);

                that._disposables.add(new disposable.Disposable(function() {
                    that._ghost.detachEvent('DOMAttrModified', handleModifiedEvent);
                }));
            }
        }
    }

    function observeInsertion() {
        var that = this;

        if (_.get(envGlobal, ['MutationObserver'])) {
            // Newer browsers support an efficient way to observe DOM modifications
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'childList') {
                        for (var i = 0; i < mutation.addedNodes.length; i++) {
                            var node = mutation.addedNodes[i];

                            if (mutation.target !== that._video) {
                                if (node === that._ghost) {
                                    // Replace element with our video element
                                    mutation.target.replaceChild(that._video, that._ghost);
                                    initialize.call(that);
                                } else if (isDescendant(mutation.target, that._ghost)) {
                                    if (that._ghost.parentNode) {
                                        that._ghost.parentNode.replaceChild(that._video, that._ghost);
                                    }

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

            that._disposables.add(new disposable.Disposable(function() {
                observer.disconnect();
            }));
        } else {
            // For older browsers. There is a significant performance overhead with this method.
            // See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events
            log('Falling back to use of DOM event listeners. This results in degraded performance for further DOM modifications and does not work for IE prior to version 9. See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events for details.');

            var domInsertedListener = function() {
                if (that._ghost.parentNode) {
                    that._ghost.parentNode.replaceChild(that._video, that._ghost);
                }
            };

            that.addEventListener('DOMNodeInserted', domInsertedListener, false);

            that._disposables.add(new disposable.Disposable(function() {
                that.removeEventListener('DOMNodeInserted', domInsertedListener, false);
            }));
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2019 Phenix Real Time Solutions Inc. All Rights Reserved.
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
], __WEBPACK_AMD_DEFINE_RESULT__ = function(DetectBrowser) {
    'use strict';

    var browser = new DetectBrowser(navigator.userAgent).detect();
    var ReadyStateComplete = 4;

    function WaitFor(timeout) {
        this._timeout = timeout || 15000;
    }

    var logError = function() {
        console.error.apply(console, arguments);
    } || console.log;

    WaitFor.prototype.waitForReadyWithTimeout = function(element, loaded, timeout) {
        var triggered = false;
        var waitFor = 1;
        var sum = waitFor;

        var guardedLoaded = function(success) {
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

        element.onload = function() {
            guardedLoaded(true);
        };

        checkLoaded();
    };

    WaitFor.prototype.waitForReady = function(element, loaded) {
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
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2019 Phenix Real Time Solutions Inc. All Rights Reserved.
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
    __webpack_require__(1),
    __webpack_require__(5),
    __webpack_require__(7),
    __webpack_require__(2),
    __webpack_require__(0),
    __webpack_require__(14),
    __webpack_require__(13)
], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, assert, obserervable, DetectBrowser, envGlobal, webRTCShim, PhenixRTC) {
    'use strict';

    var browser = new DetectBrowser(navigator.userAgent).detect();
    var adapter = {
        browser: browser.browser,
        browserVersion: browser.version,
        phenixSupported: false,
        isPhenixEnabled: function() {
            return false;
        },
        onLoaded: undefined,
        global: envGlobal
    };

    function createAdapter() {
        _.assign(adapter, webRTCShim());

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
                    adapter.attachMediaStream = function() {
                        phenixRTC.attachMediaStream.apply(phenixRTC, arguments);
                    };
                    adapter.reattachMediaStream = function() {
                        phenixRTC.reattachMediaStream.apply(phenixRTC, arguments);
                    };
                    adapter.isPhenixEnabled = function() {
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
                phenixRTC.onReady(function(enabled) {
                    if (enabled) {
                        enablePhenix();

                        if (adapter.onload && typeof adapter.onload === 'function') {
                            adapter.onload();
                        }
                    }
                });
            }

            phenixRTC.onLoaded(function() {
                enablePhenix();
            });
        } else {
            adapter.phenixSupported = false;
        }

        return adapter;
    }

    return _.assign(createAdapter(), {shim: createAdapter});
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2019 Phenix Real Time Solutions Inc. All Rights Reserved.
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(envGlobal) {
    'use strict';

    var exportGlobal = function exportGlobal(adapter) {
        envGlobal.RTCPeerConnection = adapter.RTCPeerConnection;
        envGlobal.RTCSessionDescription = adapter.RTCSessionDescription;
        envGlobal.RTCIceCandidate = adapter.RTCIceCandidate;
    };

    return exportGlobal;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2019 Phenix Real Time Solutions Inc. All Rights Reserved.
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
    __webpack_require__(8),
    __webpack_require__(9),
    __webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = function(adapter, exportGlobal, PhenixVideo) {
    adapter.PhenixVideo = PhenixVideo;
    adapter.onLoaded = function() {
        exportGlobal(adapter);
    };

    adapter.onLoaded();

    return adapter;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2019 Phenix Real Time Solutions Inc. All Rights Reserved.
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
    __webpack_require__(1),
    __webpack_require__(2),
    __webpack_require__(6),
    __webpack_require__(16),
    __webpack_require__(4),
    __webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, DetectBrowser, disposable, event, WaitFor, envGlobal) {
    'use strict';

    var log = function() {
        console.log.apply(console, arguments);
    } || function() {};

    var logError = function() {
        console.error.apply(console, arguments);
    } || log;

    var defaultPropertyValues = {
        width: 480,
        height: 360,
        videoWidth: 480,
        videoHeight: 360,
        muted: false,
        volume: 1,
        currentTime: 0,
        duration: Infinity,
        readyState: 0,
        ended: false,
        buffered: null,
        autoplay: true
    };

    var mutedElementListenerInterval = 300;
    var browser = new DetectBrowser(navigator.userAgent).detect();
    var isIEAndRequiresFlashObject = browser.browser === 'IE' && /(trident|microsoft)/i.test(_.get(envGlobal.navigator, ['appName'], ''));
    var isEdgeAndRequiresFlashObject = browser.browser === 'Edge' && _.get(envGlobal.navigator, 'msLaunchUri') && !_.get(envGlobal.document, 'documentMode');
    var missingFlashMessage = 'You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/';

    function FlashPlayer(ghost, streamInfo, options) {
        this._disposables = new disposable.DisposableList();
        this._events = new event.NamedEvents();
        this._isVideo = ghost.tagName === 'video';
        this._swfSrc = options.swfSrc;
        this._id = ghost.id || options.streamId;
        this._width = ghost.clientWidth;
        this._height = ghost.clientHeight;
        this._ghost = ghost;
        this._element = null;
        this._eventDisposables = [];
        this._flashVars = [
            'uid=' + this._id,
            'autoplay=' + (_.isUndefined(ghost.autoplay) ? true : ghost.autoplay),
            'muted=' + (_.isUndefined(ghost.muted) ? false : ghost.muted),
            'allowScriptAccess=always',
            'preload=true',
            'src=' + JSON.stringify(streamInfo)
        ];

        var that = this;

        this._disposables.add(new disposable.Disposable(function() {
            triggerFlashEvent.call(that, 'fire_stop');
        }));

        try {
            if (isIEAndRequiresFlashObject || isEdgeAndRequiresFlashObject) {
                this._element = createMicrosoftFlashElement.call(this);
            } else {
                this._element = setupCrossBrowserFlashElement.call(this);
            }

            setupElement.call(this);
        } catch (e) {
            logError('Error while loading Flash Player' + e);
        }
    }

    FlashPlayer.prototype.finishInitializationInDom = function() {
        return finishInitialization.call(this);
    };

    FlashPlayer.prototype.getElement = function() {
        return this._element;
    };

    FlashPlayer.prototype.addEventListener = function(name, listener) {
        var eventDisposableIndex = findEventListenerIndex.call(this, name, listener);

        if (eventDisposableIndex > -1) {
            return;
        }

        var disposable = this._events.listen(name, listener);

        this._disposables.add(disposable);

        this._eventDisposables.push({
            name: name,
            listener: listener,
            disposable: disposable
        });
    };

    FlashPlayer.prototype.removeEventListener = function(name, listener) {
        var eventDisposableIndex = findEventListenerIndex.call(this, name, listener);

        if (eventDisposableIndex > -1) {
            var eventDisposable = this._eventDisposables.splice(eventDisposableIndex, 1)[0];

            eventDisposable.disposable.dispose();
        }
    };

    FlashPlayer.prototype.destroy = function() {
        this._disposables.dispose();
    };

    function findEventListenerIndex(name, listener) {
        return _.findIndex(this._eventDisposables, function(eventDisposable) {
            return eventDisposable.name === name && eventDisposable.listener === listener;
        });
    }

    function createMicrosoftFlashElement() {
        return document.createElement('div');
    }

    function setupCrossBrowserFlashElement() {
        var element = document.createElement('embed');

        element.setAttribute('id', '__' + this._id);
        element.setAttribute('name', '__' + this._id);
        element.setAttribute('play', 'true');
        element.setAttribute('loop', 'false');
        element.setAttribute('quality', 'high');
        element.setAttribute('bgcolor', '#000000');
        element.setAttribute('wmode', 'transparent');
        element.setAttribute('allowScriptAccess', 'always');
        element.setAttribute('allowFullScreen', 'true');
        element.setAttribute('type', 'application/x-shockwave-flash');
        element.setAttribute('pluginspage', '//www.macromedia.com/go/getflashplayer');
        element.setAttribute('src', this._swfSrc);
        element.setAttribute('flashvars', this._flashVars.join('&'));

        if (this._isVideo) {
            element.setAttribute('width', this._width.toString());
            element.setAttribute('height', this._height.toString());
        }

        return element;
    }

    function finishInitialization() {
        if (!isIEAndRequiresFlashObject && !isEdgeAndRequiresFlashObject) {
            return this._element;
        }

        var id = (isEdgeAndRequiresFlashObject ? '__' + this._id : this._id) + _.uniqueId();
        var embedObject = document.createElement('object');
        var missingFlashMessageElement = document.createElement('div');
        var childrenElements = [
            createParameterElement('movie', this._swfSrc + '?x=' + _.now()),
            createParameterElement('flashvars', this._flashVars.join('&')),
            createParameterElement('quality', 2),
            createParameterElement('bgcolor', '#000000'),
            createParameterElement('wmode', 'transparent'),
            createParameterElement('allowScriptAccess', 'always'),
            createParameterElement('allowFullScreen', 'true'),
            missingFlashMessageElement
        ];

        missingFlashMessageElement.innerHTML = missingFlashMessage;

        if (isEdgeAndRequiresFlashObject) {
            embedObject.setAttribute('type', 'application/x-shockwave-flash');
            embedObject.setAttribute('data', this._swfSrc);
            embedObject.setAttribute('id', id);
            embedObject.setAttribute('width', '__' + this._width.toString());
            embedObject.setAttribute('height', '__' + this._height.toString());
        } else {
            embedObject.setAttribute('classid', 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000');
            embedObject.setAttribute('codebase', '//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab');
            embedObject.setAttribute('id', id);
            embedObject.setAttribute('width', this._width.toString());
            embedObject.setAttribute('height', this._height.toString());
        }

        if (embedObject.object) {
            _.forEach(childrenElements, function(element) {
                if (!_.isNullOrUndefined(_.get(embedObject.object, [element.name]))) {
                    embedObject.object[element.name] = element.value;
                }
            });

            embedObject.appendChild(missingFlashMessageElement);
        } else {
            _.forEach(childrenElements, function(element) {
                var existingChildElement = _.find(embedObject.children, function(childElement) {
                    return childElement.name === element.name;
                });

                if (existingChildElement) {
                    return embedObject.replaceChild(element, existingChildElement);
                }

                return embedObject.appendChild(element);
            });
        }

        this._element.outerHTML = embedObject.outerHTML;

        // Issue with IE. When you replace the outerHTML the reference to that element does not correctly reflect the changes.
        // If you want to get the new embed object in the dom you need to query for it.
        if (envGlobal.document.getElementById) {
            this._element = envGlobal.document.getElementById(id);

            setupElement.call(this);
        }

        return this._element;
    }

    function createParameterElement(name, value) {
        var parameter = document.createElement('param');

        parameter.setAttribute('name', name);
        parameter.setAttribute('value', value);

        return parameter;
    }

    function setupElement() {
        _.assign(this._element, defaultPropertyValues, {
            id: this._id,
            width: this._width,
            height: this._height,
            videoWidth: this._width,
            videoHeight: this._height
        });

        setupAccessors.call(this);
        propagateAttributeChanges.call(this);
        setupVolumeAndMutedListeners.call(this);
    }

    function setupAccessors() {
        var that = this;

        envGlobal['__event__' + this._id] = function(eventName, message) {
            var event = createEvent(eventName, that._element);

            if (message) {
                try {
                    event.data = JSON.parse(message);
                    event.details.data = event.data;
                } catch (e) {
                    event.message = message;
                }
            }

            switch (eventName) {
            case 'ended':
                break;
            case 'error':
                that._element.error = event.data;

                if (that._element.dispatchEvent) {
                    that._element.dispatchEvent(new Error(message));
                }

                break;
            case 'loadeddata':
            case 'loadedmetadata':
            case 'loadstart':
                if (that._element.dispatchEvent) {
                    that._element.dispatchEvent(event);
                }

                break;
            case 'pause':
                that._element.paused = true;

                break;
            case 'play':
                that._element.paused = false;

                break;
            case 'playing':
                that._element.paused = false;

                break;
            case 'progress':
            case 'seeked':
            case 'seeking':
            case 'stalled':
            case 'suspend':
                if (that._element.dispatchEvent) {
                    that._element.dispatchEvent(event);
                }

                break;
            case 'timeupdate':
                that._element.currentTime = getValueFromFlash.call(that, 'currentTime');

                if (that._element.dispatchEvent) {
                    that._element.dispatchEvent(event);
                }

                break;
            case 'volumechange':
                break;
            case 'waiting':
                break;
            default:
                break;
            }

            that._events.fireAsync(eventName, [event]);
        };

        var nativeFullScreen = this._element.requestFullscreen || this._element.mozRequestFullScreen || this._element.webkitRequestFullScreen || this._element.msRequestFullscreen;

        this._disposables.add(new disposable.Disposable(function() {
            delete envGlobal['__event__' + that._id];
        }));

        this._element.play = function() {
            triggerFlashEvent.call(that, 'fire_play');
        };
        this._element.load = function() {
            triggerFlashEvent.call(that, 'fire_load');
        };
        this._element.seek = function() {
            triggerFlashEvent.call(that, 'fire_seek');
        };
        this._element.pause = function() {
            triggerFlashEvent.call(that, 'fire_pause');
        };
        this._element.requestFullscreen = function() {
            that._isFullscreen = true;
            addListenerForExitFullScreen.call(that);

            that._previousHeight = that._element.style.height;
            that._previousWidth = that._element.style.width;
            that._previousPosition = that._element.style.position;
            that._element.style.position = 'absolute';
            that._element.style.height = '100%';
            that._element.style.width = '100%';

            if (typeof envGlobal.ActiveXObject !== "undefined") { // Older IE.
                var wscript = new envGlobal("WScript.Shell");

                if (wscript !== null) {
                    wscript.SendKeys("{F11}");
                }
            }

            nativeFullScreen.call(that._element);
        };

        var triggerFlashSetSize = function() {
            triggerFlashEvent.call(that, 'set_size', that._isFullscreen ? screen.width : that._element.clientWidth, that._isFullscreen ? screen.height : that._element.clientHeight);
        };

        _.addEventListener(envGlobal, 'resize', triggerFlashSetSize);

        this._disposables.add(new disposable.Disposable(function() {
            _.removeEventListener(envGlobal, 'resize', triggerFlashSetSize);
        }));
    }

    // Muted is not an attribute and will not be triggered by MutationObserver changes
    function setupVolumeAndMutedListeners() {
        var mutedListener = getMutedListener.call(this);
        var volumeListener = getVolumeListener.call(this);

        var intervalId = setInterval(function() {
            mutedListener();
            volumeListener();
        }, mutedElementListenerInterval);

        this._disposables.add(new disposable.Disposable(function() {
            clearInterval(intervalId);
        }));
    }

    function getMutedListener() {
        var that = this;
        var ghostLastMutedState = that._ghost.muted;
        var elementLastMutedState = that._element.muted;

        return function() {
            var newGhostMutedState = that._element.muted;
            var newElementMutedState = that._element.muted;

            if (newGhostMutedState === ghostLastMutedState && newElementMutedState === elementLastMutedState) {
                return;
            }

            if (newGhostMutedState !== ghostLastMutedState) {
                ghostLastMutedState = newGhostMutedState;
                elementLastMutedState = newGhostMutedState;
                newElementMutedState = newGhostMutedState;
            }

            if (newElementMutedState !== elementLastMutedState) {
                ghostLastMutedState = newGhostMutedState;
                elementLastMutedState = newGhostMutedState;
            }

            that._element.muted = newElementMutedState;
            that._ghost.muted = newElementMutedState;

            setFlashValue.call(that, 'muted', newElementMutedState);
        };
    }

    function getVolumeListener() {
        var that = this;
        var ghostLastVolume = that._ghost.volume;
        var elementLastVolume = that._element.volume;

        return function() {
            var newGhostVolume = that._element.volume;
            var newElementVolume = that._element.volume;

            if (newGhostVolume === ghostLastVolume && newElementVolume === elementLastVolume) {
                return;
            }

            if (newGhostVolume !== ghostLastVolume) {
                ghostLastVolume = newGhostVolume;
                elementLastVolume = newGhostVolume;
                newElementVolume = newGhostVolume;
            }

            if (newElementVolume !== elementLastVolume) {
                ghostLastVolume = newGhostVolume;
                elementLastVolume = newGhostVolume;
            }

            that._element.volume = newElementVolume;
            that._ghost.volume = newElementVolume;

            setFlashValue.call(that, 'volume', newElementVolume);
        };
    }

    function setFlashValue(name, value) {
        var setter = this._element['set_' + name] || _.noop;

        return setter.call(this._element, value);
    }

    function getValueFromFlash(name) {
        var getter = this._element['get_' + name] || _.noop;

        return getter.call(this._element);
    }

    function triggerFlashEvent(eventName) {
        var triggerEvent = this._element[eventName];

        [].shift.apply(arguments);

        if (triggerEvent) {
            return triggerEvent.apply(this._element, arguments);
        }
    }

    function createEvent(eventName, target) {
        var eventFrags = eventName.match(/([a-z]+\.([a-z]+))/i);
        var detail = {target: target};

        if (eventFrags !== null) {
            eventName = eventFrags[1];
            detail.namespace = eventFrags[2];
        }

        if (browser.browser === 'IE' && browser.version > 8) {
            var evt = envGlobal.document.createEvent("CustomEvent");

            evt.initCustomEvent(eventName, false, false, detail);

            return evt;
        }

        if (!envGlobal.CustomEvent) {
            return detail;
        }

        return new envGlobal.CustomEvent(eventName, {detail: detail});
    }

    function propagateAttributeChanges() {
        var that = this;
        var ignored = ['currentTime', 'paused', 'error', 'src'];

        if (_.get(envGlobal, ['MutationObserver'])) {
            // Newer browsers support an efficient way to observe DOM modifications
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'attributes' && mutation.target === that._element && !_.includes(ignored, mutation.attributeName)) {
                        setFlashValue.call(that, mutation.attributeName, that._element[mutation.attributeName]);
                    }
                });
            });

            var configAttributes = {attributes: true};

            observer.observe(that._element, configAttributes);

            that._disposables.add(new disposable.Disposable(function() {
                observer.disconnect();
            }));
        } else {
            // For older browsers. There is a significant performance overhead with this method.
            // See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events
            log('Falling back to use of DOM event listeners. This results in degraded performance for further DOM modifications and does not work for IE prior to version 9. See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events for details.');

            var handleModifiedEvent = function handleModifiedEvent(event) {
                if (!_.includes(ignored, event.target.tagName)) {
                    setFlashValue.call(that, event.target.tagName, that._element[event.target.tagName]);
                }
            };

            if (that._element.addEventListener) {
                that._element.addEventListener('DOMAttrModified', handleModifiedEvent, false);

                that._disposables.add(new disposable.Disposable(function() {
                    that._element.removeEventListener('DOMAttrModified', handleModifiedEvent, false);
                }));
            } else {
                that._element.attachEvent('onpropertychange', handleModifiedEvent);

                that._disposables.add(new disposable.Disposable(function() {
                    that._element.detachEvent('DOMAttrModified', handleModifiedEvent);
                }));
            }
        }
    }

    function addListenerForExitFullScreen() {
        var that = this;

        function exitHandler() {
            if(!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement && !document.fullscreenElement) {
                document.removeEventListener('webkitfullscreenchange', exitHandler);
                document.removeEventListener('mozfullscreenchange', exitHandler);
                document.removeEventListener('fullscreenchange', exitHandler);
                document.removeEventListener('MSFullscreenChange', exitHandler);
                document.removeEventListener('keydown', checkForExit);

                that._isFullscreen = false;
                that._element.style.position = that._previousPosition;
                that._element.style.height = that._previousHeight;
                that._element.style.width = that._previousWidth;
            }
        }

        function checkForExit(event) {
            var keyEvent = event || envGlobal.event;
            var isEscape = false;

            if ("key" in keyEvent) {
                isEscape = (keyEvent.key === "Escape" || keyEvent.key === "Esc");
            } else {
                isEscape = (keyEvent.keyCode === 27);
            }

            if (isEscape) {
                exitHandler();
            }
        }

        document.addEventListener('webkitfullscreenchange', exitHandler, false);
        document.addEventListener('mozfullscreenchange', exitHandler, false);
        document.addEventListener('fullscreenchange', exitHandler, false);
        document.addEventListener('MSFullscreenChange', exitHandler, false);
        document.addEventListener('keydown', checkForExit, false);
    }

    return FlashPlayer;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2019 Phenix Real Time Solutions Inc. All Rights Reserved.
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
    __webpack_require__(1),
    __webpack_require__(5),
    __webpack_require__(7),
    __webpack_require__(4),
    __webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, assert, observable, WaitFor, PhenixVideo) {
    'use strict';

    var log = function() {
        console.log.apply(console, arguments);
    } || function() {
        };

    var logError = function() {
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

            this._phenixRTC.onunload = function() {
                that._loaded = false;
            };

            var waitFor = new WaitFor();

            waitFor.waitForReady(this._phenixRTC, ready);
        } catch (e) {
            logError('Error while loading Phenix RTC' + e);
        }
    }

    PhenixRTC.prototype.onReady = function(callback) {
        var that = this;

        if (this._loaded) {
            setTimeout(function() {
                callback(that._enabled);
            }, 1);
        } else {
            this._onReady = callback;
        }
    };

    PhenixRTC.prototype.onLoaded = function(callback) {
        this._onLoaded = callback;
    };

    PhenixRTC.prototype.isLoaded = function() {
        return this._loaded === true;
    };

    // Static function
    PhenixRTC.isSupported = function() {
        if (navigator.plugins) {
            var plugins = navigator.plugins;

            for (var i = 0; i < plugins.length; i++) {
                if (plugins[i].name.indexOf('PhenixRTC') >= 0) {
                    return true;
                }
            }
        }

        if (navigator.userAgent && (navigator.userAgent.match(/MSIE/) || navigator.userAgent.match(/Trident/))) {
            try {
                new window.ActiveXObject('PhenixP2P.RTC'); // eslint-disable-line no-restricted-globals

                return true;
            } catch (e) {
                return false;
            }
        }

        return false;
    };

    PhenixRTC.prototype.isEnabled = function() {
        verifyPhenixRTCInDOM.call(this);

        return this._phenixRTC && this._phenixRTC.phenixVersion !== undefined;
    };

    PhenixRTC.prototype.getVersion = function() {
        verifyPhenixRTCInDOM.call(this);

        return this._version;
    };

    PhenixRTC.prototype.getRTCPeerConnectionConstructor = function() {
        verifyPhenixRTCInDOM.call(this);

        return wrapPhenixClass(this._phenixRTC.RTCPeerConnection);
    };

    PhenixRTC.prototype.getRTCSessionDescriptionConstructor = function() {
        verifyPhenixRTCInDOM.call(this);

        return wrapPhenixClass(this._phenixRTC.RTCSessionDescription);
    };

    PhenixRTC.prototype.getRTCIceCandidateConstructor = function() {
        verifyPhenixRTCInDOM.call(this);

        return wrapPhenixClass(this._phenixRTC.RTCIceCandidate);
    };

    PhenixRTC.prototype.getSourcesDelegate = function() {
        var that = this;

        return function(sourcesInfoCallback) {
            verifyPhenixRTCInDOM.call(that);

            return that._phenixRTC.getSources(sourcesInfoCallback);
        };
    };

    PhenixRTC.prototype.getUserMediaDelegate = function() {
        var that = this;

        return function(constraints, successCallback, failureCallback) {
            verifyPhenixRTCInDOM.call(that);

            return that._phenixRTC.getUserMedia(constraints, successCallback, failureCallback);
        };
    };

    PhenixRTC.prototype.getStatsDelegate = function() {
        return function(pc, track, successCallback, errorCallback) {
            return pc.getStats(track, successCallback, errorCallback);
        };
    };

    PhenixRTC.prototype.attachMediaStream = function(element, stream) {
        verifyPhenixRTCInDOM.call(this);

        return attachMediaStream.call(this, element, stream);
    };

    PhenixRTC.prototype.reattachMediaStream = function(to, from) {
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

        var phenixVideo = new PhenixVideo(element, stream, true);

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2019 Phenix Real Time Solutions Inc. All Rights Reserved.
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
    __webpack_require__(1),
    __webpack_require__(2),
    __webpack_require__(15),
    __webpack_require__(0),
    __webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, DetectBrowser, webRtcAdapter, envGlobal, PhenixVideo) { // eslint-disable-line no-unused-vars
    'use strict';

    var log = function() {
        // console.log.apply(console, arguments);
    };

    var browser = new DetectBrowser(navigator.userAgent).detect();
    var RTCPeerConnection = envGlobal.RTCPeerConnection;
    var RTCSessionDescription = envGlobal.RTCSessionDescription;
    var RTCIceCandidate = envGlobal.RTCIceCandidate;
    var getSources = null;
    var getDestinations = null;
    var getUserMedia = null;
    var getStats = null;
    var attachMediaStream = null;
    var attachUriStream = null;
    var reattachMediaStream = null;
    var webrtcSupported = false;

    function shimRTC() {
        RTCPeerConnection = envGlobal.RTCPeerConnection;
        RTCSessionDescription = envGlobal.RTCSessionDescription;
        RTCIceCandidate = envGlobal.RTCIceCandidate;

        if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
            getSources = _.bind(navigatorMediaDevicesEnumerateDevicesByTypeWrapper, null, 'input');
        }

        if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
            getDestinations = _.bind(navigatorMediaDevicesEnumerateDevicesByTypeWrapper, null, 'output');
        }

        if ((navigator.mediaDevices && navigator.mediaDevices.getUserMedia) || envGlobal.getUserMedia) {
            getUserMedia = navigatorGetUserMedia;
        }

        if (!envGlobal.RTCPeerConnection) {
            return log('[%s] browser version [%s] does not appear to be WebRTC-capable', browser.browser, browser.version);
        }

        switch (browser.browser) {
        case 'Firefox':
            log('Firefox detected', browser);

            attachMediaStream = attachStreamToElement;
            reattachMediaStream = reattachStreamToElement;
            getStats = function getPeerConnectionStats(pc, track, successCallback, errorCallback) {
                pc.getStats(track, _.bind(handleGetStatsSuccess, this, pc, successCallback), errorCallback);
            };

            webrtcSupported = true;

            break;
        case 'Opera':
            log('Opera detected', browser);

            attachMediaStream = attachStreamToElement;
            reattachMediaStream = reattachStreamToElement;
            getStats = function getPeerConnectionStats(pc, track, successCallback, errorCallback) {
                pc.getStats(_.bind(handleGetStatsSuccess, this, pc, successCallback), track, errorCallback);
            };

            webrtcSupported = true;

            break;
        case 'Chrome':
            log('Webkit detected', browser);

            attachMediaStream = attachStreamToElement;
            reattachMediaStream = reattachStreamToElement;
            getStats = function getPeerConnectionStats(pc, track, successCallback, errorCallback) {
                pc.getStats(_.bind(handleGetStatsSuccess, this, pc, successCallback), track, errorCallback);
            };

            webrtcSupported = true;

            break;
        case 'Edge':
            log('Edge detected', browser);

            attachMediaStream = attachStreamToElement;
            reattachMediaStream = reattachStreamToElement;
            getStats = function getPeerConnectionStats(pc, track, successCallback, errorCallback) {
                pc.getStats(track, _.bind(handleGetStatsSuccess, this, pc, successCallback), errorCallback);
            };

            webrtcSupported = true;

            break;
        case 'Safari':
            log('Safari detected', browser);

            attachMediaStream = function(element, stream, callback) {
                if (_.isObject(stream)) {
                    element.__phenixHasPlayedWebRtc = true;
                }

                element = attachStreamToElement(element, stream, callback);

                return element;
            };
            attachUriStream = function(element, streamUri) {
                if (element.__phenixHasPlayedWebRtc) {
                    element = (new PhenixVideo(element, streamUri, false)).getElement();
                } else {
                    return attachUriStreamToElement(element, streamUri);
                }

                element.play();

                return element;
            };
            reattachMediaStream = reattachStreamToElement;
            getStats = function getPeerConnectionStats(pc, track, successCallback, errorCallback) {
                pc.getStats(track).then(_.bind(handleGetStatsSuccess, this, pc, successCallback), errorCallback);
            };

            webrtcSupported = true;

            break;
        case 'ReactNative':
            log('React Native detected', browser);

            attachMediaStream = function() {
                log('attachMediaStream not supported in React Native environment');
            };
            attachUriStream = function() {
                log('attachUriStream not supported in React Native environment');
            };
            reattachMediaStream = function() {
                log('reattachMediaStream not supported in React Native environment');
            };
            getStats = function getPeerConnectionStats(pc, track, successCallback, errorCallback) {
                pc.getStats(track).then(_.bind(handleGetStatsSuccess, this, pc, successCallback), errorCallback);
            };

            webrtcSupported = true;

            break;
        default:
            log('Browser does not appear to be WebRTC-capable', browser);

            break;
        }
    }

    function navigatorGetUserMedia(constraints, successCallback, errorCallback) {
        var onSuccess = _.bind(handleGetUserMediaSuccess, this, constraints, successCallback, errorCallback);

        if (navigator && navigator.mediaDevices && _.isFunction(navigator.mediaDevices.getUserMedia)) {
            return navigator.mediaDevices.getUserMedia(constraints)
                .then(function (mediaStream) {
                    return onSuccess(mediaStream);
                }).catch(function (e) {
                    return errorCallback(e);
                });
        }

        if (navigator && _.isFunction(navigator.getUserMedia)) {
            return navigator.getUserMedia(constraints, onSuccess, errorCallback);
        }

        if (envGlobal && _.isFunction(envGlobal.getUserMedia)) {
            return envGlobal.getUserMedia(constraints, onSuccess, errorCallback);
        }
    }

    function handleGetUserMediaSuccess(constraints, successCallback, errorCallback, stream) {
        setTimeout(function() {
            var tracks = stream.getTracks();

            for (var i = 0; i < tracks.length; i++) {
                var track = tracks[i];

                track.onended = function(event) {
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
    }

    function handleGetUserMediaUnavailable(message, errorCallback, tracks) {
        try {
            var error = new Error(message);

            error.code = 'unavailable';

            errorCallback(error);
        } finally {
            stopAllTracks(tracks);
        }
    }

    function stopAllTracks(tracks) {
        for (var j = 0; j < tracks.length; j++) {
            tracks[j].stop();
        }
    }

    function navigatorMediaDevicesEnumerateDevicesByTypeWrapper(type, callback) {
        if (type !== 'input' && type !== 'output') {
            throw new Error('Unsupported device type ' + type);
        }

        if (!navigator.mediaDevices) {
            return;
        }

        navigator.mediaDevices.enumerateDevices().then(function(devices) {
            var sources = [];

            devices.forEach(function(device) {
                if (device.kind === 'audio' + type) {
                    sources.push({
                        kind: 'audio',
                        id: device.deviceId,
                        label: device.label
                    });
                } else if (device.kind === 'video' + type) {
                    sources.push({
                        kind: 'video',
                        id: device.deviceId,
                        label: device.label
                    });
                }
            });

            callback(sources);
        });
    }

    function attachStreamToElement(element, stream, callback) {
        if (typeof element.srcObject !== 'undefined') {
            element.srcObject = stream;
        } else if (typeof element.mozSrcObject !== 'undefined') {
            element.mozSrcObject = stream;
        } else if (typeof element.src !== 'undefined') {
            element.src = URL.createObjectURL(stream);
        } else {
            log('Error attaching stream to element.');
        }

        var playPromise = element.play();

        if (playPromise === undefined) {
            if (typeof callback === 'function') {
                callback();
            }

            return element;
        }

        playPromise.then(function() {
            if (typeof callback === 'function') {
                callback();
            }
        }).catch(function(e) {
            log('Play() failed: ' + e);

            if (typeof callback === 'function') {
                callback(e);
            }
        });

        return element;
    }

    function attachUriStreamToElement(element, streamUri) {
        element.src = streamUri;

        element.play();

        return element;
    }

    function reattachStreamToElement(to, from) {
        to.src = from.src;

        return to;
    }

    function handleGetStatsSuccess(pc, successCallback, stats) {
        successCallback(normalizePeerConnectionStats(pc, stats));
    }

    function normalizePeerConnectionStats(pc, stats) {
        // TODO (DCY) add vendor specific logic to map all stats to same similar object
        switch (browser.browser) {
        case 'Edge':
            stats.forEach(function(stat) {
                stat.mediaType = getMediaTypeByCodecFromSdp(pc, stat.codecId);
                stat.bytesSent = estimateBytesFromNumberOfPacketsAndMediaType(stat.packetsSent, stat.mediaType);
                stat.bytesReceived = estimateBytesFromNumberOfPacketsAndMediaType(stat.packetsReceived, stat.mediaType);
            });

            break;
        case 'Safari':
            stats.forEach(function(stat) {
                if (_.includes(stat.id.toLowerCase(), 'audio') && _.includes(stat.id.toLowerCase(), 'rtp')) {
                    stat.mediaType = 'audio';
                }

                if (_.includes(stat.id.toLowerCase(), 'video') && _.includes(stat.id.toLowerCase(), 'rtp')) {
                    stat.mediaType = 'video';
                }
            });

            break;
        default:
            break;
        }

        return stats;
    }

    function getMediaTypeByCodecFromSdp(peerConnection, codec) {
        if (!codec) {
            return;
        }

        var mediaType;

        findInSdpSections(peerConnection, function(section) {
            if (_.startsWith(section, 'video') && _.includes(section.toLowerCase(), codec.toLowerCase())) {
                mediaType = 'video';
            }

            if (_.startsWith(section, 'audio') && _.includes(section.toLowerCase(), codec.toLowerCase())) {
                mediaType = 'audio';
            }
        });

        return mediaType;
    }

    function findInSdpSections(peerConnection, callback) {
        var localSections = peerConnection.localDescription.sdp.split('m=');
        var remoteSections = peerConnection.remoteDescription.sdp.split('m=');

        if (localSections.length !== remoteSections.length) {
            return false;
        }

        return _.findIndex(localSections, function(section, index) {
            return callback(section, index, remoteSections);
        });
    }

    function estimateBytesFromNumberOfPacketsAndMediaType(packets, mediaType) {
        var packetsReceivedNum = parseInt(packets) || 0;

        if (mediaType === 'audio') {
            return packetsReceivedNum * 100;
        }

        if (mediaType === 'video') {
            return packetsReceivedNum * 1080;
        }
    }

    return function getShim() {
        shimRTC();

        var adapter = {
            RTCPeerConnection: RTCPeerConnection,
            RTCSessionDescription: RTCSessionDescription,
            RTCIceCandidate: RTCIceCandidate,
            getSources: getSources,
            getDestinations: getDestinations,
            getUserMedia: getUserMedia,
            getStats: getStats,
            attachMediaStream: attachMediaStream,
            attachUriStream: attachUriStream || attachUriStreamToElement,
            reattachMediaStream: reattachMediaStream,
            webrtcSupported: webrtcSupported
        };

        adapter.exportGlobal = function() {
            envGlobal.RTCPeerConnection = adapter.RTCPeerConnection;
            envGlobal.RTCSessionDescription = adapter.RTCSessionDescription;
            envGlobal.RTCIceCandidate = adapter.RTCIceCandidate;
        };

        return adapter;
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2019 Phenix Real Time Solutions Inc. All Rights Reserved.
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
    'use strict';

    var webrtcAdapterShim = function webrtcAdapterShim() {

    };

    return webrtcAdapterShim;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=phenix-rtc-react-native.js.map