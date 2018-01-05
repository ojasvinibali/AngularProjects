var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    console.log("Fsafs");
    $routeProvider.when('/', {
        controller:'BooksController',
        templateUrl: 'views/books.html'

    })
        .when('/books', {
            controller:'BooksController',
            templateUrl: 'views/books.html'
        })
        .when('/books/details/:id',{
            controller:'BooksController',
            templateUrl: 'views/bookDetails.html'
        })
        .when('/books/add',{
            controller:'BooksController',
            templateUrl: 'views/addBooks.html'
        })
        .when('/books/edit/:id',{
            controller:'BooksController',
            templateUrl: 'views/editBooks.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});