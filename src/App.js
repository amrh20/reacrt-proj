import './App.css';
import Navbar from './components/navbar'
import Counters from './components/counters';
import React, { Component } from 'react';

class App extends Component {
  state = { 
    counters :[
        {id:0, value:3},
        {id:1, value:0},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}
    ]
 };

 handleDelete = counterId => {
    const counters= this.state.counters.filter(c => c.id !== counterId)
    this.setState({counters })
}
  render() {
    return (
      <div>
        <Navbar totalCounters= {this.state.counters.filter(c =>c.value >0).length}/>  
        <main className="container">
        <Counters 
        counters= {this.state.counters}
        onDelete={this.handleDelete}/>
        </main>
      </div>
    );
  }
}

export default App;
