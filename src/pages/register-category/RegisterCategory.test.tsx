import React from 'react';
import { RegisterCategory } from '@pages/register-category';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/dom';

describe('Página de cadastro de categorias', () => {
  test('Deve mostrar um formulário', () => {
    render(<RegisterCategory />);

    const textLabelGuide = 'Guia:';
    const textLabelCategory = 'Categoria:';
    const textLabelDescription = 'Descrição:';

    const labelGuide = screen.getByText(textLabelGuide);
    const labelCategory = screen.getByText(textLabelCategory);
    const labelDescription = screen.getByText(textLabelDescription);

    const input = screen.getByLabelText(textLabelCategory, {
      selector: 'input',
    });
    const textArea = screen.getByLabelText(textLabelDescription, {
      selector: 'textarea',
    });

    expect(labelDescription).toBeVisible();
    expect(labelCategory).toBeVisible();
    expect(labelGuide).toBeVisible();
    expect(input).toBeVisible();
    expect(textArea).toBeVisible();
  });

  test('Deve verificar se o ID da label corresponde ao aria-labelledby', () => {
    render(<RegisterCategory />);

    const textLabelGuide = 'guideLabel';
    const textoLabelCategory = 'categoryLabel';
    const textoLabelDescription = 'descriptionLabel';

    const idGuide = screen.getByTestId('guideTestId');
    const idCategory = screen.getByTestId('categoryTestId');
    const idDescription = screen.getByTestId('descriptionTestId');

    expect(idGuide).toHaveAttribute('aria-labelledby', textLabelGuide);
    expect(idCategory).toHaveAttribute('aria-labelledby', textoLabelCategory);
    expect(idDescription).toHaveAttribute(
      'aria-labelledby',
      textoLabelDescription,
    );
  });

  test('Deve verificar se o formulário foi enviado', () => {
    render(<RegisterCategory />);

    const button = screen.getByTestId('submit');
    fireEvent.click(button);
  });
});
