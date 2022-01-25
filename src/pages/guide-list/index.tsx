import React from 'react';
import { Link } from 'react-router-dom';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { autocompleteClasses, Button, Typography } from '@mui/material';
import styles from './styles';

export interface GuideListProps {}

const rows: GridRowsProp = [
  {
    id: 1,
    col1: 'Guia de Acessibilidade',
    col2: 'Descrição para o guia de Acessibilidade',
    col3: 'Editar   Excluir',
  },
  {
    id: 2,
    col1: 'Boas Práticas para Acessibilidade',
    col2: 'Descrição para o guia de Boas Práticas para Acessibilidade',
    col3: 'Editar   Excluir',
  },
  {
    id: 3,
    col1: 'Guia de Inclusão Digital',
    col2: 'Descrição para o guia de Inclusão Digital',
    col3: 'Editar   Excluir',
  },
  {
    id: 4,
    col1: 'Guia de Acessibilidade',
    col2: 'Descrição para o guia de Acessibilidade',
    col3: 'Editar   Excluir',
  },
  {
    id: 5,
    col1: 'Guia de Acessibilidade',
    col2: 'Descrição para o guia de Acessibilidade',
    col3: 'Editar   Excluir',
  },
  {
    id: 6,
    col1: 'Guia de Acessibilidade',
    col2: 'Descrição para o guia de Acessibilidade',
    col3: 'Editar   Excluir',
  },
  {
    id: 7,
    col1: 'Guia de Acessibilidade',
    col2: 'Descrição para o guia de Acessibilidade',
    col3: 'Editar   Excluir',
  },
  {
    id: 8,
    col1: 'Guia de Acessibilidade',
    col2: 'Descrição para o guia de Acessibilidade',
    col3: 'Editar   Excluir',
  },
  {
    id: 9,
    col1: 'Guia de Acessibilidade',
    col2: 'Descrição para o guia de Acessibilidade',
    col3: 'Editar   Excluir',
  },
  {
    id: 10,
    col1: 'Guia de Acessibilidade',
    col2: 'Descrição para o guia de Acessibilidade',
    col3: 'Editar   Excluir',
  },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Título', width: 250 },
  { field: 'col2', headerName: 'Descrição', width: 560 },
  { field: 'col3', headerName: 'Ação', width: 190 },
];

export const GuideList: React.FC<GuideListProps> = (): JSX.Element => {
  return (
    <>
      <Typography variant="h2" sx={styles.listTitle}>
        LISTAGEM DE GUIAS
      </Typography>
      <div style={{ width: '100%' }}>
        <DataGrid
          data-testid="dataGrid"
          autoHeight
          disableExtendRowFullWidth={true}
          rows={rows}
          columns={columns}
          sx={styles.table}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: "0 auto",
            marginTop: '20px'
          }}
        >
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
          <Button
            component={Link}
            to="/admin"
            sx={styles.button}
            variant="contained"
            type="reset"
            role="button"
          >
            Voltar
          </Button>
        </div>
      </div>
    </>
  );
};

export default GuideList;
