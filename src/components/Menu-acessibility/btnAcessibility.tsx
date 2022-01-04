import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './styles.css';
import Counter from './../Counter/index';
// import { StyleModeInterface } from '../../styles/theme';

export interface BtnAcessibilityProps {
  handleChangeCounter: (styleMode: any) => void;
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
          {/* <Counter
            handleCounter={(counter) => {
              handleChangeCounter({
                typography: {
                  baseSize: counter,
                },
              });
            }}
          /> */}
          <div className="container-btn">
            <Button
              variant="contained"
              sx={{
                top: '40px',
                left: '8px',
                width: '90%',
                borderRadius: '20px',
                fontSize: '12px',
              }}
            >
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
          sx={{
            fontSize: '12px',
            top: '10px',
            color: 'black',
          }}
        >
          Acessibilidade
        </Button>
      </div>
    </>
  );
};

export default BtnAcessibility;
