import { ReactComponent as ReactSprite } from '../images/icons/sprite-all-icons.svg';
import Container from '../components/Container/Container';
import { List, Item, Icon, Text, LinkStyled } from './NavBar.styled';

import { Mobile, Default } from '../services/mediaQuery';
export const NavBar = () => {
  return (
    <Container>
      <nav>
        <List>
          <Item>
            <ReactSprite />
            <LinkStyled to="home">
              <Icon>
                <use href="#icon-home"></use>
              </Icon>
              <Default>
                <Text>Home</Text>
              </Default>
            </LinkStyled>
          </Item>
          <Item>
            <LinkStyled to="statistics">
              <Icon>
                <use href="#icon-statistica"></use>
              </Icon>
              <Default>
                <Text>Statistics</Text>
              </Default>
            </LinkStyled>
          </Item>
          <Mobile>
            <Item>
              <LinkStyled to="currency">
                <Icon>
                  <use href="#icon-dollar"></use>
                </Icon>
              </LinkStyled>
            </Item>
          </Mobile>
        </List>
      </nav>
    </Container>
  );
};