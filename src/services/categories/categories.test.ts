import {
  getCategories,
  getCategoriesByGuide,
  postCategories,
} from '@services/categories';

import api from '@services/api';

jest.mock('@services/api');
jest.mock('@services/guides');

const apiMock = api as jest.Mocked<typeof api>;
describe('Testando o serviço "getCategories"', () => {
  beforeEach(() => {
    apiMock.get.mockClear();
  });

  it(`${getCategories.name}: Devolvendo conteúdo "getCategories"`, async () => {
    apiMock.get.mockResolvedValue([]);
    const result = await getCategories();
    expect(apiMock.get).toBeCalledTimes(1);
    expect(result).toStrictEqual([]);
  });

  it(`${getCategories.name}: Tratamento de erro quando o serviço não estiver disponível`, async () => {
    const errorMessage = 'Serviço não disponível';
    const throwError = new Error(errorMessage);
    apiMock.get.mockImplementation(() => {
      throw throwError;
    });
    try {
      await getCategories();
    } catch {}
    expect(apiMock.get).toBeCalledTimes(1);
    expect(apiMock.get).toThrow(Error);
    expect(apiMock.get).toThrow(errorMessage);
  });
});

describe('Testando o serviço "getCategoriesByGuide', () => {
  beforeEach(() => {
    apiMock.get.mockClear();
  });

  it(`${getCategoriesByGuide.name}: Devolvendo conteúdo getCategoriesByGuide`, async () => {
    const id = '1';
    apiMock.get.mockResolvedValue([]);
    const Expect = `/categories/guide/${id}`;
    const result = await getCategoriesByGuide(id);

    expect(result).toStrictEqual([]);
    expect(apiMock.get).toBeCalledWith(Expect);
  });

  it(`${getCategoriesByGuide.name}: Tratamento de erro quando o serviço não estiver disponível`, async () => {
    const id = '1';
    const errorMessage = 'Serviço não disponível';
    const throwError = new Error(errorMessage);
    apiMock.get.mockImplementation(() => {
      throw throwError;
    });
    try {
      await getCategoriesByGuide(id);
    } catch {}
    expect(apiMock.get).toBeCalledTimes(1);
    expect(apiMock.get).toThrow(Error);
    expect(apiMock.get).toThrow(errorMessage);
  });
});

describe('Testando o serviço "postCategories"', () => {
  beforeEach(() => {
    apiMock.post.mockClear();
  });

  it(`Quando ${postCategories.name} é chamado, o resultado deve retornar true
    `, async () => {
    const postCategoryBody = {
      title: 'title-teste',
      shortDescription: 'shortDescription-teste',
      guide: '1',
    };
    const pathExpect = '/categories/';
    const resultExpect = true;
    apiMock.post.mockResolvedValue(resultExpect);
    const result = await postCategories(postCategoryBody);
    expect(result).toBe(resultExpect);
    expect(apiMock.post).toBeCalledWith(pathExpect, postCategoryBody);
  });

  it(`${postCategories.name}: Tratamento de erro quando o serviço não estiver disponível`, async () => {
    const postCategoryBody = {
      title: 'title-teste',
      shortDescription: 'shortDescription-teste',
      guide: '1',
    };
    const errorMessage = 'Serviço não disponível';
    const throwError = new Error(errorMessage);
    apiMock.post.mockImplementation(() => {
      throw throwError;
    });
    try {
      await postCategories(postCategoryBody);
    } catch {}
    expect(apiMock.post).toBeCalledTimes(1);
    expect(apiMock.post).toThrow(Error);
    expect(apiMock.post).toThrow(errorMessage);
  });
});
