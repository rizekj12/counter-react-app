import { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar"
import Counters from './components/counters'

class App extends Component {
  state = { 
    counters: [
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
    ]
}

constructor(){
  super()
  console.log('App - Constructor')
}

componentDidMount(){
  console.log('App - Mounted')
}

handleIncrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value++
    this.setState({ counters })
}

handleDecrement = counter => {
  const counters = [...this.state.counters]
  const index = counters.indexOf(counter)
  counters[index] = {...counter}
  counters[index].value--
  this.setState({ counters })
}


handleDelete = itemID =>{
   this.setState({
       counters: this.state.counters.filter((item) => item.id !== itemID)
   })
}

handleReset = () => {
   const counters = this.state.counters.map(c => {
       c.value = 0
       return c
   })
   this.setState({ counters })
}

render(){
  console.log('App - Rendered')
  return (
    <>
   <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
   <main className="container">
     <Counters
      counters={this.state.counters}
      onReset={this.handleReset}
      onDelete={this.handleDelete}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
     />
    </main>
   </>
  );

}
  
}

export default App;
