import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    font-family: sans-serif;
  }

  h1,h2,h3,
  h4,h4,h6 {
    font-family: 'Teko', sans-serif;
  }

  p, a, button {
    font-family: 'Ubuntu', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
