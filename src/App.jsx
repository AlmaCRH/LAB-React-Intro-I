import "./App.css";

const username = 'Angelo'

const students = ['Student1', 'Student2', 'Student3', 'Student4', 'Student5']

const showStudents = (array) => {
  const studentList = array.map((student, index)=> {
    return <li key={index}>{student}</li>
  })
  return <ul>{studentList}</ul>
}

const countStudents = (array) => {
  const number = array.length
  return number
}

function App() {
  return <>
  <div>Welcome {username}!</div>
  <div>{showStudents(students)}</div>
  <div>There are {countStudents(students)} students!</div>
  </>;
}

export default App;
