import React, { Component, useState } from 'react';
import Person from './Person/Person'

import './App.css';

class App extends Component {
  state = {
    persons: [{name: 'Dony', age: 23},
  {name:'Dimana', age: 23}]
  }
  changeStateHandler = (name) => {
    this.setState({
      persons: [{name: name, age: 27},
  {name:'Dimana', age: 23}]
    })
  }
  changeName = (e) => {
    this.setState({
     persons: [{name: e.target.value, age: 27},
      {name:'Dimana', age: 23}]
    })
  }
  render() {
    const style = {
      backgroundColor: 'pink',
      borderRadius: '8px',
      color: 'white',
      padding: '8px',
      cursor: 'pointer',
      border: '1px solid rgb(211, 155, 164)'
    }
    return (
      <div className="App">
      <h1>Hi I am a React APP</h1>
      <button style={style}
      onClick = {this.changeStateHandler.bind(this,'Dony')}>Switch state</button>
      <Person name= {this.state.persons[0].name} 
      age = {this.state.persons[0].age}
      click ={this.changeStateHandler.bind(this, 'Donito')}
      changeName = {this.changeName} />
      <Person name ={this.state.persons[1].name} age ={this.state.persons[1].age}> Hobbise: playing  </Person>
      </div>
   
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am a React APP'));
  }
}

export default App;
