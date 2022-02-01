import api from '../api';
import { GuideInterface } from '@services/guides';
import { DigitalContentInterface } from '@services/digitalContent';

export interface CategoryInterface {
  _id?: string;
  title: string;
  shortDescription: string;
  guide: GuideInterface | GuideInterface['_id'];
}

export interface CategoryContent extends CategoryInterface {
  digitalContents: DigitalContentInterface[];
}

export const getCategories = async () => {
  try {
    return api.get<{ data: CategoryInterface[] }>(`/categories/`);
  } catch {
    throw new Error('Serviço não disponível');
  }
};

export const getCategoriesByGuide = async (id: string) => {
  try {
    return api.get<{ data: CategoryInterface[] }>(`/categories/guide/${id}`);
  } catch {
    throw new Error('Serviço não disponível');
  }
};

export const postCategories = async (cardBody: CategoryInterface) => {
  try {
    return api.post('/categories/', cardBody);
  } catch {
    throw new Error('Serviço não disponível');
  }
};
