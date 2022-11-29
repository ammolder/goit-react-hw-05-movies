import { useState, useEffect } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { getMovies } from 'api/getMovies';
import { BackLink } from './BackLink.styled';
import { MovieCard } from 'components/MovieCard/MovieCard';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies/';
  const options = 'language=en-US';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const r = await getMovies(`movie/${movieId}`, options);

        setMovieDetails(r.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [movieId]);

  return (
    <div>
      <BackLink to={backLinkHref}>Return back</BackLink>
      <MovieCard movieDetails={movieDetails} />

      <ul>
        <li>
          <Link to="cast" state={{ from: location.state?.from ?? '/movies/' }}>
            Cast
          </Link>
        </li>
        <li>
          <Link
            to="reviews"
            state={{ from: location.state?.from ?? '/movies/' }}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default MovieDetails;
