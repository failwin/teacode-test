import React, { useState, useRef, useEffect } from 'react';
import { FixedSizeList } from 'react-window';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';
import { ContactsItem } from './ContactsItem';
import { selectAll } from '../slices/contactsSlice';
import { useAppSelector } from '../store';

export interface ContactsListProps {
  sx?: SxProps<Theme>;
}

export const ContactsList = ({ sx = [] }: ContactsListProps) => {
  const container = useRef<HTMLDivElement>();
  const list = useAppSelector(selectAll);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    setContainerHeight(container.current ? container.current.clientHeight : 0);

    const onResize = () => {
      setContainerHeight(
        container.current ? container.current.clientHeight : 0
      );
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [container, container.current, setContainerHeight]);

  return (
    <Box
      ref={container}
      component="div"
      sx={[{ flexGrow: 1 }, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      {containerHeight ? (
        <FixedSizeList
          height={containerHeight}
          width="100%"
          itemSize={75}
          itemCount={list.length}
          overscanCount={10}
          style={{ position: 'absolute' }}
        >
          {({ index, style }) => {
            const contact = list[index];
            if (!contact) {
              return null;
            }
            return (
              <ContactsItem key={contact.id} contact={contact} sx={style} />
            );
          }}
        </FixedSizeList>
      ) : null}
    </Box>
  );
};

export default ContactsList;
