import React from 'react';
import { render, screen } from '@testing-library/react';
import GuidePage from './index';
import { getGuideWithCategoriesAndContent } from '@services/guides';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

jest.mock('@services/guides');

jest.mock('react-router-dom', () => {
  const osDeVerdade = jest.requireActual('react-router-dom');
  const useLocation = jest.fn().mockReturnValue({
    state: {
      id: 'MockIdGuide',
    },
  });

  return {
    ...osDeVerdade,
    useLocation,
  };
});

const getGuideWithCategoriesAndContentMock =
  getGuideWithCategoriesAndContent as jest.MockedFunction<
    typeof getGuideWithCategoriesAndContent
  >;

describe('Componente do Home', () => {
  const mockGuideWithCategoriesAndContent = {
    _id: 'MockIdGuide',
    title: 'MockTitleGuide',
    content: 'MockContentGuide',
    categories: [
      {
        title: 'MockTitleCategory',
        shortDescription: 'MockDescriptionCategory',
        guide: {} as any,
        digitalContents: [
          {
            guide: {} as any,
            category: {} as any,
            title: 'MockTitleContent',
            shortDescription: 'MockDescriptionContent',
            filePaths: ['arquivo/img.png'],
          },
        ],
      },
    ],
    digitalContents: [
      {
        guide: {} as any,
        category: {} as any,
        title: 'MockTitleContentNC',
        shortDescription: 'MockDescriptionContentNC',
        filePaths: ['arquivo/img.png'],
      },
    ],
  };

  beforeEach(() => {
    getGuideWithCategoriesAndContentMock.mockResolvedValue({
      data: { data: mockGuideWithCategoriesAndContent },
    } as any);
  });

  test(`Deve renderizar ${GuidePage.name} com o guia passado`, async () => {
    render(<GuidePage />);

    const titleGuide = await screen.findByText(
      mockGuideWithCategoriesAndContent.title,
    );
    const contentGuide = await screen.findByText(
      mockGuideWithCategoriesAndContent.content,
    );

    expect(titleGuide).toBeVisible();
    expect(contentGuide).toBeVisible();

    const guideMedia = await screen.findByLabelText(
      mockGuideWithCategoriesAndContent.digitalContents[0].shortDescription,
    );

    expect(guideMedia).toBeVisible();
    expect(guideMedia).toHaveAttribute(
      'src',
      mockGuideWithCategoriesAndContent.digitalContents[0].filePaths[0],
    );

    const titleCategory = await screen.findByText(
      mockGuideWithCategoriesAndContent.categories[0].title,
    );
    const descriptionCategory = await screen.findByText(
      mockGuideWithCategoriesAndContent.categories[0].shortDescription,
    );

    expect(titleCategory).toBeVisible();
    expect(descriptionCategory).toBeVisible();

    const categoryMedia = await screen.findByLabelText(
      mockGuideWithCategoriesAndContent.categories[0].digitalContents[0]
        .shortDescription,
    );

    expect(categoryMedia).toBeVisible();
    expect(categoryMedia).toHaveAttribute(
      'src',
      mockGuideWithCategoriesAndContent.categories[0].digitalContents[0]
        .filePaths[0],
    );

    const index = await screen.findByText('Categorias:');
    const indexTitle = await screen.findByTestId(`IndexTitleTest`);

    expect(index).toBeVisible();
    expect(indexTitle).toBeVisible();
  });

  test(`Deve lidar com o erro ao buscar o guia ao renderizar ${GuidePage.name} com o guia passado`, async () => {
    getGuideWithCategoriesAndContentMock.mockRejectedValue(true);

    render(<GuidePage />);

    const failMessage = await screen.findByText('Erro na busca do guia!');

    expect(failMessage).toBeVisible();
  });

  test(`Deve ir para a categoria ao clica no índice`, async () => {
    Element.prototype.scrollIntoView = jest.fn();
    render(<GuidePage />);

    const indexTitle = await screen.findByTestId(`IndexTitleTest`);
    userEvent.click(indexTitle);

    expect(Element.prototype.scrollIntoView).toBeCalled();
  });
});
