import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4d88', // Deep pink
      contrastText: '#fff',
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
      fontSize: '1.1rem',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          textTransform: 'none',
          padding: '10px 30px',
          fontSize: '1.1rem',
        },
      },
    },
  },
});

export default theme;
