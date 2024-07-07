import { Box, Stack, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import { ReactNode } from 'react';
import { getPageTheme, type ThemeNames } from '../theme';
import PageFooter from './page-footer';
import PageNavbar from './page-navbar';
import ScrollTopButton from './scroll-top-button';

type PageWrapperProps = {
    children: ReactNode;
    title?: string;
    theme?: ThemeNames;
    lightNavbar?: boolean;
};

function PageWrapper({ children, title = 'Portfolio', theme, lightNavbar }: PageWrapperProps) {
    const pageTheme = getPageTheme(theme);

    return (
        <Stack minHeight="100vh">
            <Head>
                <title>{`${title} | Victoria Morais`}</title>
            </Head>
            <Box component="main" flexGrow={1}>
                <PageNavbar lightMode={lightNavbar} />
                {theme ? <ThemeProvider theme={pageTheme}>{children}</ThemeProvider> : children}
            </Box>
            <PageFooter />
            <ScrollTopButton />
        </Stack>
    );
}

export default PageWrapper;
