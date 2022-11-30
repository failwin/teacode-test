import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { SxProps, Theme } from '@mui/material/styles';
import {
  applySearch,
  selectSearchQuery,
  selectLoading,
} from '../slices/contactsSlice';
import { useAppDispatch, useAppSelector } from '../store';

export interface SearchBarProps {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export const SearchBar = ({ sx = [] }: SearchBarProps) => {
  const timer = useRef<number>(0);
  const searchQuery = useAppSelector(selectSearchQuery);
  const loading = useAppSelector(selectLoading);
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
    <Box
      component="div"
      sx={[{ position: 'relative' }, ...(Array.isArray(sx) ? sx : [sx])]}
    >
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
      {loading ? (
        <CircularProgress
          size={30}
          sx={{ position: 'absolute', top: 12, right: 15 }}
        />
      ) : null}
    </Box>
  );
};

export default SearchBar;
