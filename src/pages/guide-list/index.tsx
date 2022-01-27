import React from 'react';
import { Link } from 'react-router-dom';
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridColumnHeaderParams,
} from '@mui/x-data-grid';
import { Button, Box } from '@mui/material';
import { CreateSharp } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessibilityTypography from '@components/AccessibilityTypography';
import styles from './styles';

export interface GuideListProps {}

const rows: GridRowsProp = [
  {
    id: 1,
    title: 'Guia de Acessibilidade',
    shortDescription: 'Descrição para o guia de Acessibilidade',
    edit: '/admin/editar-guia?id=1',
    delete: '/admin/excluir-guia?id=1',
  },
  {
    id: 2,
    title: 'Boas Práticas para Acessibilidade',
    shortDescription:
      'Descrição para o guia de Boas Práticas para Acessibilidade',
    edit: '/admin/editar-guia?id=2',
    delete: '/admin/excluir-guia?id=2',
  },
  {
    id: 3,
    title: 'Guia de Inclusão Digital',
    shortDescription: 'Descrição para o guia de Inclusão Digital',
    edit: '/admin/editar-guia?id=3',
    delete: '/admin/excluir-guia?id=3',
  },
  {
    id: 4,
    title: 'Guia de Acessibilidade',
    shortDescription: 'Descrição para o guia de Acessibilidade',
    edit: '/admin/editar-guia?id=4',
    delete: '/admin/excluir-guia?id=4',
  },
  {
    id: 5,
    title: 'Guia de Acessibilidade',
    shortDescription: 'Descrição para o guia de Acessibilidade',
    edit: '/admin/editar-guia?id=5',
    delete: '/admin/excluir-guia?id=5',
  },
  {
    id: 6,
    title: 'Guia de Acessibilidade',
    shortDescription: 'Descrição para o guia de Acessibilidade',
    edit: '/admin/editar-guia?id=6',
    delete: '/admin/excluir-guia?id=6',
  },
  {
    id: 7,
    title: 'Guia de Acessibilidade',
    shortDescription: 'Descrição para o guia de Acessibilidade',
    edit: '/admin/editar-guia?id=7',
    delete: '/admin/excluir-guia?id=7',
  },
  {
    id: 8,
    title: 'Guia de Acessibilidade',
    shortDescription: 'Descrição para o guia de Acessibilidade',
    edit: '/admin/editar-guia?id=8',
    delete: '/admin/excluir-guia?id=8',
  },
  {
    id: 9,
    title: 'Guia de Acessibilidade',
    shortDescription: 'Descrição para o guia de Acessibilidade',
    edit: '/admin/editar-guia?id=9',
    delete: '/admin/excluir-guia?id=9',
  },
  {
    id: 10,
    title: 'Guia de Acessibilidade',
    shortDescription: 'Descrição para o guia de Acessibilidade',
    edit: '/admin/editar-guia?id=10',
    delete: '/admin/excluir-guia?id=10',
  },
];

const columns: GridColDef[] = [
  { field: 'title', headerName: 'Título', width: 250 },
  { field: 'shortDescription', headerName: 'Descrição', width: 560 },
  {
    field: 'edit',
    width: 100,
    sortable: false,
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
