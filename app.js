var obj = {
	name: 'John Doe',
	greet: function() {
		console.log(`Hello ${this.name}`);
	}
}

obj.greet();
// whatever you pass to call is what the 'this' keyword will point to
obj.greet.call({ name: 'Jane Doe'});
// apply is the same as call except you pass parameters in an array
// instead of a comma separated list as in call
obj.greet.apply({ name: 'Jane Doe'});