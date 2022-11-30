import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});

export default theme;
