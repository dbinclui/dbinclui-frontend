import { Theme, SxProps } from '@mui/material';

const listTitle: SxProps<Theme> = {
  textAlign: 'center',
};

const table: SxProps<Theme> = {
  'color': 'black',
  'width': '1000px',
  'mt': '25px',
  'ml': 'auto',
  'mr': 'auto',
  'pl': '15px',
  'pr': '15px',
  'backgroundColor': 'white',
  'borderRadius': '1.5rem',
  '@media (max-width:780px)': {
    'width': '70%',
  },
};
const button: SxProps<Theme> = {
  fontWeight: '700',
  padding: '0.5rem 1.5rem',
  margin: '0 20px',
  textTransform: 'none',
  fontSize: '1.2rem',
  backgroundColor: (theme) => theme.palette.secondary.dark,
  color: (theme) => theme.palette.text.disabled,
};

const styles = {
  listTitle,
  table,
  button,
};

export default styles;
