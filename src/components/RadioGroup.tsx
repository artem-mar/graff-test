import React from 'react';
import {
  Box, InputLabel, FormControlLabel, Radio, RadioGroup as Group,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { setPriceFilter } from '../store/uiSlice';
import radioYes from '../icons/RadioButton_Yes.svg';
import radioNo from '../icons/RadioButton_No.svg';

const RadioGroup = () => {
  const dispatch = useAppDispatch();
  const priceFilter = useAppSelector((state) => state.ui.priceFilter);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPriceFilter(event.target.value));
  };

  return (
    <Box sx={{ width: '100%' }}>
      <InputLabel sx={{ mb: '4px', fontWeight: 400 }} htmlFor="selectInput">
        Цена
      </InputLabel>
      <Group
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="price-radio"
        value={priceFilter}
        onChange={handleChange}
      >
        {[
          { value: '< 100', label: '< $100' },
          { value: '100-500', label: '$100 - $500' },
          { value: '> 500', label: '> $500' },
        ].map(({ value, label }) => (
          <FormControlLabel
            value={value}
            label={label}
            sx={{ '& span': { p: 1 } }}
            control={(
              <Radio
                disableRipple
                icon={<img src={radioNo} alt="radio button" />}
                checkedIcon={<img src={radioYes} alt="radio button" />}
              />
            )}
          />
        ))}
      </Group>
    </Box>
  );
};

export default RadioGroup;
