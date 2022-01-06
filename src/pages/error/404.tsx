import React from 'react';
import Error404 from '../../components/svgs/404';
import './styles.css';
import AccessibilityTypography from '../../components/AccessibilityTypography';

export interface ErrorProps {}
export const Error: React.FC<ErrorProps> = (): JSX.Element => {
  return (
    <>
      <div className="page-error">
        <div className="icon-error">
          <Error404 />
          <div />
          <AccessibilityTypography
            tabIndex={0}
            variant="h2"
            className="box-p"
            aria-label="DESCULPE, A PÁGINA NÃO FOI ENCONTRADA"
          >
            Desculpe, a página não foi encontrada!
          </AccessibilityTypography>
        </div>
      </div>
    </>
  );
};

export default Error;
