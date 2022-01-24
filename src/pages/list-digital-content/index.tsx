import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Grid } from '@mui/material';

import styles from './styles';

export interface DigitalContentInterfaceProps {}

const columns = [
  { field: 'guide', headerName: 'Guia' },
  { field: 'category', headerName: 'Categoria' },
  { field: 'description', headerName: 'Descrição' },
  { field: 'files', headerName: 'Arquivos' },
  /* { field: 'action',
    headerName: 'Ação',
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
},*/
];

const rows = [{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 }];

export const ListDigitalContent: React.FC<
  DigitalContentInterfaceProps
> = (): JSX.Element => {
  return (
    <>
      <h2>LISTAGEM DE CONTEÚDO DIGITAL </h2>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
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
    </>
  );
};
export default ListDigitalContent;
