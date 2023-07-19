import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY = '3e1aa277fd6b8a3cd0a3e29dfce20a5c';

const fetchSearch = async (keyword, page = 1) => {
  if (!keyword) {
    Notiflix.Notify.failure('Please enter the title of the movie.');
    return [];
  }

  const URL = `https://api.themoviedb.org/3/search/movie/${keyword}?api_key=${API_KEY}&page=${page}`;
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchSearch };
