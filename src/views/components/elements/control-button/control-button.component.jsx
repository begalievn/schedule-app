import React from 'react';

import classes from './style.module.scss';

export const ControlButton = ({ children, onClick, style, ...props }) => {
  return (
    <button style={style} onClick={onClick} className={classes.button}>
      { children }
    </button>
  );
};
