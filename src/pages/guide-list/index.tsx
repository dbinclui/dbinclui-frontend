import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Box, CircularProgress, Grid } from '@mui/material';
import AccessibilityTypography from '@components/AccessibilityTypography';
import { GuideInterface, getGuides, deleteGuide } from '@services/guides';
import { CreateSharp } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './styles';
//import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

export interface GuideListPropsInterfaceProps {}

export const GuideList: React.FC<
  GuideListPropsInterfaceProps
> = (): JSX.Element => {
  const [guideList, setGuideList] = useState<GuideInterface[]>([]);
  const [errorGetList, setErrorGetList] = useState(false);
  const [loading, setLoading] = useState(true);

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

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const [cards, setCards] = useState<GuideInterface[]>([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function deleteGuideService() {
    try {
      const { data } = await deleteGuide();
      setCards(data.data);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    deleteGuideService();
  }, []);

  useEffect(() => {
    getGuideListService();
  }, []);

  //function AlertDialogSlide() {

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    /**
     * buscar dentro da categoria o guia pelo id
     * se tiver retorno o valor deve ser true.
     *
     *
     * * buscar dentro do conteúdo digital o guia pelo id
     * se tiver retorno o valor deve ser true.
     *
     * Se for true retorna mensagem que não pode ser excluída.
     *
     * Se for false retorna mensagem de confirmação.
     *
     * Se a confirmação for sim vai executar a função excluir.
     *
     * Se for não vai fechar a caixa de diálogo.
     *
     *
     * */
    deleteGuideService();

    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
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
          onClick={handleClickOpen}
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
      delete: '/admin/excluir-guia/' + card._id,
    };
  });

  return (
    <>
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
              {/*  <Button variant="outlined" onClick={handleClickOpen}>
                Open alert dialog
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {'Mensagem de erro'}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Não é possível excluir esse Guia porque existem categorias
                    ou conteúdo digital associado.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} autoFocus>
                    FECHAR
                  </Button>
                </DialogActions>
              </Dialog> */}

              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {'Mensagem de confirmação'}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Deseja realmente excluir esse Guia?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>SIM</Button>
                  <Button onClick={handleClose} autoFocus>
                    NÃO
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default GuideList;
