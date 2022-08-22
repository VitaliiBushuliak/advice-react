import axios from 'axios';
import {exists} from 'features/advice/Api';
import {FuckingGreatAdvice} from 'features/fucking-great-advice/Types';

export const random = async (): Promise<FuckingGreatAdvice> => {
  return (await axios.get('https://fucking-great-advice.ru/api/random')).data;
};

export const randomUnique = async (): Promise<FuckingGreatAdvice> => {
  const advice = await random();

  return (await exists(advice.id)) ? randomUnique() : advice;
};
