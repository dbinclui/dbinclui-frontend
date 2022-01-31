import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import AccessibilityTypography from '@components/AccessibilityTypography';
import styles from './styles';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { CardCategoriesResponse, getCategories } from '@services/categories';
import DeleteIcon from '@mui/icons-material/Delete';
import { CreateSharp } from '@mui/icons-material';

export interface CategoriesListProps {}

export const CategoriesList: React.FC<
  CategoriesListProps
> = (): JSX.Element => {
  const [categories, setCategories] = useState<CardCategoriesResponse[]>([]);
  const [successGetCategories, setSuccessGetCategories] = useState(false);
  const [errorGetCategories, setErrorGetCategories] = useState(true);
  const [errorMessageGetCategories, setErrorMessageGetCategories] =
    useState('');

  async function getContentCategories() {
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
    getContentCategories();
  }, []);

  console.log(categories);

  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 300, hide: true },
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

  const rowData = categories.map((card) => {
    return {
      _id: card._id,
      guide: card.guide.title,
      title: card.title,
      shortDescription: card.shortDescription,
      edit: '/admin/atualizar-categoria/' + card._id,
      delete: '/admin/excluir-categoria/' + card._id,
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
