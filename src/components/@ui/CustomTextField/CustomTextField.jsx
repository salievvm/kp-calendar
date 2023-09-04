import * as React from 'react';
import PropTypes from 'prop-types';

import { Typography, TextField } from '@mui/material';

const VARIANTS = {
  filled: {},
  outlined: {
    '& .MuiFilledInput-root': {
      backgroundColor: 'background.paper',
    },
  },
};

export default function CustomTextField({
  label,
  value,
  onChange,
  variant,
  required,
}) {
  const [val, setVal] = React.useState(value);

  const handleChangeValue = (e) => {
    setVal(e.currentTarget.value);
    onChange(e.currentTarget.value);
  }

  const sx = VARIANTS[variant];

  return (
    <TextField
      required={required}
      fullWidth
      label={label}
      variant="filled"
      value={val}
      onChange={handleChangeValue}
      sx={sx}
    />
  );
};

CustomTextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']).isRequired,
  required: PropTypes.bool,
};

CustomTextField.defaultProps = {
  label: '',
  value: '',
  required: false,
  onChange: () => { },
};