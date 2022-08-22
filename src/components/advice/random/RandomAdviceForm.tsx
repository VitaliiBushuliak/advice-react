import {MouseEvent, useEffect, useState} from 'react';
import {AppDispatch} from 'app/store';
import {useAppDispatch, useAppSelector} from 'app/hooks';
import {loading, loaded, selectLoading} from 'features/loading/loadingSlice';
import {randomUnique} from 'features/fucking-great-advice/Api';
import {FuckingGreatAdvice} from 'features/fucking-great-advice/Types';
import {Translation} from 'features/translator/Types';
import {translate} from 'features/translator/Api';
import {store} from 'features/advice/Api';

export const RandomAdviceForm = (): JSX.Element => {
  const dispatch: AppDispatch = useAppDispatch();
  const isLoading: boolean = useAppSelector(selectLoading);

  const [id, setId] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const [sound, setSound] = useState<string | null>(null);
  const [translation, setTranslation] = useState<string>('');

  const init = (): void => {
    randomUnique()
      .then((advice: FuckingGreatAdvice) => {
        translate(advice.text, 'ru', 'en')
          .then((translation: Translation) => {
            setId(advice.id);
            setText(advice.text);
            setSound(advice.sound);
            setTranslation(translation.translated);
            dispatch(loaded());
          });
      });
  };

  const storeHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    dispatch(loading());
    event.preventDefault();
    store({id, text: {en: translation, ru: text}, sound}).then(() => init());
  };

  useEffect(init, [dispatch]);

  return (
    <form>
      <input
        type="text"
        value={text}
        disabled
      />
      <input
        type="text"
        value={translation}
        disabled={isLoading}
        onChange={(event) => setTranslation(event.target.value)}
      />
      <button
        disabled={isLoading}
        onClick={(event) => storeHandler(event)}
      >
        Store
      </button>
    </form>
  );
};
