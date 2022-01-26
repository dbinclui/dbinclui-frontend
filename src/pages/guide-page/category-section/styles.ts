import { Theme, SxProps } from '@mui/material';

const content: SxProps<Theme> = {
  flexDirection: 'column',
  width: '100%',
  background: (theme) => theme.palette.background.paper,
};

const categoryTitle: SxProps<Theme> = {
  fontSize: '1.6rem',
  fontWeight: 'bold',
  mb: '1rem'
};

const categoryContent: SxProps<Theme> = {
  fontSize: '1.14rem',
  mb: '3rem',
};

const styles = {
  content,
  categoryTitle,
  categoryContent,

};

export default styles;
