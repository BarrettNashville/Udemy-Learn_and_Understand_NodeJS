// this will return an object directly instead of having to use module.exports, since its JSON
var greetings = require('./greetings.json');

var greet = function() {
	
	console.log(greetings.en);
	
}

module.exports = greet;