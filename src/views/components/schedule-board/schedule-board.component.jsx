import React, {useState} from 'react';

// styles
import classes from './style.module.scss';
import {courseColors, dayColors, hours, lunchHour, scheduleDays} from './constants';

const Subject = {
  title: 'Information Security',
  teachers: ['Teacher'],
  code: 'CS110',
  numberOfHours: 2,
}


export const ScheduleBoard = () => {
  const [schedule, setSchedule] = useState(scheduleDays);
  
  const onDragStart = (event, stringData) => {
    const data = JSON.parse(stringData);
    event.dataTransfer.setData('subject', JSON.stringify(data.subject));
    event.dataTransfer.setData('oldPlace', JSON.stringify(data.oldPlace));
  }
  
  const onDrop = (event, place) => {
    const { dayIndex, courseIndex, subjectIndex } = place;
    console.log(place, 'place');
    const transferredSubject = JSON.parse(event.dataTransfer.getData('subject'));
    const oldPlace = JSON.parse(event.dataTransfer.getData('oldPlace'));
    const { oldDayIndex, oldCourseIndex, oldSubjectIndex } = oldPlace;
    console.log(oldPlace, 'oldPlace');
    console.log('transferredSubject', transferredSubject);
    const newState = JSON.parse(JSON.stringify(schedule));
    newState[oldDayIndex].courses[oldCourseIndex].subjects[oldSubjectIndex] = null;
    newState[dayIndex].courses[courseIndex].subjects[subjectIndex] = Subject;
    setSchedule(newState);
    console.log(newState);
  }
  
  return (
    <div className={classes.board}>
      <div className={classes.header}>
        <h2 className={classes.header_h2}>COURSE SCHEDULE</h2>
        <h2 className={classes.header_h2}>ALA-TOO INTERNATIONAL UNIVERSITY -DEPARTMENT OF COMPUTER SCIENCE</h2>
        <h2 className={classes.header_h2}>2022-2023 FALL SEMESTER</h2>
      </div>
      <div className={classes.hours_container}>
        <div className={classes.hours_left}>
        </div>
        <div className={classes.hours}>
          {
            hours.map((hour, index) => (
              <div key={index} className={`${classes.hour} ${index === lunchHour ? classes.lunch_hour : ''}`}>
                <div className={classes.hour_order}>
                  {hour.hour + ` hour`}
                </div>
                <div className={classes.hour_bottom}>
                  <div className={classes.time}>{hour.from}</div>
                  <div className={classes.time}>{hour.till}</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className={classes.days}>
        {
          schedule.map((day, dayIndex) => (
            <div className={classes.day} key={dayIndex} style={{background: `${dayColors[dayIndex]}`}}>
              <div className={classes.day_title}>{day.day}</div>
              <div className={classes.courses}>
                {
                  day.courses.map((course, courseIndex) => (
                    <div className={classes.course} key={courseIndex} style={{background: `${courseColors[courseIndex]}`}}>
                      <div className={classes.course_title}>
                        <h5>{course.course}</h5>
                      </div>
                      <div className={classes.subjects}>
                        {
                          course.subjects.map((cell, subjectIndex) => (
                            <div
                              key={subjectIndex}
                              className={`${classes.subject_cell} ${subjectIndex === lunchHour ? classes.lunch_hour : ''}`}
                              onDragOver={(e) => e.preventDefault()}
                              onDrop={(e) => onDrop(e, { dayIndex, courseIndex, subjectIndex })}
                            >
                              {
                                cell?.title
                                &&
                                <div
                                  draggable={true}
                                  onDragStart={(e) => onDragStart(e, JSON.stringify({ subject: cell, oldPlace: { oldDayIndex: dayIndex, oldCourseIndex: courseIndex, oldSubjectIndex: subjectIndex } }) )}
                                  className={classes.cell_content}
                                  style={{width: `${cell.numberOfHours * 100}%`}}
                                >
                                  {cell?.title}
                                </div>
                              }
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};
