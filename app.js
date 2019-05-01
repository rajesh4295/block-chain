var express = require('express');
var bodyParser = require('body-parser');
var Blockchain = require('./lib/block-chain');

var routes = require('./routes/route');

var app = express();
app.use(bodyParser.json());

app.use('/', routes);

let _PORT = process.env._PORT || 4112;

app.listen(_PORT, () => {
    new Blockchain();
    console.log("Server Running on Port : "+_PORT);
})
