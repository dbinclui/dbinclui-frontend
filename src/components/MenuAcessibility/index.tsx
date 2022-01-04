import React from 'react';
import { StyleModeInterface } from '../../styles/theme';
import Counter from '../Counter';

export interface MenuAcessibilityProps {
  handleChangeCounter: (styleMode: StyleModeInterface) => void;
}

export const MenuAcessibility: React.FC<MenuAcessibilityProps> = ({
  handleChangeCounter,
}): JSX.Element => {
  return (
    <div
      style={{
        padding: '20px',
        position: 'fixed',
        top: '150px',
        left: 0,
        background: '#222',
      }}
    >
      <Counter
        handleCounter={(counter) => {
          handleChangeCounter({
            typography: {
              baseSize: counter,
            },
          });
        }}
      />
      <div>
        <button>Trocar tema</button>
      </div>
    </div>
  );
};

export default MenuAcessibility;
