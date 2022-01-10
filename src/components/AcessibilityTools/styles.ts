import { Theme, SxProps } from '@mui/material';

const widgetAccessibilityTools: SxProps<Theme> = {
  position: 'fixed',
  top: '50vh',
  right: '-72px',
  background: (theme) => theme.palette.secondary.main,
  borderRadius: '0 0 15px 15px',
  transform: 'rotate(90deg)',
  zIndex: '99999',
  width: '180px',
};

const styles = {
  widgetAccessibilityTools,
};

export default styles;
