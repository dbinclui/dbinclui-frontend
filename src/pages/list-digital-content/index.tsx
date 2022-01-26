import React from 'react';
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Grid } from '@mui/material';
import AccessibilityTypography from '@components/AccessibilityTypography';

import styles from './styles';

export interface DigitalContentInterfaceProps {}

const columns: GridColDef[] = [
  { field: 'guide', headerName: 'Guia', width: 200 },
  { field: 'category', headerName: 'Categoria', width: 200 },
  { field: 'description', headerName: 'Descrição', width: 250 },
  { field: 'files', headerName: 'Arquivos', width: 200 },
  {
    field: 'actions',
    headerName: 'Ação',
  },
];

const rows = [
  {
    id: 1,
    guide: 'Guia de Acessibilidade',
    category: 'O que é acessibilidade?',
    description: 'Descrição do conteúdo digital',
    files: '35',
    action: 'Editar  Excluir',
  },
  {
    id: 2,
    guide: 'Guia de Acessibilidade',
    category: 'O que é acessibilidade?',
    description: 'Descrição do conteúdo digital',
    files: '35',
    action: 'Editar  Excluir',
  },
  {
    id: 3,
    guide: 'Guia de Acessibilidade',
    category: 'O que é acessibilidade?',
    description: 'Descrição do conteúdo digital',
    files: '35',
    action: 'Editar  Excluir',
  },
  {
    id: 4,
    guide: 'Guia do deficiente visual',
    category: 'Introdução à LIBRAS',
    description: 'Descrição do conteúdo digital',
    files: '35',
    action: 'Editar  Excluir',
  },
  {
    id: 5,
    guide: 'Guia do deficiente visual',
    category: 'Números em LIBRAS',
    description: 'Descrição do conteúdo digital',
    files: '35',
    action: 'Editar  Excluir',
  },
  {
    id: 6,
    guide: 'Guia do deficiente visual',
    category: 'Iniciativas inclusivas',
    description: 'Descrição do conteúdo digital',
    files: '35',
    action: 'Editar  Excluir',
  },
];

export const ListDigitalContent: React.FC<
  DigitalContentInterfaceProps
> = (): JSX.Element => {
  return (
    <>
      <AccessibilityTypography variant="h2" sx={styles.listTitle}>
        LISTAGEM DE CONTEÚDO DIGITAL
      </AccessibilityTypography>
      <div style={{ width: '100%' }}>
        <DataGrid
          hideFooter={true}
          autoHeight={true}
          rows={rows}
          columns={columns}
          sx={styles.table}
          rowsPerPageOptions={[10]}
        />
      </div>
      <Grid container justifyContent={'flex-end'} alignItems={'center'}>
        <Grid item md={3} sx={styles.buttonWrapper}>
          <Button
            sx={styles.button}
            component={Link}
            to="/admin/cadastrar-conteudo/digital"
            variant="contained"
            type="submit"
            role="button"
          >
            Novo
          </Button>
        </Grid>
        <Grid sx={styles.buttonWrapper}>
          <Button
            sx={styles.button}
            component={Link}
            to="/admin"
            variant="contained"
            type="reset"
            role="button"
          >
            Voltar
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default ListDigitalContent;
