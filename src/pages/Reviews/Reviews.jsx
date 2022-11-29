import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from 'API/getMovies';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';

const Reviews = () => {
  const [reviews, setReviews] = useState({});
  const { movieId } = useParams();
  const options = 'language=en-US';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const r = await getMovies(`movie/${movieId}/reviews`, options);

        setReviews(r.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [movieId]);
  return <ReviewsList reviews={reviews} />;
  // <ul>
  //   {reviews.length
  //     ? reviews.map(({ id, author, content }) => {
  //         return (
  //           <li key={id}>
  //             <h3>{author}</h3>
  //             <p>{content}</p>
  //           </li>
  //         );
  //       })
  //     : 'Sorry, there are no reviews'}
  // </ul>
};
export default Reviews;
