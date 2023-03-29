import React, { useState } from 'react';
import {
  Box, CircularProgress, Pagination, List,
} from '@mui/material';
import { useAppSelector } from '../hooks/reduxHooks';
import ProductListItem from './ProductListItem';

const ProductList = () => {
  const { products, status } = useAppSelector((state) => state.products);

  const [chunkIndex, setChunkIndex] = useState(0);
  const itemsPerChunk = 5;
  const chunkCount = Math.ceil(products.length / itemsPerChunk);
  const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setChunkIndex(value - 1);
  };
  const currentChunk = products.slice(chunkIndex * itemsPerChunk, (chunkIndex + 1) * itemsPerChunk);

  return (
    <Box sx={{ pt: 2 }}>
      {status === 'loading' && !products.length && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
          <CircularProgress color="inherit" />
        </Box>
      )}
      <List>
        {currentChunk.map((p) => (
          <ProductListItem key={p.id} product={p} />
        ))}
      </List>
      <Pagination count={chunkCount} size="small" onChange={handlePaginationChange} />
    </Box>
  );
};

export default ProductList;
