import React, { useState } from 'react';
import validateInput from './validator';
import {
  Button,
  Box,
  Typography,
  Grid,
  InputLabel,
  InputBase,
} from '@mui/material';
import styles from './styles';
import AccessibilityTypography from '../../components/AccessibilityTypography';

export interface RegisterGuideProps {}

export const RegisterGuide: React.FC<RegisterGuideProps> = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    try {
      await validateInput({
        title,
        description,
      });
    } catch {}
  }

  return (
    <Grid container alignItems={'center'} justifyContent={'center'} role="main">
      <Grid item md={6} sx={styles.content} component="section">
        <Box sx={styles.header} component="header">
          <Typography sx={styles.headerTitle} variant="h1">
            <AccessibilityTypography>CADASTRO DE GUIA</AccessibilityTypography>
          </Typography>
        </Box>
        <Box padding={'1rem 3rem'} component="section">
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
              type="text"
              id="titulo"
              name="titulo"
              role="input"
              required
              aria-labelledby="tituloLabel"
              value={title}
              sx={styles.input}
              onChange={(event) => setTitle(event.target.value)}
            />

            <InputLabel
              htmlFor="descricao"
              sx={styles.labelInput}
              id="descricaoLabel"
            >
              <AccessibilityTypography>Descrição:</AccessibilityTypography>
            </InputLabel>

            <InputBase
              multiline={true}
              minRows={5}
              role="input"
              id="descricao"
              name="descricao"
              aria-labelledby="descricaoLabel"
              required
              value={description}
              sx={styles.input}
              onChange={(event) => setDescription(event.target.value)}
            />
            <Grid
              container
              justifyContent={'space-evenly'}
              alignItems={'center'}
            >
              <Grid item md={6} sx={styles.buttonWrapper}>
                <Button
                  sx={styles.button}
                  variant="outlined"
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
                >
                  Fechar
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RegisterGuide;
