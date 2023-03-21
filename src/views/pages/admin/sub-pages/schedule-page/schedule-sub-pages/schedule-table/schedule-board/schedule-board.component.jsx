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
            hours.map((hour) => (
              <div className={ classes.hour }>
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
