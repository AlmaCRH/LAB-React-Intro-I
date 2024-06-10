
import './App.css'

function App() {
  const name = "David";
  const lista = [
    { name: 'John Doe', grade: 4.5 },
    { name: 'Jane Doe', grade: 7 },
    { name:'Ronaldinho', grade:9}
];
  const ulList = function (arr){
    const arrayLi= arr.map((student,index)=>{
        return <tr key={index} className={answerFail(student.grade)}><td>{student.name}</td> <td>{student.grade}</td></tr>
     
    })
     return <tbody>{arrayLi}</tbody>
  }
  const answerFail = (grade)=>{
    return grade >=5 ? "aprobado": "suspendido"
  }
  
  const getAll = function (arr){
    return arr.length
  }
   
  return (
    <>
      <h1>Welcome {name}!</h1>
      <table><th>Name</th><th>Grade</th>{ulList(lista)}</table>
      <h3>La longitud de la lista es: {getAll(lista)}</h3>
      {answerFail}
    </>
  )
}

export default App
