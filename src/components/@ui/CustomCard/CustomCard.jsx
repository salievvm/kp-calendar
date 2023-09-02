import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';

export default function CustomCard({
  children,
  padding,
  margin,
  width,
}) {
  return (
    <Paper
      elevation={0}
      style={{
        padding,
        width,
        margin,
      }}
    >
      {children}
    </Paper>
  );
}

CustomCard.propTypes = {
  children: PropTypes.any.isRequired,
  padding: PropTypes.number,
  margin: PropTypes.any,
  width: PropTypes.any,
};

CustomCard.defaultProps = {
  padding: 48,
  width: '100%',
  margin: 0,
};