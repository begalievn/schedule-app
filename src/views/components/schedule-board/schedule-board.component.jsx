import React from 'react';

// styles
import classes from './style.module.scss';

const Subject = {
  title: 'Information Security',
  teachers: ['Teacher'],
  code: 'CS110',
  numberOfHours: 1,
}

const testSubjects = [null, null, null, Subject, null, null, null, null, null, null, null];

const scheduleDays = [
  {
    day: 'Monday',
    courses: [
      {
        course: 1,
        subjects: testSubjects,
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

const hours = [
  {
    hour: 1,
    from: '9:00',
    till: '9:40'
  },
  {
    hour: 2,
    from: '9:50',
    till: '10:30'
  },
  {
    hour: 3,
    from: '10:40',
    till: '11:20'
  },
  {
    hour: 4,
    from: '11:30',
    till: '12:10'
  },
  {
    hour: 5,
    from: '12:20',
    till: '13:00'
  },
  {
    hour: 'lunch',
    from: '13:00',
    till: '14:00',
    lunch: true,
  },
  {
    hour: 6,
    from: '14:00',
    till: '14:40',
  },
  {
    hour: 7,
    from: '14:50',
    till: '15:30'
  },
  {
    hour: 8,
    from: '15:40',
    till: '16:20',
  },
  {
    hour: 9,
    from: '16:30',
    till: '17:10',
  },
  {
    hour: 10,
    from: '17:20',
    till: '18:00'
  }
]

const lunchHour = 5;

const courseColors = [
  '#D2E1F7',
  '#ACCEE0',
  '#A7E0A2',
  '#8BCF9A',
];

const dayColors = [
  '#E88327',
  '#AAE827',
  '#F1F621',
  '#FF6969',
  '#EFAD2C',
  '#EFDC2C',
];

export const ScheduleBoard = () => {
  return (
    <div className={ classes.board }>
      <div className={ classes.header }>
        <h2 className={ classes.header_h2 }>COURSE  SCHEDULE</h2>
        <h2 className={ classes.header_h2 }>ALA-TOO INTERNATIONAL  UNIVERSITY -DEPARTMENT  OF  COMPUTER SCIENCE</h2>
        <h2 className={ classes.header_h2 }>2022-2023 FALL SEMESTER</h2>
      </div>
      <div className={ classes.hours_container }>
        <div className={ classes.hours_left }>
        </div>
        <div className={ classes.hours }>
          {
            hours.map((hour, index) => (
              <div key={index} className={ `${classes.hour} ${ index === lunchHour ? classes.lunch_hour : ''}` }>
                <div className={ classes.hour_order }>
                  { hour.hour + ` hour` }
                </div>
                <div className={ classes.hour_bottom }>
                  <div className={ classes.time }>{ hour.from }</div>
                  <div className={ classes.time }>{ hour.till }</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className={ classes.days }>
        {
          scheduleDays.map((day, index) => (
            <div className={ classes.day } key={ index } style={{ background: `${dayColors[index]}` }}>
              <div className={ classes.day_title }>{ day.day }</div>
              <div className={ classes.courses }>
                {
                  day.courses.map((course, index) => (
                    <div className={ classes.course } key={index} style={{ background: `${ courseColors[index] }`}}>
                      <div className={ classes.course_title }>
                        <h5>{ course.course }</h5>
                      </div>
                      <div className={ classes.subjects }>
                        {
                          course.subjects.map((cell, index) => (
                            <div className={ `${classes.subject_cell} ${ index === lunchHour ? classes.lunch_hour : '' }` }>
                              {
                                cell?.title && <div draggable={true} className={classes.cell_content} style={{ width: `${cell.numberOfHours * 100}%`}}>{cell?.title}</div>
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
