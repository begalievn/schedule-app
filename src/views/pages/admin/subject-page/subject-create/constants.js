import {roomOptions} from '../../classroom-page/constants';

export const inputFields = [
	{ id: 1, type: 'text', label: 'Name', name: 'name' },
	{ id: 2, type: 'text', label: 'Code', name: 'code' },
	{ id: 4, type: 'text', label: 'Description', name: 'description' },
	{ id: 3, type: 'number', label: 'Number of hours', name: 'numberOfHours' },
	{ id: 3, type: 'number', label: 'Number of lecture hours', name: 'lectureHours' },
	{ id: 3, type: 'number', label: 'Number of lab hours', name: 'labHours' },
	{ id: 5, type: 'number', label: 'Credits', name: 'credits' },
];

export const semesters = [
	{ id: 2, value: 1, label: 'Fall semester' },
	{ id: 1, value: 2, label: 'Spring semester' },
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

export const initialState = {
	name: '',
	code: '',
	credits: 0,
	courses: null,
	semester: 1,
	department: null,
	teachers: [],
	classroomType: roomOptions[1].value,
	description: '',
	numberOfHours: 0,
	lectureHours: 0,
	labHours: 0,
};
