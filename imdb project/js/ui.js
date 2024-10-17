// ui.js

export function setupNavBar() {
    const searchIcon = document.getElementById('search-icon');
    const navLinks = document.querySelector('.nav-links');
    const logo = document.querySelector('.logo');
    const searchContainer = document.getElementById('search-container');
  
    // Show search input and hide other elements
    searchIcon.addEventListener('click', () => {
      logo.classList.add('nav-hidden');
      navLinks.classList.add('nav-hidden');
      searchIcon.style.display = 'none'; // Hide search icon
      searchContainer.style.display = 'flex'; // Show search input
    });
  
    // Bring back the navbar when clicking outside the search input
    document.addEventListener('click', (event) => {
      if (!searchContainer.contains(event.target)) {
        searchContainer.style.display = 'none'; // Hide search input
        logo.classList.remove('nav-hidden');
        navLinks.classList.remove('nav-hidden');
        searchIcon.style.display = 'block'; // Show search icon
      }
    });
  }
  