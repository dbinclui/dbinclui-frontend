import React from 'react';
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Box } from '@mui/material';

import AccessibilityTypography from '@components/AccessibilityTypography';

import styles from './styles';

export interface DigitalContentInterfaceProps {}

const columns: GridColDef[] = [
  {
    field: 'guide',
    width: 300,
    headerName: 'Guia',
  },
  {
    field: 'category',
    width: 300,
    headerName: 'Categoria',
  },
  {
    field: 'description',
    width: 300,
    headerName: 'Descrição',
  },
  {
    field: 'files',
    width: 100,
    headerName: 'Arquivos',
  },
  {
    field: 'edit',
    width: 100,
    headerName: 'Edição',
  },
  {
    field: 'delete',
    width: 100,
    headerName: 'Exclusão',
  },
];

const rows = [
  {
    id: 1,
    guide: 'Guia de Acessibilidade',
    category: 'O que é acessibilidade?',
    description: 'Descrição do conteúdo digital',
    files:
      'http://2.bp.blogspot.com/-u8DXzfyQ2zo/UmVIMwaabUI/AAAAAAAA8j8/_eR_7WpYXrg/s1600/guiavidente.jpg',
    edit: 'Editar',
    delete: 'Excluir',
  },
  {
    id: 2,
    guide: 'Guia de Acessibilidade',
    category: 'O que é acessibilidade?',
    description: 'Descrição do conteúdo digital',
    files:
      'https://cdn.pixabay.com/photo/2017/05/20/13/10/handicap-parking-2328893_1280.jpg',
    edit: 'Editar',
    delete: 'Excluir',
  },
  {
    id: 3,
    guide: 'Guia de Acessibilidade',
    category: 'O que é acessibilidade?',
    description: 'Descrição do conteúdo digital',
    files:
      'https://cdn.pixabay.com/photo/2018/01/17/20/43/wheelchair-3088991_1280.jpg',
    edit: 'Editar',
    delete: 'Excluir',
  },
  {
    id: 4,
    guide: 'Guia do deficiente visual',
    category: 'Introdução à LIBRAS',
    description: 'Descrição do conteúdo digital',
    files:
      'http://2.bp.blogspot.com/-u8DXzfyQ2zo/UmVIMwaabUI/AAAAAAAA8j8/_eR_7WpYXrg/s1600/guiavidente.jpg',
    edit: 'Editar',
    delete: 'Excluir',
  },
  {
    id: 5,
    guide: 'Guia do deficiente visual',
    category: 'Números em LIBRAS',
    description: 'Descrição do conteúdo digital',
    files:
      'https://cdn.pixabay.com/photo/2017/05/20/13/10/handicap-parking-2328893_1280.jpg',
    edit: 'Editar',
    delete: 'Excluir',
  },
  {
    id: 6,
    guide: 'Guia do deficiente visual',
    category: 'Iniciativas inclusivas',
    description: 'Descrição do conteúdo digital',
    files:
      'http://2.bp.blogspot.com/-u8DXzfyQ2zo/UmVIMwaabUI/AAAAAAAA8j8/_eR_7WpYXrg/s1600/guiavidente.jpg',
    edit: 'Editar',
    delete: 'Excluir',
  },
  {
    id: 7,
    guide: 'Guia do deficiente visual',
    category: 'Números em LIBRAS',
    description: 'Descrição do conteúdo digital',
    files:
      'https://cdn.pixabay.com/photo/2017/05/20/13/10/handicap-parking-2328893_1280.jpg',
    edit: 'Editar',
    delete: 'Excluir',
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
          data-testid="new"
          component={Link}
          to="/admin/cadastrar-conteudo-digital"
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
    </>
  );
};
export default ListDigitalContent;
