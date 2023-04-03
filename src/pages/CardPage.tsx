import React, { useEffect } from 'react';
import {
  Typography, Box, Grid, CircularProgress, IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { fetchProductById } from '../store/productsSlice';
import routes from '../routes';
import arrowLeft from '../icons/Arrow_Left.svg';

const InfoPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const url = new URL(window.location.href);
  const productId = Number(url.searchParams.get('id'));

  const { selectedProduct, status } = useAppSelector(({ products }) => {
    const product = products.products.find((p) => p.id === productId);
    return { selectedProduct: product, status: products.status };
  });

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  return (
    <Box
      sx={{
        display: 'flex',
        px: 1,
        pt: 5,
        '@media (min-width:600px)': { pt: 7, px: 9 },
      }}
    >
      <Box sx={{ maxWidth: '644px', flexGrow: 1 }}>
        <IconButton
          sx={{
            display: 'inline-flex',
            gap: 1,
            mb: 4,
            p: 0,
            alignItems: 'center',
          }}
          disableRipple
          onClick={() => navigate(routes.listPage())}
        >
          <img src={arrowLeft} style={{ verticalAlign: 'top' }} alt="arrow left" />
          <Typography sx={{}}>Вернуться</Typography>
        </IconButton>
        {status === 'loading' && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
            <CircularProgress color="inherit" />
          </Box>
        )}
        {status === 'idle' && (
          <Grid container rowSpacing={4}>
            <Grid item mb={1} xs={12}>
              <Typography variant="h3">{selectedProduct?.title}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">
                <span className="gray">Category: </span>
                {selectedProduct?.category}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">
                <span className="gray">Price: </span>${selectedProduct?.price}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <span className="gray">Description:</span>
              <Typography mt={3} variant="body2">
                {selectedProduct?.description}
              </Typography>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default InfoPage;
