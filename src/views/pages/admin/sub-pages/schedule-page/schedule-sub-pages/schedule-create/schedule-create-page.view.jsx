import React from 'react';
import {ContentContainer} from "../../../../../../components/containers/content";
import {HeaderV1} from "../../../../../../components/elements/header-v1";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {CourseSelect} from "./components/course-select/course-select.component";
import {SelectSubjectsTable} from "./components/select-subjects-table/select-subjects-table.component";

// styles
import classes from './style.module.scss';
import {useNavigate} from "react-router-dom";
import {SelectV1} from "../../../../../../components/elements/select-v1";
import { Input } from "../../../../../../components/elements/input/Input";

const courseList = [
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
  }

]

export const ScheduleCreatePage = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = React.useState("1");
  
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.id);
  };
  
  const handleReadyClick = () => {
    navigate('/admin/schedule/send');
  }
  
  return (
    <ContentContainer style={{ paddingBottom: '50px' }}>
      <HeaderV1>
        Create a new Schedule
      </HeaderV1>
      <div className={classes.semester_container}>
        <Input style={{ width: '300px' }} placeholder={'Name of a schedule'} />
        <div><SelectV1 /></div>
      </div>
      <div className={classes.courses_container}>
        {
          courseList.map((course) => (
            <CourseSelect id={course.id} title={course.title} selected={course.id === selectedCourse}
                          onChange={handleCourseChange}/>
          ))
        }
      </div>
      <div className={classes.subjects_container}>
        <div className={classes.table_container}>
          <SelectSubjectsTable/>
        </div>
        <div className={classes.selected_subjects_container}>
          <div className={classes.selected_text}>
            <p>Selected subjects</p>
            <p>Amount: 8</p>
          </div>
          <div className={classes.ready_button_container}>
            <button onClick={handleReadyClick} className={classes.ready_button}>Ready {<ArrowForwardIcon sx={{fontSize: '30px'}} /> }</button>
          </div>
        </div>
      </div>
    
    </ContentContainer>
  );
};
