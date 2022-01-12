import React from 'react';
import { Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import AccessibilityTypography from '@components/AccessibilityTypography';

export interface CardHomeProps {
  title: string;
  path: string;
  tabIndex?: number;
}

export const CardHome: React.FC<CardHomeProps> = ({
  title,
  path,
  tabIndex,
}): JSX.Element => (
  <Grid
    item
    sm={12}
    xs={12}
    lg={3}
    component={Link}
    to={path}
    data-testid={'cardHome'}
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    <Grid flexDirection={'column'} alignItems={'center'} container>
      <Grid item>
        <AccessibilityTypography
          sx={{
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
          variant="h5"
          mb={'25px'}
        >
          {title}
        </AccessibilityTypography>
      </Grid>
      <Grid item>
        <Paper
          sx={{
            backgroundColor: 'secondary.main',
            width: '14.25rem',
            height: '12rem',
            borderRadius: '1.25rem',
            mb: 2,
            mt: '30px',
          }}
          tabIndex={tabIndex}
          aria-label={title}
          role="button"
          className="card-home"
        ></Paper>
      </Grid>
    </Grid>
  </Grid>
);

export default CardHome;
