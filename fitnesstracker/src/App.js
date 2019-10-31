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
    timeDisplayed: 45
  }

  startTimer = () => {

    // decreasing the value 1 per each second
    let startTimer = setInterval( () => {
      this.setState({
        timerLoops: [],
        btnStates: ["start", "stop"],
        timeDisplayed: this.state.timeDisplayed-1
      })
    }, 1000)

    // clear timer!
    setTimeout( () => {
      alert("time finished");
      clearInterval(startTimer);
    }, this.state.timeDisplayed*1000)


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
        <Input changed={this.changed} value={this.state.timeDisplayed}/>
        <Button startTimer={this.startTimer} btnName={this.state.btnStates[0]}/>
      </div>
    );
  }
}

export default App;
