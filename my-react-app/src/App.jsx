
import './App.css'

const lista = (alumnos) => {
  return (
    <ul>
      {alumnos.map((alumno, index) => 
        <li key={index}>{alumno}</li>
      )}
    </ul>);
}

const tabla = (alumnosTabla) => {
  return(
    <table>
      <caption>Notas de Alumnos</caption>
      <tr>
        <th>Nombre</th>
        <th>Grade</th>
      </tr>
      {alumnosTabla.map((alumno, index) => {
       return(
        <tr key={index}>
          <td>{alumno.name}</td>
          <td>{alumno.grade}</td>
        </tr>
       )
      })}
    </table>
  );
}

const tabla2 = (alumnosTabla) => {
  return (
    <table id="tabla2">
      <caption>Notas de Alumnos</caption>
      <tr>
        <th>Nombre</th>
        <th>Grade</th>
      </tr>
      {alumnosTabla.map((alumno, index) => {
        return (
          <tr
            key={index}
            style={
              alumno.grade < 5
                ? { backgroundColor: 'red' }
                : { backgroundColor: 'blue' }
            }
          >
            <td>{alumno.name}</td>
            <td>{alumno.grade}</td>
          </tr>
        )
      })}
    </table>
  )
}

function App() {
  const username = "Ale";
  const alumnos = ["Ale", "Zindy", "Borja", "Diana", "Flavio", "Tony"];
  const alumnosTabla = [
    { name: 'Ale', grade: 9.5 },
    { name: 'Zindy', grade: 7.2 },
    { name: 'Borja', grade: 1.3 },
    { name: 'Diana', grade: 8.7 },
    { name: 'Flavio', grade: 4.9 },
    { name: 'Tony', grade: 3.1 },
  ];
  return (
    <>
      <h2>Iteration 1 - Render Username from Data</h2>
      <p>Wellcome {username}!</p>

      <h2>Iteration 2 - Create a Students Array, show it in a bullet list</h2>
      {alumnos.length > 0 ? lista(alumnos) : <p>There are no students</p>}

      <h2>Iteration 3 - Show total number of Students</h2>
      <p>Hay {alumnos.length} alumnos.</p>

      <h2>Iteration 4 - Show the students in a table.</h2>
      {tabla(alumnosTabla)}

      <h2>Iteration 5 - Mark the students with failing grades</h2>
      {tabla2(alumnosTabla)}
    </>
  )
}

export default App
