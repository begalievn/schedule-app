import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminBackIcon } from '../../../../assets/icons';

// styles
import classes from './style.module.scss';

export const AdminBackButton = () => {
  const navigate = useNavigate();
  
  const goBack = (e) => {
    e.preventDefault();
    navigate(-1);
  }
  
  return (
    <button onClick={goBack} className={classes.button}>
      <AdminBackIcon />
    </button>
  );
};
