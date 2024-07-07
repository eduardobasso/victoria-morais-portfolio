import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { getAppTheme } from '../theme';

function App({ Component, pageProps }: AppProps) {
    const appTheme = getAppTheme();
    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default App;
