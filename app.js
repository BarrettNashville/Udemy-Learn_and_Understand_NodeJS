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

// this time we return the function constructor
// and call it, creating a new object each time
// instead of returning the one object every time
// as above in greet3
var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

var greet5 = require('./greet5').greet;
greet5();