var http = require('http');

http.createServer(function(req, res) {
	
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World\n');
	
	//this is the IP for localhost
}).listen(1337, '127.0.0.1');

// accessible through: http://localhost:1337/