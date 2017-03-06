function newBook(title, author, numberOfPages, x) {
    //properties
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    //events
    //methods
    this.fetcha = new Date(x).toDateString().substr(4);
}

var library = function () {

}; //array
library.prototype.myBookArray = new Array();

library.prototype.addBook = function (book) {
    this.myBookArray.push(book);
    return this.myBookArray; //shift/push
};
library.prototype.removeBookByTitle = function (title) {
    for (var i = 0; i < this.myBookArray.length; i++) {
        //console.log(this.myBookArray[i].title);
        if (this.myBookArray[i].title == title) {
            this.myBookArray.splice(i, 1);
            return true;
        } else if (this.myBookArray[i].title !== title) {
            return false;
        }
    }; //a loop
};
library.prototype.removeBookByAuthor = function (author) {
    for (var i = 0; i < this.myBookArray.length; i++) {
        //console.log(this.myBookArray[i].title);
        if (this.myBookArray[i].author == author) {
            return this.myBookArray.splice(i, 1);
        } else if (this.myBookArray[i].title !== author) {
            return "Author Not Found";
        }
    };
    //loop
};
library.prototype.getRandomBook = function () {
    var randomBook = Math.floor(Math.random() * this.myBookArray.length);
    return this.myBookArray[randomBook]; //MathRandom
};
library.prototype.getBookByTitle = function (title) {
    var regex = new RegExp(title, 'gi');
    var arr1 = new Array();
    if (this.myBookArray[i].title !== title)
        for (var i = 0; i < this.myBookArray.length; i++)
            if (this.myBookArray[i].title.match(regex))
                arr1.push(this.myBookArray[i]);
    return arr1;
};
library.prototype.getBooksByAuthor = function (author) {
    var regex = new RegExp(author, 'gi');
    var arr1 = new Array();
    if (this.myBookArray[i].author !== author)
        for (var i = 0; i < this.myBookArray.length; i++) {
            if (this.myBookArray[i].author.match(regex)) {
                arr1.push(this.myBookArray[i]);
            }
        }
    return arr1; //
};
library.prototype.addBooks = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        this.myBookArray.push(arr[i]);
    }
    if (arr.length !== 0) {
        return arr.length;
    } else if (arr.length === 0) {
        return 0;
    }
};
library.prototype.getAuthors = function () {
    var authors = new Array();
    for (var i = 0; i < this.myBookArray.length; i++) {
        if (authors.indexOf(this.myBookArray[i].author) < 0) {
            authors.push(this.myBookArray[i].author);
        } //prob indexOf or regex
    };
    return authors;
};
library.prototype.getRandomAuthorName = function () {
    var randomAuthor = Math.floor(Math.random() * this.myBookArray.length);
    return this.myBookArray[randomAuthor].author; //MathRandom
};

var glibrary = new library();
//declaring variables and assigning new instances of our newBook class
var book1 = new newBook("The Giver", "Erik R.", 345, "03/03/2001");
var book2 = new newBook("Harry Potter", "J.K R.", 234, "03/04/2001");
var book3 = new newBook("Crime", "Jack Smith", 363, "03/05/2001");
var book4 = new newBook("Mystery", "John Doe", 868, "03/06/2001");

//date