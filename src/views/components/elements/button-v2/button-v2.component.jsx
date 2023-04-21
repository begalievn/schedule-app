import React from 'react';

// styles
import classes from './style.module.scss';

export const ButtonV2 = ({ onClick, style, children,type='button' }) => {
  return (
    <button type={type} onClick={onClick} style={style} className={classes.button_v2}>
      { children }
    </button>
  );
};
