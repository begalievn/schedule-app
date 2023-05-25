import React from 'react';

// styles
import classes from './style.module.scss';

export const courses = [
	{
		id: '1',
		title: '1 course',
	},
	{
		id: '2',
		title: '2 course',
	},
	{
		id: '3',
		title: '3 course',
	},
	{
		id: '4',
		title: '4 course',
	},
];

export const CourseSelect = ({ title, id, selected, onChange, style, type }) => {
	return (
		<button
			type={type}
			id={id}
			style={style}
			className={`${classes.button} ${selected ? classes.selected : ''}`}
			onClick={onChange}
		>
			{title}
		</button>
	);
};
