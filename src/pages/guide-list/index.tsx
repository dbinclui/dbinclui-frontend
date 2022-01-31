import React from 'react';
import { Link } from 'react-router-dom';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Button, Box } from '@mui/material';
import AccessibilityTypography from '@components/AccessibilityTypography';
import styles from './styles';

export interface GuideListProps {}


const rows: GridRowsProp = [
  {
    id: 1,
    title: 'Guia de Acessibilidade',
    shortDescription: 'Descrição para o guia de Acessibilidade',
    edit: 'Editar',
    delete: 'Excluir',
  },
  {
    id: 2,
    title: 'Boas Práticas para Acessibilidade',
    shortDescription:
      'Descrição para o guia de Boas Práticas para Acessibilidade',
    edit: 'Editar',
    delete: 'Excluir',
  },
  {
    id: 3,
    title: 'Guia de Inclusão Digital',
    shortDescription: 'Descrição para o guia de Inclusão Digital',
    edit: 'Editar',
    delete: 'Excluir',
  },
  {
    id: 4,
    title: 'Guia de Acessibilidade',
    shortDescription: 'Descrição para o guia de Acessibilidade',
    edit: 'Editar',
    delete: 'Excluir',
  },
  {
    id: 5,
    title: 'Guia de Acessibilidade',
    shortDescription: 'Descrição para o guia de Acessibilidade',
    edit: 'Editar',
    delete: 'Excluir',
  },
  {
    id: 6,
    title: 'Guia de Acessibilidade',
    shortDescription: 'Descrição para o guia de Acessibilidade',
    edit: 'Editar',
    delete: 'Excluir',
  },
  {
    id: 7,
    title: 'Guia de Acessibilidade',
    shortDescription: 'Descrição para o guia de Acessibilidade',
    edit: 'Editar',
    delete: 'Excluir',
  },
  {
    id: 8,
    title: 'Guia de Acessibilidade',
    shortDescription: 'Descrição para o guia de Acessibilidade',
    edit: 'Editar',
    delete: 'Excluir',
  },
  {
    id: 9,
    title: 'Guia de Acessibilidade',
    shortDescription: 'Descrição para o guia de Acessibilidade',
    edit: 'Editar',
    delete: 'Excluir',
  },
  {
    id: 10,
    title: 'Guia de Acessibilidade',
    shortDescription: 'Descrição para o guia de Acessibilidade',
    edit: 'Editar',
    delete: 'Excluir',
  },
];

const columns: GridColDef[] = [
  { field: 'title', headerName: 'Título', width: 250 },
  { field: 'shortDescription', headerName: 'Descrição', width: 560 },
  { field: 'edit', headerName: 'Edição', width: 100 },
  { field: 'delete', headerName: 'Exclusão', width: 100 },
];
export const GuideList: React.FC<GuideListProps> = (): JSX.Element => {

  return (
    <>
      <AccessibilityTypography sx={styles.listTitle}>
        LISTAGEM DE GUIAS
      </AccessibilityTypography>
      <Box style={{ width: '100%' }}>
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
        <Box sx={styles.boxButton}>
          <Button
            data-testid="submit"
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
            data-testid="back"
            component={Link}
            to="/admin"
            sx={styles.button}
            variant="contained"
            type="reset"
            role="button"
          >
            Voltar
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default GuideList;
