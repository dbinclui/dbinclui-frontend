import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import AccessibilityTypography from '@components/AccessibilityTypography';
import styles from './styles';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export interface CategoriesListProps {}

export const CategoriesList: React.FC<
  CategoriesListProps
> = (): JSX.Element => {
  const columns: GridColDef[] = [
    {
      field: 'guide',
      headerName: 'Guia',
      width: 500,
      editable: false,
    },
    {
      field: 'title',
      headerName: 'Categoria',
      width: 150,
      editable: false,
    },
    {
      field: 'shortDescription',
      headerName: 'Descrição',
      width: 110,
      editable: false,
    },
    {
      field: 'fullName',
      headerName: 'Ação',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const rows = [
    {
      id: 1,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 1',
      shortDescription: 'Descrição da categoria',
    },
    {
      id: 2,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 2',
      shortDescription: 'Descrição da categoria',
    },
    {
      id: 3,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 3',
      shortDescription: 'Descrição da categoria',
    },
  ];

  return (
    <>
      <AccessibilityTypography sx={styles.listTitle}>
        LISTAGEM DE CATEGORIAS
      </AccessibilityTypography>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          hideFooter={true}
          autoHeight={true}
          rowsPerPageOptions={[5]}
          sx={styles.table}
        />
      </div>
      <Grid container justifyContent={'flex-end'} alignItems={'center'}>
        <Grid sx={styles.buttonWrapper}>
          <Button
            component={Link}
            to="/admin/cadastrar-guia"
            sx={styles.button}
            variant="contained"
            type="submit"
            role="button"
          >
            Novo
          </Button>
        </Grid>
        <Grid item md={2} sx={styles.buttonWrapper}>
          <Button
            component={Link}
            to="/admin"
            sx={styles.button}
            variant="contained"
            type="reset"
            role="button"
            data-testid="back"
            href="/admin"
          >
            Voltar
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CategoriesList;
