import {Paginator} from 'features/paginator/Types';

export type CreateAdviceRequest = {
  id: number,
  text: {
    en: string,
    ru: string,
  },
  sound: string | null,
};

export type UpdateAdviceRequest = {
  id?: number,
  text?: {
    en?: string,
    ru?: string,
  },
  sound?: string | null,
};

export type AdviceResource = {
  id: number,
  text: {
    en: string,
    ru: string,
  },
  sound: string | null,
  created_at: string,
  updated_at: string,
};

export type AdviceCollection = AdviceResource[];

export type AdviceResourceResponse = {
  data: AdviceResource,
};

export type AdviceCollectionResponse = {
  data: AdviceCollection,
} & Paginator;
