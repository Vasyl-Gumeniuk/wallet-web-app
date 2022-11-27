import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0
  font-family: 'Circe', Poppins, sans-serif;
  color: ${p => p.theme.colors.blackTextColor};
  line-height: ${p => p.theme.lineHeights.body};
  }
  main {
    background-color: ${p => p.theme.colors.primaryPageBgr};
  }
ul, li {
  list-style: none;
}
h1, h2, h3, h4, h5, h6, p, ul {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
button {
cursor: pointer;
padding: 0;
color: ${p => p.theme.colors.blackTextColor};
}
a {
  text-decoration: none;
  color: ${p => p.theme.colors.blackTextColor};
}
`;
