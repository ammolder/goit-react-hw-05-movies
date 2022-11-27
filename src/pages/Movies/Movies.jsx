import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovies } from 'API/getMovies';

import { MovieList } from 'components/MovieList/MovieList';
import { Form, Input, Submit } from './Movies.styled';

const Movies = () => {
  const [movieData, setMovieData] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieSearch = searchParams.get('movieSearch') ?? '';

  const options = `query=${movieSearch}&language=en-US&include_adult=false`;

  useEffect(() => {
    if (movieSearch === '') {
      return;
    }

    const fetchMovie = async () => {
      try {
        const r = await getMovies('search/movie', options);
        if (r.data.results.length === 0) {
          return alert(
            `Sorry, no movies were found with the name ${movieSearch}`
          );
        }
        setMovieData(r.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [movieSearch, options]);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    setSearchParams({
      movieSearch: form.elements.filmSearch.value.toLowerCase(),
    });
    if (form.elements.filmSearch.value.trim() === '') {
      return alert('Please enter a value');
    }
    form.reset();
  };

  return (
    <main>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="filmSearch" placeholder="Search movies" />
        <Submit type="submit">Submit</Submit>
      </Form>

      {movieData.length !== 0 && (
        <MovieList movies={movieData} location={location} />
      )}
    </main>
  );
};
export default Movies;

Form.propTypes = {
  onSubmit: PropTypes.func,
};
