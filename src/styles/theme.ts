import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { Colors } from './colors';

// A custom theme for this app
const theme =
createTheme({
  palette: {
    background: {
      default: '#221F52'
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

});
/*const background = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
}*/

export default theme;