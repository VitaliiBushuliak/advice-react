import {configureStore, ThunkAction, Action, Store} from '@reduxjs/toolkit';
import loadingSlice from 'features/loading/loadingSlice';

export const store: Store = configureStore({
  reducer: {
    loading: loadingSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
