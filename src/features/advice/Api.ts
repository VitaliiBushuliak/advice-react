import axios from 'axios';
import {
  AdviceCollectionResponse,
  AdviceResourceResponse,
  CreateAdviceRequest,
  UpdateAdviceRequest,
} from 'features/advice/Types';

export const index = async (): Promise<AdviceCollectionResponse> => {
  return (await axios.get(`${process.env.REACT_APP_API_HOST}/api/advices`)).data;
};

export const store = async (request: CreateAdviceRequest): Promise<AdviceResourceResponse> => {
  return (await axios.post(`${process.env.REACT_APP_API_HOST}/api/advices`, request)).data;
};

export const show = async (id: number): Promise<AdviceResourceResponse> => {
  return (await axios.get(`${process.env.REACT_APP_API_HOST}/api/advices/${id}`)).data;
};

export const update = async (id: number, request: UpdateAdviceRequest): Promise<AdviceResourceResponse> => {
  return (await axios.put(`${process.env.REACT_APP_API_HOST}/api/advices/${id}`, request)).data;
};

export const destroy = async (id: number): Promise<AdviceResourceResponse> => {
  return (await axios.delete(`${process.env.REACT_APP_API_HOST}/api/advices/${id}`)).data;
};

export const exists = async (id: number): Promise<boolean> => {
  return (await axios.get(`${process.env.REACT_APP_API_HOST}/api/advices/${id}/exists`)).data;
};
