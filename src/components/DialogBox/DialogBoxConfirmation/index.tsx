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
import { deleteGuide } from '@services/guides';
import Notification from '@components/Notification';

export interface ConfirmationProps {
  id: string;
  onClose?: Function;
  type: string;
}

export const DialogBoxConfirmation: React.FC<ConfirmationProps> = ({
  id,
  onClose,
  type,
}): JSX.Element => {
  const [confirmation, setConfirmation] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleClose = () => {
    setConfirmation(false);
    onClose && onClose();
  };

  async function handleDelete(idHandle: string) {
    try {
      console.log(idHandle);
      switch (type) {
        case 'guia':
          await deleteGuide(idHandle);
          break;
        case 'categoria':
          break;
        case 'conteudo':
          break;

        default:
          break;
      }
      setSuccess(true);
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
      setError(true);
    }
  }

  return (
    <Box sx={styles.boxDialog}>
      <Dialog
        open={confirmation}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <AccessibilityTypography role="message" tabIndex={1}>
          <DialogTitle id="alert-dialog-title" sx={styles.listTitle}>
            {'Mensagem de Exclusão'}
          </DialogTitle>
        </AccessibilityTypography>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={styles.listTitle}
          >
            <AccessibilityTypography role="message" tabIndex={1}>
              {`Deseja excluir este item?`}
            </AccessibilityTypography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Box sx={styles.boxButton}>
            <Button
              variant="contained"
              sx={styles.button}
              onClick={() => {
                handleDelete(id.toString());
              }}
            >
              Sim
            </Button>
            <Button
              sx={styles.button}
              variant="contained"
              onClick={handleClose}
            >
              Não
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
      {error && (
        <Notification
          message={`${errorMessage} 🤔`}
          variant="error"
          onClose={() => {
            setError(false);
            setErrorMessage('');
            handleClose();
          }}
        />
      )}
      {success && (
        <Notification
          message="Guia deletada com sucesso! ✔"
          variant="success"
          onClose={() => {
            setSuccess(false);
            handleClose();
          }}
        />
      )}
    </Box>
  );
};

export default DialogBoxConfirmation;
