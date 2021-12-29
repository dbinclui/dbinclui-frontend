<<<<<<< HEAD
import React, { useState } from "react";

export interface CounterProps {
    handleAdd?: (counter: number) => void;
    handleRemove?: (counter: number, action: 'add' | 'remove') => void;
}

export const Counter: React.FC<CounterProps> = ({
    handleAdd,
    handleRemove,
}): JSX.Element => {
    const [counter, setCounter] = useState(0);

    const remove = () => {
        const removeCounter = counter === 0 ? counter : counter - 1;
        setCounter(removeCounter)
        if(handleRemove){
            handleRemove(removeCounter);
        }
    };

    const add = () => {
        const addCounter = counter === 10 ? counter : counter + 1;
        setCounter(addCounter)
        if(handleAdd){
            handleAdd(addCounter);
        }
    };

    return (
       <>
            
            <button onClick={remove}>-</button>
            {counter}
           
            <button onClick={add}>+</button>
       </>
   );
};
=======
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
      <button onClick={remove}>-</button>
      {counter}
      <button onClick={add}>+</button>
    </>
  );
};

export default Counter;
>>>>>>> 093c8a1f45a0d5769389a70a79d9421da0898eea
