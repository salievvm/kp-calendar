import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';

const VARIANTS = {
  base: {},
  filled: {
    bgcolor: 'info.main',
  },
};

export default function CustomCard({
  children,
  // padding,
  margin,
  width,
  variant,
}) {
  return (
    <Paper
      elevation={0}
      style={{
        // padding,
        width,
        margin,
      }}
      sx={VARIANTS[variant]}
    >
      {children}
    </Paper>
  );
}

CustomCard.propTypes = {
  children: PropTypes.any.isRequired,
  // padding: PropTypes.number,
  margin: PropTypes.any,
  width: PropTypes.any,
  variant: PropTypes.oneOf(Object.keys(VARIANTS)),
};

CustomCard.defaultProps = {
  // padding: 48,
  width: '100%',
  margin: 0,
  variant: 'base',
};