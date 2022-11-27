import PropTypes from 'prop-types';
import { Container, List } from './MovieCard.styled';

export const MovieCard = ({
  movieDetails: {
    release_date,
    poster_path,
    original_title,
    popularity,
    overview,
    genres,
  },
}) => {
  const year = new Date(release_date).getFullYear();
  return (
    <Container>
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={original_title}
      />

      <div>
        <h2>{`${original_title} (${year})`}</h2>
        {popularity && <p>{`${popularity}%`}</p>}
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>

        <List>
          {genres
            ? genres.map(({ id, name }) => {
                return <li key={id}>{name}</li>;
              })
            : 'Unknow'}
        </List>
      </div>
    </Container>
  );
};

MovieCard.propTypes = {
  movieDetails: PropTypes.shape({
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    popularity: PropTypes.number,
    overview: PropTypes.string,
  }),
};
