import { Admin } from './index';
import '@testing-library/jest-dom';

jest.mock('../admin/index.tsx');

const getAdminMock = Admin as jest.MockedFunction<typeof Admin>;

describe('Página do Administrador', () => {
  beforeEach(() => {
    getAdminMock.mockClear(); 
  });
  test('Deve mostrar os botões de criação de guias', async () => {})
});
