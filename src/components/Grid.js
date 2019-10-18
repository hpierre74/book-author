import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

export const Row = props => (
  <Grid {...props} container>
    {props.children}
  </Grid>
);

Row.propTypes = { children: PropTypes.oneOfType([PropTypes.node]).isRequired };

export const Col = props => (
  <Grid item {...props}>
    {props.children}
  </Grid>
);

Col.propTypes = { children: PropTypes.oneOfType([PropTypes.node]) };
