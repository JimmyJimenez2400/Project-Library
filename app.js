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

// eslint-disable-next-line func-names
Book.prototype.toggleStatus = function () {
  this.bookRead = !this.bookRead;
  return this.bookRead;
  // Make a prototype method that can change the status of a book object.
};

function preventFormDefault(event) {
  event.preventDefault();
}

form.addEventListener("submit", preventFormDefault);

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
  statusBook.textContent = `Status:${book.bookRead}`;
  if (book.bookRead) {
    statusBook.textContent = "Status: READ";
    statusBook.style.backgroundColor = "green";
  } else {
    statusBook.textContent = `Status: NOT READ`;
    statusBook.style.backgroundColor = "red";
  }

  removeBook.onclick = (item) => {
    const objectID = item.currentTarget.getAttribute("data-id");
    myLibrary = myLibrary.filter((objectBook) => objectBook.id !== objectID);
    card.remove(myLibrary);
  };

  statusBook.addEventListener("click", () => {
    const statusChanger = book.toggleStatus();
    if (statusChanger) {
      statusBook.textContent = `Status: READ`;
      statusBook.style.backgroundColor = "green";
    } else {
      statusBook.textContent = `Status: NOT READ`;
      statusBook.style.backgroundColor = "red";
    }
  });
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
  const readStatus = document.getElementById("checkStatus").checked;

  const newBook = new Book(titleNameInput, authorNameInput, pageNumberInput, readStatus);
  myLibrary.push(newBook);
  displayBookToScreen();
}

submitFormButton.addEventListener("click", addBookToLibrary);
