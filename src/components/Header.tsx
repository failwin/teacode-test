import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material/styles';

export interface HeaderProps {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export const Header = ({ sx = [], children }: HeaderProps) => {
  return (
    <Box sx={{ p: 2, backgroundColor: '#35a8a0' }}>
      <Typography align="center" sx={{ color: 'white', fontWeight: 'bold' }}>
        {children}
      </Typography>
    </Box>
  );
};

export default Header;
