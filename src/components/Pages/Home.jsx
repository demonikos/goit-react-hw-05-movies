import { useEffect, useState } from 'react';
import { fetchTrendingTodayMovies } from '../Api/fetch-trending-today';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    async function getMovieList() {
      try {
        const movieList = await fetchTrendingTodayMovies();
        setFilmList(movieList);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieList();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        <MovieList filmList={filmList} />
      </ul>
    </>
  );
};

export default Home;
