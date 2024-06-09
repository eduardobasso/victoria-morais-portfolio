import { Box, Stack } from '@mui/material';
import Head from 'next/head';
import { ReactNode } from 'react';
import PageFooter from './page-footer';
import PageNavbar from './page-navbar';
import ScrollTopButton from './scroll-top-button';

type TPageWrapperProps = {
    children: ReactNode;
    title?: string;
};

function PageWrapper({ children, title = 'Portfolio' }: TPageWrapperProps) {
    return (
        <Stack minHeight="100vh">
            <Head>
                <title>{`${title} | Victoria Morais`}</title>
            </Head>
            <Box component="main" flexGrow={1}>
                <PageNavbar />
                {children}
            </Box>
            <PageFooter />
            <ScrollTopButton />
        </Stack>
    );
}

export default PageWrapper;
