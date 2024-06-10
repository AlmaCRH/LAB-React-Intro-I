import "./App.css";

const studentsArray = ["Toni", "Karen", "Angelo", "Marta", "Tati"];
const numberStudents = studentsArray.length;
const studentsGrades = [
  { name: "Toni", grade: "14" },
  { name: "Karen", grade: "12" },
  { name: "Angelo", grade: "11" },
  { name: "Marta", grade: "12" },
  { name: "Tati", grade: "17" },
];

const greetMessage = (name) => {
  return <div>Hello {name} </div>;
};

const listStudents = (students) => {
  if (students.length === 0) {
    return "Theres no students";
  } else {
    const liNames = students.map((data, index) => {
      return <li key={index}>{data}</li>;
    });
    return <ul>{liNames}</ul>;
  }
};

const tableStudents = (object) => {
  const element1 = object.map((data, index) => {
    return (
      <tr key={index}>
        <th>{data.name}</th>
        <td>{data.grade}</td>
      </tr>
    );
  });
  return (
    <table>
      <caption>Students</caption>
      <th>Name</th>
      <th>Grade</th>
      {element1}
    </table>
  );
};

function App() {
  return (
    <>
      {" "}
      <div>{greetMessage("Alma!")}</div>
      <div>{listStudents(studentsArray)}</div>
      <div>There are {numberStudents} students in the class</div>
      {tableStudents(studentsGrades)}
    </>
  );
}

export default App;
