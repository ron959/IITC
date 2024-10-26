import { fetchPopularMovies } from './api.js';

// Function to display movies in a slider
function displayMoviesInSlider(movies, sliderId) {
  const sliderWrapper = document.getElementById(sliderId);

  // Clear any previous content
  sliderWrapper.innerHTML = '';

  // Loop through the top 3 movies
  movies.slice(0, 3).forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
    `;
    sliderWrapper.appendChild(movieCard);
  });
}

// Function to display movies in a grid
function displayMoviesInGrid(movies, gridId) {
  const gridContainer = document.getElementById(gridId);

  // Clear any previous content
  gridContainer.innerHTML = '';

  // Loop through the remaining popular movies
  movies.slice(3).forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    movieCard.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
      <h3>${movie.title}</h3>
    `;

    gridContainer.appendChild(movieCard);
  });
}

// Fetch and display Popular movies
async function displayPopularMovies() {
  const movies = await fetchPopularMovies();

  // Sort by rating to get the top 3
  const sortedMovies = [...movies].sort((a, b) => b.vote_average - a.vote_average);

  // Display top 3 in the slider
  displayMoviesInSlider(sortedMovies, 'top-rated-slider');

  // Display the rest in the grid
  displayMoviesInGrid(sortedMovies, 'popular-movies-grid');
}

// Call the function to display movies when the page loads
document.addEventListener('DOMContentLoaded', () => {
  displayPopularMovies();
});
