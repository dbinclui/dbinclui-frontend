import React from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { UseCounterHook } from '../../hooks/Counter';

export interface CounterProps extends UseCounterHook {}

export const Counter: React.FC<CounterProps> = ({
  counter,
  remove,
  add,
}): JSX.Element => {
  return (
    <>
      <Grid container justifyContent={'center'} alignItems={'center'}>
        <Grid item lg={3}>
          <IconButton
            size="large"
            color="primary"
            onClick={() => remove(counter)}
          >
            <RemoveIcon />
          </IconButton>
        </Grid>
        <Grid item p={2} lg={3} justifyContent={'center'} alignItems={'center'}>
          <Typography variant="body1" color="primary">
            {counter}
          </Typography>
        </Grid>
        <Grid item lg={3}>
          <IconButton size="large" color="primary" onClick={() => add(counter)}>
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Counter;
