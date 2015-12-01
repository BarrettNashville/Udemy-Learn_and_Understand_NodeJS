var EventEmitter = require('events');
var util = require('util');

function Greetr() {
	this.greeting = 'Hello World!';
}

// any objects created from Greetr should also have access
// to the methods and properties on the prototype property
// of EventEmitter
util.inherits(Greetr, EventEmitter);

// you can still add additional properties to the prototype
// of Greetr
Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data);
	
	// a method from the EventEmitter prototype
	// we are able to pass parameters to the emit method,
	// data in this case
	this.emit('greet', data); 
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Barrett');