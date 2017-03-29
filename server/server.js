const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../.env')});
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const api = require('./routes/api');
const app = express();
const port = process.env.PORT || '4200';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/api', api);

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`server listenning on port: ${port}`));

