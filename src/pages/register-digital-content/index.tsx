import React, { useRef, useState, useEffect } from 'react';
import {
  Button,
  Box,
  Container,
  Typography,
  Grid,
  InputLabel,
  InputBase,
  Select,
  MenuItem,
} from '@mui/material';
import styles from './styles';
import FileUploadRounded from '@mui/icons-material/FileUploadRounded';
import ClearIcon from '@mui/icons-material/Clear';
import CardGuidesResponse, { getGuides } from '@services/guides';
import {
  CardCategoryResponse,
  getCategoriesByGuide,
  postDigitalContent,
} from '@services/digitalContent';
import validateInput, { InputInterfaceProps } from './validator';

export interface RegisterDigitalContentProps {}

export const RegisterDigitalContent: React.FC<
  RegisterDigitalContentProps
> = (): JSX.Element => {
  const guide = useRef<HTMLInputElement>();
  const category = useRef<HTMLInputElement>();
  const title = useRef<HTMLInputElement>();
  const description = useRef<HTMLInputElement>();
  const fileRef = useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<File[]>([]);
  const [guides, setGuides] = useState<CardGuidesResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<CardCategoryResponse[]>([]);

  async function handleSubmit(event: React.FormEvent) {
      const cardBody = {
      title: title.current?.value || '',
      shortDescription: description.current?.value || '',
      guide: guide.current?.value || '',
      category: category.current?.value || '',
    } as { [key: string]: any };

    const formData = new FormData();

    Object.keys(cardBody).forEach((key) => {
      formData.append(key, cardBody[key]);
    });

    files.forEach((file) => {
      formData.append('files', file);
    });

    try {
      await validateInput({ ...cardBody, file: files } as InputInterfaceProps);
      await postDigitalContent(formData);
     // setSuccess(true);
      title.current!.value = "";
      description.current!.value = "";
      guide.current!.value = "";
      category.current!.value = "";
      setFiles([]);
    } catch (error: any) {
    //setErrorMessage(error.message);
     // setError(true);
    }
  }

  const getDigitalContentCategories = async (id: string) => {
    try {
      const { data } = await getCategoriesByGuide(id);
      setCategories(data.data);
    } finally {
      setLoading(false);
    }
  };

  const getDigitalContentGuides = async () => {
    try {
      const { data } = await getGuides();
      setGuides(data.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDigitalContentGuides();
  }, []);

  return loading ? (
    <div>Carregando...</div>
  ) : (
    <Grid container alignItems={'center'} justifyContent={'center'} role="main">
      <Grid item md={6} sx={styles.content} component="section">
        <Box sx={styles.header} component="header">
          <Typography sx={styles.headerTitle} variant="h1">
            CADASTRO DE CONTEÚDO DIGITAL
          </Typography>
        </Box>
        <Box padding={'1rem 3rem'} component="section">
          <Button
            variant="contained"
            component="label"
            sx={styles.buttonDigitalContent}
          >
            <Container sx={styles.containerUpload}>
              <FileUploadRounded sx={styles.uploadIcon} />
              Selecionar um arquivo
            </Container>
            <input
              data-testid="inputFile"
              accept="image/*,.pdf,.doc, .docx, video/*"
              type="file"
              hidden
              ref={fileRef}
              multiple
              onChange={(event: any) => {
                setFiles([...files, ...event.target.files]);
              }}
            />
          </Button>
          {files.map((file, index) => (
            <Box
              key={index}
              flexDirection={'row'}
              display={'flex'}
              alignItems={'center'}
            >
              <Typography sx={styles.fileName}>{file.name}</Typography>
              <Button
                sx={styles.clearButton}
                onClick={() => {
                  const newFiles = files.filter((file2, index2) => {
                    return index2 !== index;
                  });

                  setFiles([...newFiles]);

                  if (!newFiles.length && fileRef.current !== undefined) {
                    fileRef.current!.value = '';
                  }
                }}
              >
                <ClearIcon />{' '}
              </Button>
            </Box>
          ))}
          {!files.length && (
            <Typography sx={styles.fileName}>
              Nenhum arquivo selecionado
            </Typography>
          )}

          <Box
            onSubmit={handleSubmit}
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
              onChange={(event) => {
                getDigitalContentCategories(event.target.value);
              }}
            >
              {guides.map((guides, index) => (
                <MenuItem
                  key={index}
                  value={guides._id}
                  data-testid="guideItensTestId"
                  role="option"
                  aria-labelledby="itensLabel"
                  sx={styles.menuItem}
                >
                  {guides.title}
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
              {categories.map((cat, index) => (
                <MenuItem
                  key={index}
                  value={cat._id}
                  data-testid="categoryItensTestId"
                  role="option"
                  aria-labelledby="itensLabel"
                  sx={styles.menuItem}
                >
                  {cat.title}
                </MenuItem>
              ))}
            </Select>
            <InputLabel htmlFor="title" id="titleLabel" sx={styles.labelInput}>
              Título:
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
                  sx={[styles.button, styles.buttonFechar]}
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
