import { Theme, SxProps } from '@mui/material';

const listTitle: SxProps<Theme> = {
  color: (theme) => theme.palette.text.primary,
  fontSize: '1.3rem',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '2rem 0',
};

const table: SxProps<Theme> = {
  'backgroundColor': (theme) => theme.palette.background.paper,
  'color': (theme) => theme.palette.text.primary,
  'borderColor': (theme) => theme.palette.secondary.contrastText,
  'borderRadius': '1.5rem',
  'border': '2px solid',
  'width': '1000px',
  'mt': '25px',
  'ml': 'auto',
  'mr': 'auto',
  'pl': '15px',
  'pr': '15px',
  'fontSize': '16px',
  '@media (max-width:780px)': {
    width: '90%',
    fontSize: '18px',
  },
};

const buttonTable: SxProps<Theme> = {
  'color': (theme) => theme.palette.text.primary,
  '&:hover': {
    border: '1px solid',
    borderColor: (theme) => theme.palette.primary.dark,
  },
};

const buttonBox: SxProps<Theme> = {
  'display': 'flex',
  'justifyContent': 'flex-end',
  'margin': '50px',
  'marginTop': '20px',
  '@media (max-width:780px)': {
    justifyContent: 'center',
    margin: '0 auto',
    marginTop: '20px',
  },
};

const button: SxProps<Theme> = {
  'fontWeight': '700',
  'padding': '0.5rem 1.5rem',
  'margin': '30px 80px 30px -40px',
  'textTransform': 'none',
  'fontSize': '1.2rem',
  'border': '1px solid',
  'borderColor': (theme) => theme.palette.secondary.contrastText,
  'backgroundColor': (theme) => theme.palette.secondary.dark,
  'color': (theme) => theme.palette.text.disabled,
  '@media (max-width:780px)': {
    display: 'flex',
    justifyContent: 'center',
    margin: '5px',
    marginTop: '20px',
  },
};

const styles = {
  listTitle,
  table,
  buttonBox,
  button,
  buttonTable,
};

export default styles;
