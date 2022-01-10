import React from 'react';
import Error404 from '../../components/svgs/404';
import './styles.css';
import AccessibilityTypography from '../../components/AccessibilityTypography';
import { Typography } from '@mui/material';

export interface ErrorProps {}
export const Error: React.FC<ErrorProps> = (): JSX.Element => {
  return (
    <>
      <div className="page-error">
        <div className="icon-error">
          <Error404 />
          <div />
          <Typography variant="h2">
            <AccessibilityTypography
              tabIndex={0}
              variant="h1"
              className="box-p"
              aria-label="DESCULPE, A PÁGINA NÃO FOI ENCONTRADA"
            >
              Desculpe, a página não foi encontrada!
            </AccessibilityTypography>
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Error;
