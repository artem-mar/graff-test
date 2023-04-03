import React from 'react';
import {
  Paper, useMediaQuery, useTheme, Box, Typography, IconButton,
} from '@mui/material';
import { useAppDispatch } from '../hooks/reduxHooks';
import { toggleShowFilters } from '../store/uiSlice';
import Input from './Input';
import DropDown from './DropDown';
import arrowLeft from '../icons/Arrow_Left.svg';
import RadioGroup from './RadioGroup';

const Filters = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper elevation={0} sx={{ height: '100%', borderRadius: 0 }}>
      <Box
        sx={{
          pt: 4,
          px: 1,
          '@media (min-width:600px)': { pt: 7, px: 5 },
        }}
      >
        {isSm ? (
          <IconButton
            sx={{
              display: 'inline-flex',
              gap: 1,
              p: 0,
              mb: 3,
              alignItems: 'center',
              ':hover': { cursor: 'pointer' },
            }}
            disableRipple
            onClick={() => dispatch(toggleShowFilters())}
          >
            <img src={arrowLeft} alt="filters icon" />
            <Typography variant="h5">Фильтры</Typography>
          </IconButton>
        ) : (
          <Typography sx={{ mb: 3 }} variant="h5">
            Фильтры
          </Typography>
        )}

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: 4,
          }}
          component="form"
          noValidate
          autoComplete="off"
        >
          <Input />
          <DropDown />
          <RadioGroup />
        </Box>
      </Box>
    </Paper>
  );
};

export default Filters;
