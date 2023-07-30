import { Link, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export const MovieList = ({ filmList }) => {
  const location = useLocation();
  return (
    <>
      {filmList.map(elem => (
        <li key={elem.id}>
          <Link to={`/movies/${elem.id}`} state={{ from: location }}>
            {elem.original_title}
          </Link>
        </li>
      ))}
    </>
  );
};

MovieList.propTypes = {
  filmList: PropTypes.array.isRequired,
};
