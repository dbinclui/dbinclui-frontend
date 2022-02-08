import {
 getCategoriesByGuide,
 getDigitalContent,
 //postDigitalContent,
} from '@services/digitalContent';

import api from '@services/api';

jest.mock('@services/guides');
jest.mock('@services/api');

 
const apiMock = api as jest.Mocked<typeof api>;


describe('Testando o serviço "getGuides"', () => {
 beforeEach(() => {
   apiMock.get.mockClear();
 });

 it(`${getDigitalContent.name}: Devolvendo conteúdo "getDigitalContent"`, async () => {
   apiMock.get.mockResolvedValue([]);
   const result = await getDigitalContent();
   expect(apiMock.get).toBeCalledTimes(1);
   expect(result).toStrictEqual([]);
 });

 it(`${getDigitalContent.name}: Tratamento de erro quando o serviço não estiver disponível`, async () => {
  const errorMessage = 'Serviço não disponível';
  const throwError = new Error(errorMessage);
  apiMock.get.mockImplementation(() => {
    throw throwError;
  });
  try {
    await getDigitalContent();
  } catch {}
  expect(apiMock.get).toBeCalledTimes(1);
  expect(apiMock.get).toThrow(Error);
  expect(apiMock.get).toThrow(errorMessage);
});
});
/* 
describe('Testando o serviço "postGuides"', () => {
beforeEach(() => {
  apiMock.post.mockClear();
});
});

it(`Quando ${postDigitalContent.name} é chamado, o resultado deve retornar true
`, async () => {

  const guide:cardBody = '';
  const category= 'category';
  const title= 'titulo';
  const shortDescription= 'Descrição';
  const files= '';
  const pathExpect = '/digital-contents/';
  const resultExpect = true;
  apiMock.post.mockResolvedValue(resultExpect);
  const result = await postDigitalContent({ guide, title, shortDescription, files });
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
 */
describe('Testando o serviço "getCategoriesByGuide"', () => {
beforeEach(() => {
  apiMock.get.mockClear();
});

it(`${getCategoriesByGuide.name}: Devolvendo conteúdo "getCategoriesByGuide"`, async () => {
  const id = '1';
  apiMock.get.mockResolvedValue([]);
  const result = await getCategoriesByGuide(id);
  expect(apiMock.get).toBeCalledTimes(1);
  expect(result).toStrictEqual([]);
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


