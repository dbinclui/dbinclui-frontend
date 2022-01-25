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
          rows={rows}
          columns={columns}
          sx={styles.table}
          autoHeight={true}
          autoPageSize
          rowsPerPageOptions={[5]}
        />
      </div>
      <Grid container alignItems={'center'} justifyContent={'flex-end'}>
        <Grid sx={styles.buttonWrapper}>
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
        <Grid item md={3} sx={styles.buttonWrapper}>
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
    </>
  );
};
export default ListDigitalContent;
