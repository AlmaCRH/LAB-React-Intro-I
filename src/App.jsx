import "./App.css";

function App() {
  //welcome
  const greetMessage = (alma) => {
    return `Welcome ${alma}!`;
  };

  //students array

  const students = ["pepe", "juan", "albert"];
  //we use key (index) so react functions
  const showList = (students) => {
    return students.map((name, index) => {
      return <li key={index}>{name}</li>;
    });
  };

  return (
    <>
      <h1>{greetMessage("Alma")}</h1>
      <ul>{showList(students)}</ul>
      <p>the number of students is {students.length}</p>
    </>
  );
}

export default App;
