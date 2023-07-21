export const MovieDetails = (
  id,
  user_score,
  smallPoster,
  title,
  overview,
  genres
) => {
  const posterPath = `https://image.tmdb.org/t/p/w400/${smallPoster}`;
  return (
    <>
      <img src={posterPath} alt={title}></img>
      <h1>{title}</h1>
      <p>User Score: {user_score}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres}</p>
    </>
  );
};