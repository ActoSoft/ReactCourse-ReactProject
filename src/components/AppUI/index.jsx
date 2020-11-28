import logo from '../../logo.svg'
import { Paragraph } from '../common'

function AppUI(props) {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Paragraph text='Hola Mundo desde React!' rojito />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br />
          <button onClick={props.handleClick} >Púchame</button>
          <Paragraph text={`Contador: ${props.counter}`} />
        </header>
      </div>
    )
}

export default AppUI