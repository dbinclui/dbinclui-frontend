import React from 'react';
import Error404 from '../../components/svgs/404';
import './styles.css';
import { Typography } from '@mui/material';

export interface ErrorProps {}
export const Error: React.FC<ErrorProps> = (): JSX.Element => {
  return (
    <>
      <div className="page-erros">
        <div className="icon-erro">
          <Error404 />
        </div>
        <div>
          <Typography variant="h3" className="box-p">
            Desculpe, a página não foi encontrada!
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Error;
