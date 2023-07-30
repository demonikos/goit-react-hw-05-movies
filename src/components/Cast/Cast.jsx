import { useState, useEffect } from 'react';
import { fetchMovieCredits } from '../Api/fetch-movie-credits';
import { useParams } from 'react-router-dom';

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
      <ul>
        {movieCast?.map(elem => {
          return (
            <li key={elem.id}>
              <img
                src={'https://image.tmdb.org/t/p/w400' + elem.profile_path}
                alt={elem.name}
                width="360px"
                height="auto"
              ></img>
              <h3>{elem?.name}</h3>
              <p>Character: {elem?.character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
