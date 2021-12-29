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