import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../Api/fetch-movie-reviews';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      await fetchMovieReviews(movieId)
        .then(response => {
          console.log(response);
          setMovieReviews(response.results);
        })
        .catch(error => console.log(error));
    }
    getReviews();
    // console.log(movieCast)
  }, [movieId]);

  console.log(movieReviews);

  if (movieReviews.length === 0) {
    return <p>We don`t have any reviews for this movie</p>;
  }

  return (
    <>
      {movieReviews.map(elem => {
        return (
          <ul>
            <li key={elem.id}>
              <h3>Autor: {elem.author}</h3>
              <p>{elem.content}</p>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default Reviews