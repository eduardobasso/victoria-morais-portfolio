import { ThemeOptions } from '@mui/material/styles';
import components from './config/components';
import typography from './config/typography';

const theme: ThemeOptions = {
    components,
    palette: {
        mode: 'light',
        common: {
            black: '#242424',
            white: '#fff',
        },
        primary: {
            main: '#242424',
            light: '#4c4c4c',
            dark: '#010101',
            contrastText: '#fff',
        },
        secondary: {
            main: '#700bd5',
            light: '#a74aff',
            dark: '#3400a2',
            contrastText: '#fff',
        },
        text: {
            primary: '#1a1b1f',
            secondary: '#7c7c7c',
        },
        divider: '#7c7c7c',
        background: {
            paper: '#f9f9f9',
            default: '#fff',
        },
    },
    typography,
};

export default theme;
