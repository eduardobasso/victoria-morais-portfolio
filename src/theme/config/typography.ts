import { TypographyVariantsOptions } from '@mui/material/styles';

const typography: TypographyVariantsOptions = {
  fontFamily: ['Poppins', 'sans-serif'].join(','),
  h1: {
    lineHeight: 1.2,
    fontSize: '48px',
    fontWeight: 700,
  },
  h2: {
    lineHeight: 1.2,
    fontSize: '26px',
    fontWeight: 700,
  },
  subtitle1: {
    lineHeight: 1.5,
    fontSize: '16px',
    fontWeight: 500,
  },
  subtitle2: {
    lineHeight: 1.2,
    fontSize: '13.3px',
    fontWeight: 400,
  },
  overline: {
    lineHeight: 1.2,
    fontSize: '13.3px',
    fontWeight: 500,
    textTransform: 'none',
  },
  caption: {
    lineHeight: 1,
    fontSize: '13.3px',
    fontWeight: 300,
  },
};

export default typography;
