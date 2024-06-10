import "./App.css";

const username = "Angelo";

const students = [
  { name: "Pepe", grade: 3 },
  { name: "Juan", grade: 7 },
  { name: "Marcos", grade: 1 },
  { name: "Sara", grade: 3 },
  { name: "Manuel", grade: 10 },
  { name: "Falete", grade: 2 },
  { name: "Paca", grade: 5 },
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
  const passedStudents = array.filter((student) => student.grade >= 5);
  passedStudents.sort((a, b) => b.grade - a.grade);
  const studentList = passedStudents.map((student, index) => {
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
  const failedStudents = array.filter((student) => student.grade < 5);
  failedStudents.sort((a, b) => a.name.localeCompare(b.name));
  const studentList = failedStudents.map((student, index) => {
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
