import React from 'react';

// styles
import classes from './style.module.scss';

export const ContainerWithShadow = ({ children, style }) => {
  return (
    <div style={style} className={classes.container}>
      {children}
    </div>
  );
};
