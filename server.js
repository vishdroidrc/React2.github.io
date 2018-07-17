// Dependencies
var express = require('express')
var mongoose = require('mongoose')
var logger = require('morgan')
var bodyParser = require('body-parser')
var request = require('request')

mongoose.Promise = Promise

var PORT = process.env.PORT || 3001
var app = express()

// Set the app up with morgan
app.use(logger('dev'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const apiController = require('./api/controllers/apiController.js')


// Database configuration
var databaseUrl = process.env.MONGODB_URI || 'mongodb://localhost/nytreact_db';

// Database configuration with mongoose
mongoose.connect(databaseUrl)
const db = mongoose.connection

// Show any mongoose errors
db.on('error', function (error) {
  console.log('Mongoose Error: ', error)
})

db.once('open', function () {
  console.log('Mongoose connection successful.')
})

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/dist'));
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

app.use('/api', apiController)

app.get('*', function(req, res) {
  let filePath = path.join(__dirname, './client/dist/index.html')
  res.sendFile(path.join(__dirname, './client/dist/index.html'));
  console.log("path " + filePath)
});

// Listen on port 3001
app.listen(PORT, function() {
  console.log('🌎 ==> Now listening on PORT %s! Visit http://localhost:%s in your browser!', PORT, PORT);
});
