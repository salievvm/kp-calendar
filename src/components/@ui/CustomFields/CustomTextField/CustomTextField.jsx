import * as React from 'react';
import PropTypes from 'prop-types';

import { IconButton, InputAdornment, TextField } from '@mui/material';

export const THEMES = {
  base: {},
  filled: {
    '& .MuiFilledInput-root': {
      backgroundColor: 'background.paper',
      '&:hover': {
        backgroundColor: 'background.paper',
      },
      '&.Mui-focused': {
        backgroundColor: 'background.paper',
      },
    },
  },
};

export default function CustomTextField({
  label,
  value,
  onChange,
  theme,
  required,
  onClick,
  autoComplete,
  multiline,
  icon,
}) {
  const [val, setVal] = React.useState(value);

  const handleChangeValue = (e) => {
    setVal(e.currentTarget.value);
  }

  const deboundedOnChange = () => {
    if (value !== val) {
      onChange(val);
    }
  }

  React.useEffect(() => {
    setVal(value);
  }, [value])

  // React.useEffect(() => {
  //   const delayDebounceFn = setTimeout(() => {
  //   }, 1000)

  //   return () => clearTimeout(delayDebounceFn)
  // }, [val])

  const sx = THEMES[theme];

  return (
    <TextField
      required={required}
      fullWidth
      label={label}
      variant="filled"
      value={val}
      onChange={handleChangeValue}
      sx={sx}
      type="email"
      onBlur={deboundedOnChange}
      onClick={onClick}
      autoComplete={autoComplete ? 'on' : 'off'}
      multiline={multiline}
      rows={multiline ? 3 : 1}
      InputProps={{
        endAdornment: icon ? (
          <InputAdornment position="end">
            <IconButton
              aria-label="calendar"
              edge="end"
            >
              {icon}
            </IconButton>
          </InputAdornment>
        ) : null
      }}
    />
  );
};

CustomTextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  theme: PropTypes.oneOf(['base', 'filled']).isRequired,
  required: PropTypes.bool,
  onClick: PropTypes.func,
  autoComplete: PropTypes.bool,
  multiline: PropTypes.bool,
  icon: PropTypes.element,
};

CustomTextField.defaultProps = {
  label: '',
  value: '',
  required: false,
  autoComplete: true,
  multiline: false,
  onChange: () => { },
  onClick: () => { },
  icon: null,
};