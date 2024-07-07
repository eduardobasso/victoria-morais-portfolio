import type { TypographyVariantsOptions } from '@mui/material/styles';

const typography: TypographyVariantsOptions = {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    h1: {
        fontWeight: 600,
        fontSize: 48,
        lineHeight: 1.375,
        textTransform: 'none',
    },
    h2: {
        fontWeight: 600,
        fontSize: 40,
        lineHeight: 1.65,
        textTransform: 'none',
    },
    h5: {
        fontWeight: 700,
        fontSize: 26,
        lineHeight: 1.2,
        textTransform: 'none',
    },
    subtitle1: {
        fontWeight: 700,
        fontSize: 16,
        lineHeight: 1.5,
        textTransform: 'uppercase',
    },
    subtitle2: {
        fontWeight: 600,
        fontSize: 18,
        lineHeight: 1.5,
        textTransform: 'none',
    },
    body1: {
        fontWeight: 300,
        fontSize: 16,
        lineHeight: 1.5,
        textTransform: 'none',
    },
    button: {
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 1.2,
        textTransform: 'none',
    },

};

export default typography;
