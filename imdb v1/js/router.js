// router.js

// Function to navigate to a specific path
export function navigateTo(path) {
    history.pushState(null, null, path);
    handleRoute(); // Load the content associated with the new route
  }
  
  // Function to handle different routes based on the URL
  export function handleRoute() {
    const path = window.location.pathname;
  
    switch (path) {
      case '/':
        loadHomePage();
        break;
      case '/about':
        loadAboutPage();
        break;
      case '/favorites':
        loadFavoritesPage();
        break;
      default:
        loadNotFoundPage(); // For any unknown route
    }
  }
  
  // Example functions to load specific page content
  function loadHomePage() {
    document.getElementById('content-wrapper').innerHTML = '<h1>Home Page</h1>';
  }
  
  function loadAboutPage() {
    document.getElementById('content-wrapper').innerHTML = '<h1>About Page</h1>';
  }
  
  function loadFavoritesPage() {
    document.getElementById('content-wrapper').innerHTML = '<h1>Favorites Page</h1>';
  }
  
  function loadNotFoundPage() {
    document.getElementById('content-wrapper').innerHTML = '<h1>404 - Page Not Found</h1>';
  }
  
  // Listen for URL changes via the back/forward buttons
  window.addEventListener('popstate', handleRoute);
  window.navigateTo = navigateTo;
  // Initial route load
  handleRoute();
  