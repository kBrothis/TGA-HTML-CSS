$(function () {
   // console.log("test")
    window.book1 = new Book({ title: "book11", author: "author1", pages: 1, date: "11/11/1111" });
    window.book2 = new Book({ title: "book22", author: "author2", pages: 2, date: "22/22/2222" });

    window.gLib = new Lib();
});

var Lib = function () {
    this.myBookArray = new Array();
    this.myBookArray.push(window.book1);
    this.myBookArray.push(window.book2);
    return this;
};

Lib.prototype.onClickFormSubmit = function () {
    console.log(document.getElementById("title").value);
    
    //this.addBook({ title: document.getElementById("title").value, author: document.getElementById("author").value, pages: document.getElementById("page").value, date: document.getElementById("date").value });
};

Lib.prototype.addBook = function (book) {
    var newBook = new Book(book);

    if (bookNotInLib("title", newBook.title)){
        window.myBookArray.push(newBook);
        return window.myBookArray;
    } else {
        return "Book is already in Library";
    }
    
    return window.myBookArray;
};

Lib.prototype.removeBookByTitle = function (title) {
    
    var temp = bookNotInLib("title", title);
    if (temp !== true) {
        console.log(temp);
        return myBookArray.splice(temp, 1);
    } else {
        return "Title not found";
    }
    
};

Lib.prototype.removeBookByAuthor = function (author) {
    var temp = bookNotInLib("author", author);
    if (temp !== true) {
        console.log(temp);
        return myBookArray.splice(temp, 1);
    } else {
        return "Author not found";
    }
};

Lib.prototype.getRandomBook = function () {
    var temp = Math.floor((Math.random() * myBookArray.length) + 1);
    return myBookArray.splice(temp, 1);
};

Lib.prototype.getBookByTitle = function (title) {

};

Lib.prototype.getBooksByAuthor = function (author) {

};

Lib.prototype.addBooks = function (books) {

};

Lib.prototype.getAuthors = function (authors) {

};

Lib.prototype.getRandomAuthorName = function () {

};

function Book(obj) {
    this.title = obj.title;
    this.author = obj.author;
    this.date = obj.date;
    this.pages = obj.pages;

    return this;
}

function bookNotInLib(key, value) {
    for (var i = 0; i < this.myBookArray.length; i++) {
        if (this.myBookArray[i][key] == value) {
            return i;
        }
    }
    return true;
}


// var storeBook = function () {
//     if (typeof (Storage) !== "underfined") {
//         //store data for one session
//         sessionStorage.setItem()
//     } else {
//         return false;
//     }
// }

// var retrieveBook = function () {
//     if (typeof (Storage) !== "underfined") {
//         //store data for one session
//         document.getElementById("result").innerHTML = localStorage.getItem("lastname");
//     } else {
//         return false;
//     }
// }


//Lib.prototype.addBook({ title: "book33", author: "author33", pages: 3, date: "33/33/3333" })