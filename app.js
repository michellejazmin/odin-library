'use strict'

let myLibrary = []

const grid = document.getElementById('library-grid');

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

Book.prototype.info = function () {
  if (this.read) {
    return `${this.title} by ${this.author}, ${this.pages} pages, read`;
  }
  else {
    return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
  }
}

Book.prototype.toggleRead = function () {
  this.read = !(this.read);
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

function displayBooks() {
  for (const book of myLibrary) {
    const newBook = document.createElement('article');
    newBook.classList.add('book-card');

    const newBookTitle = document.createElement('h2');
    newBookTitle.classList.add('book-title');
    newBookTitle.textContent = book.title;

    const newBookAuthor = document.createElement('p');
    newBookAuthor.classList.add('book-author');
    newBookAuthor.textContent = book.author;

    const newBookPages = document.createElement('p');
    newBookPages.classList.add('book-pages');
    newBookPages.textContent = `${book.pages} pages`;

    const newBookStatus = document.createElement('p');
    newBookStatus.classList.add('book-status');
    newBookStatus.textContent = (book.read) ? "Read" : "Not read yet";

    newBook.appendChild(newBookTitle);
    newBook.appendChild(newBookAuthor);
    newBook.appendChild(newBookPages);
    newBook.appendChild(newBookStatus);

    grid.appendChild(newBook);
  }
}