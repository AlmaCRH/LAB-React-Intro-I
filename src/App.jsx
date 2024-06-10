import "./App.css";

function App() {
  //welcome
  const greetMessage = (alma) => {
    return `Welcome ${alma}!`;
  };

  //students array
  const students = ["pepe", "juan", "albert", "manuel"];

  //we use key (index) so react functions
  const showListStudents1 = (students) => {
    return students.map((name, index) => {
      return <li key={index}>{name}</li>;
    });
  };

  //students in an object
  const students2 = [
    { name: "pepe", grade: 4.5 },
    { name: "juan", grade: 7 },
    { name: "albert", grade: 4.5 },
    { name: "manuel", grade: 7 },
  ];

  const styleTable = {
    paddingLeft: "100px",
  };

  const tableStudents = (
    <table>
      <thead>
        <tr>
          <th style={styleTable}>Name</th>
          <th style={styleTable}>Grade</th>
        </tr>
      </thead>
      <tbody>
        {students2.map((student, index) => (
          <tr key={index}>
            <td style={styleTable}>{student.name}</td>
            <td style={styleTable}>{student.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  function colourTheFailingGrades(grade) {
    return grade < 5 ? "active" : "inactive";
  }

  const tableStudentsColours = (
    <table>
      <thead>
        <tr>
          <th style={styleTable}>Name</th>
          <th style={styleTable}>Grade</th>
        </tr>
      </thead>
      <tbody>
        {students2.map((student, index) => {
          const className = colourTheFailingGrades(student.grade);
          return (
            <tr key={index} className={className}>
              <td style={styleTable}>{student.name}</td>
              <td style={styleTable}>{student.grade}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  //we use key (index) so react functions
  const showListStudents2 = (students) => {
    return students.map((name, index) => {
      const className = colourTheFailingGrades(name.grade);
      return (
        <li key={index} className={className}>
          {name.name}, {name.grade}
        </li>
      );
    });
  };

  //ordering with filter

  const studentsApproved = students2
    .filter((student) => student.grade >= 5)
    .sort((a, b) => b.grade - a.grade);

  const tableBonus1 = (
    <table>
      <thead>
        <tr>
          <th style={styleTable}>Name</th>
          <th style={styleTable}>Grade</th>
        </tr>
      </thead>
      <tbody>
        {studentsApproved.map((student, index) => {
          return (
            <tr key={index}>
              <td style={styleTable}>{student.name}</td>
              <td style={styleTable}>{student.grade}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return (
    <>
      <h1>{greetMessage("Alma")}</h1>
      <ul>{showListStudents1(students)}</ul>
      <ul>{tableStudents}</ul>
      <p>the number of students is {students.length}</p>
      <ul>{tableStudentsColours}</ul>
      <ul>{}</ul>
    </>
  );
}

export default App;
