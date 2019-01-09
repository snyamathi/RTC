/**
 * Copyright 2019 PhenixP2P Inc. All Rights Reserved.
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

/* global __dirname module */
var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

var baseConfig = {
    output: {
        libraryTarget: 'umd',
        path: path.join(__dirname, '/dist')
    },
    context: path.join(__dirname, '/src'),
    entry: './main',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}}),
        new CaseSensitivePathsPlugin()
    ]
};

var configs = [{
    output: {filename: 'phenix-rtc-bundled.js'},
    resolve: {
        alias: { // Webpack issue - alias libraries used in self and dependent libraries to avoid duplication in bundle
            'phenix-web-assert': path.resolve(__dirname, 'node_modules', 'phenix-web-assert'),
            'phenix-web-detect-browser': path.resolve(__dirname, 'node_modules', 'phenix-web-detect-browser'),
            'phenix-web-disposable': path.resolve(__dirname, 'node_modules', 'phenix-web-disposable'),
            'phenix-web-event': path.resolve(__dirname, 'node_modules', 'phenix-web-event'),
            'phenix-web-lodash-light': path.resolve(__dirname, 'node_modules', 'phenix-web-lodash-light'),
            'phenix-web-observable': path.resolve(__dirname, 'node_modules', 'phenix-web-observable'),
            'webrtc-adapter': 'webrtc-adapter/out/adapter.js'
        }
    }
}, {
    output: {filename: 'phenix-rtc-no-edge-bundled.js'},
    resolve: {
        alias: { // Webpack issue - alias libraries used in self and dependent libraries to avoid duplication in bundle
            'phenix-web-assert': path.resolve(__dirname, 'node_modules', 'phenix-web-assert'),
            'phenix-web-detect-browser': path.resolve(__dirname, 'node_modules', 'phenix-web-detect-browser'),
            'phenix-web-disposable': path.resolve(__dirname, 'node_modules', 'phenix-web-disposable'),
            'phenix-web-event': path.resolve(__dirname, 'node_modules', 'phenix-web-event'),
            'phenix-web-lodash-light': path.resolve(__dirname, 'node_modules', 'phenix-web-lodash-light'),
            'phenix-web-observable': path.resolve(__dirname, 'node_modules', 'phenix-web-observable'),
            'webrtc-adapter': 'webrtc-adapter/out/adapter_no_edge.js'
        }
    }
}, {
    output: {filename: 'phenix-rtc-react-native-bundled.js'},
    resolve: {
        alias: { // Webpack issue - alias libraries used in self and dependent libraries to avoid duplication in bundle
            'phenix-web-assert': path.resolve(__dirname, 'node_modules', 'phenix-web-assert'),
            'phenix-web-detect-browser': path.resolve(__dirname, 'node_modules', 'phenix-web-detect-browser'),
            'phenix-web-disposable': path.resolve(__dirname, 'node_modules', 'phenix-web-disposable'),
            'phenix-web-event': path.resolve(__dirname, 'node_modules', 'phenix-web-event'),
            'phenix-web-lodash-light': path.resolve(__dirname, 'node_modules', 'phenix-web-lodash-light'),
            'phenix-web-observable': path.resolve(__dirname, 'node_modules', 'phenix-web-observable'),
            'webrtc-adapter': path.resolve(__dirname, 'src', 'webrtcAdapterShim')
        }
    }
}, {
    output: {filename: 'phenix-rtc-react-native.js'},
    resolve: {
        alias: { // Webpack issue - alias libraries used in self and dependent libraries to avoid duplication in bundle
            'webrtc-adapter': path.resolve(__dirname, 'src', 'webrtcAdapterShim')
        }
    },
    externals: [{
        'phenix-web-assert': true,
        'phenix-web-detect-browser': true,
        'phenix-web-disposable': true,
        'phenix-web-event': true,
        'phenix-web-lodash-light': true,
        'phenix-web-observable': true
    }]
}, {
    output: {filename: 'phenix-rtc.js'},
    resolve: {
        alias: { // Webpack issue - alias libraries used in self and dependent libraries to avoid duplication in bundle
            'webrtc-adapter': 'webrtc-adapter/out/adapter.js'
        }
    },
    externals: [{
        'phenix-web-assert': true,
        'phenix-web-detect-browser': true,
        'phenix-web-disposable': true,
        'phenix-web-event': true,
        'phenix-web-lodash-light': true,
        'phenix-web-observable': true
    }]
}, {
    output: {filename: 'phenix-rtc-no-edge.js'},
    resolve: {
        alias: { // Webpack issue - alias libraries used in self and dependent libraries to avoid duplication in bundle
            'webrtc-adapter': 'webrtc-adapter/out/adapter_no_edge.js'
        }
    },
    externals: [{
        'phenix-web-assert': true,
        'phenix-web-detect-browser': true,
        'phenix-web-disposable': true,
        'phenix-web-event': true,
        'phenix-web-lodash-light': true,
        'phenix-web-observable': true
    }]
}];

module.exports = configs.map(function(config) {
    return webpackMerge(baseConfig, config);
});