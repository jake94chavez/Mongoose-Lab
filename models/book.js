var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Set up the Book schema
var BookSchema = new mongoose.Schema({
	title: String,
	author: String,
	image: String,
	releaseDate: String
});

// Creates book model from the schema
var Book = mongoose.model('Book', BookSchema);

module.exports = Book;