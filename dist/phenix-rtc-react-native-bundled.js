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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
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
    __webpack_require__(15)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (LodashLight) {
    'use strict';

    return LodashLight;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
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
    __webpack_require__(10)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (assert) {
    return assert;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
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
    __webpack_require__(11)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (detectBrowser) {
    return detectBrowser;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
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
    __webpack_require__(14)
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
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
    __webpack_require__(4),
    __webpack_require__(16),
    __webpack_require__(17)
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(7),
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, WaitFor, envGlobal) {
    'use strict';

    var log = function() {
        console.log.apply(console, arguments);
    } || function() {
        };

    var logError = function() {
        console.error.apply(console, arguments);
    } || log;

    function PhenixVideo(ghost, stream, isUsingPlugin) {
        var that = this;

        this._ghost = ghost;
        this._stream = stream;
        this._isUsingPlugin = isUsingPlugin;
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
            this._video = createPhenixVideoElement(isUsingPlugin);
            this._video.className = this._ghost.className;
            this._video.height = this._ghost.height;
            this._video.width = this._ghost.width;

            this._ghost.style.cssText = 'visibility:hidden !important;width:0px !important;height:0px !important;' +
                'margin:0px !important;padding:0px !important;' +
                'border-style:none !important;border-width:0px !important;' +
                'max-width:0px !important;max-height:0px !important;outline:none !important';

            this._video.onunload = function() {
                that._loaded = false;
            };

            observeInsertion.call(this);

            if (!document.body || !document.body.contains) {
                log('document.body.contains is not supported');
            }

            if (document.body && document.body.contains && document.body.contains(this._ghost)) {
                this._ghost.parentNode.replaceChild(this._video, this._ghost);
            }

            if (!isUsingPlugin) {
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

        this.addEventListener('error', function() {
            dispatchEvent(ghost, 'error');
        });
        this.addEventListener('mute', function() {
            ghost.muted = that._video.muted;
            dispatchEvent(ghost, 'mute');
        });
        this.addEventListener('unmute', function() {
            ghost.muted = that._video.muted;
            dispatchEvent(ghost, 'unmute');
        });
        this.addEventListener('ended', function() {
            ghost.ended = that._video.ended;
            dispatchEvent(ghost, 'ended');
        });
        this.addEventListener('loadedmetadata', function() {
            ghost.width = that._video.width;
            ghost.height = that._video.height;
            dispatchEvent(ghost, 'loadedmetadata');
        });
        this.addEventListener('loadeddata', function() {
            ghost.width = that._video.width;
            ghost.height = that._video.height;
            dispatchEvent(ghost, 'loadeddata');
        });
        this.addEventListener('resize', function() {
            ghost.width = that._video.width;
            ghost.height = that._video.height;
            dispatchEvent(ghost, 'resize');
        });
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

    function createPhenixVideoElement(isUsingPlugin) {
        var video = document.createElement('video');

        if (isUsingPlugin) {
            video = document.createElement('object');

            video.type = 'application/x-phenix-video';
        }

        return video;
    }

    function addEventListener(name, listener, useCapture) { // eslint-disable-line no-unused-vars
        if (!this._isUsingPlugin) {
            return this._video.addEventListener(name, listener, useCapture);
        }

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
        if (!this._isUsingPlugin) {
            return this._video.removeEventListener(name, listener, useCapture);
        }

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
        } else {
            // For older browsers. There is a significant performance overhead with this method.
            // See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events
            log('Falling back to use of DOM event listeners. This results in degraded performance for further DOM modifications and does not work for IE prior to version 9. See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events for details.');

            if (that._ghost.addEventListener) {
                that._ghost.addEventListener('DOMAttrModified', function(event) {
                    that._video[event.target.tagName] = that._ghost[event.target.tagName];
                }, false);
            } else {
                that._ghost.attachEvent('onpropertychange', function(event) {
                    that._video[event.target.tagName] = that._ghost[event.target.tagName];
                });
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

            addEventListener(that._ghost, 'DOMNodeInserted', function() {
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(3)
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(5),
    __webpack_require__(3),
    __webpack_require__(2),
    __webpack_require__(21),
    __webpack_require__(20)
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function(envGlobal) {
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
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
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
    var Assert = function () {

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

    Assert.prototype.isArrayOfString = function (value, name) {
        Assert.prototype.isString(name, 'name');
        Assert.prototype.isArray(value, name);

        _.forEach(value, function (val, key) {
            Assert.prototype.isString(val, name + '[' + key + ']');
        });
    };

    return new Assert();
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_) {
    'use strict';

    function DetectBrowser(userAgent) {
        this._userAgent = userAgent || '';
    }

    DetectBrowser.prototype.detect = function () {
        var browser = 'Unknown';
        var version = '?';
        var browserMatch = this._userAgent.match(/(Chrome|Chromium|Firefox|Opera|Safari)+\//);
        var versionMatch = this._userAgent.match(/(Chrome|Chromium|Firefox|Version)+\/([0-9]+)\./);
        var isWebview = false;

        if (browserMatch && browserMatch.length >= 2) {
            browser = browserMatch[1];
        } else if (this._userAgent.match(/^\(?Mozilla/)) {
            browser = 'Mozilla';

            if (this._userAgent.match(/MSIE/)
                || this._userAgent.match(/; Trident\/.*rv:[0-9]+/)) {
                browser = 'IE';

                if (versionMatch = this._userAgent.match(/MSIE ([0-9]+)/)) { // eslint-disable-line no-cond-assign
                    version = parseInt(versionMatch[1], 10);

                    // Compatibility view?
                    if (versionMatch = this._userAgent.match(/MSIE [0-9]+.*MSIE ([0-9]+)/)) { // eslint-disable-line no-cond-assign
                        version = parseInt(versionMatch[1], 10);
                    }
                } else if (versionMatch = this._userAgent.match(/rv:([0-9]+)/)) { // eslint-disable-line no-cond-assign
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
        } else if (browser === 'Mozilla' && this._userAgent.match(/iphone|ipod|ipad/i)) {
            browser = 'Safari';
            version = parseInt(_.get(this._userAgent.match(/OS\s([0-9]+)/), [1]), 10);
            isWebview = true;
        }

        // https://developer.chrome.com/multidevice/user-agent
        if (browser === 'Chrome' && (this._userAgent.match(/; wv/) || (this._userAgent.match(/Android/) && this._userAgent.match(/Version\/[0-9].[0-9]/)))) {
            isWebview = true;
        }

        if (browser !== 'IE' && versionMatch && versionMatch.length >= 3) {
            version = parseInt(versionMatch[2], 10);
        }

        if (navigator.product === 'ReactNative') {
            browser = 'ReactNative';
            version = navigator.productSub || '?';
        }

        return {
            browser: browser,
            version: version,
            isWebview: isWebview
        };
    };

    return DetectBrowser;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
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
    __webpack_require__(12),
    __webpack_require__(13)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (Disposable, DisposableList) {
    return {
        Disposable: Disposable,
        DisposableList: DisposableList
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
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

    var _ = function () {

    };

    _.get = function get(objectToTraverse, path, defaultValue) {
        if (_.isNullOrUndefined(objectToTraverse)) {
            return defaultValue;
        }

        assertIsObject(objectToTraverse, 'objectToTraverse');

        var properties = path;

        if (_.isString(properties)) {
            properties = buildPathFromString(path);
        } else if (!_.isArray(properties)) {
            throw new Error('Unsupported path type ' + typeof path);
        }

        var valueAtPath = _.reduce(properties, function (valueAtPath, prop) {
            if (_.isObject(valueAtPath) || _.isArray(valueAtPath)) {
                return valueAtPath[prop];
            }

            return;
        }, objectToTraverse);

        return _.isUndefined(valueAtPath) ? defaultValue : valueAtPath;
    };

    _.set = function get(objectToTraverse, path, value) {
        if (!_.isObject(objectToTraverse)) {
            return objectToTraverse;
        }

        assertIsObject(objectToTraverse, 'objectToTraverse');

        var currentLocation = objectToTraverse;
        var properties = path;

        if (_.isString(properties)) {
            properties = buildPathFromString(path);
        } else if (!_.isArray(properties)) {
            throw new Error('Unsupported path type ' + typeof path);
        }

        _.forEach(properties, function (prop, index) {
            setNextValue(currentLocation, prop, getNextValue(properties, index, currentLocation, value));

            currentLocation = currentLocation[prop];
        });

        return objectToTraverse;
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
            var callbackResponse = callback(collection[i], i);

            if (callbackResponse === false) {
                return;
            }
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

    _.argumentsToArray = function (args) {
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

        _.forEach(sources, function (source, index) {
            assertIsObject(source, 'source ' + index);

            _.forOwn(source, function (value, key) {
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
            _.forEach(collection, function (item, index) {
                result = callback(result, item, index);
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
        } else if (target.removeEventListener) {
            target.removeEventListener(eventName, listener, !!useCapture);
        } else if (target.detachEvent) {
            target.detachEvent("on" + eventName, listener);
        }
    };

    var assertIsArray = function assertIsArray(collection) {
        if (!_.isArray(collection)) {
            throw new Error('Input must be an array.');
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
            throw new Error('collection type not supported - ' + name + ' must be an array or object.');
        }
    };

    var assertIsFunction = function assertIsFunction(callback, name) {
        assertIsString(name, 'name');

        if (!_.isFunction(callback)) {
            throw new Error(name + ' must be a function.');
        }
    };

    var assertIsString = function assertIsString(value, name) {
        if (!_.isString(name)) {
            throw new Error('Name must be a string.');
        }

        if (!_.isString(value)) {
            throw new Error(name + ' must be a string.');
        }
    };

    function buildPathFromString(stringPath) {
        var properties = stringPath.split('.');
        var path = [];

        _.forEach(properties, function (prop) {
            path = path.concat(buildSubPathFromString(prop));
        });

        return path;
    }

    function buildSubPathFromString(stringPath) {
        var possibleSubPath = '';
        var path = [];
        var countOfOpeningBrackets = 0;

        for (var i = 0; i < stringPath.length; i++) {
            if (stringPath[i] === '[') {
                countOfOpeningBrackets++;

                if (!_.isString(possibleSubPath) || countOfOpeningBrackets > 1) {
                    return [stringPath];
                }

                if (possibleSubPath) {
                    path.push(possibleSubPath);
                    possibleSubPath = '';
                }
            } else if (stringPath[i] === ']') {
                countOfOpeningBrackets--;

                if (countOfOpeningBrackets !== 0) {
                    return [stringPath];
                }

                path.push(possibleSubPath);
                possibleSubPath = '';
            } else if (i === stringPath.length - 1) {
                return [stringPath];
            } else {
                possibleSubPath += stringPath[i];
            }
        }

        return path;
    }

    function getNextValue(path, index, currentLocation, value) {
        if (path.length - 1 === index) {
            return value;
        }

        var currentPropOrIndex = path[index];
        var nextPropOrIndex = path[index + 1];

        if (_.isArray(currentLocation[currentPropOrIndex]) || _.isObject(currentLocation[currentPropOrIndex])) {
            return currentLocation[currentPropOrIndex];
        }

        if (!_.isArray(currentLocation[currentPropOrIndex]) && _.isNumber(parseInt(nextPropOrIndex))) {
            return [];
        } else if (!_.isObject(currentLocation[currentPropOrIndex]) && _.isString(nextPropOrIndex)) {
            return {};
        }

        throw new Error('Unsupported type ' + typeof currentPropOrIndex + ' when setting property or index');
    }

    function setNextValue(objectToTraverse, propertyOrIndex, value) {
        if (_.isNumber(parseInt(propertyOrIndex)) && _.isArray(objectToTraverse)) {
            return objectToTraverse[propertyOrIndex] = value;
        } else if (_.isString(propertyOrIndex) && _.isObject(objectToTraverse)) {
            return objectToTraverse[propertyOrIndex] = value;
        }

        throw new Error('Unsupported type ' + typeof propertyOrIndex + ' when setting property or index');
    }

    return _;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
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
    __webpack_require__(4)
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
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
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(8),
    __webpack_require__(9)
], __WEBPACK_AMD_DEFINE_RESULT__ = function(adapter, exportGlobal) {
    adapter.onLoaded = function() {
        exportGlobal(adapter);
    };

    adapter.onLoaded();

    return adapter;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(5),
    __webpack_require__(7),
    __webpack_require__(6)
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(3),
    __webpack_require__(22),
    __webpack_require__(2),
    __webpack_require__(6)
], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, DetectBrowser, webRtcAdapter, envGlobal, PhenixVideo) { // eslint-disable-line no-unused-vars
    'use strict';

    var log = function() {
        console.log.apply(console, arguments);
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

            // Attach a media stream to an element.
            attachMediaStream = function(element, stream) {
                log('Attaching media stream');

                var muted = element.muted;

                if (browser.version > 57) {
                    element.srcObject = stream;
                }

                element.mozSrcObject = stream;
                element.play();

                if (muted === true) {
                    // FF unmutes upon play()
                    element.muted = true;
                }

                return element;
            };

            reattachMediaStream = function(to, from) {
                log('Reattaching media stream');

                var muted = to.muted;

                if (browser.version > 57) {
                    to.srcObject = from.srcObject;
                }

                to.mozSrcObject = from.mozSrcObject;
                to.play();

                if (muted === true) {
                    // FF unmutes upon play()
                    to.muted = true;
                }

                return to;
            };

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

            attachMediaStream = function(element, stream) {
                if (_.isObject(stream)) {
                    element.__phenixHasPlayedWebRtc = true;
                }

                element = attachStreamToElement(element, stream);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
    'use strict';

    var webrtcAdapterShim = function webrtcAdapterShim() {

    };

    return webrtcAdapterShim;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })
/******/ ]);
});
//# sourceMappingURL=phenix-rtc-react-native-bundled.js.map