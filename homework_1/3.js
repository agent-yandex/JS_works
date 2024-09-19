class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    findBooksByAuthor(author) {
        const booksByAuthor = [];
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].author === author) {
                booksByAuthor.push(this.books[i]);
            }
        }

        return booksByAuthor;
    }

    listAllBooks() {
        console.log("В библиотеки есть:");
        for (let i = 0; i < this.books.length; i++) {
            console.log(`${i + 1}. ${this.books[i].title}, автор - ${this.books[i].author}`);
        }
    }
}

class LibraryUser {
    constructor(name) {
        this.name = name;
        this.borrowBooks = [];
    }

    borrowBook(book) {
        if (this.borrowBooks.length < 3) {
            console.log(`${this.name} берет книгу "${book.title}"`);
            this.borrowBooks.push(book);
        } else {
            console.log(`Количество взятых книг превышает 3`);
        }
    }

    returnBook(book) {
        const bookIndex = this.borrowBooks.indexOf(book);
        if (bookIndex !== -1) {
            console.log(`${this.name} возвращает книгу "${book.title}"`);
            this.borrowBooks.splice(bookIndex, 1);
        } else {
            console.log("Книга не найдена :(");
        }
    }

    listBorrowedBooks() {
        console.log(`${this.name} взял книги:`);

        for (let i = 0; i < this.borrowBooks.length; i++) {
            console.log(`${i + 1}. ${this.borrowBooks[i].title}, автор - ${this.borrowBooks[i].author}`);
        }
    }
}

let book1 = new Book("Детки в клетке", "Стивено Кинго", 100);
let book2 = new Book("Колобок", "Народ", 200);
let book3 = new Book("Казино, серкеты слотов", "Дима Камень", 300);
let book4 = new Book("Ессентуки", "Коля Минерал", 400);

let library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

library.listAllBooks();
console.log(library.findBooksByAuthor("Народ"));

const user = new LibraryUser("ivan");
user.borrowBook(book1);
user.borrowBook(book2);
user.borrowBook(book3);
user.borrowBook(book4);

user.listBorrowedBooks();
user.returnBook(book2);
user.listBorrowedBooks();
