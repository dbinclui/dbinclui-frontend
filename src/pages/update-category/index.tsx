import React, { useState, useRef, useEffect } from 'react';
import {
  Button,
  Box,
  Grid,
  InputLabel,
  InputBase,
  Select,
  MenuItem,
  Alert,
  Stack,
} from '@mui/material';
import AccessibilityTypography from '@components/AccessibilityTypography';
import { Link, useParams } from 'react-router-dom';
import styles from './styles';
import Notification from '@components/Notification';
import { GuideInterface, getGuides } from '@services/guides';
import validateInput from '@pages/update-category/validator';
import {
  putCategories,
  getCategoriesById,
  CategoryInterface,
} from '@services/categories';

export interface UpdateCategoryProps {}

// export interface UpdateCategoryInterface {
//   title?: string | undefined;
//   shortDescription?: string | undefined;
//   guide?: string | undefined;
//   id?: string | undefined;
// }

export const UpdateCategory: React.FC<
  UpdateCategoryProps
> = (): JSX.Element => {
  const description = useRef<HTMLInputElement>();
  const [guides, setGuides] = useState<GuideInterface[]>([]);
  const title = useRef<HTMLInputElement>();
  const guide = useRef<HTMLInputElement | undefined>();
  const shortDescription = useRef<HTMLInputElement | undefined>();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successGetGuides, setSuccessGetGuides] = useState(false);
  const [errorGetGuides, setErrorGetGuides] = useState(false);
  const [errorMessageGetGuides, setErrorMessageGetGuides] = useState('');
  const [loading, setLoading] = useState(false);
  const parametros = useParams();
  const id: string = parametros.id!;

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

  async function getCategoriesService(id: string) {
    let data: { data: CategoryInterface };
    try {
      setLoading(true);
      data = (await getCategoriesById(id)).data;
      setError(false);
      console.log(data);
    } catch (error: any) {
      setError(true);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
      title.current!.value = data!.data.title;
      shortDescription.current!.value = data!.data.shortDescription;
      guide.current!.value = data!.data.guide as string;
    }
  }

  useEffect(() => {
    getGuidesService();
    getCategoriesService(id);
  }, [id]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const cardBody = {
      title: title.current?.value || '',
      shortDescription: shortDescription.current?.value || '',
      guide: guide.current?.value || '',
    };

    try {
      await validateInput(cardBody);
      await putCategories(id, cardBody);
      setSuccess(true);
      title.current!.value = '';
      shortDescription.current!.value = '';
      guide.current!.value = '';
    } catch (error: any) {
      setErrorMessage(error.message);
      setError(true);
    }
  }

  return (
    <Grid container alignItems={'center'} justifyContent={'center'} role="main">
      <Grid item md={6} component="section">
        <Box sx={styles.header} component="header">
          <AccessibilityTypography sx={styles.headerTitle}>
            ATUALIZAR CATEGORIA
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
            onSubmit={handleSubmit}
            component="form"
            flexDirection={'column'}
            display={'flex'}
          >
            <InputLabel htmlFor="guide" id="guideLabel" sx={styles.labelInput}>
              <AccessibilityTypography>Guia:</AccessibilityTypography>
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
              <AccessibilityTypography>Categoria:</AccessibilityTypography>
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
              <AccessibilityTypography>Descrição:</AccessibilityTypography>
            </InputLabel>
            <InputBase
              inputRef={shortDescription}
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
                  Atualizar
                </Button>
              </Grid>
              <Grid item md={6} sx={styles.buttonWrapper}>
                <Button
                  sx={styles.button}
                  variant="contained"
                  type="reset"
                  role="button"
                  data-testid="back"
                  component={Link}
                  to="/admin/listar-categorias"
                >
                  Voltar
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
        />
      )}
      {success && (
        <Notification
          message="Cadastro realizado com sucesso! ✔"
          variant="success"
          onClose={() => {
            setSuccess(false);
          }}
        />
      )}
    </Grid>
  );
};

export default UpdateCategory;
