import React from 'react';
import { Counter } from '../Counter';

export interface MenuAcessibilityProps {}

export const MenuAcessibility: React.FC<
  MenuAcessibilityProps
> = (): JSX.Element => {
  return (
    <div style={{ padding: '20px' }}>
      <Counter
      //handleAdd={(counter) => {
      //resizeFont(counter)}
      // }
      />
      <div>
        <button>Trocar tema</button>
      </div>
    </div>
  );
};

export default MenuAcessibility;
