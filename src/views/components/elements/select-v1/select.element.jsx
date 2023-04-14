import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select as MuiSelect } from '@mui/material';

export const SelectV1 = ({
	selectTitle,
	options = [],
	value,
	onChange,
	width,
	...props
}) => {
	return (
		<FormControl
			sx={{ minWidth: '300px', width: width }}
			size='small'
			{...props}
		>
			<InputLabel>{selectTitle}</InputLabel>
			<MuiSelect
				sx={{ borderColor: '#9FB8F9' }}
				value={value}
				label={selectTitle}
				onChange={onChange}
			>
				{options.map((item, index) =>
					item.none ? (
						<MenuItem value=''>
							<em>None</em>
						</MenuItem>
					) : (
						<MenuItem
							key={index}
							value={item.value}
						>
							{item.label}
						</MenuItem>
					),
				)}
			</MuiSelect>
		</FormControl>
	);
};
