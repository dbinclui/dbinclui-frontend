import { Theme, SxProps } from '@mui/material';

const indexWrapper: SxProps<Theme> = {
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  minHeight: '4rem',
};

const index: SxProps<Theme> = {
  position: 'fixed',
  background: (theme) => theme.palette.background.paper,
};

const header: SxProps<Theme> = {
  flexDirection: 'column',
  width: '100%',
  //background: (theme) => theme.palette.background.paper,
};

const guideTitle: SxProps<Theme> = {
  fontSize: '2rem',
  fontWeight: 'bold',
  mb: '1rem'
};

const guideContent: SxProps<Theme> = {
  fontSize: '1.12rem',
};

const styles = {
  indexWrapper,
  index,
  header,
  guideTitle,
  guideContent
};

export default styles;
