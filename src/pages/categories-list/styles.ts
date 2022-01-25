import { Theme, SxProps } from '@mui/material';

const listTitle: SxProps<Theme> = {
  textAlign: 'center',
};

const table: SxProps<Theme> = {
  color: (theme) => theme.palette.text.primary,
  width: '1000px',
  mt: '25px',
  ml: 'auto',
  mr: 'auto',
  pl: '15px',
  pr: '15px',
  border: '2px solid',
  borderRadius: '20px',
  borderColor: (theme) => theme.palette.secondary.contrastText,
  background: (theme) => theme.palette.background.paper,
};

const buttonWrapper: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mt: '2rem',
  ml: '-3rem',
  mr: '5rem',
};

const button: SxProps<Theme> = {
  fontWeight: '700',
  padding: '0.5rem 1.5rem',
  textTransform: 'none',
  fontSize: '1.2rem',
  border: '2px solid',
  borderColor: (theme) => theme.palette.secondary.contrastText,
  backgroundColor: (theme) => theme.palette.secondary.dark,
  color: (theme) => theme.palette.text.disabled,
};

const styles = {
  listTitle,
  table,
  buttonWrapper,
  button,
};

export default styles;
