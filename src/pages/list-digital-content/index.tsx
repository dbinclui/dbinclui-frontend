import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Box } from '@mui/material';

import AccessibilityTypography from '@components/AccessibilityTypography';

import styles from './styles';
import { CardDigitalContentResponse, getDigitalContent } from '@services/digitalContent';
import { CreateSharp } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';

export interface DigitalContentInterfaceProps {}

const columns: GridColDef[] = [
  { field: '_id', headerName: 'ID', width: 50, hide: true },
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


export const ListDigitalContent: React.FC<
  DigitalContentInterfaceProps
> = (): JSX.Element => {
  const [cards, setCards] = useState<CardDigitalContentResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getDigitalContentsService() {
    try {
      const { data } = await getDigitalContent();
      setCards(data.data);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDigitalContentsService();
  }, []);

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
          rows={cards}
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
