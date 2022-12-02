import { ReactComponent as ReactSprite } from '../images/icons/sprite-all-icons.svg';
import { List, Item, Icon, LinkStyled, LinkStyledCurrent } from './NavBar.styled';
import { Mobile, Default } from '../services/mediaQuery';
import { useLocation } from 'react-router-dom';

export const NavBar = () => {
  let location = useLocation().pathname;
  return (
    <nav>
        <List>
          <Item>
            <ReactSprite />
            { location === '/home'? (<LinkStyledCurrent to="/home">
              <Icon>
                <use href="#icon-home"></use>
              </Icon>
              <Default>Home</Default>
            </LinkStyledCurrent>) : (<LinkStyled to="/home">
              <Icon>
                <use href="#icon-home"></use>
              </Icon>
              <Default>Home</Default>
            </LinkStyled>)
}
          </Item>
            <Item>
            { location === '/statistics'? (
            <LinkStyledCurrent to="/statistics">
              <Icon>
                <use href="#icon-statistica"></use>
              </Icon>
              <Default>Statistics</Default>
            </LinkStyledCurrent>) : (<LinkStyled to="/statistics">
              <Icon>
                <use href="#icon-statistica"></use>
              </Icon>
              <Default>Statistics</Default>
            </LinkStyled>)}
          </Item>
          <Mobile>
            <Item>
              <LinkStyled to="/currency">
                <Icon>
                  <use href="#icon-dollar"></use>
                </Icon>
              </LinkStyled>
            </Item>
          </Mobile>
        </List>
      </nav>
   );
};