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
    <table id="allStudents">
      <thead>All the students</thead>
      <tr>
        <th>Student</th>
        <th>Grade</th>
      </tr>
      {studentList}
    </table>
  );
};

const successStudents = (arr) => {
  const studentList = arr.map((student, index) => {
    if (student.grade >= 5) {
     return (
       <tr key={index}>
         <th>{student.name}</th>
         <th>{student.grade}/10</th>
       </tr>
     );
    } 
    return 
  });
  return (
    <table id="passStudents">
      <thead>Students who passed</thead>
      <tr>
        <th>Student</th>
        <th>Grade</th>
      </tr>
      {studentList}
    </table>
  );
};

const failStudents = (arr) => {
  const studentList = arr.map((student, index) => {
    if (student.grade < 5) {
      return (
        <tr key={index}>
          <th>{student.name}</th>
          <th>{student.grade}/10</th>
        </tr>
      );
    }
    return;
  });
  return (
    <table id="failStudents">
      <thead>Students who failed</thead>
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
      <div id="welcome">Welcome, {username}!</div>
      <div id="studentsList">{theseStudents(studentsArray)}</div>
      <div id="statement">This class has {showTotal(studentsArray)} students.</div>
      <div>{studentsTable(studentsArray)}</div>
      <div>{successStudents(studentsArray)}</div>
      <div>{failStudents(studentsArray)}</div>
    </>
  );
}

export default App;
