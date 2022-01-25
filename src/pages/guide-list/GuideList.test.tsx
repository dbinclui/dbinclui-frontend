import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GuideList from './index';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-router-dom', () => {
  const useNavigate = jest.fn();
  return {
    useNavigate,
  };
});

describe('Teste do componente', () => {
  test('Deve renderizar a tabela com as guias', () => {
    render(<GuideList />);

    const table = screen.getByRole('grid');
    expect(table).toBeInTheDocument();
  });
});