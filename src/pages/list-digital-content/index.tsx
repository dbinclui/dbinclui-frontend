import React from 'react';
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import { Button, Box } from '@mui/material';
import AccessibilityTypography from '@components/AccessibilityTypography';

import styles from './styles';

export interface DigitalContentInterfaceProps {}

const columns: GridColDef[] = [
  {
    field: 'guide',
    width: 250,
    renderHeader: (params: GridColumnHeaderParams) => <strong>{'Guia'}</strong>,
  },
  {
    field: 'category',
    width: 250,
    renderHeader: (params: GridColumnHeaderParams) => (
      <strong>{'Categoria'}</strong>
    ),
  },
  {
    field: 'description',
    width: 250,
    renderHeader: (params: GridColumnHeaderParams) => (
      <strong>{'Descrição'}</strong>
    ),
  },
  {
    field: 'files',
    width: 150,
    renderHeader: (params: GridColumnHeaderParams) => (
      <strong>{'Arquivos'}</strong>
    ),
    renderCell: (params) => <img src={params.value} width={60} height={50} />,
  },
  {
    field: 'actions',
    headerName: 'Ação',
    width: 150,
    renderCell: () => {
      const onClick = (e: { stopPropagation: () => void }) => {
        e.stopPropagation();
      };

      return (
        <>
          <Button
            component={Link}
            to="/admin/atualizar-categoria"
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

const rows = [
  {
    id: 1,
    guide: 'Guia de Acessibilidade',
    category: 'O que é acessibilidade?',
    description:
      'Descrição do conteúdo digital dhdfjkdhfsdhfkjsfhskdjfhsdjkfhs',
    files:
      'http://2.bp.blogspot.com/-u8DXzfyQ2zo/UmVIMwaabUI/AAAAAAAA8j8/_eR_7WpYXrg/s1600/guiavidente.jpg',
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
      <Box style={{ height: 400, width: '100%' }}>
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
      </Box>
      <Box sx={styles.buttonBox}>
        <Button
          sx={styles.button}
          component={Link}
          to="/admin/cadastrar-conteudo-digital"
          variant="contained"
          type="submit"
          role="button"
        >
          Novo
        </Button>

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
      </Box>
    </>
  );
};
export default ListDigitalContent;
