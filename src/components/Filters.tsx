import React from 'react';
import { Paper, useMediaQuery, useTheme } from '@mui/material';
import { useAppDispatch } from '../hooks/reduxHooks';
import { toggleShowFilters } from '../store/uiSlice';

const Filters = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper sx={{ height: '100%', borderRadius: 0 }}>
      <div>Filters</div>
      {isSm && (
      <button type="button" onClick={() => dispatch(toggleShowFilters())}>
        Жмяк
      </button>
      )}
    </Paper>
  );
};

export default Filters;
