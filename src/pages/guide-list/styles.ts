import { Theme, SxProps } from '@mui/material';

const listTitle: SxProps<Theme> = {
  textAlign: 'center',
};

const table: SxProps<Theme> = {
  color: "black",
  width: '1000px',
  mt: '25px',
  ml: 'auto',
  mr: 'auto',
  pl: '15px',
  pr: '15px',
  backgroundColor: 'white',
  borderRadius: '1.5rem',
};

const styles = {
  listTitle,
  table,
};

export default styles;
