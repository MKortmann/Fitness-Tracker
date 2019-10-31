import React, { Component } from 'react';
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Display from "./components/Display";
import './App.css';

class App extends Component {

  state = {
    timerLoops: [],
    btnLabel: "start",
    timeDisplayed: 45,
    timerActive: false
  }

  startTimer = () => {

    if(this.state.timerActive === true) {


    // alert("timer stopped");
    // this.setState({
    //   timerLoops: [],
    //   btnLabel: "start",
    //   timeDisplayed: this.state.timeDisplayed-1,
    //   timerActive: false
    // })
    // clearInterval(startTimer);
    }

    // startTimer should be in the state!! NEXT STEP!!!!
    // decreasing the value 1 per each second
    let startTimer = setInterval( () => {
      this.setState({
        timerLoops: [],
        btnLabel: "stop",
        timeDisplayed: this.state.timeDisplayed-1,
        timerActive: true
      })
    }, 1000)

    // clear timer!
    setTimeout( () => {
      alert("time finished");
      this.setState({
        timerLoops: [],
        btnLabel: "start",
        timeDisplayed: this.state.timeDisplayed-1,
        timerActive: false
      })
      clearInterval(startTimer);
    }, this.state.timeDisplayed*1000)



  }

  changed = (event) => {
    console.log(event.target.value);
    this.setState({
      timerLoops: [],
      btnLabel: "start",
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
        <Button startTimer={this.startTimer} btnName={this.state.btnLabel}/>
      </div>
    );
  }
}

export default App;
