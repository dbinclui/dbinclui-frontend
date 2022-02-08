import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import GuideList from './index';
import '@testing-library/jest-dom/extend-expect';
import 'react-router-dom';
import { GuideInterface, getGuides, deleteGuide } from '@services/guides';
import { AxiosResponse } from 'axios';
import userEvent from '@testing-library/user-event';

jest.mock('@services/guides');

const getGuidesMock = getGuides as jest.MockedFunction<typeof getGuides>;
const deleteGuideMock = deleteGuide as jest.MockedFunction<typeof deleteGuide>;

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

  test('Deve listar os Guias', async () => {
    getGuidesMock.mockImplementation(
      async () =>
        ({
          data: { data: [] },
        } as unknown as Promise<AxiosResponse<{ data: GuideInterface[] }>>),
    );

    render(<GuideList />);

    expect(getGuidesMock).toBeCalledTimes(2);
  });
});
