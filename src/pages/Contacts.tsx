import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material/styles';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { ContactsList } from '../components/ContactsList';
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
    <Box
      sx={[{ maxWidth: 1000, m: '0 auto' }, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      <Header>Contacts</Header>
      <SearchBar />
      <ContactsList />
    </Box>
  );
};

export default Contacts;
