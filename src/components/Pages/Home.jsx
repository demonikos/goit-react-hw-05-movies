import { useEffect, useState } from 'react';
import { fetchTrendingTodayMovies } from '../Api/fetch-trending-today';
import { MovieList } from 'components/MovieList/MovieList';
// import { fetchMovieDetails } from "./Api/fetch-movie-details";
// import { MovieDetails } from "./MovieDetails/MovieDetails"

export const Home = () => {
  const [filmList, setFilmList] = useState([]);
//   const firstRender = useRef(true);

  useEffect(() => {

    async function getMovieList() {
      await fetchTrendingTodayMovies()
        .then(response => {
          setFilmList(response);
        })
        .catch(error => console.log(error));
    }
    getMovieList();
  }, []);

  //    const onClick = (id) => {
  //     async function getMovieDetails() {
  //       await fetchMovieDetails(id)
  //       .then(response => {
  //         console.log(response)
  //       })
  //       .catch(error => (console.log(error)))
  //     }
  //     getMovieDetails();
  //    }

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        <MovieList filmList={filmList}/>
      </ul>
    </>
  );
};
