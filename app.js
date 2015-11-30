var util = require('util');
// util is a native module
// you don't put ./ before these modules

// they include additional functionality like below
var name = 'Barrett';
var greeting = util.format('Hello, %s', name);
util.log(greeting);