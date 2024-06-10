import "./App.css";

const username = "Gyo";

const studentsArray = [
  { name: 'Stan', grade: 8 },
  { name: 'Kyle', grade: 10 },
  { name: 'Eric', grade: 3 },
  { name: 'Kenny', grade: 4 },
  { name: 'Butters', grade: 6 },
  { name: 'Craig', grade: 5 },
  { name: 'Tweek', grade: 2 },
  { name: 'Token', grade: 9 },
];

const theseStudents = (arr) => {
  const studentsList = arr.map((student, index) => {
    return <li key={index}>{student.name}</li>;
  });
  return <ul>{studentsList}</ul>;
};

const showTotal = (arr) => {
  const studentsCount = arr.length;
  return studentsCount;
};

const studentsTable = (arr) => {
  let pass = true;
  const studentList = arr.map((student, index) => {
    if (student.grade < 5) {
      pass = false;
    } else pass = true;
    return (
      <tr key={index}>
        <th className={pass ? "passed" : "failed"}>{student.name}</th>
        <th className={pass ? "passed" : "failed"}>{student.grade}/10</th>
      </tr>
    );
  });
  return (
    <table>
      <tr>
        <th>Student</th>
        <th>Grade</th>
      </tr>
      {studentList}
    </table>
  );
};

function App() {
  return (
    <>
      <div>Welcome, {username}!</div>
      <div>{theseStudents(studentsArray)}</div>
      <div>This class has {showTotal(studentsArray)} students.</div>
      <div>{studentsTable(studentsArray)}</div>
    </>
  );
}

export default App;
