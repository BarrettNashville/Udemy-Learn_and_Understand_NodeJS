function Emitter() {
	this.events = {};
}

//event listener: code that responds to an event
//many listeners can listen for the same event

Emitter.prototype.on = function(type, listener) {
	this.events[type] = this.events[type] || [];
	this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
	if(this.events[type]) {
		this.events[type].forEach(function(listener) {
			listener();
		});
	}
}

module.exports = Emitter;