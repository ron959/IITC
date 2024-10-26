import { createMovieCard } from './utils.js'; // Import utility function for movie cards

// Function to display movies in a carousel
export function displayMoviesInCarousel(movies, carouselId) {
  const carouselWrapper = document.getElementById(carouselId);

  if (!carouselWrapper) {
    console.error(`Error: Element with ID ${carouselId} not found`);
    return;
  }

  // Clear any previous content
  carouselWrapper.innerHTML = '';

  // Loop through the movies and create movie cards using the reusable function
  movies.slice(0, 30).forEach(movie => {
    const movieCard = createMovieCard(movie); // Movie card with toggle button
    carouselWrapper.appendChild(movieCard);
  });
}

// Function to setup carousel navigation
export function setupCarouselNavigation(prevButtonId, nextButtonId, carouselId) {
  const carouselWrapper = document.getElementById(carouselId);
  const nextButton = document.getElementById(nextButtonId);
  const prevButton = document.getElementById(prevButtonId);

  if (!carouselWrapper || !nextButton || !prevButton) {
    console.error(`Error: One of the navigation elements for ${carouselId} is not found`);
    return;
  }

  nextButton.addEventListener('click', () => {
    carouselWrapper.scrollBy({
      left: 210,
      behavior: 'smooth'
    });
  });

  prevButton.addEventListener('click', () => {
    carouselWrapper.scrollBy({
      left: -210,
      behavior: 'smooth'
    });
  });
}
