import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { fetchMovieDetails } from "components/Api/fetch-movie-details";


export const MovieDetails = () => {

  const [movieInfo, setMovieInfo] = useState();
  const location = useLocation();
  const {movieId} = useParams();

  useEffect(() => {

    async function getMovieInfo() {
      await fetchMovieDetails(movieId)
        .then(response => {
          setMovieInfo(response);
        })
        .catch(error => console.log(error));
    }
    getMovieInfo();
  }, [movieId]);

console.log(movieInfo)

  const posterPath = `https://image.tmdb.org/t/p/original/${movieInfo?.smallPoster}`;

  
  return (
    <>
      <img src={posterPath} alt={movieInfo?.title}></img>
      <h1>{movieInfo?.title}</h1>
      <p>User Score: {movieInfo?.user_score}%</p>
      <h2>Overview</h2>
      <p>{movieInfo?.overview}</p>
      <h3>Genres</h3>
      <p>{movieInfo?.genres}</p>
    </>
  );
};