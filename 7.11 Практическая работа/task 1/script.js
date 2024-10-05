let books = ["Война и мир", "Преступление и наказание", "1984"];

const bookList = document.getElementById("bookList");
const addBookButton = document.getElementById("addBook");
const searchBookButton = document.getElementById("searchBook");

function renderBooks() {
  bookList.innerHTML = ""; 
  books.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book;
    bookList.appendChild(li);
  });
}

addBookButton.addEventListener("click", () => {
  const newBook = prompt("Введите название книги:");
  if (newBook) {
    books.push(newBook);
    renderBooks();
  } else {
    alert("Название книги не введено!");
  }
});

searchBookButton.addEventListener("click", () => {
  const searchQuery = prompt("Введите название книги для поиска:");
  if (searchQuery) {
    const foundBook = books.find(book => book.toLowerCase() === searchQuery.toLowerCase());
    if (foundBook) {
      alert(`Книга "${foundBook}" найдена!`);
      renderBooks();
      highlightBook(foundBook);
    } else {
      alert("Книга не найдена!");
    }
  }
});

function highlightBook(book) {
  const listItems = document.querySelectorAll("#bookList li");
  listItems.forEach(item => {
    if (item.textContent === book) {
      item.classList.add("highlight");
    } else {
      item.classList.remove("highlight");
    }
  });
}

renderBooks();
