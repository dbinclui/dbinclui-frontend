import {
  getGuides,
  postGuides,
  getGuideWithCategoriesAndContent,
  putGuides,
  getGuideById,
} from '@services/guides';
import api from '@services/api';

jest.mock('@services/api');

const apiMock = api as jest.Mocked<typeof api>;

describe('Testando o serviço "getGuides"', () => {
  beforeEach(() => {
    apiMock.get.mockClear();
  });

  it(`${getGuides.name}: Devolvendo conteúdo "getGuides"`, async () => {
    apiMock.get.mockResolvedValue([]);
    const result = await getGuides();
    expect(apiMock.get).toBeCalledTimes(1);
    expect(result).toStrictEqual([]);
  });

  it(`${getGuides.name}: Tratamento de erro quando o serviço não estiver disponível`, async () => {
    const errorMessage = 'Serviço não disponível';
    const throwError = new Error(errorMessage);
    apiMock.get.mockImplementation(() => {
      throw throwError;
    });
    try {
      await getGuides();
    } catch {}
    expect(apiMock.get).toBeCalledTimes(1);
    expect(apiMock.get).toThrow(Error);
    expect(apiMock.get).toThrow(errorMessage);
  });
});

describe('Testando o serviço "postGuides"', () => {
  beforeEach(() => {
    apiMock.post.mockClear();
  });

  it(`Quando ${postGuides.name} é chamado, o resultado deve retornar true
  `, async () => {
    const title = 'Test title';
    const content = 'Teste content';
    const pathExpect = '/guides/';
    const resultExpect = true;
    apiMock.post.mockResolvedValue(resultExpect);
    const result = await postGuides({ title, content });
    expect(result).toBe(resultExpect);
    expect(apiMock.post).toBeCalledWith(pathExpect, { title, content });
  });

  it(`${postGuides.name}: Tratamento de erro quando o serviço não estiver disponível`, async () => {
    const title = 'Test title';
    const content = 'Teste content';
    const errorMessage = 'Serviço não disponível';
    const throwError = new Error(errorMessage);
    apiMock.post.mockImplementation(() => {
      throw throwError;
    });
    try {
      await postGuides({ title, content });
    } catch {}
    expect(apiMock.post).toBeCalledTimes(1);
    expect(apiMock.post).toThrow(Error);
    expect(apiMock.post).toThrow(errorMessage);
  });
});

describe('Testando o serviço "putGuides"', () => {
  beforeEach(() => {
    apiMock.put.mockClear();
  });

  it(`Quando ${putGuides.name} é chamado, o resultado deve retornar true
  `, async () => {
    const id = ':id';
    const title = 'Test title';
    const content = 'Teste content';
    const pathExpect = '/guides/:id';
    const resultExpect = true;
    apiMock.put.mockResolvedValue(resultExpect);
    const result = await putGuides(id, { title, content });
    expect(result).toBe(resultExpect);
    expect(apiMock.put).toBeCalledWith(pathExpect, { title, content });
  });

  it(`${putGuides.name}: Tratamento de erro quando o serviço não estiver disponível`, async () => {
    const id = '1';
    const title = 'Test title';
    const content = 'Teste content';
    const errorMessage = 'Serviço não disponível';
    const throwError = new Error(errorMessage);
    apiMock.put.mockImplementation(() => {
      throw throwError;
    });
    try {
      await putGuides(id, { title, content });
    } catch {}
    expect(apiMock.put).toBeCalledTimes(1);
    expect(apiMock.put).toThrow(Error);
    expect(apiMock.put).toThrow(errorMessage);
  });
});

describe('Testando o serviço "getGuideWithCategoriesAndContent"', () => {
  beforeEach(() => {
    apiMock.get.mockClear();
  });

  it(`${getGuideWithCategoriesAndContent.name}: Devolvendo conteúdo "getGuideWithCategoriesAndContent"`, async () => {
    const id = '1';
    apiMock.get.mockResolvedValue([]);
    const result = await getGuideWithCategoriesAndContent(id);
    expect(apiMock.get).toBeCalledTimes(1);
    expect(result).toStrictEqual([]);
  });

  it(`${getGuideWithCategoriesAndContent.name}: Tratamento de erro quando o serviço não estiver disponível`, async () => {
    const id = '1';
    const errorMessage = 'Serviço não disponível';
    const throwError = new Error(errorMessage);
    apiMock.get.mockImplementation(() => {
      throw throwError;
    });
    try {
      await getGuideWithCategoriesAndContent(id);
    } catch {}
    expect(apiMock.get).toBeCalledTimes(1);
    expect(apiMock.get).toThrow(Error);
    expect(apiMock.get).toThrow(errorMessage);
  });
});

describe('Testando o serviço "getGuideById"', () => {
  beforeEach(() => {
    apiMock.get.mockClear();
  });

  it(`${getGuideById.name}: Devolvendo conteúdo getGuideById`, async () => {
    const id = '1';
    apiMock.get.mockResolvedValue([]);
    const result = await getGuideById(id);
    expect(apiMock.get).toBeCalledTimes(1);
    expect(result).toStrictEqual([]);
  });

  it(`${getGuideById.name}: Tratamento de erro quando o serviço não estiver disponível`, async () => {
    const id = '1';
    const errorMessage = 'Serviço não disponível';
    const throwError = new Error(errorMessage);
    apiMock.get.mockImplementation(() => {
      throw throwError;
    });
    try {
      await getGuideById(id);
    } catch {}
    expect(apiMock.get).toBeCalledTimes(1);
    expect(apiMock.get).toThrow(Error);
    expect(apiMock.get).toThrow(errorMessage);
  });
});
