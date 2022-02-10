import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Box, CircularProgress, Grid } from '@mui/material';
import AccessibilityTypography from '@components/AccessibilityTypography';
import { deleteGuide, GuideInterface, getGuides } from '@services/guides';
import { CreateSharp } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './styles';
import DialogBoxConfirmation from '@components/DialogBox/DialogBoxConfirmation';
import Notification from '@components/Notification';

export interface GuideListPropsInterfaceProps {}

export const GuideList: React.FC<
  GuideListPropsInterfaceProps
> = (): JSX.Element => {
  const [guideList, setGuideList] = useState<GuideInterface[]>([]);
  const [errorGetList, setErrorGetList] = useState(false);

  const [loading, setLoading] = useState(true);
  const [confirmation, setConfirmation] = useState(false);
  const [id, setId] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  async function handleDelete(value: boolean) {
    if (value) {
      try {
        await deleteGuide(id);
        setSuccess(true);
      } catch (error: any) {
        setErrorMessage(error.response.data.message);
        setError(true);
      }
    }
  }

  useEffect(() => {
    getGuideListService();
  }, [success]);

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
          data-testid="delete"
          onClick={() => {
            setConfirmation(true);
            setId(params.value);
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
            title="Deseja excluir esse guia?"
            confirmation={confirmation}
            setConfirmation={setConfirmation}
            onClose={handleDelete}
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
              <Grid item md={6}>
                <Button
                  sx={styles.button}
                  variant="contained"
                  type="reset"
                  role="button"
                  data-testid="back"
                  component={Link}
                  to="/admin"
                  aria-label="BOTÃO VOLTAR"
                >
                  Voltar
                </Button>
              </Grid>
            </Box>
          </>
        )}
        {error && (
          <Notification
            message={`${errorMessage} 🤔`}
            variant="error"
            onClose={() => {
              setError(false);
              setErrorMessage('');
            }}
          />
        )}
        {success && (
          <Notification
            message="Guia deletada com sucesso! ✔"
            variant="success"
            onClose={() => {
              setSuccess(false);
            }}
          />
        )}
      </Box>
    </>
  );
};

export default GuideList;
