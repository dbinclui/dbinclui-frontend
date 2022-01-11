import React, { useRef } from 'react';
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

const categories = ['Guia de acessibilidade', 'Guia da Cultura Surda'];

export const RegisterCategory: React.FC<
  RegisterCategoryProps
> = (): JSX.Element => {
  const formRef = useRef<HTMLFormElement | undefined>();
  const category = useRef('');
  const description = useRef('');
  const guide = useRef('');

  const handleClick = () => {
    const formData = new FormData(formRef.current);
    formData.forEach(console.log);
  };

  return (
    <form ref={formRef} onSubmit={handleClick}>
      <Grid
        container
        alignItems={'center'}
        justifyContent={'center'}
        role="main"
      >
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
            <Box component="form" flexDirection={'column'} display={'flex'}>
              <InputLabel
                htmlFor="guide"
                id="guideLabel"
                sx={styles.labelInput}
              >
                Guia:
              </InputLabel>
              <Select
                labelId="guideLabel"
                required
                data-testid="guideTestId"
                role="select"
                aria-labelledby="guideLabel"
                name="guide"
                id="guide"
                value={guide.current}
                sx={[styles.input, styles.select]}
              >
                {categories.map((category) => (
                  <MenuItem
                    key={category}
                    value={category}
                    data-testid="guideItensTestId"
                    role="option"
                    aria-labelledby="itensLabel"
                    sx={styles.menuItem}
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
                data-testid="categoryTestId"
                aria-labelledby="categoryLabel"
                value={category.current}
                sx={styles.input}
              />
              <InputLabel
                htmlFor="description"
                sx={styles.labelInput}
                id="descriptionLabel"
              >
                Descrição:
              </InputLabel>
              <InputBase
                multiline={true}
                minRows={5}
                role="input"
                id="description"
                name="description"
                aria-labelledby="descriptionLabel"
                data-testid="descriptionTestId"
                value={description.current}
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
    </form>
  );
};

export default RegisterCategory;
