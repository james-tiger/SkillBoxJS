const movieForm = document.getElementById('movie-form');
const movieTableBody = document.querySelector('#movie-table tbody');
const sortSelect = document.getElementById('sort');

let movies = JSON.parse(localStorage.getItem('movies')) || [];

function renderMovies(movies) {
    movieTableBody.innerHTML = '';
    movies.forEach((movie, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${movie.title}</td>
            <td>${movie.genre}</td>
            <td>${movie.year}</td>
            <td>
                <button onclick="editMovie(${index})">Редактировать</button>
                <button onclick="deleteMovie(${index})">Удалить</button>
            </td>
        `;
        movieTableBody.appendChild(row);
    });
}

function addMovie(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const year = document.getElementById('year').value;

    if (!title || !genre || !year) {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    const newMovie = { title, genre, year };
    movies.push(newMovie);
    localStorage.setItem('movies', JSON.stringify(movies));
    renderMovies(movies);
    movieForm.reset();
}

function deleteMovie(index) {
    movies.splice(index, 1);
    localStorage.setItem('movies', JSON.stringify(movies));
    renderMovies(movies);
}

function editMovie(index) {
    const movie = movies[index];
    document.getElementById('title').value = movie.title;
    document.getElementById('genre').value = movie.genre;
    document.getElementById('year').value = movie.year;
    deleteMovie(index);
}

function sortMovies() {
    const criterion = sortSelect.value;
    movies.sort((a, b) => a[criterion].localeCompare(b[criterion]));
    renderMovies(movies);
}

movieForm.addEventListener('submit', addMovie);
sortSelect.addEventListener('change', sortMovies);
document.addEventListener('DOMContentLoaded', () => renderMovies(movies));
