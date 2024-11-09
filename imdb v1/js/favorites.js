// favorites.js

// Function to get the list of favorite movies from local storage
export function getFavorites() {
    return JSON.parse(localStorage.getItem('favoriteMovies')) || [];
  }
  
  // Function to add a movie to the list of favorites in local storage
  export function addFavorite(movie) {
    let favorites = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
  
    // Avoid duplicates
    if (!favorites.some(fav => fav.id === movie.id)) {
      favorites.push(movie);
      localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
    }
  }
  
  // Function to remove a movie from the list of favorites in local storage
  export function removeFavorite(movieId) {
    let favorites = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    favorites = favorites.filter(fav => fav.id !== parseInt(movieId));
    localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
  }
  
  // Function to check if a movie is already in the favorites
  export function isFavorite(movieId) {
    const favorites = getFavorites();
    return favorites.some(fav => fav.id === movieId);
  }
  
  // Function to render favorite movies (used in favorites.html)
  import { createMovieCard } from './utils.js'; // Import the utility function
  
// Function to render favorite movies (used in favorites.html)
function renderFavorites() {
    const container = document.querySelector('#favorites-grid-container');
    if (!container) {
      console.log('favorites-grid-container element still not selected');
      return;
    }
  
    const favorites = getFavorites();
  
    // Clear the container before rendering
    container.innerHTML = '';
  
    // Check if there are favorite movies
    if (favorites.length === 0) {
      container.innerHTML = '<p>No favorite movies added yet.</p>';
      return; // No need to reload the page
    }
  
    // Loop through the list of favorites and create elements using the reusable function
    favorites.forEach(movie => {
      const movieCard = createMovieCard(movie);
      const removeButton = movieCard.querySelector('.favorite-toggle');
      
      if (removeButton) {
        // Update the button text and appearance for the "Remove from Favorites" state
        removeButton.textContent = 'Remove from Favorites';
        removeButton.classList.add('remove-favorite-active');
  
        // Add event listener to handle removal
        removeButton.addEventListener('click', () => {
          // Add a 'removing' class to trigger the fade-out effect
          movieCard.classList.add('removing');
  
          // Wait for the transition to complete before removing from the DOM
          setTimeout(() => {
            removeFavorite(movie.id); // Remove from local storage
            renderFavorites(); // Re-render the favorites list after removal
          }, 500); // Matches the CSS transition duration (0.5s)
        });
      }
  
      container.appendChild(movieCard);
    });
  
    // Make sure to remove 'hidden' class if content is rendered
    container.classList.remove('hidden');
  }
  
  
  // Initial render of favorites when the page loads
  document.addEventListener('DOMContentLoaded', renderFavorites);
  
  