// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  // {
  //   learner_id: 125,
  //   assignment_id: 3,
  //   submission: {
  //     submitted_at: "2023-01-25",
  //     score: 400
  //   }
  // },  assignment not due, information not needed within code
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ];

  // return result;
}



//Check course availability

function CourseAvailability(assignmentGroup, courseInfo) {
  if (assignmentGroup.course_id === courseInfo.id) {
    console.log('Available Course');
    return true;
  } else {
    throw new Error('Error: Course ID does not match. No available course.');
  }
}
console.log(CourseAvailability);


// get list of students by id# from LearnerSubmissions
function getStudents(submission) {
  try {
    if (submission.length === 0) {
      throw "Missing Learner ID";
    }
  } catch (error) {
    console.log(error);
    return;
  }

  let students = [];
  for (obj of submission) {
    if (students.includes(obj["learner_id"])) {
      continue; 
    } else {
      students.push(obj["learner_id"]);
    }
  }
  return students;
}

//Late Submissions

function lateSubmission(dueAtDate, submitteddate, points_possible) {
  if (submitteddate > dueAtDate) {
    console.log(points_possible - (points_possible * 0.1));
    return points_possible * 0.1; 
  } else {
    return 0;
  }
}