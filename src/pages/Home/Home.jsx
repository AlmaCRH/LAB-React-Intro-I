import "./Home.css";
const students = [
  { name: "Lolo", grade: 5 },
  { name: "Ambrosio", grade: 4 },
  { name: "Cirilo", grade: 7 },
  { name: "Ermerejildo", grade: 3 },
  { name: "Paco", grade: 4 },
  { name: "Manueh", grade: 4 },
  { name: "Pepe", grade: 8 },
  { name: "Francisco", grade: 3 },
  { name: "Luciano", grade: 5 },
  { name: "Pedro", grade: 10 },
  { name: "Dailos", grade: 3 },
];

const getGreeting = (user) => {
  return <h1>Welcome, {user}</h1>;
};

const listNames = (students) => {
  const listStudents = students.map((student, id) => {
    return <li key={id}>{student.name}</li>;
  });
  return (
    <>
      <ul>{listStudents}</ul>
      <div class="total">Total Students: {listStudents.length} students</div>
    </>
  );
};

const studentsTable = (students) => {
  const tableStudents = students.map((student, id) => {
    if (student.grade < 5)
      return (
        <tr class="failed" key={id}>
          <td>{student.name}</td>
          <td>{student.grade}</td>
        </tr>
      );
    else
      return (
        <tr class="passed" key={id}>
          <td>{student.name}</td>
          <td>{student.grade}</td>
        </tr>
      );
  });
  return (
    <>
      <table>
        <thead>
          <b>Students</b>
        </thead>
        <tr class="data">
          <td>
            <u>Name</u>
          </td>
          <td>
            <u>Grade</u>
          </td>
        </tr>
        {tableStudents}
      </table>
    </>
  );
};

const passedStudents = (students) => {
  const tableStudents = students.map((student, id) => {
    if (student.grade >= 5)
      return (
        <tr class="passed" key={id}>
          <td>{student.name}</td>
          <td>{student.grade}</td>
        </tr>
      );
  });
  return (
    <>
      <table>
        <thead>
          <b>Students</b>
        </thead>
        <tr class="data">
          <td>
            <u>Name</u>
          </td>
          <td>
            <u>Grade</u>
          </td>
        </tr>
        {tableStudents}
      </table>
    </>
  );
};

const studentsTableSorted = (students) => {
  let aux;
  for (let i = 0; i < students.length; i++) {
    for (let j = i + 1; j < students.length; j++) {
      aux = students[i];
      if (students[j].name[0] < aux.name[0]) {
        students[i] = students[j];
        students[j] = aux;
      }
    }
  }
  const tableStudents = students.map((student, id) => {
    if (student.grade < 5)
      return (
        <tr class="failed" key={id}>
          <td>{student.name}</td>
          <td>{student.grade}</td>
        </tr>
      );
  });
  return (
    <>
      <table>
        <thead>
          <b>Students</b>
        </thead>
        <tr class="data">
          <td>
            <u>Name</u>
          </td>
          <td>
            <u>Grade</u>
          </td>
        </tr>
        {tableStudents}
      </table>
    </>
  );
};

const Home = () => {
  let names = ["Sergio", "Rayco", "Sixtolo", "Alfredo"];
  return (
    <>
      {getGreeting(names[Math.floor(Math.random() * names.length)])}
      {listNames(students)}
      {studentsTable(students)}
      {passedStudents(students)}
      {studentsTableSorted(students)}
    </>
  );
};

export default Home;
