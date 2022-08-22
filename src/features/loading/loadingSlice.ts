import {createSlice} from '@reduxjs/toolkit';
import {RootState} from 'app/store';

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    value: true,
  },
  reducers: {
    loading: (state) => {
      state.value = true;
    },
    loaded: (state) => {
      state.value = false;
    },
  },
});

export const {loading, loaded} = loadingSlice.actions;

export const selectLoading = (state: RootState) => state.loading.value;

export default loadingSlice.reducer;
