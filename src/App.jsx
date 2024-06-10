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
        <td className={passed ? "passed" : "failed"}>{student.name}</td>
        <td className={passed ? "passed" : "failed"}>{student.grade}/10</td>
      </tr>
    );
  });
  return (
    <table id="table-all">
      <caption>All Students</caption>
      <tbody>
        <tr>
          <td>Student</td>
          <td>Grade</td>
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
          <td>{student.name}</td>
          <td>{student.grade}/10</td>
        </tr>
      );
    } else return;
  });
  return (
    <table id="table-passed">
      <caption>Students that passed</caption>
      <tbody>
        <tr>
          <td>Student</td>
          <td>Grade</td>
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
          <td>{student.name}</td>
          <td>{student.grade}/10</td>
        </tr>
      );
    } else return;
  });
  return (
    <table id="table-failed">
      <caption>Students that Failed</caption>
      <tbody>
        <tr>
          <td>Student</td>
          <td>Grade</td>
        </tr>
        {studentList}
      </tbody>
    </table>
  );
};

function App() {
  return (
    <>
      <section id="container">
        <p>Iteration 1</p>
        <div id="it1">Welcome {username}!</div>
        <p>Iteration 2</p>
        <div id="it2">{showStudents(students)}</div>
        <p>Iteration 3</p>
        <div id="it3">There are {countStudents(students)} students!</div>
        <p>Iteration 4&5</p>
        <div id="it4-5">{studentTable(students)}</div>
        <p>Bonus</p>
        <div id="bonus">{passedStudentsTable(students)}</div>
        <p>Extra Bonus</p>
        <div id="extra-bonus">{failedStudentsTable(students)}</div>
      </section>
    </>
  );
}

export default App;
