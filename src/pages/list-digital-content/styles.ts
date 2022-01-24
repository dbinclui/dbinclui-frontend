import { Theme, SxProps } from '@mui/material';

const headerTitle: SxProps<Theme> = {
  color: (theme) => theme.palette.text.primary,
  fontSize: '1.3rem',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '2rem 0',
};

const dataGrid: SxProps<Theme> = {
  height: 400,
  width: '50%',
};

const buttonWrapper: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mb: '0.5rem',
};

const button: SxProps<Theme> = {
  fontWeight: '700',
  padding: '0.5rem 1.5rem',
  textTransform: 'none',
  fontSize: '1.2rem',
  backgroundColor: (theme) => theme.palette.secondary.dark,
  color: (theme) => theme.palette.text.disabled,
};

const styles = {
  headerTitle,
  dataGrid,
  buttonWrapper,
  button,
};

export default styles;
