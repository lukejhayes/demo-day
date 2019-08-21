// Required dependencies
var express = require('express');
var path = require('path');

// Configure the Express application
var app = express();
var PORT = process.env.PORT || 8080;

// Expose the public directory to access CSS files
app.use(express.static('public'));
app.use(express.static('public/login/build'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add the application routes
require(path.join(__dirname, './routes/htmlroutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('---------------------------------------');
  console.log('HAYES BEER is listening on PORT: ' + PORT);
  console.log('----------------------------------------');
});