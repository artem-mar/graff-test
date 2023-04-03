/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';

export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

interface IProductsState {
  products: IProduct[];
  status: 'idle' | 'loading' | 'error';
}

const initialState: IProductsState = {
  products: [],
  status: 'idle',
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (): Promise<IProduct[]> => {
    const response = await axios.get(routes.productsApi());
    return response.data;
  },
);

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id: number) => {
    const response = await axios.get(routes.productByIdApi(id));
    return response.data;
  },
  {
    condition: (id, { getState }) => {
      const { products }: any = getState();
      if (products.products.find((p: any) => p.id === Number(id))) {
        return false;
      }
      return true;
    },
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.products = [action.payload];
        state.status = 'idle';
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default productsSlice.reducer;
