import api from '../api';
import { DigitalContentResponse } from '@services/digitalContent';
import { CategoryContent } from '@services/categories';

export interface GuideInterface {
  _id?: string;
  title: string;
  content: string;
}

export interface GuideContent {
  _id?: string;
  title: string;
  content: string;
  categories: CategoryContent[];
  digitalContents: DigitalContentResponse[];
}

export const getGuides = async () => {
  try {
    return api.get<{ data: GuideInterface[] }>(`/guides/`);
  } catch {
    throw new Error('Serviço não disponível');
  }
};

export const postGuides = async (cardBody: GuideInterface) => {
  try {
    return api.post('/guides/', cardBody);
  } catch {
    throw new Error('Serviço não disponível');
  }
};

export const getGuideWithCategoriesAndContent = async (id: string) => {
  try {
    return api.get<{ data: GuideContent }>(`guides/categoriesAndContent/${id}`);
  } catch {
    throw new Error('Serviço não disponível');
  }
};
