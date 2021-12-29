import React from 'react';
import { useNavigate } from 'react-router-dom';
export interface AdminProps {}

export const Admin: React.FC<AdminProps> = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate('cadastrar-guia');
        }}
      >
        Cadastrar Guia
      </button>
      Teste pagina Admin
    </>
  );
};

export default Admin;
