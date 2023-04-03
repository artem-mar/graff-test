import React, { FC, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import chevronLeft from '../icons/Chevron_Left.svg';
import chevronRight from '../icons/Chevron_Right.svg';
import { setPaginationIndex } from '../store/uiSlice';

type TPaginationProps = {
  itemsCount: number;
  itemsPerChunk: number;
};

const Pagination: FC<TPaginationProps> = ({ itemsCount, itemsPerChunk }) => {
  const dispatch = useAppDispatch();
  const paginationIndex = useAppSelector((state) => state.ui.paginationIndex);

  const pageCount = Math.ceil(itemsCount / itemsPerChunk);

  const handleLeft = (event: React.ChangeEvent<unknown>) => {
    dispatch(setPaginationIndex(paginationIndex - 1));
  };
  const handleRight = (event: React.ChangeEvent<unknown>) => {
    dispatch(setPaginationIndex(paginationIndex + 1));
  };

  useEffect(() => {
    if (paginationIndex > pageCount) {
      dispatch(setPaginationIndex(pageCount));
    }
  });

  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>
      <IconButton sx={{ p: 0 }} disabled={paginationIndex === 1} onClick={handleLeft}>
        <img src={chevronLeft} alt="chevron left" />
      </IconButton>
      <Typography>{paginationIndex}</Typography>
      <IconButton sx={{ p: 0 }} disabled={paginationIndex >= pageCount} onClick={handleRight}>
        <img src={chevronRight} alt="chevron right" />
      </IconButton>
    </Box>
  );
};

export default Pagination;
