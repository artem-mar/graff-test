/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface IUiState {
  showFilters: boolean;
  paginationIndex: number;
  searchString: string;
  selectedCategories: string[];
  priceFilter: '< 100' | '100-500' | '> 500' | 'all';
}

const initialState: IUiState = {
  showFilters: false,
  paginationIndex: 1,
  searchString: '',
  selectedCategories: [],
  priceFilter: 'all',
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
    setSearchString: (state, { payload }) => {
      state.searchString = payload;
    },
    addCategory: (state, { payload }) => {
      state.selectedCategories.push(payload);
    },
    removeCategory: (state, { payload }) => {
      state.selectedCategories = state.selectedCategories.filter(
        (category) => category !== payload,
      );
    },
    setPriceFilter: (state, { payload }) => {
      state.priceFilter = payload;
    },
  },
});

export default uiSlice.reducer;
export const {
  toggleShowFilters,
  setPaginationIndex,
  setSearchString,
  addCategory,
  removeCategory,
  setPriceFilter,
} = uiSlice.actions;
