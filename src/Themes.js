import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            xs400: 400,
            xs550: 550,
            sm: 600,
            sm2: 750,
            md: 900,
            lg: 1200,
            xl: 1536,
            md2: 1100
        },
    },
});

export default theme;
