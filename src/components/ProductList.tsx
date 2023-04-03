import React, { useCallback } from 'react';
import { Box, CircularProgress, List } from '@mui/material';
import { useAppSelector } from '../hooks/reduxHooks';
import ProductListItem from './ProductListItem';
import MyPagination from './Pagination';

const ProductList = () => {
  const { products, status } = useAppSelector((state) => state.products);
  const {
    paginationIndex, searchString, selectedCategories, priceFilter,
  } = useAppSelector(
    (state) => state.ui,
  );

  const filterProducts = useCallback(() => {
    const filteredBySearch = searchString.length
      ? products.filter((p) => p.title.toLowerCase().includes(searchString.toLowerCase()))
      : products;

    const filteredByCategories = selectedCategories.length
      ? filteredBySearch.filter((p) => selectedCategories.includes(p.category))
      : filteredBySearch;

    let filtered = [];

    switch (priceFilter) {
      case '< 100':
        filtered = filteredByCategories.filter((p) => Number(p.price) < 100);
        break;
      case '100-500':
        filtered = filteredByCategories.filter(
          (p) => Number(p.price) > 100 && Number(p.price) < 500,
        );
        break;
      case '> 500':
        filtered = filteredByCategories.filter((p) => Number(p.price) > 500);
        break;
      default:
        filtered = filteredByCategories;
        break;
    }

    return filtered;
  }, [searchString, selectedCategories, priceFilter, products]);

  const filteredProducts = filterProducts();

  const itemsPerChunk = 5;
  const currentChunk = filteredProducts.slice(
    (paginationIndex - 1) * itemsPerChunk,
    paginationIndex * itemsPerChunk,
  );

  return (
    <Box sx={{ pt: 2 }}>
      {status === 'loading' && !filteredProducts.length && (
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
          {!!filteredProducts.length && (
            <MyPagination itemsCount={filteredProducts.length} itemsPerChunk={itemsPerChunk} />
          )}
        </>
      )}
    </Box>
  );
};

export default ProductList;
