import "./App.css";

const studentsArray = ["Toni", "Karen", "Angelo", "Marta", "Tati"];
const numberStudents = studentsArray.length;
const studentsGrades = [
  { name: "Toni", grade: "14" },
  { name: "Karen", grade: "2" },
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
    const gradeStyle = {
      background: data.grade < 5 ? "rgb(209, 127, 121)" : "lightseagreen",
    };
    return (
      <tr key={index}>
        <th>{data.name}</th>
        <td style={gradeStyle}>{data.grade}</td>
      </tr>
    );
  });
  return (
    <table>
      <caption>REBOOT STUDENTS</caption>
      <th>NAME</th>
      <th>GRADE</th>
      {element1}
    </table>
  );
};

function App() {
  return (
    <>
      {" "}
      <div id="greetings">{greetMessage("Alma!")}</div>
      <div id="listStudents">{listStudents(studentsArray)}</div>
      <div id="count">There are {numberStudents} students in the class</div>
      {tableStudents(studentsGrades)}
    </>
  );
}

export default App;
