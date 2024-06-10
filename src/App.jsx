import "./App.css";

const Name = "Alma";
const array = [
    { name: 'Himar', grade: 4.5 },
    { name: 'David', grade: 7 },
    { name: 'Luis', grade: 3 },
];

const fail = (grade) => {
  return grade < 5 ? "active" : "inactive"
}

const orderedList = (
  <tbody>
    {array.map((student, index) => (
      <tr key={index} className={fail(student.grade)}> <td>{student.name}</td> <td>{student.grade}</td></tr>
    ))}
  </tbody>
);

const numberStudents = array.reduce((count) => count + 1, 0);

const table = (
  <table>
    <thead>
      <tr>
        <th>Name:</th>
        <th>Grade:</th>
      </tr>
    </thead>
    {orderedList}
     </table>
);






function App() {
  return (
    <>
      <h2>Welcome {Name}</h2>
      {table}
      <p>En la clase hay {numberStudents} estudiantes.</p>
      {fail}
    </>
  );
}

export default App;
