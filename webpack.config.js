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

/* global __dirname module */
const path = require('path');
const del = require('del');
const {merge} = require('webpack-merge');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const outputPath = path.join(__dirname, 'dist');

del.sync([path.resolve(outputPath, '**/*')]);

const baseConfig = {
    mode: 'production',
    output: {
        libraryTarget: 'umd',
        path: outputPath
    },
    context: path.join(__dirname, 'src'),
    entry: './main',
    devtool: 'source-map',
    plugins: [
        new CaseSensitivePathsPlugin()
    ],
    optimization: {minimize: false}
};
const externalizePhenixImports = (context, request, callback) => {
    if (/^phenix-.*$/.test(request)){
        return callback(null, true);
    }

    // Continue without externalizing the import
    callback();
};

var configs = [{
    output: {filename: 'phenix-rtc-bundled.js'},
    resolve: {alias: {'webrtc-adapter': 'webrtc-adapter/out/adapter.js'}}
}, {
    output: {filename: 'phenix-rtc-no-edge-bundled.js'},
    resolve: {alias: {'webrtc-adapter': 'webrtc-adapter/out/adapter_no_edge.js'}}
}, {
    output: {filename: 'phenix-rtc-react-native-bundled.js'},
    resolve: {alias: {'webrtc-adapter': path.resolve(__dirname, 'src', 'webrtcAdapterShim')}}
}, {
    output: {filename: 'phenix-rtc-react-native.js'},
    resolve: {alias: {'webrtc-adapter': path.resolve(__dirname, 'src', 'webrtcAdapterShim')}},
    externals: [externalizePhenixImports]
}, {
    output: {filename: 'phenix-rtc.js'},
    resolve: {alias: {'webrtc-adapter': 'webrtc-adapter/out/adapter.js'}},
    externals: [externalizePhenixImports]
}, {
    output: {filename: 'phenix-rtc-no-edge.js'},
    resolve: {alias: {'webrtc-adapter': 'webrtc-adapter/out/adapter_no_edge.js'}},
    externals: [externalizePhenixImports]
}];

module.exports = configs.map(function(config) {
    return merge(baseConfig, config);
});