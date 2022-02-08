import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GuideList from './index';
import '@testing-library/jest-dom/extend-expect';
import 'react-router-dom';
import { GuideInterface, getGuides } from '@services/guides';
import { AxiosResponse } from 'axios';

jest.mock('@services/guides');

const getGuidesMock = getGuides as jest.MockedFunction<typeof getGuides>;

jest.mock('react-router-dom', () => {
  const useNavigate = jest.fn();
  return {
    useNavigate,
  };
});

describe('Teste da página de listagens de guias', () => {
  test('Deve ler o título da página', () => {
    render(<GuideList />);

    const title = screen.getByText('LISTAGEM DE GUIAS');
    expect(title).toBeInTheDocument();
  });

  beforeEach(() => {
    getGuidesMock.mockClear();
  });
});
