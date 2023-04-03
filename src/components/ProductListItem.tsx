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
      elevation={0}
      component={ListItem}
      sx={{
        mb: 2,
        p: 4,
        '@media (max-width:600px)': { p: 3 },
        ':hover': { cursor: 'pointer', bgcolor: 'grey.700' },
        ':active': { bgcolor: 'grey.700' },
      }}
    >
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">{product.title}</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1">
            <span className="gray">Category: </span>
            {product.category}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography align="right" variant="body1">
            <span className="gray">Price: </span>${product.price}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductListItem;
