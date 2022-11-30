import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { SxProps, Theme } from '@mui/material/styles';
import {
  Contact,
  selectIsHighlighted,
  toggleHighlight,
} from '../slices/contactsSlice';
import { useAppDispatch, useAppSelector } from '../store';

export interface ContactsItemProps {
  contact: Contact;
  sx?: SxProps<Theme>;
}

export const ContactsItem = ({ sx = [], contact }: ContactsItemProps) => {
  const isHighlighted = useAppSelector(selectIsHighlighted(contact.id));
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleHighlight(contact.id));
  };

  return (
    <ListItem
      sx={[{}, ...(Array.isArray(sx) ? sx : [sx])]}
      secondaryAction={
        <Checkbox edge="end" onChange={handleToggle} checked={isHighlighted} />
      }
      disablePadding
    >
      <ListItemButton onClick={handleToggle}>
        <ListItemAvatar>
          <Avatar
            sx={{
              bgcolor: 'white',
              color: '#c5c5c5',
              border: 'solid 1px #c5c5c5',
            }}
            alt={
              contact.avatar
                ? `Photo of ${contact.first_name} ${contact.last_name}`
                : undefined
            }
            src={contact.avatar || undefined}
          >
            {contact.first_name[0]}
            {contact.last_name[0]}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          id={`${contact.id}`}
          primary={`${contact.first_name} ${contact.last_name}`}
          secondary={contact.email}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default ContactsItem;
