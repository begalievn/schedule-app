import React from 'react';
import {CircularProgress} from '@mui/material';

// styles
import classes from './style.module.scss';

export const ContainerWithLoader = ({ style }) => {
  return (
    <div style={style} className={classes.container}>
      <CircularProgress />
    </div>
  );
};
