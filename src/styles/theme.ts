import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { Colors } from './colors';

// A custom theme for this app
const theme =
createTheme({
  palette: {
    background: {
      default: Colors.DARK_BLUE
    },
      text: {
        primary: Colors.WHITE
      },
    primary: {
      main: Colors.DARK_BLUE,
    },
    secondary: {
      main: '#ED0973',
    },
    error: {
      main: red.A400,
    },
  },
  typography:{
      fontFamily: "verdana"
  },
  components:{
    MuiButton:{
      styleOverrides:{
        outlined:{
          backgroundColor: Colors.WHITE,
        },
      },
    }
  }

});

export default theme;