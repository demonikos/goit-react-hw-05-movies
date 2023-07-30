import { useState, useEffect } from 'react';
import { fetchMovieCredits } from '../Api/fetch-movie-credits';
import { useParams } from 'react-router-dom';

import css from './Cast.module.css'

const Cast = () => {
  const [movieCast, setMovieCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        const castData = await fetchMovieCredits(movieId);
        setMovieCast(castData);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [movieId]);

  if (movieCast?.length === 0) {
    return <>Sorry, there is no info about film cast</>;
  }

  return (
    <>
      <ul className={css.CastList}>
        {movieCast?.map(elem => {
          return (
            <li key={elem.id} className={css.CastItem}>
              <img
                src={'https://image.tmdb.org/t/p/w400' + elem.profile_path}
                alt={elem.name}
                className={css.CastProfile}
              ></img>
              <h3 className={css.Actor}>{elem?.name}</h3>
              <p className={css.Character}>Character:</p>
              <p className={css.Character}>{elem?.character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
