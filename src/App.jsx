import "./App.css";

const username = "Angelo";

const students = [
  { name: "Student 1", grade: 3 },
  { name: "Student 2", grade: 7 },
  { name: "Student 3", grade: 1 },
  { name: "Student 4", grade: 3 },
  { name: "Student 5", grade: 10 },
  { name: "Student 6", grade: 2 },
  { name: "Student 7", grade: 5 },
];

const showStudents = (array) => {
  const studentList = array.map((student, index) => {
    return <li key={index}>{student.name}</li>;
  });
  return <ul>{studentList}</ul>;
};

const countStudents = (array) => {
  const number = array.length;
  return number;
};

const studentTable = (array) => {
  let passed = true;
  const studentList = array.map((student, index) => {
    if (student.grade < 5) {
      passed = false;
    } else passed = true;
    return (
      <tr key={index}>
        <th className={passed ? "passed" : "failed"}>{student.name}</th>
        <th className={passed ? "passed" : "failed"}>{student.grade}/10</th>
      </tr>
    );
  });
  return (
    <table id="table-all">
      <caption>All Students</caption>
      <tbody>
        <tr>
          <th>Student</th>
          <th>Grade</th>
        </tr>
        {studentList}
      </tbody>
    </table>
  );
};

const passedStudentsTable = (array) => {
  const studentList = array.map((student, index) => {
    if (student.grade >= 5) {
      return (
        <tr key={index}>
          <th>{student.name}</th>
          <th>{student.grade}/10</th>
        </tr>
      );
    } else return;
  });
  return (
    <table id="table-passed">
      <caption>Students that passed</caption>
      <tbody>
        <tr>
          <th>Student</th>
          <th>Grade</th>
        </tr>
        {studentList}
      </tbody>
    </table>
  );
};

const failedStudentsTable = (array) => {
  const studentList = array.map((student, index) => {
    if (student.grade < 5) {
      return (
        <tr key={index}>
          <th>{student.name}</th>
          <th>{student.grade}/10</th>
        </tr>
      );
    } else return;
  });
  return (
    <table id="table-failed">
      <caption>Students that Failed</caption>
      <tbody>
        <tr>
          <th>Student</th>
          <th>Grade</th>
        </tr>
        {studentList}
      </tbody>
    </table>
  );
};

function App() {
  return (
    <>
      <div>Welcome {username}!</div>
      <div>{showStudents(students)}</div>
      <div>There are {countStudents(students)} students!</div>
      <div>{studentTable(students)}</div>
      <div>{passedStudentsTable(students)}</div>
      <div>{failedStudentsTable(students)}</div>
    </>
  );
}

export default App;
