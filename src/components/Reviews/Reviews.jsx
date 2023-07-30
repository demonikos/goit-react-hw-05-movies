import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../Api/fetch-movie-reviews';
import { useParams } from 'react-router-dom';

import css from './Reviews.module.css'

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const reviewsData = await fetchMovieReviews(movieId);
        setMovieReviews(reviewsData);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [movieId]);

  if (movieReviews?.length === 0) {
    return <p>We don`t have any reviews for this movie</p>;
  }

  return (
    <>
      <ul>
        {movieReviews?.map(elem => {
          return (
            <li key={elem.id} className={css.Item}>
              <h3 className={css.Author}>Autor: {elem.author}</h3>
              <p className={css.Comment}>{elem.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;
