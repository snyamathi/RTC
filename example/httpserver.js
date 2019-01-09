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

/* global process */
const express = require('express');
const path = require('path');
const http = require('http');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const WebSocket = require('websocket');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(process.cwd(), 'example')));
app.use(express.static(path.join(process.cwd(), 'dist')));
app.use(express.static(path.join(process.cwd(), 'src')));
app.use(express.static(path.join(process.cwd(), 'node_modules')));

app.get('/', function(req, res) {
    res.redirect('/PhenixRTC.html');
});

app.post('/log', function(req, res) {
    console.log(req.body);
    res.send(200);
});

const httpServer = http.createServer(app);

httpServer.listen(8888);

console.log('Listening on port 8888');

if (process.env['PHENIX_HTTPS_PFX']) {
    const httpsOptions = {
        pfx: fs.readFileSync(process.env['PHENIX_HTTPS_PFX']),
        passphrase: process.env['PHENIX_HTTPS_PASSPHRASE']
    };
    const httpsServer = https.createServer(httpsOptions, app);

    httpsServer.listen(8843);

    console.log('Listening on port 8843/https');

    var wss = new WebSocket.server({httpServer: httpsServer});

    var activeConnections = {};

    wss.on('request', function(request) {
        var connectionId = Math.random().toString();
        var connection = request.accept(null, request.origin);

        console.log('Connection [%s] for origin [%s]', connectionId, request.origin);

        activeConnections[connectionId] = connection;

        // This is the most important callback for us, we'll handle
        // all messages from users here.
        connection.on('message', function(message) {
            if (message.type === 'utf8') {
                var decodedMessage = JSON.parse(message.utf8Data);

                console.log('Connection [%s] Received message [%s] with reported Id of', connectionId, decodedMessage.type, decodedMessage.connectionId);

                Object.keys(activeConnections).forEach(function(activeConnectionId) {
                    if (decodedMessage.connectionId === activeConnectionId) {
                        return;
                    }

                    activeConnections[activeConnectionId].send(message.utf8Data);
                });
            }
        });

        connection.on('close', function() {
            delete activeConnections[connectionId];

            console.log('closing connection [%s]', connectionId);
        });

        connection.send(JSON.stringify({
            type: 'Initialized',
            connectionId: connectionId
        }));
    });
}