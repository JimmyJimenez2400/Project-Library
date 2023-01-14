const main = document.getElementById("main");
const cardContainer = document.createElement("div");
main.appendChild(cardContainer);
cardContainer.className = "cardContainer";

const submitFormButton = document.querySelector(".submitBtn");
const form = document.getElementById("form");
let myLibrary = [];

function Book(title, author, page, read) {
  this.bookTitle = title;
  this.bookAuthor = author;
  this.bookPages = page;
  this.bookRead = read;
  this.id = `${Date.now()}`;
}

function preventFormDefault(event) {
  event.preventDefault();
}

form.addEventListener("submit", preventFormDefault);
/*
I want to make a function that can take user's input
store that input into an array

1. Make Function addBookToLibrary -> Purpose it add to addBooks to MyLibrary Array
2. I want to store user input into a variable, use prompt to get userinput
3. Push user input variable to myLibrary
4. repeat;

*/

/* 
I want to make a function that will create Cards depending on the myLibrary Length
We would have to create elements for a div
Inside that div we will have, "h3, h4, img, pages read, status read or not"

*/

function createCards(book) {
  // Elements Create
  const card = document.createElement("div");
  const cardTitle = document.createElement("h3");
  const cardAuthor = document.createElement("h4");
  const cardImg = document.createElement("img");
  const cardPages = document.createElement("p");
  const removeBook = document.createElement("button");
  const statusBook = document.createElement("button");
  const buttonHolders = document.createElement("div");

  // Append
  cardContainer.appendChild(card);
  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardImg);
  card.appendChild(cardPages);
  card.appendChild(buttonHolders);
  buttonHolders.appendChild(removeBook);
  buttonHolders.appendChild(statusBook);
  // class Add
  card.className = "card";
  cardTitle.className = "cardTitle";
  cardAuthor.className = "cardAuthor";
  cardImg.className = "cardImg";
  cardPages.className = "cardPages";
  buttonHolders.className = "buttonHolders";
  removeBook.className = "removeBook";
  statusBook.className = "statusBook";

  removeBook.setAttribute("data-id", `${book.id}`);

  cardTitle.textContent = `Title: ${book.bookTitle}`;
  cardAuthor.textContent = `Author: ${book.bookAuthor}`;
  cardImg.src = "";
  cardPages.textContent = `Current Page: ${book.bookPages}`;

  removeBook.textContent = `Remove`;
  statusBook.textContent = `Status`;

  removeBook.onclick = (item) => {
    const objectID = item.currentTarget.getAttribute("data-id");
    myLibrary = myLibrary.filter((objectBook) => objectBook.id !== objectID);
    card.remove(myLibrary);
  };
}

function displayBookToScreen() {
  while (cardContainer.firstChild) {
    cardContainer.firstChild.remove();
  }
  for (let i = 0; i < myLibrary.length; i += 1) {
    createCards(myLibrary[i]);
  }
}

function addBookToLibrary() {
  const titleNameInput = document.getElementById("titleName").value;
  const authorNameInput = document.getElementById("authorName").value;
  const pageNumberInput = document.getElementById("pagesRead").value;
  const readStatus = document.getElementById("checkStatus").value;

  const newBook = new Book(titleNameInput, authorNameInput, pageNumberInput, readStatus);
  myLibrary.push(newBook);
  displayBookToScreen();
}

submitFormButton.addEventListener("click", addBookToLibrary);

// Grab button element to "NEW BOOK", add event listener, call function addBookToLibrary
