import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#ff4d88',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff1a75',
    },
    background: {
      default: '#fff5f8',
      paper: '#ffffff',
    },
  },

  typography: {
    fontFamily: "'Quicksand', sans-serif",

    h1: {
      fontFamily: "'Dancing Script', cursive",
      fontWeight: 700,
      color: '#d32f2f',
    },
    h2: {
      fontFamily: "'Dancing Script', cursive",
      fontWeight: 700,
      color: '#d32f2f',
    },
    h3: {
      fontFamily: "'Dancing Script', cursive",
      fontWeight: 700,
      color: '#d32f2f',
    },
    h4: {
      fontFamily: "'Dancing Script', cursive",
      fontWeight: 700,
    },

    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.95rem',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          textTransform: 'none',
          padding: '10px 28px',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

// Makes typography automatically responsive
theme = responsiveFontSizes(theme);

export default theme;
