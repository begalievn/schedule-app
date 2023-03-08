import React from 'react';

// styles
import classes from './style.module.scss';

export const HeaderV1 = ({ style, children }) => {
    return (
        <h1 style={style} className={classes.header}>
            { children }
        </h1>
    );
};
