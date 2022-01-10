import { Theme, SxProps } from '@mui/material';

const widgetAccessibilityTools: SxProps<Theme> = {
  'position': 'fixed',
  'top': '50vh',
  'right': '-72px',
  'background': (theme) => theme.palette.secondary.main,
  'borderRadius': '0 0 15px 15px',
  'transform': 'rotate(90deg)',
  'zIndex': '99999',
  'width': '180px',
  '&:hover': {
    background: (theme) => theme.palette.primary.light,
    color: (theme) => theme.palette.secondary.main,
  },
};

const widgetAccessibilityToolsonClick: SxProps<Theme> = {
  position: 'fixed',
  top: '50vh',
  right: '-72px',
  background: (theme) => theme.palette.primary.light,
  color: (theme) => theme.palette.secondary.main,
  borderRadius: '0 0 15px 15px',
  transform: 'rotate(90deg)',
  zIndex: '99999',
  width: '180px',
};

const modalAccessibilityTools: SxProps<Theme> = {
  width: '200px',
  height: '110px',
  background: (theme) => theme.palette.secondary.main,
  padding: '10px',
  borderRadius: '4px',
  boxShadow: '0px 0px 10px -4px rgba(0, 0, 0, 0.75)',
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const styles = {
  widgetAccessibilityTools,
  modalAccessibilityTools,
  widgetAccessibilityToolsonClick,
};

export default styles;
