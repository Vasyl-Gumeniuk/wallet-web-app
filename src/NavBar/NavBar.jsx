import { ReactComponent as ReactSprite } from '../images/icons/sprite-all-icons.svg';
import Container from '../components/Container/Container';
import { List, Item, Icon } from './NavBar.styled';
import { NavLink } from 'react-router-dom';
import { Mobile } from '../services/mediaQuery';
export const NavBar = () => {
  return (
    <Container>
      <nav>
        <List>
          <Item>
            <ReactSprite />
            <NavLink to="home">
              <Icon width="44" height="44">
                <use href="#icon-home"></use>
              </Icon>
            </NavLink>
          </Item>
          <Item>
            <NavLink to="statistics">
              <Icon width="44" height="44">
                <use href="#icon-statistica"></use>
              </Icon>
            </NavLink>
          </Item>
          <Mobile>
            <Item>
              <NavLink to="currency">
                <Icon width="44" height="44">
                  <use href="#icon-dollar"></use>
                </Icon>
              </NavLink>
            </Item>
          </Mobile>
        </List>
      </nav>
    </Container>
  );
};
