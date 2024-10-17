import { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from './api.js';

// Function to display movies in a carousel
function displayMoviesInCarousel(movies, carouselId) {
  const carouselWrapper = document.getElementById(carouselId); // Select the carousel wrapper

  // Clear any previous content
  carouselWrapper.innerHTML = '';

  // Loop through the first 20 movies and create movie cards
  movies.slice(0, 20).forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card'); // Add movie-card class

    movieCard.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
      <h3>${movie.title}</h3>
      <button class="Add-favorite"> Add to favorite ♥ </button>
    `;
    const movieImage = movieCard.querySelector('img');
    // Add event listener to open dialog with more info on click
    movieImage.addEventListener('click', () => {
      openMovieDialog(movie); // Pass the entire movie object to the dialog
    });

    // Append the movie card to the carousel wrapper
    carouselWrapper.appendChild(movieCard);
  });
}

// Function to open the movie dialog and show more info
function openMovieDialog(movie) {
  const dialog = document.getElementById('movie-modal');
  const modalContent = document.getElementById('modal-movie-info');

  // Populate modal content with movie details (using the data we already have)
  modalContent.innerHTML = `
    <h2>${movie.title}</h2>
    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
    <p><strong>Release Date:</strong> ${movie.release_date}</p>
    <p><strong>Overview:</strong> ${movie.overview}</p>
    <p><strong>Rating:</strong> ${movie.vote_average}</p>
    <p><strong>Adult:</strong> ${movie.adult ? 'Yes' : 'No'}</p>
  `;

  // Show the dialog modal
  dialog.showModal();

  // Close the modal when the close button is clicked
  const closeButton = document.getElementById('close-modal');
  closeButton.addEventListener('click', () => {
    dialog.close();
  });

  // Close the modal when clicking outside the modal content
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
}

// Function to setup carousel navigation
function setupCarouselNavigation(prevButtonId, nextButtonId, carouselId) {
  const carouselWrapper = document.getElementById(carouselId);
  const nextButton = document.getElementById(nextButtonId);
  const prevButton = document.getElementById(prevButtonId);

  // Scroll the carousel right when the "Next" button is clicked
  nextButton.addEventListener('click', () => {
    carouselWrapper.scrollBy({
      left: 210, // Adjust this value based on how much you want to scroll
      behavior: 'smooth'
    });
  });

  // Scroll the carousel left when the "Prev" button is clicked
  prevButton.addEventListener('click', () => {
    carouselWrapper.scrollBy({
      left: -210, // Adjust this value based on how much you want to scroll
      behavior: 'smooth'
    });
  });
}

// Fetch and display Popular movies
async function displayPopularMoviesCarousel() {
  const movies = await fetchPopularMovies();
  displayMoviesInCarousel(movies, 'movies-carousel');
  setupCarouselNavigation('prev-popular', 'next-popular', 'movies-carousel');
}

// Fetch and display Top Rated movies
async function displayTopRatedMoviesCarousel() {
  const movies = await fetchTopRatedMovies();
  displayMoviesInCarousel(movies, 'top-rated-carousel');
  setupCarouselNavigation('prev-top-rated', 'next-top-rated', 'top-rated-carousel');
}

// Fetch and display Upcoming movies
async function displayUpcomingMoviesCarousel() {
  const movies = await fetchUpcomingMovies();
  displayMoviesInCarousel(movies, 'upcoming-carousel');
  setupCarouselNavigation('prev-upcoming', 'next-upcoming', 'upcoming-carousel');
}

// Call the function to display movies when the page loads
document.addEventListener('DOMContentLoaded', () => {
  displayPopularMoviesCarousel();
  displayTopRatedMoviesCarousel();
  displayUpcomingMoviesCarousel();
});
