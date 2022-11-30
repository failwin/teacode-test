import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { SxProps, Theme } from '@mui/material/styles';
import { ContactsItem } from './ContactsItem';
import { selectAll } from '../slices/contactsSlice';
import { useAppSelector } from '../store';

export interface ContactsListProps {
  sx?: SxProps<Theme>;
}

export const ContactsList = ({ sx = [] }: ContactsListProps) => {
  const list = useAppSelector(selectAll);

  return (
    <Box component="div" sx={[{}, ...(Array.isArray(sx) ? sx : [sx])]}>
      <List sx={{ p: 0 }}>
        {list.map((contact) => {
          return <ContactsItem key={contact.id} contact={contact} />;
        })}
      </List>
    </Box>
  );
};

export default ContactsList;
