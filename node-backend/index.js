var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var port = 4200;

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/react')
    .then(() => {
        console.log('Start');
    })
    .catch((err) => {
        console.log('App error', err.stack);
        process.exit(1);
    });

var itemRouter = require('./src/routes/itemRouter');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/items', itemRouter);

app.listen(port, function() {
    console.log('Node server is running on port 4200.');
});