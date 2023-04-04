import React from 'react';

// styles
import classes from './style.module.scss';

export const ContainerWithShadow = (props) => {
  return (
    <div className={classes.container}>
      {props.children}
    </div>
  );
};
