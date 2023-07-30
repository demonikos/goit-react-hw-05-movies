import { useState, useEffect } from 'react';
import { fetchMovieCredits } from '../Api/fetch-movie-credits';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [movieCast, setMovieCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
        try{
            const castData = await fetchMovieCredits(movieId);
            setMovieCast(castData.cast);
        }
        catch (error) {
            console.log(error);
        }

    //   await fetchMovieCredits(movieId)
    //     .then(response => {
    //       console.log(response.cast);
    //       setMovieCast(response.cast);
    //     })
    //     .catch(error => console.log(error));
    }
    getCast();
    // console.log(movieCast)
  }, [movieId]);

  console.log(movieCast);

  if (movieCast?.length === 0) {
    return <>Sorry</>
  }

  return (
    <>
      {/* {movieCast.map(elem => {
        console.log(elem)
        return (
          <ul>
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
          </ul>
        );
      })} */}
    </>
  );
};

export default Cast