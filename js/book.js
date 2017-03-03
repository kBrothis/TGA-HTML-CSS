

class book {
    constructor(title, author, publishDate, numberOfPages, pageNumber) {
        this.title = title;
        this.author = author;
        this.publishDate = publishDate;
        this.numberOfPages = numberOfPages;
        this.pageNumber = pageNumber;
    }

    addBook(book) {

        for (var i = 0; i < book.length; i++) {
            if (book[i].title == book.title) {
                return false;
            }
        }
        this.title = title;
        this.publishDate = book.publishDate;
        this.numberOfPages = book.numberOfPages;
        this.pageNumber = book.pageNumber;
    }




}

var book3 = { "tittle": "book33", "author": "author33", "publishDate": "33/33/3333", "pageNumber": "0" };
var book1 = new book("book1", "author1", "11/11/1111", 100, 0);
var book2 = new book("book2", "author2", "22/22/2222", 200, 0);
addBook(book3);

console.log(book1, book2);

