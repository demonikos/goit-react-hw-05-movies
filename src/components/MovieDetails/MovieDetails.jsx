import { useEffect, useState, useRef, Suspense } from 'react';
import { useLocation, Link, useParams, Outlet } from 'react-router-dom';

import { fetchMovieDetails } from 'components/Api/fetch-movie-details';
import Movie from 'components/Pages/Movie';
// import { Cast } from 'components/Cast/Cast';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState();
  const location = useLocation();
  const { movieId } = useParams();

  const goBack = useRef(location.state?.from ?? '/movies');

  // console.log(goBack)
  // console.log(typeof(backLinkHref))
  // console.log(location.state)

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
      <Link to={goBack.current}>go back</Link>

      <div>
        <img
          src={posterPath}
          alt={movieInfo?.title}
          width="360px"
          height="auto"
        ></img>
        <h1>{movieInfo?.title}</h1>
        <p>User Score: {movieInfo?.user_score}%</p>
        <h2>Overview</h2>
        <p>{movieInfo?.overview}</p>
        <h3>Genres</h3>
        <p>{movieInfo?.genres}</p>
      </div>
      <div>
        <h3>Additional information:</h3>
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

export default MovieDetails