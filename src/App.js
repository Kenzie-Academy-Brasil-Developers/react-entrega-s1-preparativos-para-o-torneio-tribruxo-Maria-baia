import './App.css';
import Student from './components/Student/Student';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(<div>
    <h1>Torneio Tribruxo</h1>
    <p>Clique no botão para encontrar os feiticeiros!</p>
    <button onClick={() => setShow(<Student/>)}>Começar!</button>
    </div>)
  return (
    <div className="App">
      <div className="App-header">
        {show}
      </div>
    </div>
  );
}

export default App;
