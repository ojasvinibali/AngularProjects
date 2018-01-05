/**
 * Created by Ojasvini on 7/29/2017.
 */
var mongoose = require('mongoose');

// Book Schema
var bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
     Author:{
        type: String,
        required: true
    },
    Publisher:{
        type: String
    },
    image_url:{
        type: String
    },
    pages:{
        type: String
    },

    buy_url:{
        type: String
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});
// change collection name from here
const Book = module.exports = mongoose.model('books', bookSchema);


// Get Books
module.exports.getBooks = function(callback, limit) {
    Book.find(callback).limit(limit);
}

module.exports.getBookById = function(id,callback) {
    Book.findById(id,callback);
}


//Add book
module.exports.addBook = function(book,callback) {
    Book.create(book,callback);
}

// Update Book
module.exports.updateBook = function(id, book, options, callback)  {
    var query = {_id: id};
    var update = {
        title: book.title,
        genre: book.genre,
        description: book.description,

    }
    Book.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.removeBook = function(id, callback)  {
    var query = {_id: id};
    Book.remove(query, callback);
}