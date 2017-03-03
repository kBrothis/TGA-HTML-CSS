function Book(title, author, numberOfPages, publishDate) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.publishDate = publishDate;

    this.storeBook() = function () {
        if (typeof (Storage) !== "underfined") {
            //store data for one session
            sessionStorage .setItem()
        } else {
            return false;
        }
    }

    this.retrieveBook() = function () {
        if (typeof (Storage) !== "underfined") {
            //store data for one session
            document.getElementById("result").innerHTML = localStorage.getItem("lastname");
        } else {
            return false;
        }
    }

    this.addBook() = function (book) {
        this.title = book.title;
        this.author = book.author;
        this.numberOfPages = book.numberOfPages;
        this.publishDate = book.publishDate;
    }
}

var book1 = new Book("book11", "author1", 1, 1);
var book2 = new Object({title: "fadsf", author:"fa",numberOfPages: 3, publishDate:3});
console.log(book1);
