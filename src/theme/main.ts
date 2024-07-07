import type { ThemeOptions } from '@mui/material/styles';
import breakpoints from './config/breakpoints';
import components from './config/components';
import typography from './config/typography';

const themeOptions: ThemeOptions = {
    breakpoints,
    components,
    palette: {
        mode: 'light',
        common: {
            black: '#141414',
            white: '#fff',
        },
        primary: {
            main: '#141414',
            light: '#4f4f4f',
            dark: '#010101',
            contrastText: '#eee',
        },
        secondary: {
            main: '#700bd5',
            light: '#bb86fc',
            dark: '#3400a2',
            contrastText: '#fff',
        },
        text: {
            primary: '#141414',
            secondary: '#4f4f4f',
        },
        divider: '#7c7c7c',
        background: {
            paper: '#fff',
            default: '#fff',
        },
    },
    typography,
};

export default themeOptions;
