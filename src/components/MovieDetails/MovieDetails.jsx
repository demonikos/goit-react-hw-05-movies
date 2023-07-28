import { useEffect, useState, useRef } from "react";
import { useLocation, Link, useParams } from "react-router-dom";

import { fetchMovieDetails } from "components/Api/fetch-movie-details";


export const MovieDetails = () => {

  const [movieInfo, setMovieInfo] = useState();
  const location = useLocation();
  const {movieId} = useParams();

  const backLinkHref = useRef(location.state?.from ?? '/movies');

  console.log(backLinkHref)
  console.log(typeof(backLinkHref))
  console.log(location.state)

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

// console.log(movieInfo)

  const posterPath = `https://image.tmdb.org/t/p/original/${movieInfo?.smallPoster}`;

  
  return (
    <>
    
    {/* <button type="button" >go back</button> */}
    <Link to={location.state?.from}>go back</Link>
    <div>
      <img src={posterPath} alt={movieInfo?.title} width="360px" height="auto"></img>
      <h1>{movieInfo?.title}</h1>
      <p>User Score: {movieInfo?.user_score}%</p>
      <h2>Overview</h2>
      <p>{movieInfo?.overview}</p>
      <h3>Genres</h3>
      <p>{movieInfo?.genres}</p>
    </div>
    </>
  );
};