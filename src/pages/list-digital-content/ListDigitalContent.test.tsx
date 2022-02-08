import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import ListDigitalContent from './index';

jest.mock('react-router-dom', () => {
  const useNavigate = jest.fn();
  return {
    useNavigate,
  };
});
describe('Página de listagem de conteúdo digital', () => {
  beforeEach(() => {});

  test('Deve ter o título da página', () => {
    render(<ListDigitalContent />);

    const textLabelTitle = 'LISTAGEM DE CONTEÚDO DIGITAL';
    const LabelTitle = screen.getByText(textLabelTitle);
    expect(LabelTitle).toBeVisible();
  });
});
