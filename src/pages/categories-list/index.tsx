import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import CardGuidesResponse, { getGuides } from '@services/guides';

export interface CategoriesListProps {}

export const CategoriesList: React.FC<
  CategoriesListProps
> = (): JSX.Element => {
  const [successGetGuides, setSuccessGetGuides] = useState(false);
  const [errorGetGuides, setErrorGetGuides] = useState(false);
  const [errorMessageGetGuides, setErrorMessageGetGuides] = useState('');
  const [guides, setGuides] = useState<CardGuidesResponse[]>([]);

  async function getGuidesService() {
    try {
      const response = await getGuides();
      setGuides(response.data.data);
      setSuccessGetGuides(true);
    } catch {
      setErrorMessageGetGuides('Não foram encontradas as guias');
      setErrorGetGuides(true);
    }
  }

  useEffect(() => {
    getGuidesService();
  }, []);

  const columns: GridColDef[] = [
    {
      field: 'firstName',
      headerName: 'Guia',
      width: 500,
      editable: false,

      valueGetter: (getGuidesService) => {
        return guides.map((guide) => {
          return guide.title;
        });
      },
    },
    {
      field: 'lastName',
      headerName: 'Categoria',
      width: 150,
      editable: false,
    },
    {
      field: 'age',
      headerName: 'Descrição',
      type: 'number',
      width: 110,
      editable: false,
    },
    {
      field: 'fullName',
      headerName: 'Ação',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', age: 35 },
    { id: 2, lastName: 'Lannister', age: 42 },
    { id: 3, lastName: 'Lannister', age: 45 },
  ];

  return (
    <>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </>
  );
};

export default CategoriesList;
