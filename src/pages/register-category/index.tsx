import React, { useRef } from 'react';
import {
  Button,
  Box,
  Grid,
  InputLabel,
  InputBase,
  Select,
  MenuItem,
} from '@mui/material';
import AccessibilityTypography from '@components/AccessibilityTypography';

import styles from './styles';

export interface RegisterCategoryProps {}

export const RegisterCategory: React.FC<
  RegisterCategoryProps
> = (): JSX.Element => {
  const category = useRef<HTMLInputElement>();
  const description = useRef<HTMLInputElement>();
  const guide = useRef<HTMLInputElement>();

  const guides = ['Guia de acessibilidade', 'Guia da Cultura Surda'];

  const handleClick = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Grid container alignItems={'center'} justifyContent={'center'} role="main">
      <Grid item md={6} component="section">
        <Box sx={styles.header} component="header">
          <AccessibilityTypography sx={styles.headerTitle}>
            CADASTRO DE CATEGORIA
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
            onSubmit={handleClick}
            component="form"
            flexDirection={'column'}
            display={'flex'}
          >
            <InputLabel htmlFor="guide" id="guideLabel" sx={styles.labelInput}>
              <AccessibilityTypography>Guia:</AccessibilityTypography>
            </InputLabel>
            <Select
              defaultValue=""
              inputRef={guide}
              labelId="guideLabel"
              required
              data-testid="guideTestId"
              role="select"
              aria-labelledby="guideLabel"
              name="guide"
              id="guide"
              sx={[styles.input, styles.select]}
            >
              {guides.map((guide) => (
                <MenuItem
                  key={guide}
                  value={guide}
                  data-testid="guideItensTestId"
                  role="option"
                  aria-labelledby="itensLabel"
                  sx={styles.menuItem}
                >
                  {guide}
                </MenuItem>
              ))}
            </Select>
            <InputLabel
              htmlFor="category"
              id="categoryLabel"
              sx={styles.labelInput}
            >
              <AccessibilityTypography>Categoria:</AccessibilityTypography>
            </InputLabel>
            <InputBase
              inputRef={category}
              type="text"
              id="category"
              name="category"
              role="input"
              required
              data-testid="categoryTestId"
              aria-labelledby="categoryLabel"
              sx={styles.input}
            />
            <InputLabel
              htmlFor="description"
              sx={styles.labelInput}
              id="descriptionLabel"
            >
              <AccessibilityTypography>Descrição:</AccessibilityTypography>
            </InputLabel>
            <InputBase
              inputRef={description}
              multiline={true}
              minRows={5}
              role="input"
              id="description"
              name="description"
              aria-labelledby="descriptionLabel"
              data-testid="descriptionTestId"
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
                  data-testid="submit"
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
