import { Theme, SxProps } from '@mui/material';

const carrousselContainer: SxProps<Theme> = {
  flexGrow: 1,
};

const titleContainer: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '2rem',
  pl: '0.2rem',
  bgcolor: (theme) => theme.palette.primary.dark,
};

const image: SxProps<Theme> = {
  display: 'block',
  width: '100%',
  height: '100%',
  maxWidth: '50rem',
};

const styles = {
  carrousselContainer,
  titleContainer,
  image,
};

export default styles;
