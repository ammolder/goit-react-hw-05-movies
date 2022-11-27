import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink } from 'components/App.styled';
import { Header, List, Item } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <List>
            <Item>
              <StyledLink to="/" end>
                Home
              </StyledLink>
            </Item>
            <Item>
              <StyledLink to="/movies">Movie</StyledLink>
            </Item>
          </List>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
