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
  '#e8e68f',
  '#AAE827',
  '#F1F621',
  '#FF6969',
  '#EFAD2C',
  '#ef942c',
];

export const lunchHour = 5;

// export const courseColors = [
//   '#D2E1F7',
//   '#ACCEE0',
//   '#A7E0A2',
//   '#8BCF9A',
// ];

// export const courseColors = [
//   '#7ED9D4',
//   '#96F0E2',
//   '#7ED9C2',
//   '#8FF7D3',
// ];

export const courseColors = [
  'rgba(117,217,198,0.5)',
  'rgba(141,240,207,0.5)',
  'rgba(117,217,169,0.5)',
  'rgba(150,250,188,0.5)',
];

const Subject = {
  title: 'Information Security',
  teachers: ['Teacher'],
  code: 'CS110',
  numberOfHours: 3,
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

const None = null;

export const res = [
  {
    'courses': [
      {
        'course': 1,
        'subjects': ['Introduction to Engineering and Computer Science',
          'English language',
          'Programming Language 1',
          'Calculus1',
          None,
          None,
          None,
          None,
          'Calculus1',
          None,
          'Ecology',
          'Physics 1']
      },
      {
        'course': 2,
        'subjects': [None,
          None,
          None,
          None,
          'Web Technologies',
          None,
          None,
          None,
          None,
          None,
          None,
          None]
      },
      {
        'course': 3,
        'subjects': [None,
          None,
          'Design & Analysis of Algorithms',
          None,
          'Pedagogical Internship',
          None,
          'Computer Networks and Telecommunication',
          'Probability and Statistics',
          None,
          'Mobile App Development',
          None,
          None]
      },
      {
        'course': 4,
        'subjects': [None,
          None,
          None,
          'Information Security',
          'Front-end Development',
          'Design & Software architecture',
          'Information Security',
          None,
          None,
          None,
          'Information Security',
          'Academic research']
      }],
    'day': 'Monday'
  },
  {
    'courses': [{
      'course': 1,
      'subjects': [None,
        'Physics 1',
        'Introduction to Engineering and Computer Science',
        'Calculus1',
        'Turkish language',
        None,
        'Physical training 1',
        None,
        None,
        None,
        None,
        None]
    },
      {
        'course': 2,
        'subjects': ['Electrotechnics&Electronics',
          None,
          None,
          None,
          None,
          'Object Oriented Programming (OOP)',
          'Web Technologies',
          'Discrete Mathematics',
          None,
          None,
          'Web Technologies',
          None]
      },
      {
        'course': 3,
        'subjects': [None,
          'Computer Networks and Telecommunication',
          None,
          'Probability and Statistics',
          None,
          None,
          None,
          'Software Engineering 1',
          None,
          None,
          'Software Engineering 1',
          None]
      },
      {
        'course': 4,
        'subjects': ['Robotics',
          None,
          None,
          None,
          None,
          'Data-Mining',
          'Industrial Internship',
          'Academic research', None,
          'Robotics',
          None,
          'Design & Software architecture']
      }],
    'day': 'Tuesday'
  },
  {
    'courses': [{
      'course': 1,
      'subjects': [None,
        'Programming Language 1',
        'Physics 1',
        None,
        'Physics 1',
        'Programming Language 1',
        None,
        'Russian language 1',
        None,
        None,
        None,
        None]
    },
      {
        'course': 2,
        'subjects': [None,
          None,
          None,
          None,
          'Kyrgyz Language and Literature',
          None,
          None,
          None,
          None,
          'Electrotechnics&Electronics',
          None,
          'Kyrgyz Language and Literature']
      },
      {
        'course': 3,
        'subjects': [None,
          'Software Engineering 1',
          None,
          'Software Engineering 1',
          'Mobile App Development',
          None,
          'Probability and Statistics',
          None,
          'Mobile App Development',
          None,
          'Mobile App Development',
          'Computer Networks and Telecommunication']
      },
      {
        'course': 4,
        'subjects': ['Front-end Development',
          'Industrial Internship',
          'Image Processing',
          'Image Processing',
          None,
          'Front-end Development',
          None,
          None,
          'Academic research',
          None,
          None,
          'Data-Mining']
      }],
    'day': 'Wednesday'
  },
  {
    'courses': [{
      'course': 1,
      'subjects': [None,
        'Physical training 1',
        None,
        'Introduction to Engineering and Computer Science',
        None,
        None,
        None,
        None,
        None,
        'Russian language 1',
        None,
        'English language']
    },
      {
        'course': 2,
        'subjects': ['Electrotechnics&Electronics',
          'Discrete Mathematics',
          None,
          'Electrotechnics&Electronics',
          'Kyrgyz Language and Literature',
          None,
          None,
          None,
          None,
          'Physical Education 3',
          'Object Oriented Programming (OOP)',
          None]
      },
      {
        'course': 3,
        'subjects': ['Design & Analysis of Algorithms',
          'Mobile App Development',
          'Design & Analysis of Algorithms',
          'Introduction to Enterpreunership',
          'Mobile App Development',
          'Computer Networks and Telecommunication',
          None,
          'Probability and Statistics',
          None,
          None,
          None, None]
      },
      {
        'course': 4,
        'subjects': ['Front-end Development',
          'Robotics',
          None,
          'Human Computer Interaction',
          'Design & Software architecture',
          'Image Processing',
          'Robotics',
          'Industrial Internship',
          None,
          None,
          'Data-Mining',
          None]
      }],
    'day': 'Thursday'
  },
  {
    'courses': [{
      'course': 1,
      'subjects': ['Calculus1',
        'Physics 1',
        'English language',
        None,
        None,
        None,
        'Ecology',
        None,
        'Turkish language',
        'Programming Language 1',
        'English language',
        None]
    },
      {
        'course': 2,
        'subjects': ['Kyrgyz Language and Literature',
          'Object Oriented Programming (OOP)',
          None,
          'Electrotechnics&Electronics',
          None,
          'Object Oriented Programming (OOP)',
          None,
          None,
          None,
          None,
          None,
          None]
      },
      {
        'course': 3,
        'subjects': [None,
          'Design & Analysis of Algorithms',
          None,
          'Computer Networks and Telecommunication',
          None,
          'Introduction to Enterpreunership',
          None,
          None,
          'Pedagogical Internship',
          None,
          None,
          None]
      },
      {
        'course': 4,
        'subjects': [None,
          'Human Computer Interaction',
          None,
          'Human Computer Interaction',
          'Image Processing',
          'Data-Mining',
          'Information Security',
          None,
          'Information Security',
          None,
          None,
          'Data-Mining']
      }],
    'day': 'Friday'
  }]

export const res2 = [{
  'courses': [{
    'course': 1,
    'subjects': ['Introduction to Engineering and Computer Science, Dastan Bayizbekov, B203',
      'Turkish language, Alex Blare, B202',
      'Programming Language 1, Zoro Roronoa, B204',
      None,
      None,
      None,
      None,
      None,
      'Russian language 1, Nami Cat, B204',
      'Calculus1, Zoro Roronoa, B204',
      None]
  },
    {
      'course': 2,
      'subjects': [None,
        'Kyrgyz Language and Literature, Niko Robin, B202',
        None,
        None,
        None,
        None,
        None,
        None,
        None,
        None,
        'Electrotechnics&Electronics, Franky Cyborg, B205']
    },
    {
      'course': 3,
      'subjects': ['Software Engineering 1, Ruslan Isaev, B202',
        'Design & Analysis of Algorithms, Dim Shayakhmetov, B205',
        None,
        'Design & Analysis of Algorithms, Dim Shayakhmetov, B201',
        'Design & Analysis of Algorithms, Dim Shayakhmetov, B201',
        'Design & Analysis of Algorithms, Dim Shayakhmetov, B201',
        'Software Engineering 1, Ruslan Isaev, B204',
        None,
        'Design & Analysis of Algorithms, Dim Shayakhmetov, B205',
        None,
        'Mobile App Development, Nurmuhammed Abdullaev, B204']
    },
    {
      'course': 4,
      'subjects': ['Image Processing, Ruslan Isaev, B204',
        'Data-Mining, Jimbei Warrior, B204',
        'Industrial Internship, Burul Shambetov, B201',
        'Industrial Internship, Burul Shambetov, B202',
        None,
        'Image Processing, Ruslan Isaev, B205',
        None,
        None,
        None,
        'Front-end Development, Ruslan Isaev, B201',
        None]
    }],
  'day': 'Monday'
},
  {
    'courses': [{
      'course': 1,
      'subjects': ['Programming Language 1, Zoro Roronoa, B204',
        None,
        None,
        'Introduction to Engineering and Computer Science,Dastan Bayizbekov, B205',
        'Physics 1, Zoro Roronoa, B203',
        None,
        'Physics 1, Zoro Roronoa, B201',
        None,
        None,
        'Calculus1, Zoro Roronoa, B204',
        'Physics 1, Zoro Roronoa, B205']
    },
      {
        'course': 2,
        'subjects': ['Electrotechnics&Electronics, Franky Cyborg, B202',
          None,
          'Electrotechnics&Electronics, Franky Cyborg, B203',
          'Electrotechnics&Electronics, Franky Cyborg, B202',
          None,
          None,
          None,
          None,
          None,
          'Kyrgyz Language and Literature, Niko Robin, B205',
          None]
      },
      {
        'course': 3, 'subjects': [None,
          'Mobile App Development, Nurmuhammed Abdullaev, B201',
          'Design & Analysis of Algorithms, Dim Shayakhmetov, B202',
          None,
          'Design & Analysis of Algorithms, Dim Shayakhmetov, B202',
          'Mobile App Development, Nurmuhammed Abdullaev, B203',
          None,
          'Computer Networks and Telecommunication, Imtiyaz Gulbarga, B202',
          None,
          None,
          None]
      },
      {
        'course': 4,
        'subjects': [None,
          'Academic research, Usopp Sniper, B204',
          None,
          None,
          None,
          'Information Security, Imtiyaz Gulbarga, B204',
          'Academic research, Usopp Sniper, B204',
          'Academic research, Usopp Sniper, B204',
          'Design & Software architecture, Sanji Vinsmoke, B202',
          None,
          'Robotics, Ruslan Isaev, B204']
      }],
    'day': 'Tuesday'
  },
  {
    'courses': [{
      'course': 1,
      'subjects': [None,
        None,
        'Turkish language, Alex Blare, B204',
        'Physics 1, Zoro Roronoa, B203',
        None,
        None,
        None,
        None,
        None,
        None,
        None]
    },
      {
        'course': 2,
        'subjects': [None,
          None,
          None,
          None,
          None,
          None,
          'Discrete Mathematics, Zoro Roronoa, B205',
          'Physical Education 3, Franky Cyborg, B205',
          None,
          None,
          'Kyrgyz Language and Literature, Niko Robin, B202']
      },
      {
        'course': 3,
        'subjects': ['Probability and Statistics, Zoro Roronoa, B202',
          'Computer Networks and Telecommunication, Imtiyaz Gulbarga, B202',
          'Mobile App Development, Nurmuhammed Abdullaev, B203',
          None,
          'Design & Analysis of Algorithms, Dim Shayakhmetov, B204',
          'Pedagogical Internship, Burul Shambetov, B204',
          None,
          'Mobile App Development, Nurmuhammed Abdullaev, B201',
          None,
          None,
          None]
      },
      {
        'course': 4,
        'subjects': [None,
          'Human Computer Interaction, Burul Shambetov, B205',
          None,
          'Front-end Development, Ruslan Isaev, B201',
          'Robotics, Ruslan Isaev, B202',
          'Human Computer Interaction, Burul Shambetov, B204',
          None,
          None,
          'Academic research, Usopp Sniper, B203',
          None,
          'Information Security, Imtiyaz Gulbarga, B205']
      }],
    'day': 'Wednesday'
  },
  {
    'courses': [{
      'course': 1,
      'subjects': [None, 'Calculus1, Zoro Roronoa, B202',
        'Ecology, Niko Robin, B202',
        None,
        None,
        'English language, Alex Blare, B203',
        'Russian language 1, Nami Cat, B201',
        None,
        'Programming Language 1, Zoro Roronoa, B204',
        None,
        'Calculus1, Zoro Roronoa, B201']
    },
      {
        'course': 2,
        'subjects': ['Object Oriented Programming (OOP), Sanji Vinsmoke, B202',
          None,
          None,
          None,
          None,
          'Web Technologies, Sanji Vinsmoke, B202',
          None,
          'Discrete Mathematics, Zoro Roronoa, B202',
          'Physical Education 3, Franky Cyborg, B203',
          None,
          None]
      },
      {
        'course': 3,
        'subjects': ['Pedagogical Internship, Burul Shambetov, B201',
          None,
          None,
          'Probability and Statistics, Zoro Roronoa, B203',
          None,
          'Mobile App Development, Nurmuhammed Abdullaev, B202',
          None,
          'Design & Analysis of Algorithms, Dim Shayakhmetov, B202',
          'Introduction to Enterpreunership, Ban Black, B205',
          'Software Engineering 1, Ruslan Isaev, B204',
          None]
      },
      {
        'course': 4,
        'subjects': ['Information Security, Imtiyaz Gulbarga, B203',
          'Image Processing, Ruslan Isaev, B202',
          'Information Security, Imtiyaz Gulbarga, B204',
          'Industrial Internship, Burul Shambetov, B201',
          None,
          'Image Processing, Ruslan Isaev, B204',
          None,
          None,
          'Front-end Development, Ruslan Isaev, B205',
          None,
          'Robotics, Ruslan Isaev, B201']
      }],
    'day': 'Thursday'
  },
  {
    'courses': [{
      'course': 1,
      'subjects': ['Introduction to Engineering and Computer Science, Dastan Bayizbekov, B204',
        'Programming Language 1, Zoro Roronoa, B201',
        None,
        'English language, Alex Blare, B201',
        None,
        None,
        None,
        None,
        'Physics 1, Zoro Roronoa, B204',
        'Turkish language, Alex Blare, B202',
        'Physical training 1, Franky Cyborg, B204']
    },
      {
        'course': 2,
        'subjects': ['Electrotechnics&Electronics, Franky Cyborg, B201',
          'Discrete Mathematics, Zoro Roronoa, B201',
          'Discrete Mathematics, Zoro Roronoa, B202',
          'Web Technologies, Sanji Vinsmoke, B205',
          None,
          None,
          None,
          None,
          None,
          None,
          None]
      },
      {
        'course': 3,
        'subjects': ['Mobile App Development, Nurmuhammed Abdullaev, B203',
          'Computer Networks and Telecommunication, Imtiyaz Gulbarga, B202', 'Pedagogical Internship, Burul Shambetov, B202',
          None,
          None,
          'Computer Networks and Telecommunication, Imtiyaz Gulbarga, B201',
          None,
          'Introduction to Enterpreunership, Ban Black, B203',
          None,
          None,
          'Probability and Statistics, Zoro Roronoa, B203']
      },
      {
        'course': 4,
        'subjects': [None,
          None,
          'Human Computer Interaction, Burul Shambetov, B205',
          None,
          'Front-end Development, Ruslan Isaev, B204',
          'Information Security, Imtiyaz Gulbarga, B201',
          'Design & Software architecture, Sanji Vinsmoke, B202',
          None,
          None,
          None,
          'Human Computer Interaction, Burul Shambetov, B201']
      }],
    'day': 'Friday'
  }]

export const res3 = [{
  'courses': [{
    'course': 1,
    'subjects': [{
      'code': 'COM101',
      'numberOfHours': 1,
      'teachers': 'Dastan Bayizbekov',
      'title': 'Introduction to Engineering and Computer Science'
    },
      {
        'code': 'COM111',
        'numberOfHours': 1,
        'teachers': 'Alex Blare',
        'title': 'Turkish language'
      },
      {
        'code': 'COM103',
        'numberOfHours': 1,
        'teachers': 'Zoro Roronoa',
        'title': 'Programming Language 1'
      },
      None,
      None,
      None,
      None,
      None,
      {
        'code': 'MDE105',
        'numberOfHours': 1,
        'teachers': 'Nami Cat',
        'title': 'Russian language 1'
      },
      {
        'code': 'COM105',
        'numberOfHours': 1,
        'teachers': 'Zoro Roronoa',
        'title': 'Calculus1'
      },
      None]
  },
    {
      'course': 2,
      'subjects': [None,
        {
          'code': 'MDE201',
          'numberOfHours': 1,
          'teachers': 'Niko Robin',
          'title': 'Kyrgyz Language and Literature'
        },
        None,
        None,
        None,
        None,
        None,
        None,
        None,
        None,
        {
          'code': 'COM209',
          'numberOfHours': 1,
          'teachers': 'Franky Cyborg',
          'title': 'Electrotechnics&Electronics'
        }]
    },
    {
      'course': 3,
      'subjects': [{
        'code': 'COM305',
        'numberOfHours': 1,
        'teachers': 'Ruslan Isaev',
        'title': 'Software Engineering 1'
      },
        {
          'code': 'COM301',
          'numberOfHours': 1,
          'teachers': 'Dim Shayakhmetov',
          'title': 'Design & Analysis of Algorithms'
        },
        None,
        {
          'code': 'COM301',
          'numberOfHours': 1,
          'teachers': 'Dim Shayakhmetov',
          'title': 'Design & Analysis of Algorithms'
        },
        {
          'code': 'COM301',
          'numberOfHours': 1,
          'teachers': 'Dim Shayakhmetov',
          'title': 'Design & Analysis of Algorithms'
        },
        {
          'code': 'COM301',
          'numberOfHours': 1,
          'teachers': 'Dim Shayakhmetov',
          'title': 'Design & Analysis of Algorithms'
        },
        {
          'code': 'COM305',
          'numberOfHours': 1,
          'teachers': 'Ruslan Isaev',
          'title': 'Software Engineering 1'
        },
        None,
        {
          'code': 'COM301',
          'numberOfHours': 1,
          'teachers': 'Dim Shayakhmetov',
          'title': 'Design & Analysis of Algorithms'
        },
        None,
        {
          'code': 'COM303',
          'numberOfHours': 1,
          'teachers': 'Nurmuhammed Abdullaev',
          'title': 'Mobile App Development'
        }]
    },
    {
      'course': 4,
      'subjects': [{
        'code': 'COM431',
        'numberOfHours': 1,
        'teachers': 'Ruslan Isaev',
        'title': 'Image Processing'
      },
        {
          'code': 'COM440',
          'numberOfHours': 1,
          'teachers': 'Jimbei Warrior',
          'title': 'Data-Mining'
        },
        {
          'code': 'COM421',
          'numberOfHours': 1,
          'teachers': 'Burul Shambetov',
          'title': 'Industrial Internship'
        },
        {
          'code': 'COM421',
          'numberOfHours': 1,
          'teachers': 'Burul Shambetov',
          'title': 'Industrial Internship'
        },
        None,
        {
          'code': 'COM431',
          'numberOfHours': 1,
          'teachers': 'Ruslan Isaev',
          'title': 'Image Processing'
        },
        None,
        None,
        None,
        {
          'code': 'COM427',
          'numberOfHours': 1,
          'teachers': 'Ruslan Isaev',
          'title': 'Front-end Development'
        },
        None]
    }],
  'day': 'Monday'
}, {
  'courses': [{
    'course': 1,
    'subjects': [{
      'code': 'COM103',
      'numberOfHours': 1,
      'teachers': 'Zoro Roronoa',
      'title': 'Programming Language 1'
    },
      None,
      None,
      {
        'code': 'COM101',
        'numberOfHours': 1,
        'teachers': 'Dastan Bayizbekov',
        'title': 'Introduction to Engineering and Computer Science'
      },
      {
        'code': 'COM107',
        'numberOfHours': 1,
        'teachers': 'Zoro Roronoa',
        'title': 'Physics 1'
      },
      None,
      {
        'code': 'COM107',
        'numberOfHours': 1,
        'teachers': 'Zoro Roronoa',
        'title': 'Physics 1'
      },
      None,
      None,
      {
        'code': 'COM105',
        'numberOfHours': 1,
        'teachers': 'Zoro Roronoa',
        'title': 'Calculus1'
      },
      {
        'code': 'COM107',
        'numberOfHours': 1,
        'teachers': 'Zoro Roronoa',
        'title': 'Physics 1'
      }]
  },
    {
      'course': 2,
      'subjects': [{
        'code': 'COM209',
        'numberOfHours': 1,
        'teachers': 'Franky Cyborg',
        'title': 'Electrotechnics&Electronics'
      },
        None,
        {
          'code': 'COM209',
          'numberOfHours': 1,
          'teachers': 'Franky Cyborg',
          'title': 'Electrotechnics&Electronics'
        },
        {
          'code': 'COM209',
          'numberOfHours': 1,
          'teachers': 'Franky Cyborg',
          'title': 'Electrotechnics&Electronics'
        },
        None,
        None,
        None,
        None,
        None,
        {
          'code': 'MDE201',
          'numberOfHours': 1,
          'teachers': 'Niko Robin',
          'title': 'Kyrgyz Language and Literature'
        },
        None]
    },
    {
      'course': 3,
      'subjects': [None,
        {
          'code': 'COM303',
          'numberOfHours': 1,
          'teachers': 'Nurmuhammed Abdullaev',
          'title': 'Mobile App Development'
        },
        {
          'code': 'COM301',
          'numberOfHours': 1,
          'teachers': 'Dim Shayakhmetov',
          'title': 'Design & Analysis of Algorithms'
        },
        None,
        {
          'code': 'COM301',
          'numberOfHours': 1,
          'teachers': 'Dim Shayakhmetov',
          'title': 'Design & Analysis of Algorithms'
        },
        {
          'code': 'COM303',
          'numberOfHours': 1,
          'teachers': 'Nurmuhammed Abdullaev',
          'title': 'Mobile App Development'
        },
        None,
        {
          'code': 'COM307',
          'numberOfHours': 1,
          'teachers': 'Imtiyaz Gulbarga',
          'title': 'Computer Networks and Telecommunication'
        },
        None,
        None, None]
    },
    {
      'course': 4,
      'subjects': [None,
        {
          'code': 'COM402',
          'numberOfHours': 1,
          'teachers': 'Usopp Sniper',
          'title': 'Academic research'
        },
        None,
        None,
        None,
        {
          'code': 'COM401',
          'numberOfHours': 1,
          'teachers': 'Imtiyaz Gulbarga',
          'title': 'Information Security'
        },
        {
          'code': 'COM402',
          'numberOfHours': 1,
          'teachers': 'Usopp Sniper',
          'title': 'Academic research'
        },
        {
          'code': 'COM402',
          'numberOfHours': 1,
          'teachers': 'Usopp Sniper',
          'title': 'Academic research'
        },
        {
          'code': 'COM441',
          'numberOfHours': 1,
          'teachers': 'Sanji Vinsmoke',
          'title': 'Design & Software architecture'
        },
        None,
        {
          'code': 'COM443',
          'numberOfHours': 1,
          'teachers': 'Ruslan Isaev',
          'title': 'Robotics'
        }]
    }],
  'day': 'Tuesday'
},
  {
    'courses': [{
      'course': 1,
      'subjects': [None,
        None,
        {
          'code': 'COM111',
          'numberOfHours': 1,
          'teachers': 'Alex Blare',
          'title': 'Turkish language'
        },
        {
          'code': 'COM107',
          'numberOfHours': 1,
          'teachers': 'Zoro Roronoa',
          'title': 'Physics 1'
        },
        None,
        None,
        None,
        None,
        None,
        None,
        None]
    },
      {
        'course': 2,
        'subjects': [None,
          None,
          None,
          None,
          None,
          None,
          {
            'code': 'COM207',
            'numberOfHours': 1,
            'teachers': 'Zoro Roronoa',
            'title': 'Discrete Mathematics'
          },
          {
            'code': 'MDE227',
            'numberOfHours': 1,
            'teachers': 'Franky Cyborg',
            'title': 'Physical Education 3'
          },
          None,
          None,
          {
            'code': 'MDE201',
            'numberOfHours': 1,
            'teachers': 'Niko Robin',
            'title': 'Kyrgyz Language and Literature'
          }]
      },
      {
        'course': 3,
        'subjects': [{
          'code': 'COM309',
          'numberOfHours': 1,
          'teachers': 'Zoro Roronoa',
          'title': 'Probability and Statistics'
        },
          {
            'code': 'COM307',
            'numberOfHours': 1,
            'teachers': 'Imtiyaz Gulbarga',
            'title': 'Computer Networks and Telecommunication'
          },
          {
            'code': 'COM303',
            'numberOfHours': 1,
            'teachers': 'Nurmuhammed Abdullaev',
            'title': 'Mobile App Development'
          },
          None,
          {
            'code': 'COM301',
            'numberOfHours': 1,
            'teachers': 'Dim Shayakhmetov',
            'title': 'Design & Analysis of Algorithms'
          },
          {
            'code': 'COM313',
            'numberOfHours': 1,
            'teachers': 'Burul Shambetov',
            'title': 'Pedagogical Internship'
          },
          None,
          {
            'code': 'COM303',
            'numberOfHours': 1,
            'teachers': 'Nurmuhammed Abdullaev',
            'title': 'Mobile App Development'
          },
          None,
          None,
          None]
      },
      {
        'course': 4,
        'subjects': [None,
          {
            'code': 'COM409',
            'numberOfHours': 1,
            'teachers': 'Burul Shambetov',
            'title': 'Human Computer Interaction'
          },
          None,
          {
            'code': 'COM427',
            'numberOfHours': 1,
            'teachers': 'Ruslan Isaev',
            'title': 'Front-end Development'
          },
          {
            'code': 'COM443',
            'numberOfHours': 1,
            'teachers': 'Ruslan Isaev',
            'title': 'Robotics'
          }, {
            'code': 'COM409',
            'numberOfHours': 1,
            'teachers': 'Burul Shambetov',
            'title': 'Human Computer Interaction'
          },
          None,
          None,
          {
            'code': 'COM402',
            'numberOfHours': 1,
            'teachers': 'Usopp Sniper',
            'title': 'Academic research'
          },
          None,
          {
            'code': 'COM401',
            'numberOfHours': 1,
            'teachers': 'Imtiyaz Gulbarga',
            'title': 'Information Security'
          }]
      }],
    'day': 'Wednesday'
  }, {
    'courses': [{
      'course': 1,
      'subjects': [None,
        {
          'code': 'COM105',
          'numberOfHours': 1,
          'teachers': 'Zoro Roronoa',
          'title': 'Calculus1'
        },
        {
          'code': 'MDE119',
          'numberOfHours': 1,
          'teachers': 'Niko Robin',
          'title': 'Ecology'
        },
        None,
        None,
        {
          'code': 'COM109',
          'numberOfHours': 1,
          'teachers': 'Alex Blare',
          'title': 'English language'
        },
        {
          'code': 'MDE105',
          'numberOfHours': 1,
          'teachers': 'Nami Cat',
          'title': 'Russian language 1'
        },
        None,
        {
          'code': 'COM103',
          'numberOfHours': 1,
          'teachers': 'Zoro Roronoa',
          'title': 'Programming Language 1'
        },
        None,
        {
          'code': 'COM105',
          'numberOfHours': 1,
          'teachers': 'Zoro Roronoa',
          'title': 'Calculus1'
        }]
    },
      {
        'course': 2,
        'subjects': [{
          'code': 'COM201',
          'numberOfHours': 1,
          'teachers': 'Sanji Vinsmoke',
          'title': 'Object Oriented Programming (OOP)'
        },
          None,
          None,
          None,
          None,
          {
            'code': 'COM203',
            'numberOfHours': 1,
            'teachers': 'Sanji Vinsmoke',
            'title': 'Web Technologies'
          },
          None,
          {
            'code': 'COM207',
            'numberOfHours': 1,
            'teachers': 'Zoro Roronoa',
            'title': 'Discrete Mathematics'
          },
          {
            'code': 'MDE227',
            'numberOfHours': 1,
            'teachers': 'Franky Cyborg',
            'title': 'Physical Education 3'
          },
          None,
          None]
      },
      {
        'course': 3,
        'subjects': [{
          'code': 'COM313',
          'numberOfHours': 1,
          'teachers': 'Burul Shambetov',
          'title': 'Pedagogical Internship'
        },
          None,
          None,
          {
            'code': 'COM309',
            'numberOfHours': 1,
            'teachers': 'Zoro Roronoa',
            'title': 'Probability and Statistics'
          },
          None,
          {
            'code': 'COM303',
            'numberOfHours': 1,
            'teachers': 'Nurmuhammed Abdullaev',
            'title': 'Mobile App Development'
          },
          None,
          {
            'code': 'COM301',
            'numberOfHours': 1,
            'teachers': 'Dim Shayakhmetov',
            'title': 'Design & Analysis of Algorithms'
          },
          {
            'code': 'COM311',
            'numberOfHours': 1,
            'teachers': 'Ban Black',
            'title': 'Introduction to Enterpreunership'
          },
          {
            'code': 'COM305',
            'numberOfHours': 1,
            'teachers': 'Ruslan Isaev', 'title': 'Software Engineering 1'
          },
          None]
      },
      {
        'course': 4,
        'subjects': [{
          'code': 'COM401',
          'numberOfHours': 1,
          'teachers': 'Imtiyaz Gulbarga',
          'title': 'Information Security'
        },
          {
            'code': 'COM431',
            'numberOfHours': 1,
            'teachers': 'Ruslan Isaev',
            'title': 'Image Processing'
          },
          {
            'code': 'COM401',
            'numberOfHours': 1,
            'teachers': 'Imtiyaz Gulbarga',
            'title': 'Information Security'
          },
          {
            'code': 'COM421',
            'numberOfHours': 1,
            'teachers': 'Burul Shambetov',
            'title': 'Industrial Internship'
          },
          None,
          {
            'code': 'COM431',
            'numberOfHours': 1,
            'teachers': 'Ruslan Isaev',
            'title': 'Image Processing'
          },
          None,
          None,
          {
            'code': 'COM427',
            'numberOfHours': 1,
            'teachers': 'Ruslan Isaev',
            'title': 'Front-end Development'
          },
          None,
          {
            'code': 'COM443',
            'numberOfHours': 1,
            'teachers': 'Ruslan Isaev',
            'title': 'Robotics'
          }]
      }],
    'day': 'Thursday'
  }, {
    'courses': [{
      'course': 1,
      'subjects': [{
        'code': 'COM101',
        'numberOfHours': 1,
        'teachers': 'Dastan Bayizbekov',
        'title': 'Introduction to Engineering and Computer Science'
      },
        {
          'code': 'COM103',
          'numberOfHours': 1,
          'teachers': 'Zoro Roronoa',
          'title': 'Programming Language 1'
        },
        None,
        {
          'code': 'COM109',
          'numberOfHours': 1,
          'teachers': 'Alex Blare',
          'title': 'English language'
        },
        None,
        None,
        None,
        None,
        {
          'code': 'COM107',
          'numberOfHours': 1,
          'teachers': 'Zoro Roronoa',
          'title': 'Physics 1'
        },
        {
          'code': 'COM111',
          'numberOfHours': 1,
          'teachers': 'Alex Blare',
          'title': 'Turkish language'
        },
        {
          'code': 'MDE131',
          'numberOfHours': 1,
          'teachers': 'Franky Cyborg',
          'title': 'Physical training 1'
        }]
    },
      {
        'course': 2,
        'subjects': [{
          'code': 'COM209',
          'numberOfHours': 1,
          'teachers': 'Franky Cyborg',
          'title': 'Electrotechnics&Electronics'
        },
          {
            'code': 'COM207',
            'numberOfHours': 1,
            'teachers': 'Zoro Roronoa',
            'title': 'Discrete Mathematics'
          },
          {
            'code': 'COM207',
            'numberOfHours': 1,
            'teachers': 'Zoro Roronoa',
            'title': 'Discrete Mathematics'
          },
          {
            'code': 'COM203',
            'numberOfHours': 1,
            'teachers': 'Sanji Vinsmoke',
            'title': 'Web Technologies'
          },
          None,
          None,
          None,
          None,
          None,
          None,
          None]
      },
      {
        'course': 3,
        'subjects': [{
          'code': 'COM303',
          'numberOfHours': 1,
          'teachers': 'Nurmuhammed Abdullaev',
          'title': 'Mobile App Development'
        },
          {
            'code': 'COM307',
            'numberOfHours': 1,
            'teachers': 'Imtiyaz Gulbarga',
            'title': 'Computer Networks and Telecommunication'
          },
          {
            'code': 'COM313',
            'numberOfHours': 1,
            'teachers': 'Burul Shambetov',
            'title': 'Pedagogical Internship'
          },
          None,
          None,
          {
            'code': 'COM307',
            'numberOfHours': 1,
            'teachers': 'Imtiyaz Gulbarga',
            'title': 'Computer Networks and Telecommunication'
          },
          None,
          {
            'code': 'COM311',
            'numberOfHours': 1,
            'teachers': 'Ban Black',
            'title': 'Introduction to Enterpreunership'
          },
          None, {
            'code': 'COM309',
            'numberOfHours': 1,
            'teachers': 'Zoro Roronoa',
            'title': 'Probability and Statistics'
          }]
      },
      {
        'course': 4,
        'subjects': [None,
          None,
          {
            'code': 'COM409',
            'numberOfHours': 1,
            'teachers': 'Burul Shambetov',
            'title': 'Human Computer Interaction'
          },
          None,
          {
            'code': 'COM427',
            'numberOfHours': 1,
            'teachers': 'Ruslan Isaev',
            'title': 'Front-end Development'
          },
          {
            'code': 'COM401',
            'numberOfHours': 1,
            'teachers': 'Imtiyaz Gulbarga',
            'title': 'Information Security'
          },
          {
            'code': 'COM441',
            'numberOfHours': 1,
            'teachers': 'Sanji Vinsmoke',
            'title': 'Design & Software architecture'
          },
          None,
          None,
          None,
          {
            'code': 'COM409',
            'numberOfHours': 1,
            'teachers': 'Burul Shambetov',
            'title': 'Human Computer Interaction'
          }]
      }],
    'day': 'Friday'
  }]


export const res4 = [{'courses': [{'course': 1,
    'subjects': [{'classroom': 'B203',
      'code': 'COM101',
      'numberOfHours': 1,
      'teachers': 'Dastan Bayizbekov',
      'title': 'Introduction to Engineering and Computer Science'},
      {'classroom': 'B202',
        'code': 'COM111',
        'numberOfHours': 1,
        'teachers': 'Alex Blare',
        'title': 'Turkish language'},
      {'classroom': 'B204',
        'code': 'COM103',
        'numberOfHours': 2,
        'teachers': 'Zoro Roronoa',
        'title': 'Programming Language 1'},
      None,
      None,
      None,
      None,
      None,
      {'classroom': 'B204',
        'code': 'MDE105',
        'numberOfHours': 1,
        'teachers': 'Nami Cat',
        'title': 'Russian language 1'},
      {'classroom': 'B204',
        'code': 'COM105',
        'numberOfHours': 1,
        'teachers': 'Zoro Roronoa',
        'title': 'Calculus1'},
      None]},
    {'course': 2,
      'subjects': [None,
        {'classroom': 'B202',
          'code': 'MDE201',
          'numberOfHours': 1,
          'teachers': 'Niko Robin',
          'title': 'Kyrgyz Language and Literature'},
        None,
        None,
        None,
        None,
        None,
        None,
        None,
        None,
        {'classroom': 'B205',
          'code': 'COM209',
          'numberOfHours': 1,
          'teachers': 'Franky Cyborg',
          'title': 'Electrotechnics&Electronics'}]},
    {'course': 3,
      'subjects': [{'classroom': 'B202',
        'code': 'COM305',
        'numberOfHours': 1,
        'teachers': 'Ruslan Isaev',
        'title': 'Software Engineering 1'},
        {'classroom': 'B205',
          'code': 'COM301',
          'numberOfHours': 1,
          'teachers': 'Dim Shayakhmetov',
          'title': 'Design & Analysis of Algorithms'},
        None,
        {'classroom': 'B201',
          'code': 'COM301',
          'numberOfHours': 1,
          'teachers': 'Dim Shayakhmetov',
          'title': 'Design & Analysis of Algorithms'},
        {'classroom': 'B201',
          'code': 'COM301',
          'numberOfHours': 1,
          'teachers': 'Dim Shayakhmetov',
          'title': 'Design & Analysis of Algorithms'},
        {'classroom': 'B201',
          'code': 'COM301',
          'numberOfHours': 1,
          'teachers': 'Dim Shayakhmetov',
          'title': 'Design & Analysis of Algorithms'},
        {'classroom': 'B204',
          'code': 'COM305','numberOfHours': 1,
          'teachers': 'Ruslan Isaev',
          'title': 'Software Engineering 1'},
        None,
        {'classroom': 'B205',
          'code': 'COM301',
          'numberOfHours': 1,
          'teachers': 'Dim Shayakhmetov',
          'title': 'Design & Analysis of Algorithms'},
        None,
        {'classroom': 'B204',
          'code': 'COM303',
          'numberOfHours': 1,
          'teachers': 'Nurmuhammed Abdullaev',
          'title': 'Mobile App Development'}]},
    {'course': 4,
      'subjects': [{'classroom': 'B204',
        'code': 'COM431',
        'numberOfHours': 1,
        'teachers': 'Ruslan Isaev',
        'title': 'Image Processing'},
        {'classroom': 'B204',
          'code': 'COM440',
          'numberOfHours': 1,
          'teachers': 'Jimbei Warrior',
          'title': 'Data-Mining'},
        {'classroom': 'B201',
          'code': 'COM421',
          'numberOfHours': 1,
          'teachers': 'Burul Shambetov',
          'title': 'Industrial Internship'},
        {'classroom': 'B202',
          'code': 'COM421',
          'numberOfHours': 1,
          'teachers': 'Burul Shambetov',
          'title': 'Industrial Internship'},
        None,
        {'classroom': 'B205',
          'code': 'COM431',
          'numberOfHours': 1,
          'teachers': 'Ruslan Isaev',
          'title': 'Image Processing'},
        None,
        None,
        None,
        {'classroom': 'B201',
          'code': 'COM427',
          'numberOfHours': 1,
          'teachers': 'Ruslan Isaev',
          'title': 'Front-end Development'},
        None]}],
  'day': 'Monday'},
  {'courses': [{'course': 1,
      'subjects': [{'classroom': 'B204',
        'code': 'COM103',
        'numberOfHours': 1,
        'teachers': 'Zoro Roronoa',
        'title': 'Programming Language 1'},
        None,
        None,
        {'classroom': 'B205',
          'code': 'COM101',
          'numberOfHours': 1,
          'teachers': 'Dastan Bayizbekov',
          'title': 'Introduction to Engineering and Computer Science'},
        {'classroom': 'B203',
          'code': 'COM107',
          'numberOfHours': 1,
          'teachers': 'Zoro Roronoa',
          'title': 'Physics 1'},
        None,
        {'classroom': 'B201',
          'code': 'COM107',
          'numberOfHours': 1,
          'teachers': 'Zoro Roronoa',
          'title': 'Physics 1'},
        None,
        None,
        {'classroom': 'B204',
          'code': 'COM105',
          'numberOfHours': 1,'teachers': 'Zoro Roronoa',
          'title': 'Calculus1'},
        {'classroom': 'B205',
          'code': 'COM107',
          'numberOfHours': 1,
          'teachers': 'Zoro Roronoa',
          'title': 'Physics 1'}]},
      {'course': 2,
        'subjects': [{'classroom': 'B202',
          'code': 'COM209',
          'numberOfHours': 1,
          'teachers': 'Franky Cyborg',
          'title': 'Electrotechnics&Electronics'},
          None,
          {'classroom': 'B203',
            'code': 'COM209',
            'numberOfHours': 1,
            'teachers': 'Franky Cyborg',
            'title': 'Electrotechnics&Electronics'},
          {'classroom': 'B202',
            'code': 'COM209',
            'numberOfHours': 1,
            'teachers': 'Franky Cyborg',
            'title': 'Electrotechnics&Electronics'},
          None,
          None,
          None,
          None,
          None,
          {'classroom': 'B205',
            'code': 'MDE201',
            'numberOfHours': 1,
            'teachers': 'Niko Robin',
            'title': 'Kyrgyz Language and Literature'},
          None]},
      {'course': 3,
        'subjects': [None,
          {'classroom': 'B201',
            'code': 'COM303',
            'numberOfHours': 1,
            'teachers': 'Nurmuhammed Abdullaev',
            'title': 'Mobile App Development'},
          {'classroom': 'B202',
            'code': 'COM301',
            'numberOfHours': 1,
            'teachers': 'Dim Shayakhmetov',
            'title': 'Design & Analysis of Algorithms'},
          None,
          {'classroom': 'B202',
            'code': 'COM301',
            'numberOfHours': 1,
            'teachers': 'Dim Shayakhmetov',
            'title': 'Design & Analysis of Algorithms'},
          {'classroom': 'B203',
            'code': 'COM303',
            'numberOfHours': 1,
            'teachers': 'Nurmuhammed Abdullaev',
            'title': 'Mobile App Development'},
          None,
          {'classroom': 'B202',
            'code': 'COM307',
            'numberOfHours': 1,
            'teachers': 'Imtiyaz Gulbarga',
            'title': 'Computer Networks and Telecommunication'},
          None,
          None,
          None]},
      {'course': 4,
        'subjects': [None,
          {'classroom': 'B204',
            'code': 'COM402',
            'numberOfHours': 1,
            'teachers': 'Usopp Sniper',
            'title': 'Academic research'},
          None,
          None,
          None,
          {'classroom': 'B204',
            'code': 'COM401',
            'numberOfHours': 1,
            'teachers': 'Imtiyaz Gulbarga','title': 'Information Security'},
          {'classroom': 'B204',
            'code': 'COM402',
            'numberOfHours': 1,
            'teachers': 'Usopp Sniper',
            'title': 'Academic research'},
          {'classroom': 'B204',
            'code': 'COM402',
            'numberOfHours': 1,
            'teachers': 'Usopp Sniper',
            'title': 'Academic research'},
          {'classroom': 'B202',
            'code': 'COM441',
            'numberOfHours': 1,
            'teachers': 'Sanji Vinsmoke',
            'title': 'Design & Software architecture'},
          None,
          {'classroom': 'B204',
            'code': 'COM443',
            'numberOfHours': 1,
            'teachers': 'Ruslan Isaev',
            'title': 'Robotics'}]}],
    'day': 'Tuesday'},
  {'courses': [{'course': 1,
      'subjects': [None,
        None,
        {'classroom': 'B204',
          'code': 'COM111',
          'numberOfHours': 1,
          'teachers': 'Alex Blare',
          'title': 'Turkish language'},
        {'classroom': 'B203',
          'code': 'COM107',
          'numberOfHours': 1,
          'teachers': 'Zoro Roronoa',
          'title': 'Physics 1'},
        None,
        None,
        None,
        None,
        None,
        None,
        None]},
      {'course': 2,
        'subjects': [None,
          None,
          None,
          None,
          None,
          None,
          {'classroom': 'B205',
            'code': 'COM207',
            'numberOfHours': 1,
            'teachers': 'Zoro Roronoa',
            'title': 'Discrete Mathematics'},
          {'classroom': 'B205',
            'code': 'MDE227',
            'numberOfHours': 1,
            'teachers': 'Franky Cyborg',
            'title': 'Physical Education 3'},
          None,
          None,
          {'classroom': 'B202',
            'code': 'MDE201',
            'numberOfHours': 1,
            'teachers': 'Niko Robin',
            'title': 'Kyrgyz Language and Literature'}]},
      {'course': 3,
        'subjects': [{'classroom': 'B202',
          'code': 'COM309',
          'numberOfHours': 1,
          'teachers': 'Zoro Roronoa',
          'title': 'Probability and Statistics'},
          {'classroom': 'B202',
            'code': 'COM307',
            'numberOfHours': 1,
            'teachers': 'Imtiyaz Gulbarga',
            'title': 'Computer Networks and Telecommunication'},
          {'classroom': 'B203',
            'code': 'COM303',
            'numberOfHours': 1,
            'teachers': 'Nurmuhammed Abdullaev',
            'title': 'Mobile App Development'},
          None,{'classroom': 'B204',
            'code': 'COM301',
            'numberOfHours': 1,
            'teachers': 'Dim Shayakhmetov',
            'title': 'Design & Analysis of Algorithms'},
          {'classroom': 'B204',
            'code': 'COM313',
            'numberOfHours': 1,
            'teachers': 'Burul Shambetov',
            'title': 'Pedagogical Internship'},
          None,
          {'classroom': 'B201',
            'code': 'COM303',
            'numberOfHours': 1,
            'teachers': 'Nurmuhammed Abdullaev',
            'title': 'Mobile App Development'},
          None,
          None,
          None]},
      {'course': 4,
        'subjects': [None,
          {'classroom': 'B205',
            'code': 'COM409',
            'numberOfHours': 1,
            'teachers': 'Burul Shambetov',
            'title': 'Human Computer Interaction'},
          None,
          {'classroom': 'B201',
            'code': 'COM427',
            'numberOfHours': 1,
            'teachers': 'Ruslan Isaev',
            'title': 'Front-end Development'},
          {'classroom': 'B202',
            'code': 'COM443',
            'numberOfHours': 1,
            'teachers': 'Ruslan Isaev',
            'title': 'Robotics'},
          {'classroom': 'B204',
            'code': 'COM409',
            'numberOfHours': 1,
            'teachers': 'Burul Shambetov',
            'title': 'Human Computer Interaction'},
          None,
          None,
          {'classroom': 'B203',
            'code': 'COM402',
            'numberOfHours': 1,
            'teachers': 'Usopp Sniper',
            'title': 'Academic research'},
          None,
          {'classroom': 'B205',
            'code': 'COM401',
            'numberOfHours': 1,
            'teachers': 'Imtiyaz Gulbarga',
            'title': 'Information Security'}]}],
    'day': 'Wednesday'},
  {'courses': [{'course': 1,
      'subjects': [None,
        {'classroom': 'B202',
          'code': 'COM105',
          'numberOfHours': 1,
          'teachers': 'Zoro Roronoa',
          'title': 'Calculus1'},
        {'classroom': 'B202',
          'code': 'MDE119',
          'numberOfHours': 1,
          'teachers': 'Niko Robin',
          'title': 'Ecology'},
        None,
        None,
        {'classroom': 'B203',
          'code': 'COM109',
          'numberOfHours': 1,
          'teachers': 'Alex Blare',
          'title': 'English language'},
        {'classroom': 'B201',
          'code': 'MDE105',
          'numberOfHours': 1,
          'teachers': 'Nami Cat',
          'title': 'Russian language 1'},
        None,
        {'classroom': 'B204',
          'code': 'COM103','numberOfHours': 1,
          'teachers': 'Zoro Roronoa',
          'title': 'Programming Language 1'},
        None,
        {'classroom': 'B201',
          'code': 'COM105',
          'numberOfHours': 1,
          'teachers': 'Zoro Roronoa',
          'title': 'Calculus1'}]},
      {'course': 2,
        'subjects': [{'classroom': 'B202',
          'code': 'COM201',
          'numberOfHours': 1,
          'teachers': 'Sanji Vinsmoke',
          'title': 'Object Oriented Programming (OOP)'},
          None,
          None,
          None,
          None,
          {'classroom': 'B202',
            'code': 'COM203',
            'numberOfHours': 1,
            'teachers': 'Sanji Vinsmoke',
            'title': 'Web Technologies'},
          None,
          {'classroom': 'B202',
            'code': 'COM207',
            'numberOfHours': 1,
            'teachers': 'Zoro Roronoa',
            'title': 'Discrete Mathematics'},
          {'classroom': 'B203',
            'code': 'MDE227',
            'numberOfHours': 1,
            'teachers': 'Franky Cyborg',
            'title': 'Physical Education 3'},
          None,
          None]},
      {'course': 3,
        'subjects': [{'classroom': 'B201',
          'code': 'COM313',
          'numberOfHours': 1,
          'teachers': 'Burul Shambetov',
          'title': 'Pedagogical Internship'},
          None,
          None,
          {'classroom': 'B203',
            'code': 'COM309',
            'numberOfHours': 1,
            'teachers': 'Zoro Roronoa',
            'title': 'Probability and Statistics'},
          None,
          {'classroom': 'B202',
            'code': 'COM303',
            'numberOfHours': 1,
            'teachers': 'Nurmuhammed Abdullaev',
            'title': 'Mobile App Development'},
          None,
          {'classroom': 'B202',
            'code': 'COM301',
            'numberOfHours': 1,
            'teachers': 'Dim Shayakhmetov',
            'title': 'Design & Analysis of Algorithms'},
          {'classroom': 'B205',
            'code': 'COM311',
            'numberOfHours': 1,
            'teachers': 'Ban Black',
            'title': 'Introduction to Enterpreunership'},
          {'classroom': 'B204',
            'code': 'COM305',
            'numberOfHours': 1,
            'teachers': 'Ruslan Isaev',
            'title': 'Software Engineering 1'},
          None]},
      {'course': 4,
        'subjects': [{'classroom': 'B203',
          'code': 'COM401',
          'numberOfHours': 1,
          'teachers': 'Imtiyaz Gulbarga',
          'title': 'Information Security'},
          {'classroom': 'B202',
            'code': 'COM431',
            'numberOfHours': 1,'teachers': 'Ruslan Isaev',
            'title': 'Image Processing'},
          {'classroom': 'B204',
            'code': 'COM401',
            'numberOfHours': 1,
            'teachers': 'Imtiyaz Gulbarga',
            'title': 'Information Security'},
          {'classroom': 'B201',
            'code': 'COM421',
            'numberOfHours': 1,
            'teachers': 'Burul Shambetov',
            'title': 'Industrial Internship'},
          None,
          {'classroom': 'B204',
            'code': 'COM431',
            'numberOfHours': 1,
            'teachers': 'Ruslan Isaev',
            'title': 'Image Processing'},
          None,
          None,
          {'classroom': 'B205',
            'code': 'COM427',
            'numberOfHours': 1,
            'teachers': 'Ruslan Isaev',
            'title': 'Front-end Development'},
          None,
          {'classroom': 'B201',
            'code': 'COM443',
            'numberOfHours': 1,
            'teachers': 'Ruslan Isaev',
            'title': 'Robotics'}]}],
    'day': 'Thursday'},
  {'courses': [{'course': 1,
      'subjects': [{'classroom': 'B204',
        'code': 'COM101',
        'numberOfHours': 1,
        'teachers': 'Dastan Bayizbekov',
        'title': 'Introduction to Engineering and Computer Science'},
        {'classroom': 'B201',
          'code': 'COM103',
          'numberOfHours': 1,
          'teachers': 'Zoro Roronoa',
          'title': 'Programming Language 1'},
        None,
        {'classroom': 'B201',
          'code': 'COM109',
          'numberOfHours': 1,
          'teachers': 'Alex Blare',
          'title': 'English language'},
        None,
        None,
        None,
        None,
        {'classroom': 'B204',
          'code': 'COM107',
          'numberOfHours': 1,
          'teachers': 'Zoro Roronoa',
          'title': 'Physics 1'},
        {'classroom': 'B202',
          'code': 'COM111',
          'numberOfHours': 1,
          'teachers': 'Alex Blare',
          'title': 'Turkish language'},
        {'classroom': 'B204',
          'code': 'MDE131',
          'numberOfHours': 1,
          'teachers': 'Franky Cyborg',
          'title': 'Physical training 1'}]},
      {'course': 2,
        'subjects': [{'classroom': 'B201',
          'code': 'COM209',
          'numberOfHours': 1,
          'teachers': 'Franky Cyborg',
          'title': 'Electrotechnics&Electronics'},
          {'classroom': 'B201',
            'code': 'COM207',
            'numberOfHours': 1,
            'teachers': 'Zoro Roronoa',
            'title': 'Discrete Mathematics'},
          {'classroom': 'B202','code': 'COM207',
            'numberOfHours': 1,
            'teachers': 'Zoro Roronoa',
            'title': 'Discrete Mathematics'},
          {'classroom': 'B205',
            'code': 'COM203',
            'numberOfHours': 1,
            'teachers': 'Sanji Vinsmoke',
            'title': 'Web Technologies'},
          None,
          None,
          None,
          None,
          None,
          None,
          None]},
      {'course': 3,
        'subjects': [{'classroom': 'B203',
          'code': 'COM303',
          'numberOfHours': 1,
          'teachers': 'Nurmuhammed Abdullaev',
          'title': 'Mobile App Development'},
          {'classroom': 'B202',
            'code': 'COM307',
            'numberOfHours': 1,
            'teachers': 'Imtiyaz Gulbarga',
            'title': 'Computer Networks and Telecommunication'},
          {'classroom': 'B202',
            'code': 'COM313',
            'numberOfHours': 1,
            'teachers': 'Burul Shambetov',
            'title': 'Pedagogical Internship'},
          None,
          None,
          {'classroom': 'B201',
            'code': 'COM307',
            'numberOfHours': 1,
            'teachers': 'Imtiyaz Gulbarga',
            'title': 'Computer Networks and Telecommunication'},
          None,
          {'classroom': 'B203',
            'code': 'COM311',
            'numberOfHours': 1,
            'teachers': 'Ban Black',
            'title': 'Introduction to Enterpreunership'},
          None,
          None,
          {'classroom': 'B203',
            'code': 'COM309',
            'numberOfHours': 1,
            'teachers': 'Zoro Roronoa',
            'title': 'Probability and Statistics'}]},
      {'course': 4,
        'subjects': [None,
          None,
          {'classroom': 'B205',
            'code': 'COM409',
            'numberOfHours': 1,
            'teachers': 'Burul Shambetov',
            'title': 'Human Computer Interaction'},
          None,
          {'classroom': 'B204',
            'code': 'COM427',
            'numberOfHours': 1,
            'teachers': 'Ruslan Isaev',
            'title': 'Front-end Development'},
          {'classroom': 'B201',
            'code': 'COM401',
            'numberOfHours': 1,
            'teachers': 'Imtiyaz Gulbarga',
            'title': 'Information Security'},
          {'classroom': 'B202',
            'code': 'COM441',
            'numberOfHours': 1,
            'teachers': 'Sanji Vinsmoke',
            'title': 'Design & Software architecture'},
          None,
          None,
          None,
          {'classroom': 'B201',
            'code': 'COM409','numberOfHours': 1,
            'teachers': 'Burul Shambetov',
            'title': 'Human Computer Interaction'}]}],
    'day': 'Friday'}]
