import axios from 'axios';

const API_KEY = '3e1aa277fd6b8a3cd0a3e29dfce20a5c';

const fetchSearch = async keyword => {
  if (keyword) {
    const URL = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${API_KEY}`;
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
};

export { fetchSearch };
