export const hours = [
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

export const dayColors = [
  '#E88327',
  '#AAE827',
  '#F1F621',
  '#FF6969',
  '#EFAD2C',
  '#EFDC2C',
];

export const lunchHour = 5;

export const courseColors = [
  '#D2E1F7',
  '#ACCEE0',
  '#A7E0A2',
  '#8BCF9A',
];

const Subject = {
  title: 'Information Security',
  teachers: ['Teacher'],
  code: 'CS110',
  numberOfHours: 1,
}

const testSubjects = [null, null, null, Subject, null, null, null, null, null, null, null];


export const scheduleDays = [
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

