// Authorization options for the API
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOThhYmU1YjAxNGNiZWY1ZmIxOWRiNDM2NmQxZDhmMiIsIm5iZiI6MTcyOTE2OTk0OS44MDI3ODgsInN1YiI6IjY3MGNlYmQ5NGRmNTlhNjA4YzYzOTVjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L_RSwdeTZg4RIijGS6GS--Fapl7BGisLrazupWKRIZo'
  }
};

// Generic function to fetch data from a given endpoint
async function fetchMovies(endpoint) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`, options);
    const data = await response.json();
    return data.results; // Return movie results
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

// Function to fetch movie by ID
export async function fetchMovieById(movieId) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
    const data = await response.json();
    return data; // Return the entire movie object
  } catch (error) {
    console.error('Error fetching movie details:', error);
  }
}

// Function to fetch Popular Movies
export async function fetchPopularMovies() {
  return fetchMovies('popular');
}


