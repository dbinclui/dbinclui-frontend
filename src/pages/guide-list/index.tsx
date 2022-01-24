import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
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
    col1: 'Guia de Acessibilidade',
    col2: 'Descrição para o guia de Acessibilidade',
    col3: 'Editar   Excluir',
  },
  {
    id: 3,
    col1: 'Guia de Acessibilidade',
    col2: 'Descrição para o guia de Acessibilidade',
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
          autoHeight
          rows={rows}
          columns={columns}
          sx={styles.table}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </>
  );
};

export default GuideList;
