import React, { useState } from 'react';

import { useGetAllTeacherQuery } from '../../../../../store/api/teacher-api';
import { ContainerWithShadow } from '../../../../components/containers/container-with-shadow';
import { ContentContainer } from '../../../../components/containers/content';
import { HeaderV1 } from '../../../../components/elements/header-v1';
import { Input } from '../../../../components/elements/input/Input';
import { SelectV1 } from '../../../../components/elements/select-v1';

import styles from './subject_create.module.scss';

import {
	courses,
	semesters,
	classroom,
	inputFields,
	initialState,
} from './constants';
import { CourseSelect } from '../../schedule-page/schedule-create/components/course-select/course-select.component';
import { RadioGroupV2 } from '../../../../components/elements/radio-group-v2/radio-group-v2.component';
import { MultiSelect } from '../../../../components/elements/multi-select';
import { SelectedItem } from './components/selected-item';

export const SubjectCreate = () => {
	const [subjectValue, setSubjectValue] = useState(initialState);
	const [selectedCourse, setSelectedCourse] = React.useState('1');
	const { data } = useGetAllTeacherQuery();

	const [value, setValue] = useState([]);
	console.log(value);

	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	const changeHandler = (e) => {
		setSubjectValue({ ...subjectValue, [e.target.name]: e.target.value });
	};

	const handleCourseChange = (event) => {
		setSelectedCourse(event.target.id);
	};

	const resetHandler = (id) => {
		const filteredValue = value.filter((item) => item._id !== id);
		setValue(filteredValue);
	};
	return (
		<ContentContainer style={{ marginBottom: '50px' }}>
			<HeaderV1>Subject</HeaderV1>
			<form
				className={styles.form_container}
				onSubmit={handleSubmit}
			>
				<ContainerWithShadow>
					<div className={styles.container}>
						{inputFields.map((fields) => (
							<label
								key={fields.id}
								className={styles.form_label}
							>
								{fields.label}
								<Input
									name={fields.name}
									placeholder={fields.label}
									onChange={changeHandler}
								/>
							</label>
						))}
						<label className={styles.form_label}>
							Semester
							<SelectV1
								options={semesters}
								width='330px'
							/>
						</label>

						<label className={styles.form_label}>
							Classroom
							<RadioGroupV2 options={classroom} />
						</label>

						<label className={styles.form_label}>
							Course
							<div className={styles.course_container}>
								{courses.map((course) => (
									<CourseSelect
										id={course.id}
										key={course.id}
										style={{ width: '85px' }}
										title={course.title}
										onChange={handleCourseChange}
										selected={course.id === selectedCourse}
									/>
								))}
							</div>
						</label>
					</div>
				</ContainerWithShadow>
				<ContainerWithShadow style={{ background: '#E5EFFE' }}>
					<div className={styles.container}>
						<MultiSelect
							label='Choose Teacher'
							value={value}
							options={data || []}
							setValue={setValue}
						/>
						<div className={styles.selected_container}>
							{value.map((item) => (
								<SelectedItem
									key={item._id}
									resetHandler={resetHandler}
									{...item}
								/>
							))}
						</div>
					</div>
				</ContainerWithShadow>
			</form>
		</ContentContainer>
	);
};
