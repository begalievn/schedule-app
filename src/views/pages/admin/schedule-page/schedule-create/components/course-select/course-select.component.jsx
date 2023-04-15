import React from 'react';

// styles
import classes from './style.module.scss';

export const CourseSelect = ({ title, id, selected, onChange, style }) => {
	return (
		<button
			id={id}
			style={style}
			className={`${classes.button} ${selected ? classes.selected : ''}`}
			onClick={onChange}
		>
			{title}
		</button>
	);
};
