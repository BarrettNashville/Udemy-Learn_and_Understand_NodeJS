var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

// using a basic templating engine called EJS, simliar to ASP.NET web forms
// by default express will look for the static view files inside a folder called views
app.set('view engine', 'ejs'); 

app.use('/', function(req, res, next) {
	console.log('Request Url: ' + req.url); 
	next(); 
});

app.get('/', function(req, res) {
	//express will go to views and look for a file named below, plus the extension above (ejs).
	//this makes changing the view engine easier 
	res.render('index');
});

app.get('/person/:id', function(req, res) {
	// the second argument passed to render is an object of URL parameters
	res.render('person', {ID: req.params.id});
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);