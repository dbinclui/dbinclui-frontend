import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Box, CircularProgress, Grid } from '@mui/material';
import AccessibilityTypography from '@components/AccessibilityTypography';
import {
  deleteGuide,
  GuideInterface,
  getGuides,
  getGuideWithCategoriesAndContent,
  GuideContent,
} from '@services/guides';
import { CreateSharp } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './styles';
import DialogBoxConfirmation from '@components/DialogBox/DialogBoxConfirmation';

export interface GuideListPropsInterfaceProps {}

export const GuideList: React.FC<
  GuideListPropsInterfaceProps
> = (): JSX.Element => {
  const [guideList, setGuideList] = useState<GuideInterface[]>([]);
  const [errorGetList, setErrorGetList] = useState(false);

  const [loading, setLoading] = useState(true);
  const [confirmation, setConfirmation] = useState(false);
  const [idDelete, setIdDelete] = useState('');

  async function getGuideListService() {
    try {
      const { data } = await getGuides();
      setGuideList(data.data);
    } catch {
      setErrorGetList(true);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getGuideListService();
  }, [guideList]);

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
          onClick={() => {
            setIdDelete(params.value);
            setConfirmation(true);
          }}
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
      content:
        card.content.length > 65
          ? card.content.substring(0, 65) + '...'
          : card.content,
      edit: '/admin/atualizar-guia/' + card._id,
      delete: card._id,
    };
  });

  return (
    <>
      {confirmation && (
        
        <Box>
          <DialogBoxConfirmation
            type = 'guia'
            id = {idDelete.toString()}
            onClose={() => {
              setConfirmation(false);
            }}
            
          />
        </Box>
      )}
      
      <AccessibilityTypography
        role="heading"
        tabIndex={1}
        aria-label="LISTAGEM DE GUIAS"
        sx={styles.listTitle}
      >
        LISTAGEM DE GUIAS
      </AccessibilityTypography>
      <Box
        style={{ height: 400, width: '100%' }}
        role="list"
        tabIndex={2}
        aria-label="LISTA DE GUIAS"
      >
        {loading ? (
          <Grid container justifyContent={'center'} marginTop={'20px'}>
            <CircularProgress color="secondary" />
          </Grid>
        ) : errorGetList ? (
          <Grid container justifyContent={'center'} marginTop={'30px'}>
            <AccessibilityTypography variant="h1" className="error">
              Desculpe, não foi possível carregar a lista de guias!
            </AccessibilityTypography>
          </Grid>
        ) : (
          <>
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
            <Box sx={styles.boxButton}>
              <Button
                data-testid="new"
                component={Link}
                to="/admin/cadastrar-guia"
                sx={styles.button}
                variant="contained"
                type="submit"
                role="button"
                aria-label="BOTÃO NOVO"
                tabIndex={3}
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
                aria-label="BOTÃO VOLTAR"
                tabIndex={4}
              >
                Voltar
              </Button>
              
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default GuideList;
