import React, { useState, useRef, useEffect } from 'react';
import { Box, Link as MuiLink, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch, useAppSelector } from '../store';
import { selectSearchQuery, applySearch } from '../slices/contactsSlice';

export interface SearchBarProps {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export const SearchBar = ({ sx = [] }: SearchBarProps) => {
  const timer = useRef<number>(0);
  const searchQuery = useAppSelector(selectSearchQuery);
  const [value, setValue] = useState(searchQuery);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setValue(searchQuery);
  }, [searchQuery]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setValue(newQuery);
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      dispatch(applySearch(newQuery));
    }, 500);
  };

  return (
    <Box component="div" sx={[{}, ...(Array.isArray(sx) ? sx : [sx])]}>
      <TextField
        value={value}
        onChange={onChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
      />
    </Box>
  );
};

export default SearchBar;
