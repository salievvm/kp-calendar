import * as React from 'react';
import PropTypes from 'prop-types';

import { TextField } from '@mui/material';

export const THEMES = {
  base: {},
  filled: {
    '& .MuiFilledInput-root': {
      backgroundColor: 'background.paper',
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
};

CustomTextField.defaultProps = {
  label: '',
  value: '',
  required: false,
  onChange: () => { },
  onClick: () => { },
};