import { openMovieDialog, createMovieCard } from './utils.js'; // Import both openMovieDialog and createMovieCard

// Function to search movies by title or ID
export function searchMoviesByQuery(query, moviesArray) {
  return moviesArray.filter(movie => {
    return movie.title.toLowerCase().includes(query.toLowerCase()) || movie.id.toString().includes(query);
  });
}

// Function to handle the search input event
export function setupSearch(moviesArray) {
  const searchInput = document.querySelector(".search-input");
  const carouselWrapper = document.querySelector("#content-wrapper");
  const grid = document.querySelector("#search-grid-container"); // Make sure to use a specific ID for the search grid container

  // Initial state - grid is hidden
  grid.classList.add('hidden');

  // Add event listener to the search input
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value;

    // Show/hide the grid based on input value
    if (query.trim() !== '') {
      carouselWrapper.classList.add('hidden'); // Hide the carousel when typing
      grid.classList.remove('hidden'); // Show the grid when there's input
    } else {
      carouselWrapper.classList.remove('hidden'); // Show the carousel when input is cleared
      grid.classList.add('hidden'); // Hide the grid when there's no input
      return; // Exit if the input is empty
    }

    // Filter movies based on the search query
    const filteredMovies = searchMoviesByQuery(query, moviesArray);

    // Clear the existing grid content before displaying the filtered movies
    grid.innerHTML = '';

    // If there are no search results, show a message
    if (filteredMovies.length === 0) {
      grid.innerHTML = '<p>No movies found matching your search.</p>';
      return;
    }

    // Loop through the filtered movies and create movie cards using createMovieCard from utils.js
    filteredMovies.slice(0, 20).forEach(movie => {
      const movieCard = createMovieCard(movie); // Use createMovieCard to generate the movie card
      grid.appendChild(movieCard); // Append the generated movie card to the grid
    });
  });
}
