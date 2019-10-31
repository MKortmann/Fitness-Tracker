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
    minutes: 5,
    seconds: 45,
    isTimerActive: false
  }

  startTimer = () => {
    // check if the timer is already running, if yes: STOP IT!
    if(this.state.isTimerActive === true) {
      this.setState({
        btnLabel: "start",
        isTimerActive: false
      });
      // clear the interval and setTimeOut
      clearInterval(this.timer);
      // clearTimeout(timerOut);
      clearTimeout(this.timerOut);

    } else {
      // decreasing the value 1 per each second
      this.timer = setInterval( () => {
        console.log(this.timer);
        console.log(this.timerOut);
        if(this.state.seconds > 0) {
          this.setState({
            btnLabel: "stop",
            seconds: this.state.seconds-1,
            isTimerActive: true
          })
        } else {
          this.setState({
            btnLabel: "stop",
            minutes: this.state.minutes-1,
            seconds: 59,
            isTimerActive: true
          })
        }
      }, 1000)

      // This is one of the one cases that is necessary to use var if you do not
      // want to declare it outside and assign it.
      this.timerOut = setTimeout( () => {
        // setting state
        this.setState({
          btnLabel: "start",
          isTimerActive: false
        })
        clearInterval(this.timer);
        // simple and fast solution
        alert("FINISHED!!!");
      }, (this.state.minutes*60+this.state.seconds)*1000)
    }
  }

  updateMinutes = (event) => {
      this.setState({minutes: event.target.value})
  }
  updateSeconds = (event) => {
      this.setState({seconds: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Fitness Tracker</h1>
        <Display dMinutes={this.state.minutes} dSeconds={this.state.seconds}/>
        <Input changed={this.updateMinutes} value={this.state.minutes}/>
        <Input changed={this.updateSeconds} value={this.state.seconds}/>
        <Button startTimer={this.startTimer} btnName={this.state.btnLabel}/>
      </div>
    );
  }
}

export default App;
