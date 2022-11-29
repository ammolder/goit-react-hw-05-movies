import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Image, StyledLink, Title } from './MovieList.styled';

export const MovieList = ({ movies, location }) => {
  return (
    <List>
      {movies.map(({ title, name, id, poster_path }) => {
        return (
          <li key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              <Image
                src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                alt={title || name}
              />
              <Title>{title || name}</Title>
            </StyledLink>
          </li>
        );
      })}
      <Outlet />
    </List>
  );
};
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number,
      poster_path: PropTypes.string,
    })
  ),
};
