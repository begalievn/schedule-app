import React, {useEffect, useState} from 'react';
import {ToastContainer} from 'react-toastify';
import {useNavigate, useParams} from 'react-router-dom';

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
import {ContainerWithLoader} from '../../../../components/containers/container-with-loader';
import {AlertDialog} from '../../../../components/elements/alert-dialog';

import {courses, initialState, inputFields, semesters} from '../subject-create/constants';
import {roomOptions} from '../../classroom-page/constants';

// apis
import {
	useDeleteSubjectMutation,
	useGetSubjectByIdQuery,
	useUpdateSubjectMutation
} from '../../../../../store/api/subject-api';
import { useGetAllTeacherQuery } from '../../../../../store/api/teacher-api';

// styles
import styles from './subject_update.module.scss';

export const SubjectUpdate = () => {
	const [subjectValue, setSubjectValue] = useState(initialState);
	const [selectedCourse, setSelectedCourse] = useState('1');
	const [teachers, setTeachers] = useState([]);
	const [openConfirmModal, setOpenConfirmModal] = useState(false);
	
	const navigate = useNavigate();
	const params = useParams();
	const id = params.id;
	
	console.log('id', id);
	
	const { data } = useGetAllTeacherQuery('');
	const { data: subjectById, isLoading } = useGetSubjectByIdQuery(id);
	const [updateSubject] = useUpdateSubjectMutation();
	const [deleteSubject] = useDeleteSubjectMutation();
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			...subjectValue,
			teachers: teachers.map((teacher) => teacher?._id),
			courses: [ +selectedCourse],
		}
		const result = await updateSubject({ id, body: data });
		handleToast(
			result,
			'Successfully updated!',
			`${result?.error?.data?.message || 'Update failed!'}`
		)
		console.log('result', result);
		console.log('subjectValue', data);
	};
	
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
	
	const handleOpenConfirmModal = () => {
		setOpenConfirmModal(true);
	}
	
	const handleCloseConfirmModal = () => {
		setOpenConfirmModal(false);
	}
	
	const handleDelete = async () => {
		handleCloseConfirmModal();
		const result = await deleteSubject(id);
		handleToast(
			result,
			'Successfully deleted!',
			`${result?.error?.data?.message || 'Failed to delete!'}`,
			2000,
		);
		setTimeout(() => {
			navigate(-1);
		}, 3000);
	}
	
	useEffect(() => {
		if (subjectById) {
			setSubjectValue({
				...subjectById,
			});
			setSelectedCourse(String(subjectById?.courses[0]) || '1')
			setTeachers(subjectById.teachers || []);
		}
	}, [subjectById])
	
	console.log({ subjectById });
	console.log({selectedCourse});
	
	return (
		<ContentContainer style={{ marginBottom: '50px' }}>
			<HeaderV1>Update a subject</HeaderV1>
			{
				isLoading ? <ContainerWithLoader style={{ height: '500px' }} /> :
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
											value={subjectValue[fields.name]}
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
									<ButtonV2 type="submit">Update</ButtonV2>
									<ButtonV2 onClick={handleOpenConfirmModal} style={{background: 'white', color: '#cc5092'}}>Delete</ButtonV2>
								</div>
							</div>
						</ContainerWithShadow>
					</form>
			}
			<ToastContainer />
			<AlertDialog
				open={openConfirmModal}
				handleAction={handleDelete}
				handleClose={handleCloseConfirmModal}
				title={'Are your sure, you want to delete a classroom?'}
				content={'Classroom will be deleted permanently!'}
			/>
		</ContentContainer>
	);
};
