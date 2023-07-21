import axios from 'axios';

const API_KEY = '3e1aa277fd6b8a3cd0a3e29dfce20a5c';

const fetchTrendingTodayMovies = async (page = 1) => {
  const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
  try {
    const response = await axios.get(URL);
    const trendsList = response.data.results;
    return trendsList;
  } catch (error) {
    console.log(error);
  }
};

export { fetchTrendingTodayMovies };
