import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Button, Box } from '@mui/material';
import AccessibilityTypography from '@components/AccessibilityTypography';
import { getGuides } from '@services/guides';
import CardGuidesResponse from '@services/guides';
import { CreateSharp } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './styles';

export interface GuideListPropsInterfaceProps {}

export const GuideList: React.FC<
  GuideListPropsInterfaceProps
> = (): JSX.Element => {
  const [guideList, setGuideList] = useState<CardGuidesResponse[]>([]);

  async function getGuideListService() {
    try {
      const { data } = await getGuides();
      setGuideList(data.data);
    } catch (error) {}
  }

  useEffect(() => {
    getGuideListService();
  }, []);

  const columns: GridColDef[] = [
    {
      field: 'guide',
      width: 250,
      headerName: 'Guia',
    },
    {
      field: 'content',
      width: 560,
      headerName: 'Descrição',
    },
    {
      field: 'edit',
      width: 100,
      sortable: false,
      headerName: 'Editar',
      renderCell: (params) => (
        <Button
          data-testid="edit"
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

  const rowData = guideList.map((card) => {
    return {
      _id: card._id,
      guide: card.title,
      content: card.content.length > 65 ? (card.content).substring(0, 65) + '...' : card.content,
      edit: '/admin/atualizar-guia/' + card._id,
      delete: '/admin/excluir-guia/' + card._id,
    };
  });

  return (
    <>
      <AccessibilityTypography variant="h2" sx={styles.listTitle}>
        LISTAGEM DE GUIAS
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
      <Box sx={styles.boxButton}>
        <Button
          data-testid="new"
          component={Link}
          to="/admin/cadastrar-guia"
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

export default GuideList;
