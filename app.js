//require('./greet.js');

// can't call greet() here because a module doesn't affect the code in the rest of the application
// that is, unless you use module.exports in the module which returns a value here

// you can remove .js from the require parameter if you want
// var greet = require('./greet.js');

var greet = require('./greet');
greet();