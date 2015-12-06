var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false});
// adding a parser to handley json in the body of a POST request
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs'); 

app.use('/', function(req, res, next) {
	console.log('Request Url: ' + req.url); 
	next(); 
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/person/:id', function(req, res) {
	// express pulls values from URL automatically for GET requests
	// however it will not pull values from content body for POST requests,
	// so for this we need more middleware, like body-parser
	res.render('person', {ID: req.params.id, Qstr: req.query.qstr});
});

// urlencodedParser is just a callback function, much like our custom function which comes next.
// urlencodedParser parses the body of the post request
app.post('/person', urlencodedParser, function(req, res) {
	res.send('Thank you!');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});

app.post('/personjson', jsonParser, function(req, res) {
	res.send('Thank you for the JSON data!');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);