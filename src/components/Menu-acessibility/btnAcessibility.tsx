import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './styles.css';
import Counter from './../Counter/index';
import { Typography } from '@mui/material';
import { StyleModeInterface } from '../../styles/theme';

export interface BtnAcessibilityProps {
  handleChangeCounter: (styleMode: StyleModeInterface) => void;
}

export const BtnAcessibility: React.FC<BtnAcessibilityProps> = ({
  handleChangeCounter,
}): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal">
          <Counter
            handleCounter={(counter) => {
              handleChangeCounter({
                typography: {
                  baseSize: counter,
                },
              });
            }}
          />
          <div>
            <Button variant="contained" className="btn-contrast">
              Contraste
            </Button>
          </div>
        </div>
      </Modal>
      <div className="acessibility-widget">
        <Button
          startIcon={<ArrowBackIosNewIcon className="icon-modal" />}
          onClick={handleOpen}
          size="large"
          disableElevation
        >
          Acessibilidade
        </Button>
      </div>
    </>
  );
};

export default BtnAcessibility;
