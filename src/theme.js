import { blueGrey, cyan, red, teal, grey, white } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
      light: grey[100],
    },
    secondary: {
      main: cyan[500],
    },
    error: {
      main: red[400],
    },
    info : {
      main: grey[100],
    },
    background: {
      default: grey[900],
    },
    string : {
      default: grey[100],
    },
  },
  spacing: 8,
  typography: {
    body1: {
      default: 'white',
    },
    Link: {
      default: cyan[500],
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;
