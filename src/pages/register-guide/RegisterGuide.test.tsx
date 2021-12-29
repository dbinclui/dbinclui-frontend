import { ValidationError } from 'yup';
import validateInput from './validator';
describe('Página de cadastro de nova guia', () => {
  test('Deve validar corretamente os dados sem erros', async () => {
    const data = {
      title: 'Guia de Acessibilidade',
      description: 'Essa é a guia de acessibilidade',
    };

    return expect(validateInput(data)).resolves.toEqual(data);
  });

  test('Deve apontar erro no tamanho do título', async () => {
    const data = {
      title: 'Guia de Acessibilidade muito muito grande',
      description: 'Essa é a guia de acessibilidade',
    };

    const result = await validateInput(data);
    expect((result as ValidationError).errors).toContain(
      'O título é muito grande',
    );
  });

  test('Deve apontar erro na ausência da descrição', async () => {
    const data = {
      title: 'Guia de Acessibilidade',
      description: '',
    };

    const result = await validateInput(data);
    expect((result as ValidationError).errors).toContain(
      'A descrição é obrigatória',
    );
  });

  test('Deve apontar erro na ausência de título', async () => {
    const data = {
      title: '',
      description: 'Essa é a guia de acessibilidade',
    };

    const result = await validateInput(data);
    expect((result as ValidationError).errors).toContain(
      'O título é obrigatório',
    );
  });
});
