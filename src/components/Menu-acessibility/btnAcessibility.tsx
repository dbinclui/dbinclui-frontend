import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './styles.css';
import Counter from './../Counter/index';
import { Typography } from '@mui/material';
export interface BtnAcessibilityProps {}

export const BtnAcessibility: React.FC<
  BtnAcessibilityProps
> = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="box-modal">
      <ArrowBackIosNewIcon className="icon-modal" />
      <Button onClick={handleOpen}>
        <Typography variant="h6" className="btn-modal">
          Acessibilidade
        </Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal">
          <button className="btn-resize">A+</button>
          <button className="btn-resize">A</button>
          <button className="btn-resize">A-</button>
          <br></br>
          <button className="btn-contrast">Contraste</button>
        </div>
      </Modal>
    </div>
  );
};

export default BtnAcessibility;
