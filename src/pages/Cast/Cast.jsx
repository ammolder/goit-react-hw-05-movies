import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from 'API/getMovies';

const Cast = () => {
  const [castData, setCastData] = useState({});
  const { movieId } = useParams();

  const options = 'language=en-US';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const r = await getMovies(`movie/${movieId}/credits`, options);

        setCastData(r.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [movieId]);
  const { cast } = castData;
  return (
    <div>
      <ul>
        {cast
          ? cast.map(({ id, name, profile_path, character }) => {
              return (
                <li key={id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt="name"
                  />
                  <p>{name}</p>
                  <p>{character}</p>
                </li>
              );
            })
          : 'Unknow'}
      </ul>
    </div>
  );
};
export default Cast;
