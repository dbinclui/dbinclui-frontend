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
      <button 
        onClick={remove}
        aria-label="diminuir letra"
        >-</button>
      {counter}
      <button 
        onClick={add}
        aria-label="aumentar letra"
        >+</button>
    </>
  );
};

export default Counter;
