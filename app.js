var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	
	if(req.url === '/') {
		fs.createReadStream(__dirname + '/index.htm').pipe(res);
	}
	
	else if(req.url === '/api') {
		res.writeHead(200, {'Content-Type': 'application/json'});
		var object = {
			firstname: 'John',
			lastname: 'Doe'
		};
		res.end(JSON.stringify(object));
	}
	else {
		// default 
		res.writeHead(404);
		res.end('404 - Nothing here');
	}
	
}).listen(1337, '127.0.0.1');
