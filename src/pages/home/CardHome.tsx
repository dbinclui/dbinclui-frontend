import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export interface CardHomeProps {
  title: string;
  path: string;
  key?: number;
}

export const CardHome: React.FC<CardHomeProps> = ({
  title,
  path,
  key,
}): JSX.Element => (
  <Grid item sm={12} xs={12} lg={3} component={Link} to={path}>
    <Grid flexDirection={'column'} alignItems={'center'} container>
      <Grid item>
        <Typography
          sx={{
            textTransform: 'uppercase',
            color: 'white',
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
          tabIndex={key}
          aria-label={title}
        ></Paper>
      </Grid>
    </Grid>
  </Grid>
);

export default CardHome;
