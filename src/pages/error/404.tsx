import * as React from 'react';
import Error404 from '../../components/svgs/404';
import Error404Contrast from '../../components/svgs/404Contrast';
import './styles.css';
import AccessibilityTypography from '../../components/AccessibilityTypography';
import { ColorsDefault } from '@styles/colors';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

export interface ErrorProps {}
export const Error: React.FC<ErrorProps> = (): JSX.Element => {
  const theme: any = useTheme();
  return (
    <>
      <div className="page-error">
        <div className="icon-error">
          <Box sx={{ mt: '-100px' }}>
            {theme.palette.background.default === ColorsDefault.PRIMARY ? (
              <Error404 />
            ) : (
              <Error404Contrast />
            )}
          </Box>

          <div />
          <Typography sx={{ mt: '30px' }}>
            <AccessibilityTypography
              tabIndex={0}
              className="box-p"
              aria-label="DESCULPE, A PÁGINA NÃO FOI ENCONTRADA"
              sx={{ fontSize: '30px' }}
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
