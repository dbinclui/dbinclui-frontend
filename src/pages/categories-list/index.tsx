import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import AccessibilityTypography from '@components/AccessibilityTypography';
import styles from './styles';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export interface CategoriesListProps {}

export const CategoriesList: React.FC<
  CategoriesListProps
> = (): JSX.Element => {
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
      width: 100,
      sortable: false,
      headerName: 'Editar',
    },
    {
      field: 'delete',
      width: 100,
      sortable: false,
      headerName: 'Excluir',
    },
  ];

  const rows = [
    {
      id: 1,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 1',
      shortDescription: 'Descrição da categoria',
      edit: 'Editar',
      delete: 'Excluir',
    },
    {
      id: 2,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 2',
      shortDescription: 'Descrição da categoria',
      edit: 'Editar',
      delete: 'Excluir',
    },
    {
      id: 3,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 3',
      shortDescription: 'Descrição da categoria',
      edit: 'Editar',
      delete: 'Excluir',
    },
    {
      id: 4,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 4',
      shortDescription: 'Descrição da categoria',
      edit: 'Editar',
      delete: 'Excluir',
    },
    {
      id: 5,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 5',
      shortDescription: 'Descrição da categoria',
      edit: 'Editar',
      delete: 'Excluir',
    },
    {
      id: 6,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 6',
      shortDescription: 'Descrição da categoria',
      edit: 'Editar',
      delete: 'Excluir',
    },
    {
      id: 7,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 7',
      shortDescription: 'Descrição da categoria',
      edit: 'Editar',
      delete: 'Excluir',
    },
    {
      id: 8,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 8',
      shortDescription: 'Descrição da categoria',
      edit: 'Editar',
      delete: 'Excluir',
    },
    {
      id: 9,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 9',
      shortDescription: 'Descrição da categoria',
      edit: 'Editar',
      delete: 'Excluir',
    },
    {
      id: 10,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 10',
      shortDescription: 'Descrição da categoria',
      edit: 'Editar',
      delete: 'Excluir',
    },
    {
      id: 11,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 11',
      shortDescription: 'Descrição da categoria',
      edit: 'Editar',
      delete: 'Excluir',
    },
    {
      id: 12,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 12',
      shortDescription: 'Descrição da categoria',
      edit: 'Editar',
      delete: 'Excluir',
    },
  ];

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
          rows={rows}
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
