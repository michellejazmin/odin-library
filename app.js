'use strict'

let myLibrary = [];

const grid = document.getElementById('library-grid');

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

Book.prototype.info = function () {
  const bookStatus = (this.read) ? 'read' : 'not read yet';
  
  return `${this.title} by ${this.author}, ${this.pages} pages, ${bookStatus}`;
}

Book.prototype.toggleRead = function () {
  this.read = !(this.read);
}

function createBookCard(book) {
  if (book === null) return;

  const newBookIndex = myLibrary.indexOf(book);

  const newBook = document.createElement('article');
  newBook.classList.add('book-card');
  newBook.setAttribute('data-index', newBookIndex);

  const newBookTitle = document.createElement('h2');
  newBookTitle.classList.add('book-title');
  newBookTitle.textContent = book.title;
  newBookTitle.setAttribute('data-index', newBookIndex);

  const newBookAuthor = document.createElement('p');
  newBookAuthor.classList.add('book-author');
  newBookAuthor.textContent = book.author;
  newBookAuthor.setAttribute('data-index', newBookIndex);

  const newBookPages = document.createElement('p');
  newBookPages.classList.add('book-pages');
  newBookPages.textContent = `${book.pages} pages`;
  newBookPages.setAttribute('data-index', newBookIndex);

  const newBookStatus = document.createElement('p');
  newBookStatus.classList.add('book-status');
  newBookStatus.textContent = (book.read) ? "Read" : "Not read yet";
  newBookStatus.setAttribute('data-index', newBookIndex);

  const toggleReadButton = document.createElement('button');
  toggleReadButton.textContent = (book.read) ? "Mark as unread" : "Mark as read";
  toggleReadButton.classList.add('toggle-status-btn');
  toggleReadButton.setAttribute('data-index', newBookIndex);

  const deleteBookButton = document.createElement('button');
  deleteBookButton.textContent = 'Delete book from library';
  deleteBookButton.classList.add('delete-book-btn');
  deleteBookButton.setAttribute('data-index', newBookIndex);

  newBook.appendChild(newBookTitle);
  newBook.appendChild(newBookAuthor);
  newBook.appendChild(newBookPages);
  newBook.appendChild(newBookStatus);
  newBook.appendChild(toggleReadButton);
  newBook.appendChild(deleteBookButton);

  toggleReadButton.addEventListener('click', () => {
    book.read = !book.read;
    toggleReadButton.textContent = (book.read) ? "Mark as unread" : "Mark as read";
    newBookStatus.textContent = (book.read) ? "Read" : "Not read yet";
  });

  deleteBookButton.addEventListener('click', () => {
    newBook.remove();
    myLibrary.splice(newBookIndex, 1, null);
  });

  grid.appendChild(newBook);
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  createBookCard(newBook);
}

function displayBooks() {
  for (const book of myLibrary) {
    createBookCard(book);
  }
}

const addBookButton = document.getElementById('add-book');
const formContainer= document.getElementById('form-container');
const form = document.getElementById('add-book-form');
const formButton = document.getElementById('form-button');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const isReadInput = document.getElementById('read');
const isUnreadInput = document.getElementById('unread');

addBookButton.addEventListener('click', () => formContainer.classList.toggle('hidden'));

formButton.addEventListener('click', e => {
  e.preventDefault();
  if (!titleInput.value || !authorInput.value || !pagesInput.value ||
      (!isReadInput.checked && !isUnreadInput.checked)) return;
  addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, isReadInput.checked);
  form.reset();
});

displayBooks();