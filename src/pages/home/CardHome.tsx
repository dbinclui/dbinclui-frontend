import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { NavigateFunction } from 'react-router-dom';

export interface CardHomeProps {
  navigate: NavigateFunction;
  title: string;
  path: string;
}

export const CardHome: React.FC<CardHomeProps> = ({
  navigate,
  title,
  path,
}): JSX.Element => (
  <Grid item sm={12} xs={12} lg={3}>
    <Grid flexDirection={'column'} alignItems={'center'} container>
      <Grid item>
        <Typography
          sx={{
            textTransform: 'uppercase',
          }}
          variant="h5"
          mb={'25px'}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Paper
          variant="outlined"
          sx={{
            width: '14.25rem',
            height: '12rem',
            borderRadius: '1.25rem',
            mb: 2,
          }}
          tabIndex={2}
          aria-label="TRADUTOR DE LIBRAS"
          onClick={() => navigate(path)}
        ></Paper>
      </Grid>
    </Grid>
  </Grid>
);

export default CardHome;
