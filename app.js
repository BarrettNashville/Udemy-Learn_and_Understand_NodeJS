var buf = new Buffer('Hello', 'utf8'); // create buffer with UTF8 encoding
console.log(buf); // show contents of buffer
console.log(buf.toString()); // show contents as string
console.log(buf.toJSON()); // show contents as JSON
console.log(buf[2]); // buffers act like arrays
buf.write('wo'); // overwrite first two chars in buffer
console.log(buf.toString()); //show new contents of buffer