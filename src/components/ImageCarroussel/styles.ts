import { Theme, SxProps } from '@mui/material';

const carrousselContainer: SxProps<Theme> = {
  // flexGrow: 1,
};

const headerContainer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  height: 'fit-content',
  minHeight: '3rem',

  padding: '0.75rem 0.2rem',

  background: (theme) => theme.palette.background.paper,

  color: (theme) => theme.palette.text.primary,

  borderTopLeftRadius: '15px',
  borderTopRightRadius: '15px',
};

const title: SxProps<Theme> = {
  fontSize: '1.4rem',
  fontWeight: 600,
};

const description: SxProps<Theme> = {
  fontSize: '1rem',
  fontWeight: 400,
  textAlign: 'center',
  m: '1rem',
};

const imageWrapper: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  pb: '1rem',

  overflow: 'hidden',

  background: (theme) => theme.palette.background.paper,
};

const image: SxProps<Theme> = {
  display: 'block',
  overflow: 'hidden',

  objectFit: 'contain',
  width: '100%',
  height: '100%',
};

const stepper: SxProps<Theme> = {
  height: 'fit-content',
  minHeight: '3rem',
  overflow: 'hidden',

  background: (theme) => theme.palette.background.paper,

  color: (theme) => theme.palette.text.primary,

  borderBottomLeftRadius: '15px',
  borderBottomRightRadius: '15px',

  mb: '3rem',
};

const nextButton: SxProps<Theme> = {
  color: (theme) => theme.palette.text.primary,
};

const styles = {
  carrousselContainer,
  headerContainer,
  title,
  description,
  imageWrapper,
  image,
  stepper,
  nextButton
};

export default styles;
