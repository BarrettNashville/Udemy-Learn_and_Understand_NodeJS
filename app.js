var EventEmitter = require('events');
var util = require('util');

function Greetr() {
	//this next line sends objects created with this function
	//constructor to the EventEmitter constructor to add on
	//additional functionality to this object directly, 
	//instead of through the prototype.
	//this one line of code ensures that my object created
	//from this function constructor has everything 
	//an object created from an event emitter would have
	EventEmitter.call(this);
	this.greeting = 'Hello World!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data); 
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Barrett');