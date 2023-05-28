import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonV2 } from '../../../../components/elements/button-v2';
import { HeaderV1 } from '../../../../components/elements/header-v1';
import { SelectV1 } from '../../../../components/elements/select-v1';
import { SubjectListTable } from './components/subject-list-table/subject-list-table';
import { CourseSelect } from '../../schedule-page/schedule-create/components/course-select/course-select.component';

import { BrowserRoute } from '../../../../routes/browser.routes';
import { ContentContainer } from '../../../../components/containers/content';
import { ContainerWithShadow } from '../../../../components/containers/container-with-shadow';
import { CircularProgress } from '@mui/material';
import { courses, semesters } from './constants';

// apis
import { useGetSubjectsFilteredQuery } from '../../../../../store/api/subject-api';

// styles
import classes from './style.module.scss';
import {useGetDepartmentsQuery} from '../../../../../store/api/department-api';

export const SubjectList = () => {
	const [selectedCourse, setSelectedCourse] = useState('1');
	const [semester, setSemester] = useState(1);
	const [department, setDepartment] = useState(null);
	const [departmentsOption, setDepartmentsOption] = useState([{ label: 'None', value: null }]);
	
	const navigate = useNavigate();

	const { data: filteredSubjects, isLoading } = useGetSubjectsFilteredQuery({
		semester,
		course: selectedCourse,
		department,
	}, {
		refetchOnMountOrArgChange: true,
	});
	const { data: departments, isLoading: isDepartmentLoading } = useGetDepartmentsQuery();
	
	console.log('departments', departments);

	const handleSemesterChange = (event) => {
		setSemester(event.target.value);
	};
	
	const handleDepartmentChange = (event) => {
		setDepartment(event.target.value);
	}

	const handleCourseChange = (event) => {
		setSelectedCourse(event.target.id);
	};

	const navigateToCreate = () => {
		navigate(BrowserRoute.ADMIN_SUBJECT_CREATE);
	};
	
	useEffect(() => {
		if (departments) {
			const deps = departments.map((dep) => ({
				label: dep.name,
				value: dep.code,
			}))
			if (departmentsOption.length > 1) {
				return;
			}
			setDepartmentsOption([...departmentsOption, ...deps]);
		}
	}, [departments]);

	console.log('departmentsOption', departmentsOption);
	
	return (
		<ContentContainer style={{ marginBottom: '50px' }}>
			<HeaderV1>List of subject</HeaderV1>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div className={classes.selectors}>
					<SelectV1
						selectTitle='Semester'
						options={semesters}
						value={semester}
						onChange={handleSemesterChange}
					/>
					<SelectV1
						selectTitle='Department'
						options={departmentsOption}
						value={department}
						onChange={handleDepartmentChange}
					/>
				</div>
				<ButtonV2 onClick={navigateToCreate}>Add subject</ButtonV2>
			</div>
			<div style={{ display: 'flex', gap: '20px', margin: '24px 0' }}>
				{courses.map((course) => (
					<CourseSelect
						id={course.id}
						key={course.id}
						title={course.title}
						onChange={handleCourseChange}
						selected={course.id === selectedCourse}
					/>
				))}
			</div>
			<ContainerWithShadow>
				{isLoading || isDepartmentLoading ? (
					<div className={classes.loader_container}>
						<CircularProgress />
					</div>
				) : (
					<SubjectListTable subjects={filteredSubjects} />
				)}
			</ContainerWithShadow>
		</ContentContainer>
	);
};
