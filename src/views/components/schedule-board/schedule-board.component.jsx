import React, {useEffect, useState} from 'react';
import { BasketIcon } from '../../../assets/icons';
import {courseColors, dayColors, hours, lunchHour, res4 } from './constants';
import {SubjectCell} from '../elements';
import {useCreateScheduleMutation} from '../../../store/api/schedule-api';
import { schedule1 } from './schedules';

// styles
import classes from './style.module.scss';

const Subject = {
  title: 'Information Security',
  teachers: ['Teacher'],
  code: 'CS110',
  numberOfHours: 3,
  classroom: 'B204'
}

const basketSubjects = [
  {
    course: '1 course',
    subjects: [Subject],
  },
  {
    course: '2 course',
    subjects: [],
  },
  {
    course: '3 course',
    subjects: [],
  },
  {
    course: '4 course',
    subjects: [],
  }
]


export const ScheduleBoard = ({ data }) => {
  const [schedule, setSchedule] = useState(data?.days || schedule1);
  const [basketOpen, setBasketOpen] = useState(false);
  const [subjectsInBasket, setSubjectsInBasket] = useState(basketSubjects);
  
  const [createSchedule] = useCreateScheduleMutation();
  
  const handleSaveSchedule = () => {
    const data = {
      year: new Date(),
      name: 'Early owl',
      semester: 1,
      days: schedule
    }
    createSchedule(data);
  }
  
  const handleBasketOpen = () => {
    setBasketOpen((prev) => !prev);
  }
  
  const onDragStart = (event, stringData) => {
    const data = JSON.parse(stringData);
    event.dataTransfer.setData('subject', JSON.stringify(data.subject));
    event.dataTransfer.setData('oldPlace', JSON.stringify(data.oldPlace));
  }
  
  const mergeSubjects = (arr) => {
    let left = 0;
    let right = 1;
    
    while(left < arr.length) {
      if (
        arr[left] &&
        arr[left].classroom === arr[right]?.classroom &&
        arr[left].code === arr[right]?.code
      ) {
        while (
          arr[left].classroom === arr[right]?.classroom &&
          arr[left].code === arr[right]?.code &&
          right < arr.length ) {
          arr[right] = null;
          right++;
        }
        arr[left].numberOfHours = right - left;
        left = right;
        right = right + 1;
      } else {
        left++;
        right++;
      }
    }
  }
  
  const calculateDroppingSubject = () => {
    const newState = JSON.parse(JSON.stringify(schedule));
    for(let day of newState) {
      for(let course of day.courses) {
        const arr = course.subjects;
        console.log(arr);
        mergeSubjects(arr);
      }
    }
    return newState;
  }
  
  const onDrop = (event, place) => {
    const { dayIndex, courseIndex, subjectIndex } = place;
    event.dataTransfer.setData('newPlace', JSON.stringify({ dayIndex, courseIndex, subjectIndex }));
    const transferredSubject = JSON.parse(event.dataTransfer.getData('subject'));
    
    const oldPlace = JSON.parse(event.dataTransfer.getData('oldPlace'));
    const { oldDayIndex, oldCourseIndex, oldSubjectIndex } = oldPlace;
    const newState = JSON.parse(JSON.stringify(schedule));
    newState[oldDayIndex].courses[oldCourseIndex].subjects[oldSubjectIndex] = null;
    newState[dayIndex].courses[courseIndex].subjects[subjectIndex] = transferredSubject;
    setSchedule(newState);
  }
  
  const onDropToBasket = (event, place) => {
  
  }
  
  useEffect(() => {
    const newState = calculateDroppingSubject();
    setSchedule(newState);
  }, []);
  
  return (
    <div className={classes.board_container}>
      {/*<button onClick={handleSaveSchedule}>Save</button>*/}
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
                                    <SubjectCell cell={cell} />
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
      <div className={`${classes.basket} ${basketOpen ? classes.basket_open : ''}`}>
        <div onClick={handleBasketOpen} className={classes.basket_icon}>
          {<BasketIcon />}
        </div>
        <div className={classes.basket_subjects_container}>
          {
            subjectsInBasket.map((basketCourse, index) => (
              <div key={index} className={classes.basket_course}>
                <div className={classes.basket_course_title}>
                  <h5>{basketCourse.course}</h5>
                </div>
                <div className={classes.basket_course_subjects}>
                  {
                    basketCourse.subjects.map((basketSubject, index) => (
                      <div key={index} className={classes.basket_course_subject}>
                        <SubjectCell cell={basketSubject} />
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
