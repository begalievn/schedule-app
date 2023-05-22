import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import { ContainerWithShadow } from '../../../../components/containers/container-with-shadow';
import { ContentContainer } from '../../../../components/containers/content';
import { HeaderV1 } from '../../../../components/elements/header-v1';
import { Input } from '../../../../components/elements/input/Input';
import { SelectV1 } from '../../../../components/elements/select-v1';
import { CourseSelect } from '../../schedule-page/schedule-create/components/course-select/course-select.component';
import { RadioGroupV2 } from '../../../../components/elements/radio-group-v2/radio-group-v2.component';
import { MultiSelect } from '../../../../components/elements/multi-select';
import {ButtonV2} from '../../../../components/elements/button-v2';
import {handleToast} from '../../../../../utils/handle-toast';

import {
	courses,
	semesters,
	inputFields,
	initialState,
} from './constants';
import {roomOptions} from '../../classroom-page/constants';

// apis
import { useGetAllTeacherQuery } from '../../../../../store/api/teacher-api';
import {useCreateSubjectMutation} from '../../../../../store/api/subject-api';

// styles
import styles from './subject_create.module.scss';

export const SubjectCreate = () => {
	const [subjectValue, setSubjectValue] = useState(initialState);
	const [selectedCourse, setSelectedCourse] = useState('1');
	const [teachers, setTeachers] = useState([]);
	
	const navigate = useNavigate();
	
	const { data } = useGetAllTeacherQuery('');
	const [createSubject] = useCreateSubjectMutation();
	
	const handleInputsChanges = (e) => {
		let value = e.target.value;
		if (e.target.type === 'number') {
			value = Number(value);
		}
		setSubjectValue({ ...subjectValue, [e.target.name]: value });
	}
	
	const handleSemesterChange = (e) => {
		const semester = e.target.value;
		setSubjectValue({ ...subjectValue, semester})
	}

	const handleCourseChange = (event) => {
		setSelectedCourse(event.target.id);
	};
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			...subjectValue,
			teachers: teachers.map((teacher) => teacher?._id),
			courses: [ +selectedCourse],
		}
		console.log('subjectValue', data);
		const result = await createSubject(data);
		handleToast(
			result,
			'Successfully created!',
			`${result?.error?.data?.message || 'Failed to create!'}`
		)
		console.log('result', result);
	};
	
	const handleCancel = () => {
		setSubjectValue(initialState);
		navigate(-1);
	}
	
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
									onChange={handleInputsChanges}
									type={fields.type ? fields.type : ''}
								/>
							</label>
						))}
						
					</div>
				</ContainerWithShadow>
				<ContainerWithShadow style={{ background: '#E5EFFE' }}>
					<div className={styles.container}>
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
						<label className={styles.form_label}>
							Semester
							<SelectV1
								value={subjectValue.semester}
								onChange={handleSemesterChange}
								options={semesters}
								width='330px'
							/>
						</label>
						
						<label className={styles.form_label}>
							Classroom type
							<RadioGroupV2 onChange={handleInputsChanges} value={subjectValue.classroomType} name={'classroomType'} options={roomOptions} />
						</label>
						
						<label className={styles.form_label}>
							Teachers
							<MultiSelect
								label='Choose Teacher'
								value={teachers}
								options={data || []}
								setValue={setTeachers}
							/>
						</label>
						<div className={styles.buttons}>
							<ButtonV2 type="submit">Create</ButtonV2>
							<ButtonV2 onClick={handleCancel} style={{background: 'white', color: '#cc5092'}}>Cancel</ButtonV2>
						</div>
					</div>
				</ContainerWithShadow>
			</form>
			<ToastContainer />
		</ContentContainer>
	);
};
