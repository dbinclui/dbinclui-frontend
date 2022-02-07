import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import styles from './styles';
import AccessibilityTypography from '@components/AccessibilityTypography';

export interface InformationProps {
  message: string;
  onClose?: Function;
  title?: string;
}

export const DialogBoxInformation: React.FC<InformationProps> = ({
  message,
  title,
  onClose,
}): JSX.Element => {
  const [information, setInformation] = useState(true);

  const handleClose = () => {
    setInformation(false);
    onClose && onClose();
  };

  return (
    <Box sx={styles.boxDialog}>
      <Dialog
        open={information}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={styles.listTitle}>
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={styles.listTitle}
          >
            <AccessibilityTypography role="message" tabIndex={1}>
              {message}
            </AccessibilityTypography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Box sx={styles.boxButton}>
            <Button sx={styles.button} onClick={handleClose}>
              Fechar
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DialogBoxInformation;
