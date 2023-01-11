const main = document.getElementById("main");
const cardContainer = document.createElement("div");
main.appendChild(cardContainer);
cardContainer.className = "cardContainer";

const myLibrary = [];

function Book(title, author, page, read) {
  this.bookTitle = title;
  this.bookAuthor = author;
  this.bookPages = page;
  this.bookRead = read;
}

function addBookToLibrary() {
  const myHeroAcademia = new Book("My Hero Academia", "Horki", 293, "not read yet");
  myLibrary.push(myHeroAcademia);
  const pythonCrashCourse = new Book("Python Crash Course", "Matthews", 200, "read");
  myLibrary.push(pythonCrashCourse);
}

/*
I want to make a function that can take user's input
store that input into an array

1. Make Function addBookToLibrary -> Purpose it add to addBooks to MyLibrary Array
2. I want to store user input into a variable, use prompt to get userinput
3. Push user input variable to myLibrary
4. repeat;

*/

addBookToLibrary();

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
  const cardStatus = document.createElement("button");

  // Append
  cardContainer.appendChild(card);
  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardImg);
  card.appendChild(cardPages);
  card.appendChild(cardStatus);

  // class Add
  card.className = "card";
  cardTitle.className = "cardTitle";
  cardAuthor.className = "cardAuthor";
  cardImg.className = "cardImg";
  cardPages.className = "cardPages";
  cardStatus.className = "cardStatus";

  // Add properties
  cardTitle.textContent = `${book.bookTitle}`;
}

function displayBookToScreen() {
  for (let i = 0; i < myLibrary.length; i += 1) {
    createCards(myLibrary[i]);
  }
}

displayBookToScreen();
