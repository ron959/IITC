const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOThhYmU1YjAxNGNiZWY1ZmIxOWRiNDM2NmQxZDhmMiIsIm5iZiI6MTcyOTE2OTg2OC44NDkxMTYsInN1YiI6IjY3MGNlYmQ5NGRmNTlhNjA4YzYzOTVjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qv0Otl364jJHpl64R8bvjj1u8iVa8GDQeJZkA60ooJk'
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
  
  // Function to fetch Popular Movies
  export async function fetchPopularMovies() {
    return fetchMovies('popular');
  }
  
  // Function to fetch Top Rated Movies
  export async function fetchTopRatedMovies() {
    return fetchMovies('top_rated');
  }
  
  // Function to fetch Upcoming Movies
  export async function fetchUpcomingMovies() {
    return fetchMovies('upcoming');
  }
  