/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface IUiState {
  showFilters: boolean;
  paginationIndex: number;
}

const initialState: IUiState = {
  showFilters: false,
  paginationIndex: 0,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleShowFilters: (state) => {
      state.showFilters = !state.showFilters;
    },
    setPaginationIndex: (state, { payload }) => {
      state.paginationIndex = parseInt(payload, 10);
    },
  },
});

export default uiSlice.reducer;
export const { toggleShowFilters } = uiSlice.actions;
