var fs = require('fs');

// the second argument to createReadStream is an optional options object 
var readable = fs.createReadStream(__dirname + '/greet.txt', 
	{ encoding: 'utf8', highWaterMark: 16 * 1024});
	
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

/*
readable.on('data', function(chunk) {
	console.log(chunk);
});
*/
// the default buffer size is 64k so it only logs once if txt file less than that.
// if file is larger than that, log is run multiple times.

readable.on('data', function(chunk) {
	console.log(chunk.length);
	
	//copy contents of greet.txt in chunks to greetcopy.txt
	//this minimizes memory usage on the server.
	writable.write(chunk);
});
// this is so common in Node, there is a faster way to do it
