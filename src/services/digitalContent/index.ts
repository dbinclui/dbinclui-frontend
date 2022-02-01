import api from '@services/api';

export interface DigitalContentBody {
  _id?: string;
  guide: string;
  category?: string;
  title: string;
  shortDescription: string;
  filePaths?: File[];
}

export interface DigitalContentResponse {
  _id?: string;
  guide: string;
  category?: string;
  title: string;
  shortDescription: string;
  filePaths: string[];
}

export const postDigitalContent = async (cardBody: FormData) => {
  try {
    return api.post<{ data: DigitalContentBody[] }>(
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
