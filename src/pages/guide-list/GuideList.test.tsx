import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'react-router-dom';
import GuideList from './index';
import { GuideInterface, getGuides } from '@services/guides';
import { AxiosResponse } from 'axios';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';


jest.mock('@services/guides');

const getGuidesMock = getGuides as jest.MockedFunction<typeof getGuides>;

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  const useHref = jest.fn();
  return {
    useHref,
    useNavigate: () => mockedNavigate,
  };
});
describe('Teste da página de listagem de guias', () => {

  afterEach(() => {
      jest.clearAllMocks();
  });

  beforeEach(() => {
    getGuidesMock.mockClear();
  });
 
  test('Deve listar os Guias', async () => {
    getGuidesMock.mockImplementation(
      async () =>
        ({
          data: { data: [] },
        } as unknown as Promise<AxiosResponse<{ data: GuideInterface[] }>>),
    );

    act(() => {
      render(<GuideList />);
    });

    expect(getGuidesMock).toBeCalledTimes(1);
  });
  test('Deve ler o título da página', () => {
    render(<GuideList />);

    const title = screen.getByText('LISTAGEM DE GUIAS');
    expect(title).toBeInTheDocument();
  });
  
});

