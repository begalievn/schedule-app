import React from 'react';
import { alaTooTransparentLogo } from '../../../../assets/images'

import classes from './style.module.scss';

export const AuthWrapper = ({children}) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper_content}>
        <div>
          {children}
        </div>
      </div>
      <div className={classes.wrapper_image}>
        <img src={alaTooTransparentLogo} alt={'Ala-Too logo'} />
      </div>
    </div>
  );
};
