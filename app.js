// update this code using ES6 classes
'use strict';

var Greetr = require('./greetr');

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Barrett');