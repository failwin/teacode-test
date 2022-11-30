import React, { useEffect } from 'react';
import { Box, Link as MuiLink, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useAppDispatch, useAppSelector } from '../store';
import { selectSearchQuery, applySearch } from '../slices/contactsSlice';

export interface SearchBarProps {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export const SearchBar = ({ sx = [] }: SearchBarProps) => {
  const query = useAppSelector(selectSearchQuery);
  const dispatch = useAppDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    dispatch(applySearch(newQuery));
  };

  return (
    <Box component="div" sx={[{}, ...(Array.isArray(sx) ? sx : [sx])]}>
      <TextField label="Required" value={query} onChange={onChange} />
    </Box>
  );
};

export default SearchBar;
