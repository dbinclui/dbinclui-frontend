import React, { useState, useRef, useEffect } from 'react';
import {
  Button,
  Box,
  Typography,
  Grid,
  InputLabel,
  InputBase,
  Select,
  MenuItem,
  Alert,
  Stack,
} from '@mui/material';
import styles from './styles';
import Notification from '@components/Notification';
import validateInput from './validator';
import CardGuidesResponse, { getGuides } from '@services/guides';
import { postCategories } from '@services/categories';
import { Link } from 'react-router-dom';

export interface RegisterCategoryProps {}

export const RegisterCategory: React.FC<
  RegisterCategoryProps
> = (): JSX.Element => {
  const category = useRef<HTMLInputElement>();
  const description = useRef<HTMLInputElement>();
  const guide = useRef<HTMLInputElement>();

  const [guides, setGuides] = useState<CardGuidesResponse[]>([]);
  const title = useRef<HTMLInputElement>();

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successGetGuides, setSuccessGetGuides] = useState(false);
  const [errorGetGuides, setErrorGetGuides] = useState(false);
  const [errorMessageGetGuides, setErrorMessageGetGuides] = useState('');

  async function getGuidesService() {
    try {
      const response = await getGuides();
      setGuides(response.data.data);
      setSuccessGetGuides(true);
    } catch {
      setErrorMessageGetGuides('Não foram encontradas as guias');
      setErrorGetGuides(true);
    }
  }

  useEffect(() => {
    getGuidesService();
  }, []);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const cardBody = {
      title: title.current?.value || '',
      shortDescription: description.current?.value || '',
      guide: guide.current?.value || '',
    };

    try {
      await validateInput(cardBody);
      await postCategories(cardBody);
      setSuccess(true);
      title.current!.value = '';
      description.current!.value = '';
      guide.current!.value = '';
    } catch (error: any) {
      setErrorMessage(error.message);
      setError(true);
    }
  }

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
            onSubmit={handleSubmit}
            component="form"
            flexDirection={'column'}
            display={'flex'}
          >
            <InputLabel htmlFor="guide" id="guideLabel" sx={styles.labelInput}>
              Guia:
            </InputLabel>

            {successGetGuides && (
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
                {guides.map((guide, index) => (
                  <MenuItem
                    key={index}
                    value={guide._id}
                    role="option"
                    aria-labelledby="itensLabel"
                    sx={styles.menuItem}
                  >
                    {guide.title}
                  </MenuItem>
                ))}
              </Select>
            )}
            {errorGetGuides && (
              <Stack spacing={2}>
                <Alert severity="error">{errorMessageGetGuides}</Alert>
              </Stack>
            )}
            <InputLabel
              htmlFor="category"
              id="categoryLabel"
              sx={styles.labelInput}
            >
              Categoria:
            </InputLabel>
            <InputBase
              inputRef={title}
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
              Descrição:
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
                  variant="outlined"
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
          message="Cadastro ralizado com sucesso! ✔"
          variant="success"
          onClose={() => {
            setSuccess(false);
          }}
        >
          sucesso
        </Notification>
      )}
    </Grid>
  );
};

export default RegisterCategory;
