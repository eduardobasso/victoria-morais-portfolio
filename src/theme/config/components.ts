import type { Components, Theme } from '@mui/material/styles';

const components: Components<Theme> = {
    MuiToolbar: {
        styleOverrides: {
            root: ({ theme }) => ({
                fontSize: 18,
                [theme.breakpoints.up('sm')]: {
                    minHeight: 87,
                },
            }),
        },
    },
};

export default components;
