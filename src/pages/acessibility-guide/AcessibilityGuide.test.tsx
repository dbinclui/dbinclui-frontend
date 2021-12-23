import React from 'react';
import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import AcessibilityGuide from '../../pages/acessibility-guide/index';
import { CardGuidesResponse, getGuides } from '../../services/guides';
import { AxiosResponse } from 'axios';

jest.mock('../../services/guides');

const getGuidesMock = getGuides as jest.MockedFunction<typeof getGuides>;

describe('Página do Guia de Acessibilidade', () => {
  beforeEach(() => {
    getGuidesMock.mockClear();
  });
  test('Deve mostrar o título da página do Guia de Acessibilidade', async () => {
    getGuidesMock.mockImplementation(
      async () =>
        ({
          data: { data: [] },
        } as unknown as Promise<AxiosResponse<{ data: CardGuidesResponse[] }>>),
    );

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      render(<AcessibilityGuide />);
    });

    expect(getGuidesMock).toBeCalledTimes(1);
    const pageTitleContent = 'Guia de Acessibilidade';
    const pageTitle = screen.getByText(pageTitleContent);
    expect(pageTitle.textContent).toBe(pageTitleContent);
  });

  test('Quando o component for renderizado deve ser apresentado o conteúdo', async () => {
    const cardMock = {
      title: 'teste',
      content: 'teste',
    };
    getGuidesMock.mockImplementation(
      async () =>
        ({
          data: { data: [cardMock, cardMock, cardMock, cardMock] },
        } as unknown as Promise<AxiosResponse<{ data: CardGuidesResponse[] }>>),
    );

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      render(<AcessibilityGuide />);
    });

    expect(getGuidesMock).toBeCalledTimes(1);
  });

  test('Quando houver algum erro no serviço deve ser apresentado uma mensagem de erro', async () => {
    getGuidesMock.mockRejectedValue(true);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      render(<AcessibilityGuide />);
    });
    expect(getGuidesMock).toBeCalledTimes(1);
    const errorMessage = 'Desculpe, ocorreu um erro ao carregar a página!';
    const erroMessageElement = screen.getByText(errorMessage);
    expect(erroMessageElement.textContent).toBe(errorMessage);
  });
});
