import React, { useState, useRef } from 'react';
import validateInput from './validator';
import { Button, Box, Grid, InputLabel, InputBase } from '@mui/material';
import styles from './styles';
import { postGuides } from '@services/guides';
import Notification from '@components/Notification';
import AccessibilityTypography from '@components/AccessibilityTypography';


export interface RegisterGuideProps {
  
}

export const RegisterGuide: React.FC<RegisterGuideProps> = (): JSX.Element => {
  const title = useRef<HTMLInputElement>();
  const description = useRef<HTMLInputElement>();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const cardBody = {
      title: title.current?.value || '',
      content: description.current?.value || '',
    };

    try {
      await validateInput(cardBody);
      await postGuides(cardBody);
      setSuccess(true);
    } catch (error: any) {
      setErrorMessage(error.message);
      setError(true);
    }

    title.current!.value = '';
    description.current!.value = '';
  }

  return (
    <>
      <Grid
        container
        alignItems={'center'}
        justifyContent={'center'}
        role="main"
      >
        <Grid item md={6} component="section">
          <Box sx={styles.header} component="header">
            <AccessibilityTypography sx={styles.headerTitle}>
              CADASTRO DE GUIA
            </AccessibilityTypography>
          </Box>
          <Box padding={'1rem 3rem'} sx={styles.content} component="section">
            <Button
              variant="contained"
              sx={styles.buttonDigitalContent}
              role="button"
            >
              Buscar conteúdo digital
            </Button>
            <Box
              component="form"
              onSubmit={handleSubmit}
              flexDirection={'column'}
              display={'flex'}
            >
              <InputLabel
                htmlFor="titulo"
                id="tituloLabel"
                sx={styles.labelInput}
              >
                <AccessibilityTypography>Título:</AccessibilityTypography>
              </InputLabel>
              <InputBase
                inputRef={title}
                type="text"
                id="titulo"
                name="titulo"
                role="input"
                required
                aria-labelledby="tituloLabel"
                sx={styles.input}
              />
              <InputLabel
                htmlFor="descricao"
                sx={styles.labelInput}
                id="descricaoLabel"
              >
                <AccessibilityTypography>Descrição:</AccessibilityTypography>
              </InputLabel>
              <InputBase
                inputRef={description}
                multiline={true}
                minRows={5}
                role="input"
                id="descricao"
                name="descricao"
                aria-labelledby="descricaoLabel"
                required
                sx={styles.input}
              />
              <Grid
                container
                justifyContent={'space-evenly'}
                alignItems={'center'}
              >
                <Grid item md={6} sx={styles.buttonWrapper}>
                  <Button
                    sx={styles.button}
                    variant="contained"
                    type="submit"
                    role="button"
                  >
                    Salvar
                  </Button>
                </Grid>
                <Grid item md={6} sx={styles.buttonWrapper}>
                  <Button
                    sx={styles.button}
                    variant="contained"
                    type="reset"
                    role="button"
                    data-testid="back"
                    href="/admin"
                  >
                    Voltar
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {error && (
        <Notification
          message={`${errorMessage} 🤔`}
          variant="error"
          onClose={() => {
            setError(false);
            setErrorMessage('');
          }}
        >
          erro
        </Notification>
      )}
      {success && (
        <Notification
          message="Cadastro realizado com sucesso! ✔"
          variant="success"
          onClose={() => {
            setSuccess(false);
          }}
        >
          sucesso
        </Notification>
      )}
    </>
  );
};

export default RegisterGuide;
