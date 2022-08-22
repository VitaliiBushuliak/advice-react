import axios from 'axios';
import {LanguageCode, RawResponse, Translation} from 'features/translator/Types';

export const translate = async (original: string, from: LanguageCode, to: LanguageCode): Promise<Translation> => {
  const url: URL = new URL('https://translate.googleapis.com/translate_a/single');

  url.searchParams.set('client', 'gtx');
  url.searchParams.set('dt', 't');
  url.searchParams.set('sl', from);
  url.searchParams.set('tl', to);
  url.searchParams.set('q', original);

  const response: RawResponse = await axios.get(url.toString());

  return {from, to, original, translated: response.data[0][0][0]};
};
