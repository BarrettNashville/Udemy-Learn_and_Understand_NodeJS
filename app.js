var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	
	res.writeHead(200, {'Content-Type': 'text/html'});
	// change buffer to a string by adding 'utf8'
	var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
	var message = 'Hello world...';
	html = html.replace('{Message}', message);
	res.end(html);
	
}).listen(1337, '127.0.0.1');

// template: text designed to be the basis for 
// final text or content after being processed.
// There's usually some specific template language,
// so the template system knows how to replace 
// placeholders with real values.