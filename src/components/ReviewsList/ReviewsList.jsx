import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { List, Image, StyledLink, Title } from './MovieList.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.length
        ? reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })
        : 'Sorry, there are no reviews'}
      <Outlet />
    </ul>
  );
};
ReviewsList.propTypes = {
  reviews: PropTypes.object,
};
