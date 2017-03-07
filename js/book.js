$(function () {
    // console.log("test")
    window.book1 = new Book({ title: "book11", author: "author1", pages: 1, date: "11/11/1111" });
    window.book2 = new Book({ title: "book22", author: "author2", pages: 2, date: "22/22/2222" });
    window.book3 = new Book({ title: "book33", author: "author33", pages: 3, date: "33/33/3333" });
    window.gLib = new Lib();
});

var Lib = function () {
    this.myBookArray.push(window.book1);
    this.myBookArray.push(window.book2);
    this.storeBook();
    this.displayBooksInLib();
    return this;
};

Lib.prototype.myBookArray = new Array();
Lib.prototype.date = new Date();

Lib.prototype.onClickFormSubmit = function () {
    this.addBook({ title: document.getElementById("titleToAdd").value, author: document.getElementById("authorToAdd").value, pages: document.getElementById("pagesToAdd").value, date: document.getElementById("dateToAdd").value });
};

Lib.prototype.addBook = function (book) {
    var newBook = new Book(book);
    if (this.getBookIndex("title", newBook.title) <= 0) {
        this.myBookArray.push(newBook);
        this.displayBooksInLib();
        document.getElementById("displayTextArea").innerHTML = "Book added";
        this.storeBook();
        return true;
    } else {
        document.getElementById("displayTextArea").innerHTML = "Book is already in Library";
        return false;
    }
    
    return this.myBookArray;
};

Lib.prototype.removeBookByTitle = function (title) {
    var temp = this.getBookIndex("title", title);
    if (temp >= 0) {
        document.getElementById("displayTextArea").innerHTML = "Book removed";
        this.myBookArray.splice(temp, 1);
        this.displayBooksInLib();
        this.storeBook();
        return true;
    } else {
        document.getElementById("displayTextArea").innerHTML = "Title not found";
        return false;
    }
};

Lib.prototype.removeBookByAuthor = function (author) {
    var temp = this.getBookIndex("author", author);
    if (temp >= 0) {
        var i;
        for (i = 0; i < this.myBookArray.length; i++) {

            var temp = this.getBookIndex("author", author);
            if (temp >= 0) {
                this.myBookArray.splice(temp, 1);
            }
        }
        this.storeBook();
        document.getElementById("displayTextArea").innerHTML = i+" Book(s) removed";
        return true;
    } else {
        document.getElementById("displayTextArea").innerHTML = "Author not found";
        return false;
    }

};

Lib.prototype.getRandomBook = function () {
    var temp = Math.floor(Math.random() * this.myBookArray.length);
    var booksArray = [this.myBookArray[temp]];
    return this.displayBooks(booksArray);
};

Lib.prototype.getBookByTitle = function (title) {
    var temp = this.getBookIndex("title", title);
    
    if (temp >= 0) {
        var booksArray = [this.myBookArray[temp]];
        this.displayBooks(booksArray);
        return true;
    } else {
        document.getElementById("displayTextArea").innerHTML = "Title not found";
        return false;
    }
};

Lib.prototype.getBooksByAuthor = function (author) {
    var temp = this.getBookIndex("author", author);
    if (temp >= 0) {
        var array = new Array();
        this.displayBooks(this.addBooksToArray(array, "author", author));
        return true;
    } else {
        document.getElementById("displayTextArea").innerHTML = "Author not found";
        return false;
    }
};

Lib.prototype.addMore = function () {
    var table = document.getElementById("addBooksTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = '<input type="text" placeholder="title"/>';
    cell2.innerHTML = '<input type="text" placeholder="author"/>';
    cell3.innerHTML = '<input type="text" placeholder="pages"/>';
    cell4.innerHTML = '<input type="text" placeholder="MM/DD/YYYY"/>';
}

Lib.prototype.addBooks = function (books) {
    var num = 0;
    for (var i = 0; i < books.length; i++){
        num++;
        if (!this.addBook(books[i])) {
            num--;
        }
    }
    document.getElementById("displayTextArea").innerHTML = num+" Books Added";
};

Lib.prototype.addBooksInTable = function(){
    var table = document.getElementById("addBooksTable");
    var array = new Array();
    var booksArray = new Array();

    for (var i = 0, row; row = table.rows[i]; i++){
        for (var j = 0, col; col = row.cells[j]; j++){
            array[j] = col.firstChild.value;
        }
        var newBook = new Book({ title: array[0], author: array[1], pages: array[2], date: array[3] });
        booksArray.push(newBook);
    }
    this.addBooks(booksArray);
}

Lib.prototype.getAuthors = function (authors) {
    var authors = authors.split(", ");
    console.log(authors);
    var array = new Array();
    for (var i = 0; i < authors.length; i++){
       if( this.getBookIndex("author", authors[i]>=0)){
           this.addBooksToArray(array, "author", authors[i]);
       }
    }
    console.log(array);
    this.displayBooks(array);
};

Lib.prototype.getRandomAuthorName = function () {
    var temp = Math.floor(Math.random() * this.myBookArray.length);
    return document.getElementById("displayBooksArea").innerHTML = this.myBookArray[temp].author;
};

function Book(obj) {
    this.title = obj.title;
    this.author = obj.author;
    this.date = obj.date;
    this.pages = obj.pages;
    return this;
}

//return book index in array or -1 if books is not in array
Lib.prototype.getBookIndex = function (key, value) {
    for (var i = 0; i < this.myBookArray.length; i++) {
        if (this.myBookArray[i][key] == value) {
            return i;
        }
    }
    return -1;
}

//delete books
Lib.prototype.addBooksToArray = function (array, key, value) {
    for (var i = 0; i < this.myBookArray.length; i++) {
        if (this.myBookArray[i][key] === value) {
            array.push(this.myBookArray[i]);
        } 
    }
    return array;
}

Lib.prototype.displayBooksInLib = function () {
    var html = "<table border='1|1'>";
    for (var i = 0; i < this.myBookArray.length; i++) {
        html += "<tr> ";
        html += "<td> " + this.myBookArray[i].title + " </td>";
        html += "<td> " + this.myBookArray[i].author + " </td>";
        html += "<td> " + this.myBookArray[i].pages + " </td>";
        html += "<td> " + this.myBookArray[i].date + "  </td>";
        html += "</tr>";
    }
    html += "</table>"
    return document.getElementById("displayLibArea").innerHTML = html;
}

Lib.prototype.displayBooks = function (booksArray) {
    var html = "<table border='1|1'>";
    for (var i = 0; i < booksArray.length; i++) {
        html += "<tr> ";
        html += "<td> " + booksArray[i].title + " </td>";
        html += "<td> " + booksArray[i].author + " </td>";
        html += "<td> " + booksArray[i].pages + " </td>";
        html += "<td> " + booksArray[i].date + "  </td>";
        html += "</tr>";
    }
    html += "</table>"
    return document.getElementById("displayBooksArea").innerHTML = html;
}

Lib.prototype.displayText = function (text) {
    return document.getElementById("displayTextArea").innerHTML = html;
}

Lib.prototype.storeBook = function () {
    //checked brower for storage
    if (typeof (Storage) !== "underfined") {
        localStorage["libArray"] = JSON.stringify(this.myBookArray);
    } else {
        return false;
    }
}

Lib.prototype.retrieveBook = function () {
    if (typeof (Storage) !== "underfined") {
        return 
    } else {
        return false;
    }
}


//Lib.prototype.addBook({ title: "book33", author: "author33", pages: 3, date: "33/33/3333" })