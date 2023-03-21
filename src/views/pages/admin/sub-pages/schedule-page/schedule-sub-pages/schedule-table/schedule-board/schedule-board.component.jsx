import React from 'react';

// styles
import classes from './style.module.scss';

const Teacher = {

}

const Subject = {
  title: 'Information Security',
  teachers: [Teacher],
  code: 'CS110',
}

const scheduleDays = [
  {
    day: 'Monday',
    courses: [
      {
        course: 1,
        subjects: new Array(11).fill(null)
      }, {
        course: 2,
        subjects: new Array(11).fill(null)
      }, {
        course: 3,
        subjects: new Array(11).fill(null)
      }, {
        course: 4,
        subjects: new Array(11).fill(null)
      }
    ]
  },
  {
    day: 'Tuesday',
    courses: [
      {
        course: 1,
        subjects: new Array(11).fill(null)
      }, {
        course: 2,
        subjects: new Array(11).fill(null)
      }, {
        course: 3,
        subjects: new Array(11).fill(null)
      }, {
        course: 4,
        subjects: new Array(11).fill(null)
      }
    ]
  },
  {
    day: 'Wednesday',
    courses: [
      {
        course: 1,
        subjects: new Array(11).fill(null)
      }, {
        course: 2,
        subjects: new Array(11).fill(null)
      }, {
        course: 3,
        subjects: new Array(11).fill(null)
      }, {
        course: 4,
        subjects: new Array(11).fill(null)
      }
    ]
  },
  {
    day: 'Thursday',
    courses: [
      {
        course: 1,
        subjects: new Array(11).fill(null)
      }, {
        course: 2,
        subjects: new Array(11).fill(null)
      }, {
        course: 3,
        subjects: new Array(11).fill(null)
      }, {
        course: 4,
        subjects: new Array(11).fill(null)
      }
    ]
  },
  {
    day: 'Friday',
    courses: [
      {
        course: 1,
        subjects: new Array(11).fill(null)
      }, {
        course: 2,
        subjects: new Array(11).fill(null)
      }, {
        course: 3,
        subjects: new Array(11).fill(null)
      }, {
        course: 4,
        subjects: new Array(11).fill(null)
      }
    ]
  }
];

export const ScheduleBoard = () => {
  return (
    <div className={ classes.board }>
      <div className={ classes.header }>
        <h2 className={ classes.header_h2 }>COURSE  SCHEDULE</h2>
        <h2 className={ classes.header_h2 }>ALA-TOO INTERNATIONAL  UNIVERSITY -DEPARTMENT  OF  COMPUTER SCIENCE</h2>
        <h2 className={ classes.header_h2 }>2022-2023 FALL SEMESTER</h2>
      </div>
      <div className={ classes.days }>
        {
          scheduleDays.map((day) => (
            <div className={ classes.day }>
              
              <div className={ classes.day_title }>{ day.day }</div>
              <div className={ classes.courses }>
                {
                  day.courses.map((course) => (
                    <div className={ classes.course }>
                      <div className={ classes.course_title }>
                        <h5>{ course.course }</h5>
                      </div>
                      <div className={ classes.subjects }>
                        {
                          course.subjects.map((cell) => (
                            <div className={ classes.subject_cell }></div>
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
