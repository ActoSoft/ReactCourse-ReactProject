import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0)

  function incrementCounter () {
    // counter += 1 -> Aquí no hacemos eso
    setCounter(counter + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo desde React!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <button onClick={incrementCounter} >Púchame</button>
        <p>Contador: {counter}</p>
      </header>
    </div>
  );
}

export default App;
