import "./App.css";

const username = "Gyo";

const studentsArray = [
  "Stan",
  "Kyle",
  "Eric",
  "Kenny",
  "Butters",
  "Craig",
  "Tweek",
  "Token",
];

const theseStudents = (arr) => {
  const studentsList = arr.map((student, index) => {
    return <li key={index}>{student}</li>;
  });
  return <ul>{studentsList}</ul>;
};

const showTotal = (arr) => {
  const studentsCount = arr.length;
  return studentsCount;
};

function App() {
  return (
    <>
      <div>Welcome, {username}!</div>
      <div>{theseStudents(studentsArray)}</div>
      <div>This class has {showTotal(studentsArray)} students.</div>
    </>
  );
}

export default App;
