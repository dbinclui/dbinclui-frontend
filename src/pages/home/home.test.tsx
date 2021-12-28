import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './index';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => {
  const useNavigate = jest.fn();
  return {
    useNavigate,
  };
});

describe('Componente do Home', () => {
  test('deve mostrar um Home', () => {
    render(<Home />);

    const pageBoxOne = 'TRADUTOR DE LIBRAS';
    const pageBoxTwo = 'GUIA DE ACESSIBILIDADE';
    const pageBoxThree = 'GUIA DA CULTURA SURDA';

    const pageBoxCardOne = screen.getByText(pageBoxOne);
    const pageBoxCardTwo = screen.getByText(pageBoxTwo);
    const pageBoxCardThree = screen.getByText(pageBoxThree);

    expect(pageBoxCardOne.textContent).toBe(pageBoxOne);
    expect(pageBoxCardTwo.textContent).toBe(pageBoxTwo);
    expect(pageBoxCardThree.textContent).toBe(pageBoxThree);
    expect(useNavigate).toBeCalled();
  });
});
