export type LanguageCode = 'en' | 'ru';

export type RawResponse = {
  data: [
    [
      [
        string,
      ],
    ],
  ],
};

export type Translation = {
  from: LanguageCode,
  to: LanguageCode,
  original: string,
  translated: string,
};
