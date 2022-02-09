import { Theme, SxProps } from '@mui/material';

const categoryTitle: SxProps<Theme> = {
  fontSize: '1.6rem',
  fontWeight: 'bold',
  mb: '1rem',
  whiteSpace: 'pre-wrap',
};

const categoryContent: SxProps<Theme> = {
  fontSize: '1.14rem',
  mb: '3rem',
  whiteSpace: 'pre-wrap',
};

const styles = {
  categoryTitle,
  categoryContent,
};

export default styles;
