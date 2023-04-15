export const inputFields = [
	{ id: 1, type: 'text', label: 'Name', name: 'name' },
	{ id: 2, type: 'text', label: 'Code', name: 'code' },
	{ id: 3, type: 'text', label: 'Duration', name: 'duration' },
	{ id: 4, type: 'text', label: 'Description', name: 'description' },
	{ id: 5, type: 'number', label: 'Credits', name: 'credits' },
];

export const semesters = [
	{ id: 1, value: '1', label: 'Spring' },
	{ id: 2, value: '2', label: 'Autumn' },
];

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

export const classroom = [
	{ id: '1', value: '2', label: 'Laboratory' },
	{
		id: '2',
		value: '1',
		label: 'Lecture ',
	},
];

export const initialState = {
	name: '',
	code: '',
	credits: '',
	courses: null,
	semester: '',
	teachers: null,
	classroom: '',
	description: '',
	numberOfHours: '',
};
