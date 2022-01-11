import React from 'react';
import { Grid, Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { UseCounterHook } from '@hooks/Counter';

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
          <Button
            variant="contained"
            onClick={() => remove(counter)}
            sx={{
              margin: '0 0 0 -34px',
              borderRadius: '20px',
              backgroundColor: 'primary',
              fontSize: '15px',
            }}
          >
            A
            <RemoveIcon fontSize="inherit" />
          </Button>
        </Grid>

        <Grid item lg={3}>
          <Button
            variant="contained"
            onClick={() => add(counter)}
            sx={{
              margin: '0 0 0 10px',
              borderRadius: '20px',
              backgroundColor: 'primary',
              fontSize: '15px',
            }}
          >
            A
            <AddIcon fontSize="inherit" />
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Counter;
