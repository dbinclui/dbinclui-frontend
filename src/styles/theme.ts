import { ColorizeSharp } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';
import { Colors } from './colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    background: {
      default: Colors.PRIMARY,
    },
    text: {
      primary: Colors.LIGHT,
    },
    primary: {
      light: Colors.PRIMARY_LIGHT,
      main: Colors.PRIMARY,
    },
    secondary: {
      main: Colors.SECONDARY,
    },
    error: {
      main: Colors.DANGER,
    },
  },
  typography: {
    fontFamily: 'verdana',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          '&:hover': {
            backgroundColor: Colors.LIGHT,
          },
          'backgroundColor': Colors.LIGHT,
        },
      },
    },
  },
  spacing: 8,
});

export default theme;
