import React from 'react';

// styles
import classes from './style.module.scss';

export const HeaderV1 = ({ text }) => {
    return (
        <h1 className={classes.header}>
            {text}
        </h1>
    );
};
