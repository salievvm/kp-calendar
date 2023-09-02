import PropTypes from 'prop-types';
import 'typeface-inter';

import {
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  createTheme
} from "@mui/material/styles";

import palette from './palette';
import typography from './typography';

import componentsOverride from './overrides';

const options = createTheme({
  palette,
  typography,
});

const ThemeProvider = ({ children }) => {
  const theme = createTheme(options);
  theme.components = componentsOverride(theme);
  return (
    <StyledEngineProvider injectFirst>
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