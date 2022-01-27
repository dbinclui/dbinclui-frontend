import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ImageCarroussel from '@components/ImageCarroussel';

describe('Componente de notificação', () => {
  // input data
  const mockDigitalContents = [
    {
      title: 'Conteúdo Digital 1',
      shortDescription: 'Descrição 1',
      filePaths: ['arquivo1/img.png', 'arquivo1/img.jpg'],
    },
    {
      title: 'Conteúdo Digital 2',
      shortDescription: 'Descrição 2',
      filePaths: ['arquivo2/img.png', 'arquivo2/img.jpeg'],
    },
  ];

  // parsed data
  const mockArrayOfContents = [
    {
      digitalContentIndex: 0,
      filePath: 'arquivo1/img.png',
    },
    {
      digitalContentIndex: 0,
      filePath: 'arquivo1/img.jpg',
    },
    {
      digitalContentIndex: 1,
      filePath: 'arquivo2/img.png',
    },
    {
      digitalContentIndex: 1,
      filePath: 'arquivo2/img.jpeg',
    },
  ];

  test('Deve renderizar um carrosel com as mídias dos conteúdos digitais', () => {
    render(
      <ImageCarroussel
        contents={mockDigitalContents}
        width="10rem"
        height="10rem"
      />,
    );

    const mediaTitle = screen.getByText(mockDigitalContents[0].title);
    const mediaDescription = screen.getByText(
      mockDigitalContents[0].shortDescription,
    );
    const media = screen.getByAltText(mockDigitalContents[0].shortDescription);

    expect(mediaTitle).toBeVisible();

    expect(mediaDescription).toBeVisible();

    expect(media).toBeVisible();
    expect(media).toHaveAttribute('src', mockDigitalContents[0].filePaths[0]);
  });

  test('Deve mostrar a próxima mídia quando o botão "Próximo" for clicado', () => {
    render(
      <ImageCarroussel
        contents={mockDigitalContents}
        width="10rem"
        height="10rem"
      />,
    );

    const nextButton = screen.getByText('Próximo');
    userEvent.click(nextButton);

    const media = screen.getByAltText(mockDigitalContents[0].shortDescription);

    expect(media).toBeVisible();
    expect(media).toHaveAttribute('src', mockDigitalContents[0].filePaths[1]);
  });

  test('Deve mostrar a mídia anterior quando o botão "Anterior" for clicado', () => {
    render(
      <ImageCarroussel
        contents={mockDigitalContents}
        width="10rem"
        height="10rem"
      />,
    );

    // because to go back, you first need to go forwards
    const nextButton = screen.getByText('Próximo');
    userEvent.click(nextButton);

    const backButton = screen.getByText('Anterior');
    userEvent.click(backButton);

    const media = screen.getByAltText(mockDigitalContents[0].shortDescription);

    expect(media).toBeVisible();
    expect(media).toHaveAttribute('src', mockDigitalContents[0].filePaths[0]);
  });

  test('Deve desabilitar o botão "Anterior" quando a primeira mídia está sendo renderizada', () => {
    render(
      <ImageCarroussel
        contents={mockDigitalContents}
        width="10rem"
        height="10rem"
      />,
    );

    const backButton = screen.getByText('Anterior');

    expect(backButton).toBeDisabled();
  });

  test('Deve desabilitar o botão "Próximo" quando a última mídia está sendo renderizada', () => {
    render(
      <ImageCarroussel
        contents={mockDigitalContents}
        width="10rem"
        height="10rem"
      />,
    );

    const nextButton = screen.getByText('Próximo');

    // first go to the last media
    mockArrayOfContents.forEach(() => userEvent.click(nextButton));

    expect(nextButton).toBeDisabled();
  });

  test('Deve unir os conteúdos digitais em um único array', () => {
    render(
      <ImageCarroussel
        contents={mockDigitalContents}
        width="10rem"
        height="10rem"
      />,
    );

    const nextButton = screen.getByText('Próximo');

    for (const mediaContent of mockArrayOfContents) {
      const media = screen.getByAltText(
        mockDigitalContents[mediaContent.digitalContentIndex].shortDescription,
      );

      expect(media).toHaveAttribute('src', mediaContent.filePath);

      userEvent.click(nextButton);
    }
  });
});
