import React from 'react';
import {
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
} from '@mui/material';

export const RadioGroupV2 = ({
	options = [],
	onChange,
	value = '',
	label,
	name,
}) => {
	
	return (
		<FormControl>
			<RadioGroup
				row={true}
				aria-labelledby='demo-controlled-radio-buttons-group'
				name={name}
				value={value}
				onChange={onChange}
			>
				{options.map((option) => (
					<FormControlLabel
						value={option.value}
						control={<Radio />}
						key={option.id}
						label={option.label}
					/>
				))}
			</RadioGroup>
		</FormControl>
	);
};
