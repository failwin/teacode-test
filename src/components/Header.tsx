import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SxProps, Theme, useTheme } from '@mui/material/styles';

export interface HeaderProps {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export const Header = ({ sx = [], children }: HeaderProps) => {
  const theme = useTheme();
  return (
    <Box sx={{ p: 2, backgroundColor: theme.palette.primary.main }}>
      <Typography align="center" sx={{ color: 'white', fontWeight: 'bold' }}>
        {children}
      </Typography>
    </Box>
  );
};

export default Header;
