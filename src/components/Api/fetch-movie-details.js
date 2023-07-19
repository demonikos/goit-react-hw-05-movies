import axios from 'axios';

const API_KEY = '3e1aa277fd6b8a3cd0a3e29dfce20a5c';

const fetchMovieDetails = async movieId => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  try {
    const response = await axios.get(URL);
    const data = response.data;

    const smallPoster = data.poster_path;
    const title = data.title;
    const overview = data.overview;
    const genres = data.genres.map(genre => genre.name).join(', ');
    const id = data.id;

    return {
      title,
      overview,
      genres,
      smallPoster,
      id,
    };
  } catch (error) {
    console.log(error);
  }
};

export { fetchMovieDetails };
