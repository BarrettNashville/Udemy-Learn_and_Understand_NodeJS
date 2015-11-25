// returns function
var greet = require('./greet1');
greet();

// adds greet property to module.exports
var greet2 = require('./greet2').greet;
greet2();

// calls a function constructor 
// and returns an object with a greet method
var greet3 = require('./greet3');
greet3.greet();

// different object or same object?
greet3.greeting = "Changed hello world!";

var greet3b = require('./greet3');
greet3b.greet();
// same object
// because Node caches Module.Exports for each file name
