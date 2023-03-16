const Teacher = {

}

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


