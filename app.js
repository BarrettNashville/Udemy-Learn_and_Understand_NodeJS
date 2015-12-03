// pipe: connecting two streams by reading from one and writing it to another
// in Node you pipe from a Readable stream to a Writable stream
var fs = require('fs');
var zlib = require('zlib'); // allows us to gzip

var readable = fs.createReadStream(__dirname + '/greet.txt');
	
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// pipe() is called from a readable stream and accepts a writable stream
//readable.pipe(writable);

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');


// creates a "transform" stream, both readable and writable
// this variable holds the compressed stream
var gzip = zlib.createGzip();

readable.pipe(writable);

// read from text file, compress it, and write compressed contents to file
readable.pipe(gzip).pipe(compressed);