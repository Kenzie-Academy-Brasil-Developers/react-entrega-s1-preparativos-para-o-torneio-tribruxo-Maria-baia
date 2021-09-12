import { render } from '@testing-library/react';
import './App.css';
import Student from './components/Student/Student';

function App() {
  function callback(){
    return <Student/>
  }
  return (
    <div className="App">
      <div className="App-header">
        <Student/>
      </div>
    </div>
  );
}

export default App;
