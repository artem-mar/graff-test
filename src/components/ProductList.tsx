import React from 'react';
import {
  Box, CircularProgress, Pagination, List,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import ProductListItem from './ProductListItem';
import { setPaginationIndex } from '../store/uiSlice';

const ProductList = () => {
  const { products, status } = useAppSelector((state) => state.products);
  const paginationIndex = useAppSelector((state) => state.ui.paginationIndex);

  const dispatch = useAppDispatch();

  const itemsPerChunk = 5;
  const chunkCount = Math.ceil(products.length / itemsPerChunk);
  const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPaginationIndex(value));
  };
  const currentChunk = products.slice(
    (paginationIndex - 1) * itemsPerChunk,
    paginationIndex * itemsPerChunk,
  );

  return (
    <Box sx={{ pt: 2 }}>
      {status === 'loading' && !products.length && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
          <CircularProgress color="inherit" />
        </Box>
      )}
      {status === 'idle' && (
        <>
          <List>
            {currentChunk.map((p) => (
              <ProductListItem key={p.id} product={p} />
            ))}
          </List>
          <Pagination
            count={chunkCount}
            page={paginationIndex}
            size="small"
            onChange={handlePaginationChange}
          />
        </>
      )}
    </Box>
  );
};

export default ProductList;
