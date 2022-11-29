import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovies } from 'API/getMovies';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const r = await getMovies('trending/all/day');
        setMovies(r.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <main>
      <h2>Trending name</h2>
      <MovieList movies={movies} location={location} />
    </main>
  );
};
export default Home;
