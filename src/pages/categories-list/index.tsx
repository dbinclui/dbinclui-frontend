import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import AccessibilityTypography from '@components/AccessibilityTypography';
import styles from './styles';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { CardCategoriesResponse, getCategories } from '@services/categories';
import { CreateSharp, DeleteIcon } from '@mui/icons-material';

export interface CategoriesListProps {}

export const CategoriesList: React.FC<
  CategoriesListProps
> = (): JSX.Element => {
  const [categories, setCategories] = useState<CardCategoriesResponse[]>([]);
  const [successGetCategories, setSuccessGetCategories] = useState(false);
  const [errorGetCategories, setErrorGetCategories] = useState(true);
  const [errorMessageGetCategories, setErrorMessageGetCategories] =
    useState('');

  async function getDigitalContentCategories() {
    try {
      const response = await getCategories();
      setCategories(response.data.data);
      setSuccessGetCategories(true);
    } catch {
      setErrorMessageGetCategories('Não foram encontradas as guias');
      setErrorGetCategories(true);
    }
  }

  useEffect(() => {
    getDigitalContentCategories();
  }, []);

  console.log(categories);

  const columns: GridColDef[] = [
    {
      field: 'guide',
      width: 300,
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
      width: 250,
      editable: false,
      headerName: 'Descrição',
    },
    {
      field: 'edit',
      width: 250,
      editable: false,
      headerName: 'Editar',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>{'Editar'}</strong>
      ),
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
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>{'Excluir'}</strong>
      ),
      renderCell: (params) => (
        <Button
          href={params.value}
          startIcon={<DeleteIcon />}
          sx={{ color: 'text.primary' }}
        ></Button>
      ),
    },
  ];
  let i = 0;
  // const rows = [
  //   categories.map((category) => ({
  //     id: ++i,
  //     guide: category.guide,
  //     title: category.title,
  //     shortDescription: category.shortDescription,
  //     edit: 'Editar',
  //     delete: 'Excluir',
  //   })),
  // ];

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
        <DataGrid
          data-testid="dataGrid"
          autoHeight
          disableExtendRowFullWidth={true}
          rows={categories}
          columns={columns}
          sx={styles.table}
          pageSize={10}
          rowsPerPageOptions={[4]}
        />
      </Box>
      <Box sx={styles.boxButton}>
        <Button
          component={Link}
          to="/admin/cadastrar-categoria"
          sx={styles.button}
          variant="contained"
          type="submit"
          role="button"
          area-label="BOTÃO NOVO"
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
          area-label="BOTÃO VOLTAR"
          tabIndex={17}
          data-testid="back"
        >
          Voltar
        </Button>
      </Box>
    </>
  );
};

export default CategoriesList;
