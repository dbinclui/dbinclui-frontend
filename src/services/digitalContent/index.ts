import api, { handleAxiosError } from '@services/api';

export interface DigitalContentInterface {
  _id?: string;
  guide: string;
  category?: string;
  title: string;
  shortDescription: string;
  filePaths: string[] | File[];
}

export const postDigitalContent = async (cardBody: FormData) => {
  try {
    return api.post<{ data: DigitalContentInterface[] }>(
      `/digital-contents/`,
      cardBody,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
  } catch (error) {
    throw handleAxiosError(error);
  }
};
