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
  },
  {
    id: 2,
    title: 'Boas Práticas para Acessibilidade',
    shortDescription:
      'Descrição para o guia de Boas Práticas para Acessibilidade',
  },
  {
    id: 3,
    title: 'Guia de Inclusão Digital',
    shortDescription: 'Descrição para o guia de Inclusão Digital',
  },
  {
    id: 4,
    title: 'Guia de Acessibilidade',
    shortDescription: 'Descrição para o guia de Acessibilidade',
  },
  {
    id: 5,
    title: 'Guia de Acessibilidade',
    shortDescription: 'Descrição para o guia de Acessibilidade',
  },
  {
    id: 6,
    title: 'Guia de Acessibilidade',
    shortDescription: 'Descrição para o guia de Acessibilidade',
  },
  {
    id: 7,
    title: 'Guia de Acessibilidade',
    shortDescription: 'Descrição para o guia de Acessibilidade',
  },
  {
    id: 8,
    title: 'Guia de Acessibilidade',
    shortDescription: 'Descrição para o guia de Acessibilidade',
  },
  {
    id: 9,
    title: 'Guia de Acessibilidade',
    shortDescription: 'Descrição para o guia de Acessibilidade',
  },
  {
    id: 10,
    title: 'Guia de Acessibilidade',
    shortDescription: 'Descrição para o guia de Acessibilidade',
  },
];

const columns: GridColDef[] = [
  { field: 'title', headerName: 'Título', width: 250 },
  { field: 'shortDescription', headerName: 'Descrição', width: 560 },
  {
    field: 'action',
    headerName: 'Ação',
    width: 190,
    sortable: false,
    renderCell: () => {
      const onClick = (e: { stopPropagation: () => void }) => {
        e.stopPropagation();
      };
      return (
        <>
          <Button
            data-testid="buttonEdit"
            component={Link}
            to="/admin/atualizar-guia"
            sx={styles.buttonTable}
            onClick={onClick}
          >
            Editar
          </Button>
          <Button sx={styles.buttonTable} onClick={onClick}>
            Excluir
          </Button>
        </>
      );
    },
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
