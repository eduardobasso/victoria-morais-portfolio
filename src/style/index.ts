import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { theme } from '../theme';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    color: ${theme.colors.black};
    font-family: "Rubik", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    ${theme.fonts.body};
  }
`;

export default GlobalStyle;
