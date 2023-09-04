import * as React from 'react';
import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';

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
}) {
  const [val, setVal] = React.useState(value);

  const handleChangeValue = (e) => {
    setVal(e.currentTarget.value);
    onChange(e.currentTarget.value);
  }

  const sx = VARIANTS[variant];

  return (
    <TextField
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
};

CustomTextField.defaultProps = {
  label: '',
  value: '',
  onChange: () => { },
};