// Importing necessary modules
import { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from './api.js'; // Functions to fetch movie data from the external API
import { setupSearch } from './search.js'; // Handles the search functionality
import { displayMoviesInCarousel, setupCarouselNavigation } from './carousel.js'; // Utilities for displaying and navigating carousels

let filteredMovie = []; // Global variable to store fetched movies for search functionality

// Function to fetch and display Top Rated Movies (ordered by rating)
async function displayTopRatedMoviesCarousel() {
  // Fetching top-rated movies from the API
  const movies = await fetchTopRatedMovies();
  // Sorting movies by rating in descending order (highest rated first)
  const topRatedMovies = movies.sort((a, b) => b.vote_average - a.vote_average).slice(0, 20);
  // Display the sorted movies in the carousel labeled 'top-rated-carousel'
  displayMoviesInCarousel(topRatedMovies, 'top-rated-carousel');
  // Setting up navigation for the carousel
  setupCarouselNavigation('prev-top-rated', 'next-top-rated', 'top-rated-carousel');
}

// Function to fetch and display Most Popular Movies (ordered by popularity)
async function displayMostPopularMoviesCarousel() {
  // Fetching popular movies from the API
  const movies = await fetchPopularMovies();
  // Sorting movies by popularity in descending order (most popular first)
  const mostPopularMovies = movies.sort((a, b) => b.popularity - a.popularity).slice(0, 20);
  // Display the sorted movies in the carousel labeled 'most-popular-carousel'
  displayMoviesInCarousel(mostPopularMovies, 'most-popular-carousel');
  // Setting up navigation for the carousel
  setupCarouselNavigation('prev-most-popular', 'next-most-popular', 'most-popular-carousel');
}

// Function to fetch and display Latest Movies (ordered by newest release date)
async function displayLatestMoviesCarousel() {
  // Fetching upcoming movies from the API
  const movies = await fetchUpcomingMovies();
  // Sorting movies by release date in descending order (newest first)
  const latestMovies = movies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date)).slice(0, 20);
  // Display the sorted movies in the carousel labeled 'latest-movies-carousel'
  displayMoviesInCarousel(latestMovies, 'latest-movies-carousel');
  // Setting up navigation for the carousel
  setupCarouselNavigation('prev-latest', 'next-latest', 'latest-movies-carousel');
}

// Initialize carousels and search when the page loads
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded, running carousels');
  // Display each category of movies in its respective carousel
  displayTopRatedMoviesCarousel();
  displayMostPopularMoviesCarousel();
  displayLatestMoviesCarousel();
  // Initialize the movie fetching and search setup
  initializeMovies();
});

// Function to initialize the movie fetching and search setup
async function initializeMovies() {
  // Fetching popular movies to use for the search functionality
  filteredMovie = await fetchPopularMovies();

  // Now that we have the movies, set up the search functionality
  setupSearch(filteredMovie);
}
