import validateInput from './validator';
describe('Página de cadastro de nova guia', () => {
  test('Deve validar corretamente os dados sem erros', async () => {
    const data = {
      title: 'Guia de Acessibilidade',
      description: 'Essa é a guia de acessibilidade',
    };

    return expect(validateInput(data)).resolves.toBe(true);
  });

  test('Deve apontar erro no tamanho do título', async () => {
    const data = {
      title: 'Guia de Acessibilidade muito muito grande',
      description: 'Essa é a guia de acessibilidade',
    };

    return expect(validateInput(data)).resolves.toBe(false);
  });

  test('Deve apontar erro na ausência de algum dos campos', async () => {
    const data = {
      title: 'Guia de Acessibilidade',
      description: '',
    };

    return expect(validateInput(data)).resolves.toBe(false);
  });
});
