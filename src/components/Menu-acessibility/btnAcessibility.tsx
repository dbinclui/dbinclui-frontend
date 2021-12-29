import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './styles.css';

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="box-modal">
      <Button onClick={handleOpen}>Acessibilidade</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal">
          <button>A+</button>
          <button>A</button>
          <button>A-</button>
          <button>Contraste</button>
        </Box>
      </Modal>
    </div>
  );
}
