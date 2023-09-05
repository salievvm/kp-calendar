import * as React from 'react';
import PropTypes from 'prop-types';

import { TextField } from '@mui/material';

const THEMES = {
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
}) {
  const [val, setVal] = React.useState(value);

  const handleChangeValue = (e) => {
    setVal(e.currentTarget.value);
    onChange(e.currentTarget.value);
  }

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
    />
  );
};

CustomTextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  theme: PropTypes.oneOf(['base', 'filled']).isRequired,
  required: PropTypes.bool,
};

CustomTextField.defaultProps = {
  label: '',
  value: '',
  required: false,
  onChange: () => { },
};