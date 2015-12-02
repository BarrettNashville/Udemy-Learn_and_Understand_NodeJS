// ES6 typed arrays: using binary data in javascript

var buffer = new ArrayBuffer(8); // 8 bytes
var view = new Int32Array(buffer); // a way to deal with binary data in the buffer
view[0] = 5;
view[1] = 15;
console.log(view);