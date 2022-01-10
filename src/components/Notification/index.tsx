import React, { useState } from 'react';
import { Snackbar, Alert, AlertTitle } from '@mui/material';

export interface NotificationProps {
  variant: 'error' | 'success';
  message: string;
  title?: string;
}

export const Notification: React.FC<NotificationProps> = ({
  variant,
  message,
  title,
}): JSX.Element => {
  const [shouldOpen, setShouldOpen] = useState(true);

  const handleClose = () => setShouldOpen(false);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={shouldOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      sx={{ width: '35rem' }}
    >
      <Alert
        variant="filled"
        severity={variant}
        onClose={handleClose}
        sx={{ width: '100%' }}
        closeText="Fechar"
      >
        {title ? (
          <AlertTitle title="Título da Notificação">{title}</AlertTitle>
        ) : variant === 'error' ? (
          <AlertTitle title="Título da Notificação">Erro</AlertTitle>
        ) : (
          <AlertTitle title="Título da Notificação">Sucesso</AlertTitle>
        )}

        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
