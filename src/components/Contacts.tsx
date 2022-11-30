import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';
import { ContactsList } from './ContactsList';
import { SearchBar } from './SearchBar';
import { fetchContacts } from '../slices/contactsSlice';
import { useAppDispatch } from '../store';

export interface ContactsProps {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export const Contacts = ({ sx = [] }: ContactsProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box component="div" sx={sx}>
      <SearchBar />
      <ContactsList />
    </Box>
  );
};

export default Contacts;
