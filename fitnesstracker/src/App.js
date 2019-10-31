import React, { Component } from 'react';
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Display from "./components/Display";
import './App.css';

class App extends Component {

  state = {
    timerLoops: [],
    btnStates: ["start", "stop"],
    timeDisplayed: 0
  }

  startTimer = () => {
    alert("You clicked at this button!");
    console.log("clicked");
  }

  changed = (event) => {
    console.log(event.target.value);
    this.setState({
      timerLoops: [],
      btnStates: ["start", "stop"],
      timeDisplayed: event.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Fitness Tracker</h1>
        <Display display={this.state.timeDisplayed}/>
        <Input changed={this.changed}/>
        <Button startTimer={this.startTimer} btnName={this.state.btnStates[0]}/>
      </div>
    );
  }
}

export default App;
