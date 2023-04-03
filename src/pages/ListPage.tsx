import React, { useEffect } from 'react';
import {
  Grid, Typography, useTheme, useMediaQuery, IconButton,
} from '@mui/material';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { toggleShowFilters } from '../store/uiSlice';
import { fetchProducts } from '../store/productsSlice';
import filters from '../icons/Filters.svg';

const ListPage = () => {
  const showFilters = useAppSelector((state) => state.ui.showFilters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      direction={{ xs: 'row', sm: 'row-reverse' }}
      columns={24}
      spacing={0}
      sx={{
        height: '100vh',
      }}
    >
      {(!isSm || showFilters) && (
        <Grid item xs={24} sm={8} md={7} lg={5}>
          <Filters />
        </Grid>
      )}
      {(!showFilters || !isSm) && (
        <Grid
          item
          xs={24}
          sm={16}
          md={17}
          lg={19}
          sx={{
            pt: 4,
            px: 1,
            pb: 3,
            '@media (min-width:600px)': { pt: 7, px: 9 },
          }}
        >
          <Typography sx={{ mb: 2 }} variant="h3">
            Products
          </Typography>
          {isSm && (
            <IconButton
              sx={{
                display: 'inline-flex',
                gap: 1,
                p: 0,
                alignItems: 'center',
                ':hover': { cursor: 'pointer' },
              }}
              disableRipple
              onClick={() => dispatch(toggleShowFilters())}
            >
              <img src={filters} alt="filters icon" />
              <Typography>Фильтры</Typography>
            </IconButton>
          )}
          <ProductList />
        </Grid>
      )}
    </Grid>
  );
};

export default ListPage;
