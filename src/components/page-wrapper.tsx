import Head from 'next/head'
import { ReactNode } from 'react'
import { Box, Stack } from '@mui/material'

import PageNavbar from './page-navbar'
import PageFooter from './page-footer'
import ScrollTopButton from './scroll-top-button'

type PageWrapperProps = {
  children: ReactNode
}

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <Stack minHeight="100vh">
      <Head>
        <title>Portfolio | Victoria Morais</title>
      </Head>
      <Box component="main" flexGrow={1}>
        <PageNavbar />
        {children}
      </Box>
      <PageFooter />
      <ScrollTopButton />
    </Stack>
  )
}

export default PageWrapper
