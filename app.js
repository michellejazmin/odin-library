'use strict'

let myLibrary = []

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
  for (book of myLibrary) {
    book.name
  }
}