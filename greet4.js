function Greetr() {
	this.greeting = 'Hello World!!!';
	this.greet = function() {
		console.log(this.greeting);
	}
}

// return the function constructor itself, 
// giving app.js the ability to create new objects
module.exports = Greetr;