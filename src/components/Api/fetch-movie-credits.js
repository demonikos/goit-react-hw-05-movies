import axios from 'axios';

const API_KEY = '3e1aa277fd6b8a3cd0a3e29dfce20a5c';

const fetchMovieCredits = async movieId => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
  try {
    const response = await axios.get(URL);
    const data = response.data.cast;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchMovieCredits };
