import api, { handleAxiosError } from '../api';
import { DigitalContentInterface } from '@services/digitalContent';
import { CategoryContent } from '@services/categories';

export interface GuideInterface {
  _id?: string;
  title: string;
  content: string;
}

export interface GuideContent extends GuideInterface {
  categories: CategoryContent[];
  digitalContents: DigitalContentInterface[];
}

export const getGuides = async () => {
  try {
    return api.get<{ data: GuideInterface[] }>(`/guides/`);
  } catch (error) {
    throw handleAxiosError(error);
  }
};

export const postGuides = async (cardBody: GuideInterface) => {
  try {
    return api.post('/guides/', cardBody);
  } catch (error) {
    throw handleAxiosError(error);
  }
};

export const getGuideWithCategoriesAndContent = async (id: string) => {
  try {
    return api.get<{ data: GuideContent }>(`guides/categoriesAndContent/${id}`);
  } catch (error) {
    throw handleAxiosError(error);
  }
};
