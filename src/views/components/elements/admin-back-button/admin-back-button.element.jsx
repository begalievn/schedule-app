import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

// styles
import classes from './style.module.scss';

export const AdminBackButton = () => {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  }
  
  return (
    <button onClick={goBack} className={classes.button}>
      <ArrowBackIcon style={{ color: 'white', marginRight: '10px' }} />
      back
    </button>
  );
};
