import React, { useState } from 'react';
import {
  Box,
  List,
  Button,
  Checkbox,
  ListItem,
  InputLabel,
  ListItemText,
  ListItemButton,
  ClickAwayListener,
} from '@mui/material';
import BoxWithGradientBorder from './BoxWithGradientBorder';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { addCategory, removeCategory } from '../store/uiSlice';
import chevronUp from '../icons/Chevron_Up.svg';
import chevronDown from '../icons/Chevron_Down.svg';
import checkYes from '../icons/CheckBox_Yes.svg';
import checkNo from '../icons/CheckBox_No.svg';

const DropDown = () => {
  const dispatch = useAppDispatch();
  const allCategories = Array.from(
    new Set(useAppSelector((state) => state.products.products.map((p) => p.category))),
  );
  const selectedCategories = useAppSelector((state) => state.ui.selectedCategories);

  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCheck = (value: string) => () => {
    selectedCategories.includes(value)
      ? dispatch(removeCategory(value))
      : dispatch(addCategory(value));
  };

  return (
    <Box sx={{ width: '100%' }}>
      <InputLabel sx={{ mb: '4px', fontWeight: 400 }} htmlFor="selectInput">
        Категория
      </InputLabel>

      <ClickAwayListener onClickAway={handleClose}>
        <Box>
          <BoxWithGradientBorder>
            <Button
              fullWidth
              onClick={toggleOpen}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: '12px 12px 12px 20px',
              }}
            >
              {selectedCategories.length ? `Выбрано ${selectedCategories.length}` : 'Все'}
              <img src={!isOpen ? chevronDown : chevronUp} alt="" />
            </Button>
          </BoxWithGradientBorder>

          {isOpen && (
            <List
              sx={{
                width: '100%',
                bgcolor: 'grey.700',
                borderRadius: '4px',
                pb: 1,
                pt: 0,
              }}
            >
              {allCategories.map((category) => (
                <ListItem disablePadding key={category}>
                  <ListItemButton sx={{ px: '4px' }} onClick={handleCheck(category)} dense>
                    <Checkbox
                      sx={{ p: '11px' }}
                      disableRipple
                      checked={selectedCategories.includes(category)}
                      icon={<img src={checkNo} alt="checkbox" />}
                      checkedIcon={<img src={checkYes} alt="checkbox" />}
                    />
                    <ListItemText primary={category} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </ClickAwayListener>
    </Box>
  );
};

export default DropDown;
