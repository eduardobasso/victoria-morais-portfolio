import { CssBaseline } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import theme from '../theme';

let appTheme = createTheme(theme);
appTheme = responsiveFontSizes(appTheme);

function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default App;
