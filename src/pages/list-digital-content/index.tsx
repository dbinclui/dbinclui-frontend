import React from 'react';
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Box } from '@mui/material';
import AccessibilityTypography from '@components/AccessibilityTypography';

import styles from './styles';

export interface DigitalContentInterfaceProps {}

const columns: GridColDef[] = [
  { field: 'guide', headerName: 'Guia', width: 250 },
  { field: 'category', headerName: 'Categoria', width: 250 },
  { field: 'description', headerName: 'Descrição', width: 250 },
  {
    field: 'files',
    headerName: 'Arquivos',
    width: 150,
    renderCell: (params) => <img src={params.value} width={60} height={50} />,
  },
  {
    field: 'edit',
    headerName: 'Edição',
    width: 150,
    renderCell: (params) => <a href={params.value}>Editar</a>
  },
  {
    field: 'delete',
    headerName: 'Exclusão',
    width: 150,
    renderCell: (params) => <a href={params.value}>Excluir</a>
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
    edit: '/admin/editar-conteudo-digital?id=1',
    delete: '/admin/excluir-conteudo-digital?id=1',
  },
  {
    id: 2,
    guide: 'Guia de Acessibilidade',
    category: 'O que é acessibilidade?',
    description: 'Descrição do conteúdo digital',
    files: 'https://cdn.pixabay.com/photo/2017/05/20/13/10/handicap-parking-2328893_1280.jpg',
    edit: '/admin/editar-conteudo-digital?id=2',
    delete: '/admin/excluir-conteudo-digital?id=2',
  },
  {
    id: 3,
    guide: 'Guia de Acessibilidade',
    category: 'O que é acessibilidade?',
    description: 'Descrição do conteúdo digital',
    files: 'https://cdn.pixabay.com/photo/2018/01/17/20/43/wheelchair-3088991_1280.jpg',
    edit: '/admin/editar-conteudo-digital?id=3',
    delete: '/admin/excluir-conteudo-digital?id=3',
  },
  {
    id: 4,
    guide: 'Guia do deficiente visual',
    category: 'Introdução à LIBRAS',
    description: 'Descrição do conteúdo digital',
    files: 'http://2.bp.blogspot.com/-u8DXzfyQ2zo/UmVIMwaabUI/AAAAAAAA8j8/_eR_7WpYXrg/s1600/guiavidente.jpg',
    edit: '/admin/editar-conteudo-digital?id=4',
    delete: '/admin/excluir-conteudo-digital?id=4',
  },
  {
    id: 5,
    guide: 'Guia do deficiente visual',
    category: 'Números em LIBRAS',
    description: 'Descrição do conteúdo digital',
    files: 'https://cdn.pixabay.com/photo/2017/05/20/13/10/handicap-parking-2328893_1280.jpg',
    edit: '/admin/editar-conteudo-digital?id=5',
    delete: '/admin/excluir-conteudo-digital?id=5',
  },
  {
    id: 6,
    guide: 'Guia do deficiente visual',
    category: 'Iniciativas inclusivas',
    description: 'Descrição do conteúdo digital',
    files:
      'http://2.bp.blogspot.com/-u8DXzfyQ2zo/UmVIMwaabUI/AAAAAAAA8j8/_eR_7WpYXrg/s1600/guiavidente.jpg',
    edit: '/admin/editar-conteudo-digital?id=6',
    delete: '/admin/excluir-conteudo-digital?id=6',
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
          data-testid = "new"
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
          data-testid="back"
        >
          Voltar
        </Button>
      </Box>
    </>
  );
};
export default ListDigitalContent;
