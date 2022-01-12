import { Theme, SxProps } from '@mui/material';

const content: SxProps<Theme> = {
  borderRadius: '20px',
  flexDirection: 'column',
  background: (theme) => theme.palette.primary.light,
};

const header: SxProps<Theme> = {
  background: (theme) => theme.palette.secondary.main,
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
};

const headerTitle: SxProps<Theme> = {
  color: 'white',
  fontSize: '1.3rem',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '2rem 0',
};

const buttonDigitalContent: SxProps<Theme> = {
  mr: 0,
  ml: 'auto',
  mb: '0.8rem',
  display: 'block',
  padding: '0.3rem 1rem',
  fontWeight: '700',
  textTransform: 'none',
};

const labelInput: SxProps<Theme> = {
  color: (theme) => theme.palette.secondary.main,
  fontWeight: 'bold',
  mb: '0.5rem',
};

const input: SxProps<Theme> = {
  width: '100%',
  background: (theme) => theme.palette.primary.main,
  borderRadius: '20px',
  color: (theme) => theme.palette.secondary.main,
  padding: '0.5rem 1rem',
  mb: '2.5rem',
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
};

const styles = {
  content,
  header,
  headerTitle,
  buttonDigitalContent,
  labelInput,
  input,
  buttonWrapper,
  button,
};

export default styles;
