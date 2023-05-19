import React, {useEffect, useState} from 'react';
import { BasketIcon } from '../../../assets/icons';
import {courseColors, dayColors, hours, lunchHour } from './constants';
import {SubjectCell} from '../elements';
import {useCreateScheduleMutation} from '../../../store/api/schedule-api';
import { schedule1 } from './schedules';
import { ToastContainer, toast } from 'react-toastify';
import {debounce} from '../../../utils/debounce';

// styles
import classes from './style.module.scss';

const basketSubjectsInitialState = [
  {
    course: '1 course',
    subjects: [],
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
  const [subjectsInBasket, setSubjectsInBasket] = useState(basketSubjectsInitialState);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [oldPlace, setOldPlace] = useState(null);
  const [isPicked, setIsPicked] = useState(false);
  
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
  
  const handleToast = debounce(toast.warn, 400);
  
  const handleBasketOpen = () => {
    setBasketOpen((prev) => !prev);
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
        mergeSubjects(arr);
      }
    }
    return newState;
  }
  
  const removeSelectingColors = (target) => {
    target.classList.remove([classes.cell_available]);
    target.classList.remove([classes.cell_unavailable]);
    let hours = selectedSubject.numberOfHours - 1;
    let sibling;
    while (hours > 0) {
      sibling = target.nextSibling;
      sibling.classList.remove([classes.cell_available]);
      sibling.classList.remove([classes.cell_unavailable]);
      hours--;
    }
  }
  
  const onDragStart = (event, stringData) => {
    event.dataTransfer.setData('fromBasket', 0);
    const data = JSON.parse(stringData);
    event.dataTransfer.setData('subject', JSON.stringify(data.subject));
    event.dataTransfer.setData('oldPlace', JSON.stringify(data.oldPlace));
    setSelectedSubject(data.subject);
    setOldPlace(data.oldPlace);
    setIsPicked(true);
  }
  
  const handleDragStartFromBasket = (event, subject, place) => {
    setIsPicked(true);
    setOldPlace(null);
    event.dataTransfer.setData('fromBasket', 1);
    event.dataTransfer.setData('subject', JSON.stringify(subject));
    event.dataTransfer.setData('oldBasketPlace', JSON.stringify(place));
  }
  
  const isDropAvailable = (subject, place, oldPlace) => {
    const { dayIndex, courseIndex, subjectIndex } = place;
    const subjects = schedule[dayIndex].courses[courseIndex].subjects;
    const droppingPlace = subjects[subjectIndex];
    const subjectLength = subject.numberOfHours;
    
    if (subjectIndex + subjectLength > subjects.length) {
      return false;
    }
    
    for(let i = subjectIndex; i < (subjectIndex + subjectLength); i++) {
      if (
        subjects[i] &&
        subjects[i].title !== subject.title &&
        subjects[i].classroom !== subject.classroom
      ) {
        return false;
      }
      
      for(let j = 0; j < 4; j++) {
        if (oldPlace) {
          const { oldDayIndex, oldCourseIndex, oldSubjectIndex } = oldPlace;
          if (
            oldDayIndex === dayIndex &&
            oldCourseIndex === j &&
            oldSubjectIndex === i
          ) {
            continue;
          }
        }
        
        if (schedule[dayIndex].courses[j].subjects[i]?.code === subject?.code) {
          handleToast('Collusion with subjects');
          return false;
        }
        
        if (schedule[dayIndex].courses[j].subjects[i]?.classroom === subject?.classroom) {
          handleToast('Collusion with classrooms');
          return false;
        }
        
        if (schedule[dayIndex].courses[j].subjects[i]?.teachers === subject?.teachers) {
          handleToast('Collusion with teachers');
          return false;
        }
      }
    }
    
    if (!!droppingPlace) {
      return false;
    }
    
    return true;
  }
  
  const handleDragOver = (e, place) => {
    e.preventDefault();
    let hours = selectedSubject.numberOfHours - 1;
    let sibling;
    if (!isDropAvailable(selectedSubject, place, oldPlace)) {
      e.target.classList.add([classes.cell_unavailable]);
      while(hours > 0) {
        sibling = e.target.nextSibling;
        sibling.classList.add([classes.cell_unavailable]);
        hours--;
      }
    } else {
      e.target.classList.add([classes.cell_available]);
      while(hours > 0) {
        sibling = e.target.nextSibling;
        sibling.classList.add([classes.cell_available]);
        hours--;
      }
    }
  }
  
  const handleDragLeave = (e) => {
    e.preventDefault()
    removeSelectingColors(e.target);
  }
  
  const handleDragEnd = () => {
    setIsPicked((prev) => false);
    console.log('dragend');
  }
  
  const onDrop = (event, place) => {
    setIsPicked(false);
    removeSelectingColors(event.target);
    const fromBasket = +event.dataTransfer.getData('fromBasket');
    const newState = JSON.parse(JSON.stringify(schedule));
    const { dayIndex, courseIndex, subjectIndex } = place;
    const transferredSubject = JSON.parse(event.dataTransfer.getData('subject'));
    
    if (fromBasket) {
      if (!isDropAvailable(transferredSubject, place)) {
        return;
      }
      const { courseIndex, subjectIndex } = JSON.parse(event.dataTransfer.getData('oldBasketPlace'));
      const newBasketState = JSON.parse(JSON.stringify(subjectsInBasket));
      newBasketState[courseIndex].subjects = newBasketState[courseIndex].subjects.filter((el, index) => index !== subjectIndex);
      setSubjectsInBasket(newBasketState);
    } else {
      const oldPlace = JSON.parse(event.dataTransfer.getData('oldPlace'));
      if (!isDropAvailable(transferredSubject, place, oldPlace)) {
        return;
      }
      const { oldDayIndex, oldCourseIndex, oldSubjectIndex } = oldPlace;
      newState[oldDayIndex].courses[oldCourseIndex].subjects[oldSubjectIndex] = null;
    }
    
    newState[dayIndex].courses[courseIndex].subjects[subjectIndex] = transferredSubject;
    setSchedule(newState);
  }
  
  const handleDropToBasket = (event, place) => {
    setIsPicked(false);
    const fromBasket = +event.dataTransfer.getData('fromBasket');
    const transferredSubject = JSON.parse(event.dataTransfer.getData('subject'));
    const newBasketState = JSON.parse(JSON.stringify(subjectsInBasket));
    
    if (fromBasket) {
      const { courseIndex, subjectIndex } = JSON.parse(event.dataTransfer.getData('oldBasketPlace'));
      console.log({ courseIndex, subjectIndex });
      newBasketState[courseIndex].subjects = newBasketState[courseIndex].subjects.filter((el, index) => index !== subjectIndex);
    } else {
      const oldPlace = JSON.parse(event.dataTransfer.getData('oldPlace'));
      const { oldDayIndex, oldCourseIndex, oldSubjectIndex } = oldPlace;
      const newState = JSON.parse(JSON.stringify(schedule));
      newState[oldDayIndex].courses[oldCourseIndex].subjects[oldSubjectIndex] = null;
      setSchedule(newState);
    }
    
    const { courseIndex } = place;
    let len = transferredSubject.numberOfHours;
    transferredSubject.numberOfHours = 1;
    for(let i = 0; i < len; i++) {
      newBasketState[courseIndex]?.subjects?.unshift(transferredSubject);
    }
    setSubjectsInBasket(newBasketState);
  }
  
  console.log(subjectsInBasket);
  
  function updateBoard() {
    const newState = calculateDroppingSubject();
    setSchedule(newState);
  }
  
  useEffect(() => {
    updateBoard();
  }, []);
  
  useEffect(() => {
    updateBoard();
  }, [subjectsInBasket]);
  
  return (
    <div className={classes.board_container}>
      {/*<button onClick={handleSaveSchedule}>Save</button>*/}
      <ToastContainer />
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
              <div className={classes.day} key={dayIndex}>
                <div style={{background: `${dayColors[dayIndex]}`}} className={classes.day_title}>{day.day}</div>
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
                                onDragOver={(e) => handleDragOver(e, { dayIndex, courseIndex, subjectIndex })}
                                onDragLeave={(e) => handleDragLeave(e)}
                                onDrop={(e) => onDrop(e, { dayIndex, courseIndex, subjectIndex })}
                              >
                                {
                                  cell?.title
                                  &&
                                  <div
                                    draggable={true}
                                    onDragEnd={() => handleDragEnd()}
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
            subjectsInBasket.map((basketCourse, courseIndex) => (
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDropToBasket(e, { courseIndex })}
                key={courseIndex}
                className={classes.basket_course}
              >
                <div className={classes.basket_course_title}>
                  <h5>{basketCourse.course}</h5>
                </div>
                <div className={classes.basket_course_subjects}>
                  {
                    basketCourse.subjects.map((basketSubject, subjectIndex) => (
                      <div
                        draggable={true}
                        key={basketSubject?._id || subjectIndex}
                        className={classes.basket_course_subject}
                        onDragStart={(e) => handleDragStartFromBasket(e, basketSubject, { courseIndex, subjectIndex })}
                      >
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
