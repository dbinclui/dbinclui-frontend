import { Directions } from '@mui/icons-material';
import { Theme, SxProps } from '@mui/material';

const listTitle: SxProps<Theme> = {
  color: (theme) => theme.palette.text.primary,
  fontSize: '1.3rem',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '2rem 0',
};

const table: SxProps<Theme> = {
  backgroundColor: (theme) => theme.palette.background.paper,
  color: (theme) => theme.palette.text.disabled,
  borderColor: (theme) => theme.palette.secondary.contrastText,
  borderRadius: '1.5rem',
  border: 'ButtonHighlight',
  width: '1000px',
  mt: '25px',
  ml: 'auto',
  mr: 'auto',
  pl: '15px',
  pr: '15px',
};

const buttonWrapper: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mt: '2rem',
  ml: '0.1rem',
  mr: '2rem',
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
