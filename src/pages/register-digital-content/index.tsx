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
import { CardCategoryResponse, getCategoriesByGuide } from '@services/digitalContent';

export interface RegisterDigitalContentProps {}

export const RegisterDigitalContent: React.FC<
  RegisterDigitalContentProps
> = (): JSX.Element => {
  const guide = useRef<HTMLInputElement>();
  const category = useRef<HTMLInputElement>();
  const title = useRef<HTMLInputElement>();
  const description = useRef<HTMLInputElement>();
  const fileRef = useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<any[]>([]);
  const [guides, setGuides] = useState<CardGuidesResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<CardCategoryResponse[]>([]);


  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  const getDigitalContentCategories = async (id:string) => {
    await getCategoriesByGuide(id)
      .then((response) => {
        const { data } = response!.data;
        setCategories(data);
      })
      .catch((error) => {

      })
      .finally(() => {
        setLoading(false);
      });
  }

  const getDigitalContentGuides = async () => {
    await getGuides()
      .then((response) => {
        const { data } = response!.data;
        setGuides(data);
      })
      .catch((error) => {
        
      })
      .finally(() => {
        setLoading(false);
      });
    }
    
    
    
  useEffect(() => {
    getDigitalContentGuides();
  }, []);
  console.log(guides);
  
  return loading ? (<div>Carregando...</div>) : (
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
            >
              {guides.map((guide, index) => (
                <MenuItem
                  key={index}
                  value={guide.title}
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
              {/* {categories.map((category) => (
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
              ))} */}
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
