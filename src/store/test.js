const Teacher = {}

const Subject = {
  title: 'Information Security',
  teachers: [Teacher],
  code: 'CS110',
}

const Schedule = [
  {
    day: 'Monday',
    courses: [
      {
        course: 1,
        subjects: [null, Subject, null, Subject, ...rest]
      }, {
        course: 2,
        subjects: [Subject]
      }, {
        course: 3,
        subjects: [Subject]
      }, {
        course: 4,
        subjects: [Subject]
      }
    ]
  },
  {
    day: 'Tuesday',
    courses: [
      {
        course: 1,
        subjects: [null, Subject, null, Subject, ...rest]
      }, {
        course: 2,
        subjects: [Subject]
      }, {
        course: 3,
        subjects: [Subject]
      }, {
        course: 4,
        subjects: [Subject]
      }
    ]
  }
];

const courseSubjects = new Array(12).fill(null);

const None = null;

const res = [{
  'courses': [{
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

