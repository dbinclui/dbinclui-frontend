import { Theme, SxProps } from '@mui/material';

const indexWrapper: SxProps<Theme> = {
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  minHeight: '4rem',
};

const buttonWrapper: SxProps<Theme> = {
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '2rem',
};

const index: SxProps<Theme> = {
  position: 'fixed',
  color: (theme) => theme.palette.text.primary,
  ml: '2rem',
};

const indexFirst: SxProps<Theme> = {
  position: 'fixed',
  color: (theme) => theme.palette.text.primary,
  ml: '4rem',
  fontWeight: 'bold',
};

const header: SxProps<Theme> = {
  flexDirection: 'column',
  width: '100%',
};

const guideTitle: SxProps<Theme> = {
  fontSize: '2rem',
  fontWeight: 'bold',
  mb: '1rem',
};

const guideContent: SxProps<Theme> = {
  fontSize: '1.14rem',
  width: '70%',
  mb: '3rem'
};

const digitalContent: SxProps<Theme> = {
  fontSize: '1.14rem',
  width: '70%',
  mb: '1rem'
};

const styles = {
  indexWrapper,
  index,
  header,
  guideTitle,
  guideContent,
  digitalContent,
  buttonWrapper,
  indexFirst
};

export default styles;
