import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Box, InputLabel } from '@mui/material';
import BoxWithGradientBorder from './BoxWithGradientBorder';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { setSearchString } from '../store/uiSlice';
import useDebounce from '../hooks/useDebounce';

const Input = () => {
  const dispatch = useAppDispatch();
  const searchString = useAppSelector((state) => state.ui.searchString);

  const [inputValue, setInputValue] = useState(searchString);
  const debouncedValue = useDebounce(inputValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    dispatch(setSearchString(debouncedValue));
  }, [debouncedValue, dispatch]);

  return (
    <Box sx={{ width: '100%' }}>
      <InputLabel sx={{ mb: '4px', fontWeight: 400 }} htmlFor="searchStringField">
        Название
      </InputLabel>
      <BoxWithGradientBorder>
        <TextField
          sx={{
            '& input': {
              px: 2,
              py: '12px',
            },
          }}
          value={inputValue}
          onChange={handleChange}
          type="text"
          fullWidth
          size="small"
          id="searchStringField"
          variant="outlined"
        />
      </BoxWithGradientBorder>
    </Box>
  );
};

export default Input;
