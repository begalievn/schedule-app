import React from 'react';

// styles
import classes from './style.module.scss';

export const CourseSelect = ({ title, id, selected, onChange, width }) => {
	return (
		<button
			id={id}
			style={{ width: width }}
			className={`${classes.button} ${selected ? classes.selected : ''}`}
			onClick={onChange}
		>
			{title}
		</button>
	);
};
