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
            'webrtc-adapter': 'webrtc-adapter/out/adapter.js',
            'phenix-web-lodash-light': path.resolve(__dirname, 'node_modules', 'phenix-web-lodash-light'),
            'phenix-web-assert': path.resolve(__dirname, 'node_modules', 'phenix-web-assert'),
            'phenix-web-observable': path.resolve(__dirname, 'node_modules', 'phenix-web-observable'),
            'phenix-web-detect-browser': path.resolve(__dirname, 'node_modules', 'phenix-web-detect-browser')
        }
    }
}, {
    output: {filename: 'phenix-rtc-no-edge-bundled.js'},
    resolve: {
        alias: { // Webpack issue - alias libraries used in self and dependent libraries to avoid duplication in bundle
            'webrtc-adapter': 'webrtc-adapter/out/adapter_no_edge.js',
            'phenix-web-lodash-light': path.resolve(__dirname, 'node_modules', 'phenix-web-lodash-light'),
            'phenix-web-assert': path.resolve(__dirname, 'node_modules', 'phenix-web-assert'),
            'phenix-web-observable': path.resolve(__dirname, 'node_modules', 'phenix-web-observable'),
            'phenix-web-detect-browser': path.resolve(__dirname, 'node_modules', 'phenix-web-detect-browser')
        }
    }
}, {
    output: {filename: 'phenix-rtc.js'},
    resolve: {
        alias: { // Webpack issue - alias libraries used in self and dependent libraries to avoid duplication in bundle
            'webrtc-adapter': 'webrtc-adapter/out/adapter.js'
        }
    },
    externals: [{
        'phenix-web-lodash-light': true,
        'phenix-web-assert': true,
        'phenix-web-observable': true,
        'phenix-web-detect-browser': true
    }]
}, {
    output: {filename: 'phenix-rtc-no-edge.js'},
    resolve: {
        alias: { // Webpack issue - alias libraries used in self and dependent libraries to avoid duplication in bundle
            'webrtc-adapter': 'webrtc-adapter/out/adapter_no_edge.js'
        }
    },
    externals: [{
        'phenix-web-lodash-light': true,
        'phenix-web-assert': true,
        'phenix-web-observable': true,
        'phenix-web-detect-browser': true
    }]
}];

module.exports = configs.map(function(config) {
    return webpackMerge(baseConfig, config);
});