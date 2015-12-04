var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	
	res.writeHead(200, {'Content-Type': 'application/json'});
	var object = {
		firstname: 'John',
		lastname: 'Doe'
	};
	res.end(JSON.stringify(object));
	
}).listen(1337, '127.0.0.1');
