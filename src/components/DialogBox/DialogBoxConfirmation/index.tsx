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

export interface ConfirmationProps {
  message: string;
  onClose?: Function;
  title?: string;
  confirmation: boolean;
  setConfirmation: Function;
}

export const DialogBoxConfirmation: React.FC<ConfirmationProps> = (
  props: ConfirmationProps,
): JSX.Element => {
  const handleClose = () => {
    props.onClose && props.onClose(false, props.setConfirmation(false));
  };

  const handleOk = () => {
    props.onClose && props.onClose(true, props.setConfirmation(false));
  };

  return (
    <Box sx={styles.boxDialog}>
      <Dialog
        open={props.confirmation}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={styles.listTitle}>
          {props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={styles.listTitle}
          >
            <AccessibilityTypography role="message" tabIndex={1}>
              {props.message}
            </AccessibilityTypography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Box sx={styles.boxButton}>
            <Button sx={styles.button} onClick={handleClose}>
              Não
            </Button>
            <Button sx={styles.button} onClick={handleOk}>
              Sim
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DialogBoxConfirmation;
