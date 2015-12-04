var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	
	res.writeHead(200, {'Content-Type': 'text/html'});
	// piping to the response stream asyncrhonously
	// because of createReadStream
	fs.createReadStream(__dirname + '/index.htm').pipe(res);
	
}).listen(1337, '127.0.0.1');
