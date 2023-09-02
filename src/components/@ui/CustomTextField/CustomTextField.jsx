import * as React from 'react';
import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';

export default function CustomTextField({
  label,
  value,
  onChange,
}) {
  const [val, setVal] = React.useState(value);

  const handleChangeValue = (e) => {
    setVal(e.currentTarget.value);
    onChange(e.currentTarget.value);
  }

  return (
    <TextField
      label={label}
      variant="filled"
      value={val}
      onChange={handleChangeValue}
    />
  );
};

CustomTextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

CustomTextField.defaultProps = {
  label: '',
  value: '',
  onChange: () => {},
}