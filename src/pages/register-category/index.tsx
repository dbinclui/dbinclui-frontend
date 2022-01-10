import React, { useState } from 'react';
import {
  Button,
  Box,
  Typography,
  Grid,
  InputLabel,
  InputBase,
  Select,
  MenuItem,
} from '@mui/material';
import styles from './styles';

export interface RegisterCategoryProps {}

export const RegisterCategory: React.FC<
  RegisterCategoryProps
> = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [guide, setGuide] = useState('');

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  const categories = ['Guia de acessibilidade', 'Guia da Cultura Surda'];

  return (
    <Grid container alignItems={'center'} justifyContent={'center'} role="main">
      <Grid item md={6} sx={styles.content} component="section">
        <Box sx={styles.header} component="header">
          <Typography sx={styles.headerTitle} variant="h1">
            CADASTRO DE CATEGORIA
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
            <InputLabel htmlFor="guide" id="guideLabel" sx={styles.labelInput}>
              Guia:
            </InputLabel>
            <Select
              required
              data-testid="guide"
              role="select"
              aria-labelledby="guideLabel"
              name="guide"
              id="guide"
              value={guide}
              onChange={(event) => setGuide(event.target.value)}
              sx={[styles.input, styles.select]}
            >
              {categories.map((category) => (
                <MenuItem
                  key={category}
                  value={category}
                  data-testid="guide"
                  aria-labelledby="itensLabel"
                  sx={[styles.menuItem]}
                >
                  {category}
                </MenuItem>
              ))}
            </Select>
            <InputLabel
              htmlFor="category"
              id="categoryLabel"
              sx={styles.labelInput}
            >
              Categoria:
            </InputLabel>
            <InputBase
              type="text"
              id="category"
              name="category"
              role="input"
              required
              aria-labelledby="categoryLabel"
              value={title}
              sx={styles.input}
              onChange={(event) => setTitle(event.target.value)}
            />
            <InputLabel
              htmlFor="descricao"
              sx={styles.labelInput}
              id="descricaoLabel"
            >
              Descrição:
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

export default RegisterCategory;
