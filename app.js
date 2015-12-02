// get built-in fs module
var fs = require('fs');

// read file syncrhonously
// may be good for config file you need to read before other code should run
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', 
// callback function for asynchronous function call
// Error-First Callback: callbacks that take an error object
// as their first parameter. 
// null if no error, otherwise will contain an object defining the error.
// This is a standard so we know in what order to place our 
// parameters for our callbacks. 
function(err, data) {
	console.log(data); // returns a buffer
});
// this uses buffers so it could cause performance problems
// if a lot of people are using this code at once.
// that puts a lot of stuff on the heap

console.log('Done!');