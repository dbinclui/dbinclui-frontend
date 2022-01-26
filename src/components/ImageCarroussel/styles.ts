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

  background: (theme) => theme.palette.text.primary,

  color: (theme) => theme.palette.background.paper,

  borderTopLeftRadius: '5px',
  borderTopRightRadius: '5px',
};

const title: SxProps<Theme> = {
  fontSize: '1.2rem',
  fontWeight: 600,
};

const description: SxProps<Theme> = {
  fontSize: '1.2rem',
  fontWeight: 400,
};

const imageWrapper: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  overflow: 'hidden',

  background: '#4d4d4d',
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

  background: (theme) => theme.palette.text.primary,

  color: (theme) => theme.palette.background.paper,

  borderBottomLeftRadius: '5px',
  borderBottomRightRadius: '5px',
};

const styles = {
  carrousselContainer,
  headerContainer,
  title,
  description,
  imageWrapper,
  image,
  stepper,
};

export default styles;
