import React from 'react';
import { RegisterDigitalContent } from '@pages/register-digital-content';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/dom';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  const useHref = jest.fn();
  return {
    useHref,
    useNavigate: () => mockedNavigate,
  };
});

describe('Página de cadastro de categorias', () => {
  test('Deve mostrar um formulário', () => {
    render(<RegisterDigitalContent />);

    const textLabelGuide = 'Guia:';
    const textLabelCategory = 'Categoria:';
    const textLabelTitle = 'Título:';
    const textLabelDescription = 'Descrição:';

    const labelGuide = screen.getByText(textLabelGuide);
    const labelCategory = screen.getByText(textLabelCategory);
    const labelTitle = screen.getByText(textLabelTitle);
    const labelDescription = screen.getByText(textLabelDescription);

    const title = screen.getByLabelText(textLabelTitle, {
      selector: 'input',
    });
    const textArea = screen.getByLabelText(textLabelDescription, {
      selector: 'textarea',
    });

    expect(labelDescription).toBeVisible();
    expect(labelCategory).toBeVisible();
    expect(labelGuide).toBeVisible();
    expect(labelTitle).toBeVisible();
    expect(title).toBeVisible();
    expect(textArea).toBeVisible();
  });

  test('Deve verificar se o ID da label corresponde ao aria-labelledby', () => {
    render(<RegisterDigitalContent />);

    const textLabelGuide = 'guideLabel';
    const textLabelCategory = 'categoryLabel';
    const textLabelTitle = 'titleLabel';
    const textLabelDescription = 'descriptionLabel';

    const idGuide = screen.getByTestId('guideTestId');
    const idCategory = screen.getByTestId('categoryTestId');
    const idTitle = screen.getByTestId('titleTestId');
    const idDescription = screen.getByTestId('descriptionTestId');

    expect(idGuide).toHaveAttribute('aria-labelledby', textLabelGuide);
    expect(idCategory).toHaveAttribute('aria-labelledby', textLabelCategory);
    expect(idTitle).toHaveAttribute('aria-labelledby', textLabelTitle);
    expect(idDescription).toHaveAttribute(
      'aria-labelledby',
      textLabelDescription,
    );
  });

  test('Deve verificar se o formulário foi enviado', () => {
    render(<RegisterDigitalContent />);

    const button = screen.getByTestId('submit');
    fireEvent.click(button);
  });

  test('Deve verificar se o arquivo está sendo enviado', async () => {
    const fileName = 'teste.pdf';

    render(<RegisterDigitalContent />);

    const noFile = screen.getByText('Nenhum arquivo selecionado');
    expect(noFile).toBeVisible();

    const input = screen.getByTestId('inputFile');
    fireEvent.change(input, { target: { files: [{ name: fileName }] } });

    const elementFileName = await screen.findByText(fileName);
    expect(elementFileName).toBeVisible();
    expect(noFile).not.toBeVisible();
  });
});

test('Botão Voltar deve redirecionar para admin', () => {
  render(<RegisterDigitalContent />);
  const button = screen.getByTestId('back');

  fireEvent.click(button);

  expect(mockedNavigate).toBeCalled();
  expect(mockedNavigate).toBeCalledWith('admin');
});
