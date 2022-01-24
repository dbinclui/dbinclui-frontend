import React from 'react';
import { Typography } from '@mui/material';
import styles from './styles';

export interface GuideListProps {}

export const GuideList: React.FC<GuideListProps> = (): JSX.Element => {
  return (
    <>
      <Typography variant="h2" sx={styles.listTitle}>
        LISTAGEM DE GUIAS
      </Typography>
    </>
  );
};

export default GuideList;
