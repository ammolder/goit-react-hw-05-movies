import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from 'api/getMovies';
import { Image, Item, List } from './Cast.styled';

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
      <List>
        {cast
          ? cast.map(({ id, name, profile_path, character }) => {
              return (
                <Item key={id}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt="name"
                  />
                  <p>{name}</p>
                  <p>{character}</p>
                </Item>
              );
            })
          : 'Unknow'}
      </List>
    </div>
  );
};
export default Cast;
