import {
  Paper, ListItem, Grid, Typography,
} from '@mui/material';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../routes';
import { IProduct } from '../store/productsSlice';

type TItemProps = {
  product: IProduct;
};

const ProductListItem: FC<TItemProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Paper
      onClick={() => navigate(routes.cardPage(product.id))}
      component={ListItem}
      sx={{
        mb: 2,
        p: 4,
        '@media (max-width:600px)': { p: 3 },
        ':hover': { cursor: 'pointer' },
        ':active': { bgcolor: 'darkgray' },
      }}
    >
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">{product.title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">{product.description}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">Category: {product.category}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography align="right" variant="body1">Price: {product.price}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductListItem;
