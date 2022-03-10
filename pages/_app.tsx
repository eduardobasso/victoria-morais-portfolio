import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'

import theme from '../theme'

let appTheme = createTheme(theme)
appTheme = responsiveFontSizes(appTheme)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
