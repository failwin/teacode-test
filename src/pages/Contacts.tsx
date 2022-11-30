import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { ContactsList } from '../components/ContactsList';
import { fetchContacts, selectSearchQuery } from '../slices/contactsSlice';
import { useAppDispatch, useAppSelector } from '../store';

export interface ContactsProps {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export const Contacts = ({ sx = [] }: ContactsProps) => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector(selectSearchQuery);

  useEffect(() => {
    dispatch(fetchContacts(searchQuery));
  }, [dispatch, searchQuery]);

  return (
    <Box
      sx={[
        { display: 'flex', flexDirection: 'column', width: '100%' },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Header>Contacts</Header>
      <SearchBar />
      <ContactsList />
    </Box>
  );
};

export default Contacts;
