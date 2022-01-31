import api from '@services/api';
import CardGuidesResponse, { GuideContent } from '@services/guides';
import { CategoryContent } from '@services/categories';

export interface CardCategoryResponse {
  _id?: string;
  title: string;
  shortDescription: string;
  guide: CardGuidesResponse;
  parentCategory?: CardCategoryResponse;
}

export interface CardDigitalContentBody {
  _id?: string;
  guide: GuideContent;
  category?: CategoryContent;
  title: string;
  shortDescription: string;
  filePaths?: File[];
}

export interface CardDigitalContentResponse {
  _id?: string;
  guide: GuideContent;
  category?: CategoryContent;
  title: string;
  shortDescription: string;
  filePaths: string[];
}

export const getCategoriesByGuide = async (id: string) => {
  try {
    return api.get<{ data: CardCategoryResponse[] }>(`/categories/guide/${id}`);
  } catch {
    throw new Error('Serviço não disponível');
  }
};

export const getDigitalContent = async () => {
  try {
    return api.get<{ data: CardDigitalContentResponse[] }>(
      `/digital-contents/`,
    );
  } catch {
    throw new Error('Serviço não disponível');
  }
};

export const postDigitalContent = async (cardBody: FormData) => {
  try {
    return api.post<{ data: CardDigitalContentBody[] }>(
      `/digital-contents/`,
      cardBody,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
  } catch {
    throw new Error('Serviço não disponível');
  }
};
