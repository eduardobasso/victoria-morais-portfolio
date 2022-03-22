import { ThemeOptions } from '@mui/material/styles'

import typography from './config/typography'

const theme: ThemeOptions = {
  palette: {
    mode: 'light',
    common: {
      black: '#242424',
      white: '#fff',
    },
    primary: {
      main: '#731ab7',
      light: '#a74fea',
      dark: '#3e0086',
      contrastText: '#fff',
    },
    text: {
      primary: '#fff',
      secondary: '#4f4f4f',
    },
    divider: '#e5e5e5',
    background: {
      paper: '#f9f9f9',
      default: '#fff',
    }
  },
  typography,
}

export default theme
