import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import AccessibilityTypography from '@components/AccessibilityTypography';
import styles from './styles';
import { Box, Button, CircularProgress, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { CategoryInterface, getCategories } from '@services/categories';
import DeleteIcon from '@mui/icons-material/Delete';
import { CreateSharp } from '@mui/icons-material';
import { GuideInterface } from '@services/guides';

export interface CategoriesListProps {}

export const CategoriesList: React.FC<
  CategoriesListProps
> = (): JSX.Element => {
  const [categories, setCategories] = useState<CategoryInterface[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [successGetCategories, setSuccessGetCategories] = useState(false);
  const [errorGetCategories, setErrorGetCategories] = useState(false);
  const [loading, setLoading] = useState(true);

  async function getContentCategories() {
    try {
      const response = await getCategories();
      setCategories(response.data.data);
      setSuccessGetCategories(true);
    } catch {
      setErrorGetCategories(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getContentCategories();
  }, []);

  console.log(categories);

  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 300, hide: true },
    {
      field: 'guide',
      width: 250,
      editable: false,
      headerName: 'Guia',
    },
    {
      field: 'title',
      width: 200,
      editable: false,
      headerName: 'Categoria',
    },
    {
      field: 'shortDescription',
      width: 300,
      editable: false,
      headerName: 'Descrição',
    },
    {
      field: 'edit',
      width: 100,
      sortable: false,
      headerName: 'Editar',
      renderCell: (params) => (
        <Button
          href={params.value}
          startIcon={<CreateSharp />}
          sx={{ color: 'text.primary' }}
        ></Button>
      ),
    },
    {
      field: 'delete',
      width: 100,
      sortable: false,
      headerName: 'Excluir',
      renderCell: (params) => (
        <Button
          href={params.value}
          startIcon={<DeleteIcon />}
          sx={{ color: 'text.primary' }}
        ></Button>
      ),
    },
  ];

  const rowData = categories.map((category) => {
    return {
      _id: category._id,
      guide: (category.guide as GuideInterface).title,
      title: category.title,
      shortDescription:
        category.shortDescription.length >= 30
          ? category.shortDescription.substring(0, 30) + '...'
          : category.shortDescription,
      edit: '/admin/atualizar-categoria/' + category._id,
      delete: '/admin/excluir-categoria/' + category._id,
    };
  });

  return (
    <>
      <AccessibilityTypography
        role="heading"
        tabIndex={1}
        aria-label="LISTAGEM DE CATEGORIAS"
        sx={styles.listTitle}
      >
        LISTAGEM DE CATEGORIAS
      </AccessibilityTypography>
      <Box
        style={{ width: '100%' }}
        role="list"
        tabIndex={2}
        aria-label="LISTA DE CATEGORIAS"
      >
        {loading ? (
          <Grid container justifyContent={'center'} marginTop={'20px'}>
            <CircularProgress color="secondary" />
          </Grid>
        ) : errorGetCategories ? (
          <Grid container justifyContent={'center'} marginTop={'30px'}>
            <AccessibilityTypography variant="h1" className="error">
              Desculpe, não foi possível carregar a lista de categorias!
            </AccessibilityTypography>
          </Grid>
        ) : (
          <>
            <DataGrid
              data-testid="dataGrid"
              autoHeight
              getRowId={(row) => row._id}
              disableExtendRowFullWidth={true}
              rows={rowData}
              columns={columns}
              sx={styles.table}
              pageSize={10}
              rowsPerPageOptions={[4]}
            />
            <Box sx={styles.boxButton}>
              <Button
                component={Link}
                to="/admin/cadastrar-categoria"
                sx={styles.button}
                variant="contained"
                type="submit"
                role="button"
                aria-label="BOTÃO NOVO"
                tabIndex={16}
                data-testid="new"
              >
                Novo
              </Button>

              <Button
                component={Link}
                to="/admin"
                sx={styles.button}
                variant="contained"
                type="reset"
                role="button"
                aria-label="BOTÃO VOLTAR"
                tabIndex={17}
                data-testid="back"
              >
                Voltar
              </Button>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default CategoriesList;
