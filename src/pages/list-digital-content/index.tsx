import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button, CircularProgress, Grid } from '@mui/material';
import AccessibilityTypography from '@components/AccessibilityTypography';
import styles from './styles';
import {
  deleteDigitalContent,
  DigitalContentInterface,
  getDigitalContent,
} from '@services/digitalContent';
import { CreateSharp } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import DialogBoxConfirmation from '@components/DialogBox/DialogBoxConfirmation';
import Notification from '@components/Notification';

export interface DigitalContentInterfaceProps {}

export const ListDigitalContent: React.FC<
  DigitalContentInterfaceProps
> = (): JSX.Element => {
  const [digitalContents, setDigitalContents] = useState<
    DigitalContentInterface[]
  >([]);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const [confirmation, setConfirmation] = useState(false);
  const [id, setId] = useState('');

  async function getDigitalContentsService() {
    try {
      const { data } = await getDigitalContent();
      setDigitalContents(data.data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(value: boolean) {
    if (value) {
      try {
        await deleteDigitalContent(id);
        setSuccess(true);
      } catch (error: any) {
        setErrorMessage(error.response.data.message);
        setError(true);
      }
    }
  }

  useEffect(() => {
    getDigitalContentsService();
  }, [success]);

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

  const rowData = digitalContents.map((card) => {
    return {
      _id: card._id,
      guide:
        card.guide.title.length > 30
          ? card.guide.title.substring(0, 30) + '...'
          : card.guide.title,
      category:
        card.category?.title.length! > 30
          ? card.category?.title.substring(0, 30) + '...'
          : card.category?.title,
      shortDescription:
        card.shortDescription.length > 30
          ? card.shortDescription.substring(0, 30) + '...'
          : card.shortDescription,
      filePaths: card.filePaths[0].filePath,
      edit: '/admin/atualizar-conteudo-digital/' + card._id,
      delete: card._id,
    };
  });

  return (
    <>
      {confirmation && (
        <Box>
          <DialogBoxConfirmation
            title="Deseja excluir esse conteúdo digital?"
            confirmation={confirmation}
            setConfirmation={setConfirmation}
            onClose={handleDelete}
          />
        </Box>
      )}
      <AccessibilityTypography variant="h2" sx={styles.listTitle}>
        LISTAGEM DE CONTEÚDO DIGITAL
      </AccessibilityTypography>
      <Box>
        {loading ? (
          <Grid container justifyContent={'center'} marginTop={'20px'}>
            <CircularProgress color="secondary" />
          </Grid>
        ) : error ? (
          <Grid container justifyContent={'center'} marginTop={'30px'}>
            <AccessibilityTypography variant="h1" className="error">
              Desculpe, não foi possível carregar a lista de Conteúdo Digital!
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
            <Box sx={styles.buttonBox}>
              <Button
                data-testid="new"
                component={Link}
                to="/admin/cadastrar-conteudo-digital"
                sx={styles.button}
                variant="contained"
                type="submit"
                role="button"
                aria-label="BOTÃO NOVO"
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
                aria-label="BOTÃO VOLTAR"
                tabIndex={17}
              >
                Voltar
              </Button>
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
            message="Conteúdo digital deletado com sucesso! ✔"
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
export default ListDigitalContent;
