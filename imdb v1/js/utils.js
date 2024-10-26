import { addFavorite, removeFavorite, isFavorite } from './favorites.js'; // Import utility functions

// Function to create a movie card element
export function createMovieCard(movie) {
  // Create the main container div for the movie card
  const movieCard = document.createElement('div');
  movieCard.classList.add('movie-card');

  // Set the inner HTML of the movie card
  movieCard.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
    <h3>${movie.title}</h3>
  `;

  // Create the button for favorite functionality
  const favoriteButton = document.createElement('button');
  favoriteButton.classList.add('favorite-toggle');

  // Check if the movie is already in the favorites and set the button text and color
  if (isFavorite(movie.id)) {
    favoriteButton.textContent = 'Remove from Favorites';
    favoriteButton.classList.add('remove-favorite-active'); // Add the red color class
  } else {
    favoriteButton.textContent = 'Add to favorite ♥';
  }

  // Add event listener to toggle favorite status
  favoriteButton.addEventListener('click', () => {
    if (isFavorite(movie.id)) {
      removeFavorite(movie.id);
      favoriteButton.textContent = 'Add to favorite ♥';
      favoriteButton.classList.remove('remove-favorite-active'); // Remove the red color class
    } else {
      addFavorite(movie);
      favoriteButton.textContent = 'Remove from Favorites';
      favoriteButton.classList.add('remove-favorite-active'); // Add the red color class
    }
  });

  // Attach the dialog opening event to the movie image
  const movieImage = movieCard.querySelector('img');
  movieImage.addEventListener('click', () => {
    openMovieDialog(movie);
  });

  movieCard.appendChild(favoriteButton);

  return movieCard;
}

// Function to open a modal dialog with movie details
export function openMovieDialog(movie) {
  // Create the modal elements
  const dialog = document.createElement('dialog');
  dialog.classList.add('modal-dialog');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  modalContent.innerHTML = `
  <span class="close" id="close-modal">exit</span>
  <h2>${movie.title}</h2>
  <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
  <p><strong>Release Date:</strong> ${movie.release_date}</p>
  <p><strong>Overview:</strong> ${movie.overview}</p>
  <p><strong>Rating:</strong> ${movie.vote_average}</p>
  <p><strong>For Adults?:</strong> ${movie.adult ? 'Yes' : 'No'}</p>
  <p><strong>Movie ID:</strong> ${movie.id}</p> <!-- Added Movie ID here -->
`;

  // Append the modal content to the dialog
  dialog.appendChild(modalContent);
  document.body.appendChild(dialog);

  // Show the dialog
  dialog.showModal();

  // Close the modal when the close button is clicked
  const closeButton = modalContent.querySelector('.close');
  closeButton.addEventListener('click', () => {
    dialog.close();
    dialog.remove(); // Remove the dialog from the DOM after closing
  });

  // Close the modal when clicking outside the modal content
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      dialog.close();
      dialog.remove(); // Remove the dialog from the DOM after closing
    }
  });
}
