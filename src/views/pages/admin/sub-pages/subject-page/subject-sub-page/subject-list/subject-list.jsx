import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonV2 } from '../../../../../../components/elements/button-v2';
import { HeaderV1 } from '../../../../../../components/elements/header-v1';
import { SelectV1 } from '../../../../../../components/elements/select-v1';
import { SubjectListTable } from './components/subject-list-table/subject-list-table';
import { CourseSelect } from '../../../schedule-page/schedule-sub-pages/schedule-create/components/course-select/course-select.component';

import { BrowserRoute } from '../../../../../../routes/browser.routes';
import { ContentContainer } from '../../../../../../components/containers/content';
import { ContainerWithShadow } from '../../../../../../components/containers/container-with-shadow';
import {CircularProgress} from '@mui/material';

// apis
import { useGetSubjectsFilteredQuery } from '../../../../../../../store/api/subject-api';

// styles
import classes from './style.module.scss';

const semesters = [
  {
    label: 'Fall Semester',
    value: 1,
  },
  {
    label: 'Spring Semester',
    value: 2,
  },
]


const courses = [
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
export const SubjectList = () => {
  const [selectedCourse, setSelectedCourse] = React.useState('1');
  const [semester, setSemester] = React.useState(1);
  const navigate = useNavigate();
  
  const { data: filteredSubjects, isLoading } = useGetSubjectsFilteredQuery({ semester, course: selectedCourse })
  
  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  }
  
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.id);
  };

  const navigateToCreate = () => {
    navigate(BrowserRoute.ADMIN_SUBJECT_CREATE);
  };

  return (
    <ContentContainer style={{ marginBottom: '20px' }}>
      <HeaderV1>List of subject</HeaderV1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <SelectV1 selectTitle='Semester' options={semesters} value={semester} onChange={handleSemesterChange} />
        <ButtonV2 onClick={navigateToCreate}>Add subject +</ButtonV2>
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
        {
          isLoading ?
          <div className={classes.loader_container}>
            <CircularProgress />
          </div>
            :
          <SubjectListTable subjects={filteredSubjects} />
        }
      </ContainerWithShadow>
    </ContentContainer>
  );
};
