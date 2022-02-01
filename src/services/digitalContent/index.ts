import api from '@services/api';
import GuideInterface from '@services/guides';

export interface CardCategoryResponse {
  _id?: string;
  title: string;
  shortDescription: string;
  guide: GuideInterface;
  parentCategory?: CardCategoryResponse;
}

export interface CardDigitalContentBody {
  _id?: string;
  guide: string;
  category?: string;
  title: string;
  shortDescription: string;
  filePaths?: File[];
}

export interface CardDigitalContentResponse {
  _id?: string;
  guide: string;
  category?: string;
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
