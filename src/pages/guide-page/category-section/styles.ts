import { Theme, SxProps } from '@mui/material';

const content: SxProps<Theme> = {
  flexDirection: 'column',
  width: '100%',
  background: (theme) => theme.palette.background.paper,
};

const styles = {
  content,
};

export default styles;
