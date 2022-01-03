import { Button } from '@mui/material';
import React, { useState } from 'react';

export interface CounterProps {
  handleCounter?: (counter: number) => void;
}

export const Counter: React.FC<CounterProps> = ({
  handleCounter,
}): JSX.Element => {
  const [counter, setCounter] = useState(1);

  const remove = () => {
    const removeCounter = counter === 1 ? counter : counter - 1;
    setCounter(removeCounter);
    if (handleCounter) {
      handleCounter(removeCounter);
    }
  };

  const add = () => {
    const addCounter = counter === 10 ? counter : counter + 1;
    setCounter(addCounter);
    if (handleCounter) {
      handleCounter(addCounter);
    }
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{
          top: '30px',
          left: '8px',
          width: '30%',
          borderRadius: '20px',
          fontSize: '12px',
        }}
        onClick={add}
      >
        A+
      </Button>
      <Button
        variant="contained"
        sx={{
          top: '30px',
          left: '15px',
          width: '30%',
          borderRadius: '20px',
          fontSize: '12px',
        }}
        onClick={remove}
      >
        A-
      </Button>
    </>
  );
};

export default Counter;
