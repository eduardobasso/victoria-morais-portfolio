import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../style';
import { theme } from '../theme';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
