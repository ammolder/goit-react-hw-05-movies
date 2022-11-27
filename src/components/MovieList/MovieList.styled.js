import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;
export const Image = styled.img`
  display: block;
  height: 300px;
  width: 200px;
  margin-bottom: 5px;
`;
export const Title = styled.h2`
  display: flex;
  list-style: none;
  align-items: center;
  width: 200px;

  font-weight: 600;

  :hover {
    scale: 1.05;
  }
`;
export const StyledLink = styled(NavLink)``;
