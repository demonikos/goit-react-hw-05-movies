import { useEffect, useState, useRef, Suspense } from 'react';
import { useLocation, Link, useParams, Outlet } from 'react-router-dom';

import { fetchMovieDetails } from 'components/Api/fetch-movie-details';

import css from './MovieDetails.module.css'

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState();
  const location = useLocation();
  const { movieId } = useParams();

  const goBack = useRef(location.state?.from ?? '/movies');

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

  const posterPath = `https://image.tmdb.org/t/p/original/${movieInfo?.smallPoster}`;

  return (
    <>
      <Link to={goBack.current}>go back</Link>

      <div>
        <img
          src={posterPath}
          alt={movieInfo?.title}
          // width="240px"
          // height="auto"
          className={css.PosterImg}
        ></img>
        <h1 className={css.MovieTitle}> {movieInfo?.title}</h1>
        <p className={css.MovieText}>User Score: {movieInfo?.user_score}%</p>
        <h2 className={css.MovieH2}>Overview</h2>
        <p className={css.MovieText}>{movieInfo?.overview}</p>
        <h3 className={css.MovieH3}>Genres</h3>
        <p className={css.MovieText}>{movieInfo?.genres}</p>
      </div>
      <div>
        <h3 className={css.MovieH3}>Additional information:</h3>
        <ul>
          <li>
            <Link to="cast">Cast </Link>
          </li>
          <li>
            <Link to="reviews">Reviews </Link>
          </li>
        </ul>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;