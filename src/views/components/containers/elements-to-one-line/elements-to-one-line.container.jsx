import React from 'react';

// styles
import classes from './style.module.scss';

export const ElementsToOneLine = ({ children, style }) => {
  return (
    <div style={style} className={classes.container}>
      { children }
    </div>
  );
};
