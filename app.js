var express = require('express');
var app = express();

// use the PORT environment variable, if it exists, or 3000 if it does not
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	// you don't have to specify content type or header info; 
	// express figures that out for you
	res.send('<html><head></head><body><h1>Hello world!!</h1></body></html>');
});

app.get('/api', function(req, res) {
	// json takes care of converting the JavaScript object to JSON
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);