module.exports = function(app) {
	
	/// EXAMPLE OF THE STRUCTURE OF A RESTful API
	app.get('/api/person/:id', function(req, res) {
		// get that data from the database for that person
		res.json({ firstname: 'John', lastname: 'Doe' });
	});
	
	
	app.post('/api/person', function(req, res) {
		// save to the database for that person
	});
	
	app.delete('api/person/:id', function(req, res) {
		// delete from the database for that person
	});	
};