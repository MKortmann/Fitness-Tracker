import React, { Component } from 'react';
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Display from "./components/Display";
import './App.css';

class App extends Component {

  state = {
    timerLoops: [],
    btnStates: ["start", "stop"]
  }

  startTimer = () => {
    alert("You clicked at this button!");
    console.log("clicked");
  }

  changed = () => {
    alert("changed the input value!")
  }


  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Fitness Tracker</h1>
        <Display />
        <Input changed={this.changed}/>
        <Button startTimer={this.startTimer} btnName={this.state.btnStates[0]}/>
      </div>
    );
  }
}

export default App;
