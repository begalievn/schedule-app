import React from 'react';
import {
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
} from '@mui/material';

export const RadioGroupV2 = ({ options = [] }) => {
	const [value, setValue] = React.useState('female');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<FormControl>
			<RadioGroup
				row={true}
				aria-labelledby='demo-controlled-radio-buttons-group'
				name='controlled-radio-buttons-group'
				value={value}
				onChange={handleChange}
			>
				{options.map((option) => (
					<FormControlLabel
						key={option.id}
						value={option.value}
						control={<Radio />}
						label={option.label}
					/>
				))}
			</RadioGroup>
		</FormControl>
	);
};
