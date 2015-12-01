// template literals: a way to concatenate strings in JavaScript
// easier to work with than a bunch of strings concatenated with '+'
// this is a new feature in ES6

// old way

var name = 'John Doe';
var greet = 'Hello ' + name;

// ES6 way
// uses the backtick
var greet2 = `Hello ${ name }`;

console.log(greet);
console.log(greet2);
