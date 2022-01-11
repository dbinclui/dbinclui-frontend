import { createTheme } from '@mui/material/styles';
//import { Colors } from './colors';

const colors = true ? await import('./colorsAccessibility') : await import('./colors')

const getTitleStyle = (size: string) => ({
  fontSize: size,
  fontFamily: 'verdana',
  fontStyle: 'bold',
});

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
    h1: getTitleStyle('72px'),
    h2: getTitleStyle('32px'),
    h3: getTitleStyle('24px'),
    h4: getTitleStyle('18px'),
    h5: getTitleStyle('16px'),
    h6: getTitleStyle('14px'),
    body1: {
      fontSize: '16px',
    },
    body2: {
      fontSize: '14px',
      lineHeight: '28px',
    },
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
