import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import { Mobile } from '../../services/mediaQuery';
import { List, Item } from './NavBar.styled';

export const NavBar = () => {
  return (
    <Container>
      <nav>
        <List>
          <Item>
            <NavLink to="home">Home</NavLink>
          </Item>
          <Item>
            <NavLink to="statistics">Statistics</NavLink>
          </Item>
          <Item>
            <Mobile>
              <NavLink to="currency">Currency</NavLink>
            </Mobile>
          </Item>
        </List>
      </nav>
    </Container>
  );
};
