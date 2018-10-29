import React, { Component } from 'react';
import './App.css';
import Users from './Users';

const user = {
  name:'Som',
  age:''
}
class App extends Component {
  constructor() {
    super()
    this.state = {
      age:'78'
    }
  }

  // function to increment age by 3 years 
  onButtonClick = (newAge) => {
    newAge = Number(this.state.age)+3
    return this.setState({age:newAge})
  }

  // function to greet User
  userGreet = (event) => alert(`Hello to You ${user.name} , Your age is ${this.state.age}`)
  
  // User component returns use details
  render() {
    return (
      <div>
          <Users name={user.name} age={this.state.age} onButtonClick={this.onButtonClick} userGreet={this.userGreet}/>
      </div>
    );
  }
}

export default App;
