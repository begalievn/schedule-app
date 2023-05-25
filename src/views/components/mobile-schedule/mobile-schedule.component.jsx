import React, {useEffect, useState} from 'react';
import {ContentContainer} from '../containers/content';

import classes from './style.module.scss';
import {BlockContainer} from '../containers/block';
import {courses} from '../../pages/admin/subject-page/subject-list/constants';
import {
  CourseSelect
} from '../../pages/admin/schedule-page/schedule-create/components/course-select/course-select.component';
import {dayColors, hours} from '../schedule-board/constants';
import {textCutter} from '../../../utils/text-cutter';

export const MobileSchedule = ({ data }) => {
  const { days } = data;
  const [selectedCourse, setSelectedCourse] = useState('1');
  const [schedule, setSchedule]  = useState(days || []);
  
  console.log(data);
  
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.id);
  };
  
  useEffect(() => {
    console.log(selectedCourse);
  }, [selectedCourse])
  
  return (
    <BlockContainer>
      <div className={classes.header}>
        <div>
          <h2 className={classes.title}>SCHEDULE TABLE</h2>
          <p>Spring semester</p>
        </div>
        <div>
          <p className={classes.year}>2022-2023</p>
        </div>
      </div>
      <div className={classes.courses}>
        {courses.map((course) => (
          <CourseSelect
            id={course.id}
            key={course.id}
            title={course.title}
            onChange={handleCourseChange}
            selected={course.id === selectedCourse}
            style={{border: '1px solid #557CDE', height: '35px'}}
          />
        ))}
      </div>
      {
        schedule.map((day, dayIndex) => (
          <div key={day?.day || dayIndex} className={classes.day}>
            <div
              style={{ background: dayColors[dayIndex]}}
              className={classes.day_title}
            >
              <p>{day.day}</p>
            </div>
            {
              day.courses[+selectedCourse - 1]?.subjects.map((subject, subjectIndex) => {
                if (subject) {
                  return (
                    <div className={classes.day_subject}>
                      <div className={classes.day_subject_hours}>
                        <p>{hours[subjectIndex]?.from}</p>
                        <p>{hours[subject.numberOfHours === 1 ? subjectIndex : subjectIndex + subject.numberOfHours  - 1]?.till}</p>
                      </div>
                      <div className={classes.day_subject_data}>
                        <div className={classes.day_subject_data_left}>
                          <div className={classes.subject_top}>
                            <p>
                              { textCutter(subject?.title, 30)  }
                            </p>
                          </div>
                          <div className={classes.subject_bottom}>
                            <p className={classes.subject_bottom_name}>
                              { subject?.teachers }
                            </p>
                            <p className={classes.subject_bottom_lab}>
                              Lecture
                            </p>
                          </div>
                        </div>
                        <div className={classes.day_subject_data_right}>
                          <div className={classes.subject_classroom}>
                            <p>{ subject?.classroom }</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              })
            }
            
          </div>
        ))
      }
      
    </BlockContainer>
  );
};
