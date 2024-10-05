function handleFormSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const genre = document.getElementById("genre").value;
  const releaseYear = document.getElementById("releaseYear").value;
  const isWatched = document.getElementById("isWatched").checked;

  if (!title || !genre || !releaseYear) {
      alert('Пожалуйста, заполните все поля');
      return;
  }

  const film = { title, genre, releaseYear, isWatched };
  addFilm(film);
}

async function addFilm(film) {
  await fetch("https://sb-film.skillbox.cc/films", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          email: "ovikdevil@gmail.com",
      },
      body: JSON.stringify(film),
  });
  renderTable();
}

async function renderTable() {
  const filmsResponse = await fetch("https://sb-film.skillbox.cc/films", {
      headers: {
          email: "ovikdevil@gmail.com",
      },
  });
  const films = await filmsResponse.json();

  const filmTableBody = document.getElementById("film-tbody");
  filmTableBody.innerHTML = "";

  films.forEach(film => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${film.title}</td>
          <td>${film.genre}</td>
          <td>${film.releaseYear}</td>
          <td>${film.isWatched ? "Да" : "Нет"}</td>
          <td>
              <button onclick="deleteFilm(${film.id})">Удалить</button>
          </td>
      `;
      filmTableBody.appendChild(row);
  });
}

async function deleteFilm(id) {
  await fetch(`https://sb-film.skillbox.cc/films/${id}`, {
      method: "DELETE",
      headers: {
          email: "ovikdevil@gmail.com",
      },
  });
  renderTable();
}

async function deleteAllFilms() {
  await fetch("https://sb-film.skillbox.cc/films", {
      method: "DELETE",
      headers: {
          email: "ovikdevil@gmail.com",
      },
  });
  renderTable();
}

document.getElementById("film-form").addEventListener("submit", handleFormSubmit);
document.getElementById("delete-all").addEventListener("click", deleteAllFilms);

document.getElementById("filter").addEventListener("input", async function () {
  const filterText = this.value;
  const filmsResponse = await fetch(`https://sb-film.skillbox.cc/films?title=${filterText}`, {
      headers: {
          email: "ovikdevil@gmail.com",
      },
  });
  const films = await filmsResponse.json();
  renderFilteredFilms(films);
});

function renderFilteredFilms(films) {
  const filmTableBody = document.getElementById("film-tbody");
  filmTableBody.innerHTML = "";

  films.forEach(film => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${film.title}</td>
          <td>${film.genre}</td>
          <td>${film.releaseYear}</td>
          <td>${film.isWatched ? "Да" : "Нет"}</td>
          <td>
              <button onclick="deleteFilm(${film.id})">Удалить</button>
          </td>
      `;
      filmTableBody.appendChild(row);
  });
}

// Display films on load
renderTable();
