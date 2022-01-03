import { createTheme } from '@mui/material/styles';
import { Colors } from './colors';

const getTitleStyle = (size: string) => ({
  fontSize: size,
  fontFamily: 'verdana',
  fontStyle: 'normal',
});

const handleResizeTypography = (
  baseSize: number,
  resizeScale: number,
): string => {
  const baseCalc = 2.5;
  return `${baseSize + resizeScale * baseCalc}px`;
};

export interface StyleModeInterface {
  typography: {
    baseSize: number;
  };
}

// A custom theme for this app
const theme = (styleMode: StyleModeInterface) => {
  return createTheme({
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
      h1: getTitleStyle(
        handleResizeTypography(72, styleMode.typography.baseSize),
      ),
      h2: getTitleStyle(
        handleResizeTypography(32, styleMode.typography.baseSize),
      ),
      h3: getTitleStyle(
        handleResizeTypography(24, styleMode.typography.baseSize),
      ),
      h4: getTitleStyle(
        handleResizeTypography(18, styleMode.typography.baseSize),
      ),
      h5: getTitleStyle(
        handleResizeTypography(16, styleMode.typography.baseSize),
      ),
      h6: getTitleStyle(
        handleResizeTypography(14, styleMode.typography.baseSize),
      ),
      body1: {
        color: '#FFF',
        //fontSize: handleResizeTypography(16, styleMode.typography.baseSize),
      },
      body2: {
        color: '#FFF',
        fontSize: handleResizeTypography(14, styleMode.typography.baseSize),
      },
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
};

export default theme;
