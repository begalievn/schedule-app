import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// styles
import classes from './style.module.scss';

export const AdminBackButton = () => {
  return (
    <button className={classes.button}>
      <ArrowBackIcon style={{ color: 'white' }} />
      Back
    </button>
  );
};
