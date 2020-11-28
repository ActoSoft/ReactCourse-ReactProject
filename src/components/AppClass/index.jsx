import { Component } from 'react'
import AppUI from '../AppUI'

class App extends Component {

    constructor() {
      super()
      this.state = {
        counter: 0
      }
    }

    increment = () => {
      this.setState({
        counter: this.state.counter + 1
      }, () => console.log(this.state.counter))
    }

    render () {
        return <AppUI counter={this.state.counter} handleClick={this.increment} />
    }
  }

export default App;