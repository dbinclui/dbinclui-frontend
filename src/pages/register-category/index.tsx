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
} from '@mui/material';
import styles from './styles';
import Notification from '@components/Notification';
import validateInput from './validator';
import CardGuidesResponse, { getGuides } from '@services/guides';
import { postCategories } from '@services/categories';

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

  async function getGuidesService() {
    const response = await getGuides();
    console.log(response);
    setGuides(response.data.data);
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
    } catch (error: any) {
      setErrorMessage(error.message);
      setError(true);
    }

    title.current!.value = '';
    description.current!.value = '';
    guide.current!.value = '';
  }

  const handleClick = (event: React.FormEvent) => {
    event.preventDefault();
  };

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
            onSubmit={handleClick}
            component="form"
            flexDirection={'column'}
            display={'flex'}
          >
            <InputLabel htmlFor="guide" id="guideLabel" sx={styles.labelInput}>
              Guia:
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
              {guides.map((guide, index) => (
                <MenuItem
                  key={index}
                  value={guide._id}
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
              Categoria:
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
              Buscar conteúdo digital
            </InputLabel>
            <Box
              onSubmit={handleSubmit}
              component="form"
              flexDirection={'column'}
              display={'flex'}
            >
              <InputLabel
                htmlFor="guide"
                id="guideLabel"
                sx={styles.labelInput}
              >
                Guia:
              </InputLabel>
              <Select
                inputRef={guide}
                labelId="guideLabel"
                required
                // data-testid="guideTestId"
                role="select"
                aria-labelledby="guideLabel"
                name="guide"
                id="guide"
                defaultValue=""
                inputProps={{ 'data-testid': 'guideTestId' }}
                sx={[styles.input, styles.select]}
              >
                {guides.map((guide) => (
                  <MenuItem
                    key={guide._id}
                    value={guide._id}
                    data-testid="guideItensTestId"
                    role="option"
                    aria-labelledby="itensLabel"
                    sx={styles.menuItem}
                  >
                    {guide.title}
                  </MenuItem>
                ))}
              </Select>
              <InputLabel
                htmlFor="title"
                id="titleLabel"
                sx={styles.labelInput}
              >
                Categoria:
              </InputLabel>
              <InputBase
                inputRef={title}
                type="text"
                id="title"
                name="title"
                role="input"
                required
                data-testid="categoryTestId"
                aria-labelledby="titleLabel"
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
