import './App.css';
import Student from './components/Student/Student';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false)
  const showStudents = () => {setShow(true)}

  if(show){
    return(
      <Student/>
    )
  }
  return (
    <div className="App">
      <div className="App-header">
        <h1>Torneio Tribruxo</h1>
        <p>Clique no botão para encontrar os feiticeiros!</p>
        <button onClick={showStudents}>Começar!</button>
      </div>
    </div>
  );
}

export default App;
