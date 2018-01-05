var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
Genre = require('./modules/genre');
Book = require('./modules/books');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/bookdetails');
var db = mongoose.connection;

app.get('/', function(req, res)  {
    res.send("Please use somethng eskse");
});

app.get('/api/genres', function(req, res)  {
   Genre.getGenres(function (err,genres) {
       if(err){
           throw err;
   }
   console.log("afa");
   res.json(genres);
});
});

app.post('/api/genres', function(req, res)  {
    var genre = req.body;
    Genre.addGenre(genre,function (err,genres) {
        if(err){
            throw err;
        }
        console.log("afa");
        res.json(genres);
    });
});

app.put('/api/genres/:id', function(req, res)  {
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id,genre,{},function (err,genres) {
        if(err){
            throw err;
        }
        console.log("afa");
        res.json(genres);
    });
});

app.delete('/api/genres/:id', function(req, res)  {
    var id = req.params._id;
    //var book = req.body;
    Genre.removeGenre(id,function (err,genre) {
        if(err){
            throw err;
        }
        console.log("afa");
        res.json(genre);
    });
});

app.get('/api/books', function(req, res)  {
    Book.getBooks(function (err,books) {
        if(err){
            throw err;
        }
        console.log("afa");
        res.json(books);
    });
});

app.post('/api/books', function(req, res)  {
    var genre = req.body;
    Book.addBook(genre,function (err,book) {
        if(err){
            throw err;
        }
        console.log("afa");
        res.json(book);
    });
});

app.get('/api/books/:_id', function(req, res)  {
    Book.getBookById(req.params._id,function (err,book) {
        if(err){
            throw err;
        }
        console.log("in bok details");
        res.json(book);
        console.log("in bok details");
    });
});



app.put('/api/books/:id', function(req, res)  {
    var id = req.params._id;
    var book = req.body;
    Book.updateBook(id,book,{},function (err,book) {
        if(err){
            throw err;
        }
        console.log("afa");
        res.json(book);
    });
});

app.delete('/api/books/:id', function(req, res)  {
    var id = req.params._id;
    //var book = req.body;
    Book.removeBook(id,function (err,book) {
        if(err){
            throw err;
        }
        console.log("afa");
        res.json(book);
    });
});

app.listen(3000);
console.log("Running");