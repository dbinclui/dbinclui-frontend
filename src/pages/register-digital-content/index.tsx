import React, { useRef, useState } from 'react';
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
import AccessibilityTypography from '@components/AccessibilityTypography';

export interface RegisterDigitalContentProps {}

export const RegisterDigitalContent: React.FC<
  RegisterDigitalContentProps
> = (): JSX.Element => {
  const guide = useRef<HTMLInputElement>();
  const category = useRef<HTMLInputElement>();
  const title = useRef<HTMLInputElement>();
  const description = useRef<HTMLInputElement>();

  const guides = ['Guia de acessibilidade', 'Guia da Cultura Surda'];
  const categories = ['Boas práticas para a inclusão', 'Acessibilidade em eventos'];

  const [file, setFile] = useState<any[]>([]);

  const handleClick = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Grid container alignItems={'center'} justifyContent={'center'} role="main">
      <Grid item md={6} component="section">
        <Box sx={styles.header} component="header">
          <AccessibilityTypography sx={styles.headerTitle}>
            CADASTRO DE CONTEÚDO DIGITAL
          </AccessibilityTypography>
        </Box>
        <Box padding={'1rem 3rem'} sx={styles.content} component="section">
          <Button
            variant="contained"
            component="label"
            sx={styles.buttonDigitalContent}
          >
            Selecionar um ficheiro
            <input
              data-testid="inputFile"
              accept="image/*,.pdf,.doc, .docx"
              type="file"
              hidden
              multiple
              onChange={(event: any) => {
                file.push(
                  <Typography sx={styles.fileName}>
                    {event.target.files[0].name}
                  </Typography>,
                );
                setFile([...file]);
              }}
            />
          </Button>
          {file.length !== 0 ? (
            file
          ) : (
            <Typography sx={styles.fileName}>
              <AccessibilityTypography>
                Nenhum arquivo selecionado
              </AccessibilityTypography>
            </Typography>
          )}

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
            <Select
              defaultValue=""
              inputRef={category}
              labelId="categoryLabel"
              required
              data-testid="categoryTestId"
              role="select"
              aria-labelledby="categoryLabel"
              name="category"
              id="category"
              sx={[styles.input, styles.select]}
            >
              {categories.map((category) => (
                <MenuItem
                  key={category}
                  value={category}
                  data-testid="categoryItensTestId"
                  role="option"
                  aria-labelledby="itensLabel"
                  sx={styles.menuItem}
                >
                  {category}
                </MenuItem>
              ))}
            </Select>
            <InputLabel htmlFor="title" id="titleLabel" sx={styles.labelInput}>
              <AccessibilityTypography>Título:</AccessibilityTypography>
            </InputLabel>
            <InputBase
              inputRef={title}
              type="text"
              id="title"
              name="title"
              role="input"
              required
              data-testid="titleTestId"
              aria-labelledby="titleLabel"
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
                  sx={[styles.button]}
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

export default RegisterDigitalContent;
