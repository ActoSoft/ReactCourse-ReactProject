import { useState } from 'react'
import AppUI from '../AppUI'

function App() {

    const [counter, setCounter] = useState(0)

    function incrementCounter () {
      setCounter(counter + 1)
    }

    return <AppUI counter={counter} handleClick={incrementCounter} />
}

export default App;