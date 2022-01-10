import { createTheme } from '@mui/material/styles';
import { AccessibilityColors } from './colorsAccessibility';

const getTitleStyle = (size: string) => ({
  fontSize: size,
  fontFamily: 'verdana',
  fontStyle: 'bold',
});

// A custom theme for this app
const AccessibilityTheme = createTheme({
  palette: {
    background: {
      default: AccessibilityColors.PRIMARY,
    },
    text: {
      primary: AccessibilityColors.LIGHT,
    },
    primary: {
      light: AccessibilityColors.PRIMARY_LIGHT,
      main: AccessibilityColors.PRIMARY,
    },
    secondary: {
      main: AccessibilityColors.SECONDARY,
    },
    error: {
      main: AccessibilityColors.DANGER,
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
            backgroundColor: AccessibilityColors.LIGHT,
          },
          'backgroundColor': AccessibilityColors.LIGHT,
        },
      },
    },
  },
  spacing: 8,
});

export default AccessibilityTheme;
