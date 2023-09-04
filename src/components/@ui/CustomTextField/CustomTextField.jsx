import * as React from 'react';
import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';

// const VARIANTS = {
//   base: {},
//   filled: {
//     bgcolor: 'background.color',
//   },
// };
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

  console.log({ variant });

  return (
    <TextField
      fullWidth
      label={label}
      variant={variant}
      value={val}
      onChange={handleChangeValue}
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