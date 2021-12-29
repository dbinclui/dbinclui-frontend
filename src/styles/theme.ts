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
/*Tem que ver uma forma de o botal não sumir com o hover*/
  components:{
    MuiButton:{
      styleOverrides:{
        outlined:{
          backgroundColor: Colors.WHITE,
          root:{
            color: Colors.WHITE,
            textTransform: 'none',
            /*primary:{
              '&:hover': {
                backgroundColor: Colors.RED,
                color: Colors.GREEN,
            }
            },*/
          },
        },
      },
    }
  }

});

export default theme;