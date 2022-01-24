import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Grid } from '@mui/material';
import AccessibilityTypography from '@components/AccessibilityTypography';

import styles from './styles';

export interface DigitalContentInterfaceProps {}

const columns = [
  { field: 'guide', headerName: 'Guia' },
  { field: 'category', headerName: 'Categoria' },
  { field: 'description', headerName: 'Descrição' },
  { field: 'files', headerName: 'Arquivos' },
];

const rows = [
  {
    id: 1,
    guide: 'Guia de Acessibilida',
    category: 'O que é acessibilidade?',
    description: 'Descrição do conteúdo',
    files: '35',
  },
];

export const ListDigitalContent: React.FC<
  DigitalContentInterfaceProps
> = (): JSX.Element => {
  return (
    <Grid container alignItems={'center'} justifyContent={'center'} role="main">
      <AccessibilityTypography sx={styles.headerTitle}>
        LISTAGEM DE CONTEÚDO DIGITAL
      </AccessibilityTypography>
      <Grid item md={6} sx={styles.dataGrid}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Grid>
      <Grid item md={6} sx={styles.buttonWrapper}>
        <Button
          sx={styles.button}
          variant="contained"
          type="reset"
          role="button"
          data-testid="back"
          href="/cadastrar-conteudo-digital"
        >
          Novo
        </Button>
      </Grid>
      <Grid item md={6} sx={styles.buttonWrapper}>
        <Button
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
  );
};
export default ListDigitalContent;
