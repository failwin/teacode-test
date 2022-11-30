import React from 'react';
import { Box, Link as MuiLink, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

export interface ComponentProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

const Component = ({ sx = [] }: ComponentProps) => {
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
      Aaaa
    </Box>
  );
};
