var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

// using some middleware to load a CSS file
// it's typical to have a "public"" folder that is accessible via a /assets URL
// app.use just takes a pattern and returns a function. 
// express.static() returns a function
app.use('/assets', express.static(__dirname + '/public'));

// you can create your own middleware using app.use() as well
app.use('/', function(req, res, next) {
	console.log('Request Url: ' + req.url); 
	next(); // this just means: run the next middlware
});

app.get('/', function(req, res) {
	res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello world!!</h1></body></html>');
});

app.get('/person/:id', function(req, res) {
	res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);