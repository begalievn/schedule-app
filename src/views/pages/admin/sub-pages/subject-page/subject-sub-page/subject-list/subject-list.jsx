import React from 'react';
import { ContentContainer } from '../../../../../../components/containers/content';
import { ButtonV2 } from '../../../../../../components/elements/button-v2';
import { HeaderV1 } from '../../../../../../components/elements/header-v1';
import { SelectV1 } from '../../../../../../components/elements/select-v1';
import { CourseSelect } from '../../../schedule-page/schedule-sub-pages/schedule-create/components/course-select/course-select.component';
import { SubjectListTable } from './components/subject-list-table/subject-list-table';

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

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.id);
  };

  return (
    <ContentContainer style={{ paddingBottom: '40px' }}>
      <HeaderV1>List of subject</HeaderV1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <SelectV1 selecTitle='Semester' />
        <ButtonV2>Add subject +</ButtonV2>
      </div>
      <div style={{ display: 'flex', gap: '20px', margin: '24px 0' }}>
        {courses.map((course) => (
          <CourseSelect
            id={course.id}
            title={course.title}
            selected={course.id === selectedCourse}
            onChange={handleCourseChange}
          />
        ))}
      </div>
      <SubjectListTable />
    </ContentContainer>
  );
};
