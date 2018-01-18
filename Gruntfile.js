/**
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
/* global module */
var webpackConfig = require('./webpack.config');

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('default', []);
    grunt.registerTask('build', ['default', 'clean', 'webpack', 'uglify']);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['build'],
        concat: {
            rtc: {
                src: ['src/rtc/**/*.js', 'src/main.js'],
                dest: 'dist/phenix-rtc.js'
            }
        },
        webpack: webpackConfig,
        uglify: {
            minify: {
                files: {
                    'dist/phenix-rtc.min.js': ['dist/phenix-rtc.js'],
                    'dist/phenix-rtc-bundled.min.js': ['dist/phenix-rtc-bundled.js'],
                    'dist/phenix-rtc-no-edge.min.js': ['dist/phenix-rtc-no-edge.js'],
                    'dist/phenix-rtc-no-edge-bundled.min.js': ['dist/phenix-rtc-no-edge-bundled.js']
                }
            }
        }
    });
};