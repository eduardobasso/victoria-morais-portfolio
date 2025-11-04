import { ThemeOptions } from '@mui/material/styles';
import typography from './config/typography';

const theme: ThemeOptions = {
  palette: {
    mode: 'light',
    common: {
      black: '#242424',
      white: '#fff',
    },
    primary: {
      main: '#d14200',
      light: '#da6733',
      dark: '#922e00',
      contrastText: '#fff',
    },
    secondary: {
      main: '#d14200',
      light: '#da6733',
      dark: '#922e00',
      contrastText: '#fff',
    },
    text: {
      primary: '#242424',
      secondary: '#4f4f4f',
    },
    divider: '#e5e5e5',
    background: {
      paper: '#f9f9f9',
      default: '#fff',
    },
  },
  typography,
};

export default theme;
