import React from 'react';
import Error404 from '@components/svgs/404';
import './styles.css';
import AccessibilityTypography from '@components/AccessibilityTypography';

export interface ErrorProps {}
export const Error: React.FC<ErrorProps> = (): JSX.Element => {
  return (
    <>
      <div className="page-erros">
        <div className="icon-erro">
          <Error404 />
        </div>
        <div>
          <AccessibilityTypography variant="h2" className="box-p">
            Desculpe, a página não foi encontrada!
          </AccessibilityTypography>
        </div>
      </div>
    </>
  );
};

export default Error;
