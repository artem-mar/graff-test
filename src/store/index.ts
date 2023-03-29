import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import filtersReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    ui: filtersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
