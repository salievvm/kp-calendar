import PropTypes from 'prop-types';
import { CssBaseline } from '@mui/material';
import 'typeface-inter';

import {
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  createTheme
} from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    color: '#1F1F1F',
    h1: {
      fontSize: '32px',
      fontWeight: 700,
      lineHeight: '40px',
    },
    h2: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '32px',
    },
    h3: {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '24px',
    },
    body1: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '24px',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '24px',
      color: '#9F9F9F',
    },
    caption: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
      color: '#9F9F9F',
    },
    button: {
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '24px',
    },
  },
});

const ThemeProvider = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <MUIThemeProvider theme={theme}>
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;