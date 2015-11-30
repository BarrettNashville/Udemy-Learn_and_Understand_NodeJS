var greeting = 'Hello world!!!!';

function greet() {
	console.log(greeting);
}

// replace the exports property with a new object
// also, we are only exposing the function, not the greeting variable
// greeting is still avaialble to the return object function
// but it can't be modified.
// you could also add more objects, functions, variables that get
// wrapped up in the object returned
// this is called the "Revealing Module Pattern"
// Revealing Module Pattern = exposing only the properties and methods
// you want via a returned object.
// This is a very common and clean way to structure and protect
// code within modules.
module.exports = {
	greet: greet
}