import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Box } from '@mui/material';
import AccessibilityTypography from '@components/AccessibilityTypography';
import styles from './styles';
import {
  CardDigitalContentResponse,
  getDigitalContent,
} from '@services/digitalContent';
import { CreateSharp } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';

export interface DigitalContentInterfaceProps {}

export const ListDigitalContent: React.FC<
  DigitalContentInterfaceProps
> = (): JSX.Element => {
  const [digitalContents, setDigitalContents] = useState<
    CardDigitalContentResponse[]
  >([]);
  
   async function getDigitalContentsService() {
    try {
      const { data } = await getDigitalContent();
      setDigitalContents(data.data);
    } catch (error) {}
  }
    
  useEffect(() => {
    getDigitalContentsService();
    
  },[]);

  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 50, hide: true },
    {
      field: 'guide',
      width: 250,
      headerName: 'Guia',
    },
    {
      field: 'category',
      width: 250,
      headerName: 'Categoria',
    },
    {
      field: 'shortDescription',
      width: 280,
      headerName: 'Descrição',
    },
    {
      field: 'filePaths',
      width: 120,
      headerName: 'Arquivos',
      renderCell: (params) => (
        <img
          src={params.value}
          width={100}
          height={50}
          alt="Imagem refente ao conteúdo digital."
        />
      ),
    },
    {
      field: 'edit',
      width: 100,
      sortable: false,
      headerName: 'Editar',
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
      headerName: 'Excluir',
      renderCell: (params) => (
        <Button
          href={params.value}
          startIcon={<DeleteIcon />}
          sx={{ color: 'text.primary' }}
        ></Button>
      ),
    },
  ];
  
   const rowData = digitalContents.map((card) => {
    
    return {
      _id: card._id,
      guide: card.guide.title,
      category: card.category?.title,
      shortDescription: card.shortDescription,
      filePaths: card.filePaths[0],
      edit: '/admin/atualizar-conteudo-digital/' + card._id,
      delete: '/admin/excluir-conteudo-digital/' + card._id,
    };

  });

  return (
    <>
      <AccessibilityTypography variant="h2" sx={styles.listTitle}>
        LISTAGEM DE CONTEÚDO DIGITAL
      </AccessibilityTypography>
      <Box style={{ height: 400, width: '100%' }}>
        <DataGrid
          data-testid="dataGrid"
          autoHeight
          getRowId={(row) => row._id}
          disableExtendRowFullWidth={true}
          rows={rowData}
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
          area-label="BOTÃO NOVO"
          tabIndex={16}
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
          area-label="BOTÃO VOLTAR"
          tabIndex={17}
        >
          Voltar
        </Button>
      </Box>
    </>
  );
};
export default ListDigitalContent;
