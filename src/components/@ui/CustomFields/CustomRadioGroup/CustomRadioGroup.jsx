import * as React from 'react';
import PropTypes from 'prop-types';
import CustomRadioItem from './CustomRadioItem';
import { Grid } from '@mui/material';

export default function CustomRadioGroup({
  options,
  value,
  onChange,
}) {
  const [state, setState] = React.useState(value);

  const handleCheck = (id) => {
    setState(id);
    onChange(id);
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      gap={2}
      padding={2}
      sx={(theme) => ({
        bgcolor: theme.palette.info.main,
        borderRadius: theme.shape.borderRadiusSm,
      })}
    >
      {options.map(({
        label,
        id,
      }) => {
        const checked = state === id;
        return <CustomRadioItem
          key={id}
          checked={checked}
          onClick={() => handleCheck(id)}
        >
          {label}
        </CustomRadioItem>
      })}
    </Grid>
  );
};

CustomRadioGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

CustomRadioGroup.defaultProps = {
  onChange: () => { },
};
