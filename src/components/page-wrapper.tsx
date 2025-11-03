import { Box, Stack } from '@mui/material';
import Head from 'next/head';
import { ReactNode } from 'react';
import PageFooter from './page-footer';
import PageNavbar from './page-navbar';

type TPageWrapperProps = {
  children: ReactNode;
  title?: string;
  isHomePage?: boolean;
};

function PageWrapper({ children, title = 'Portfolio', isHomePage = false }: TPageWrapperProps) {
  return (
    <Stack minHeight="100dvh">
      <Head>
        <title>{`${title} | Victoria Morais`}</title>
      </Head>
      <Box flexGrow={1}>
        <PageNavbar hasH1={isHomePage} />
        <main>{children}</main>
      </Box>
      <PageFooter />
    </Stack>
  );
}

export default PageWrapper;
