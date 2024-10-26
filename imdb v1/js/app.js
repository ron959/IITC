
// }
import { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from './api.js';
import { setupSearch } from './search.js';
import { displayMoviesInCarousel, setupCarouselNavigation } from './carousel.js'; // Import from carousel.js


let filteredMovie = [];

// Function to fetch and display Top Rated Movies (ordered by rating)
async function displayTopRatedMoviesCarousel() {
  const movies = await fetchTopRatedMovies();
  // Sort by rating in descending order (highest rated first)
  const topRatedMovies = movies.sort((a, b) => b.vote_average - a.vote_average).slice(0, 20);
  displayMoviesInCarousel(topRatedMovies, 'top-rated-carousel');
  setupCarouselNavigation('prev-top-rated', 'next-top-rated', 'top-rated-carousel');
}

// Function to fetch and display Most Popular Movies (ordered by popularity)
async function displayMostPopularMoviesCarousel() {
  const movies = await fetchPopularMovies();
  // Sort by popularity in descending order (most popular first)
  const mostPopularMovies = movies.sort((a, b) => b.popularity - a.popularity).slice(0, 20);
  displayMoviesInCarousel(mostPopularMovies, 'most-popular-carousel');
  setupCarouselNavigation('prev-most-popular', 'next-most-popular', 'most-popular-carousel');
}

// Function to fetch and display Latest Movies (ordered by newest release date)
async function displayLatestMoviesCarousel() {
  const movies = await fetchUpcomingMovies();
  // Sort by release date in descending order (newest first)
  const latestMovies = movies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date)).slice(0, 20);
  displayMoviesInCarousel(latestMovies, 'latest-movies-carousel');
  setupCarouselNavigation('prev-latest', 'next-latest', 'latest-movies-carousel');
}

// Initialize carousels and search when the page loads
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded, running carousels');
  displayTopRatedMoviesCarousel();
  displayMostPopularMoviesCarousel();
  displayLatestMoviesCarousel();
  initializeMovies();
});


// Function to initialize the movie fetching and search setup
async function initializeMovies() {
  filteredMovie = await fetchPopularMovies(); // Fetch the popular movies

  // Now that we have the movies, set up the search functionality
  setupSearch(filteredMovie);
}
