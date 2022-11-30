import React, { useEffect } from 'react';
import { Box, Link as MuiLink, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { selectAll, selectSearchQuery } from '../slices/contactsSlice';
import { useAppDispatch, useAppSelector } from '../store';

export interface ContactsListProps {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export const ContactsList = ({ sx = [] }: ContactsListProps) => {
  const list = useAppSelector(selectAll);
  const searchQuery = useAppSelector(selectSearchQuery);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('list + search');
  }, [list, searchQuery]);

  return (
    <Box
      component="div"
      sx={[
        {
          width: 'auto',
          textDecoration: 'underline',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {list.map((contact) => {
        return (
          <div key={contact.id}>
            {contact.id} {contact.first_name} {contact.last_name}
          </div>
        );
      })}
    </Box>
  );
};

export default ContactsList;
