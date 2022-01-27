import React from "react";
//CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DefaultValues from "./DefaultValues";
import "./styles/global.css";
//Components
import "./DefaultValues";
import Box from "./components/box"; 
// import "/Users/lysianedon/Documents/KONEXIO/react/chapitre-01/elsy/src/styles/global.css";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      water : 0,
      heart : 120,
      temperature : - 10,
      steps: 3000
    }

    //Bind functions 
    this.onHeartChange = this.onHeartChange.bind(this);
    this.onStepsChange = this.onStepsChange.bind(this);
    this.onTempChange = this.onTempChange.bind(this);
  }

  //Functions to change the value of my boxes onChange input range :

  onHeartChange(e) {
    this.setState({heart : e.target.value});
  }

  onStepsChange(e) {
    this.setState({steps : e.target.value});
  }

  onTempChange(e) {
    this.setState({temperature : e.target.value});
  }

  // calculateWater() 
  
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* <DefaultValues heartMin={heartMin} stepsMin={stepsMin} tempMin={tempMin} ></DefaultValues> */}

          {/* Water Box */}
          <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L"></Box>

          {/* Steps Box */}
          <Box icon="directions_walk" 
          color="black" 
          value={this.state.steps} 
          unit="steps"
          min={stepsMin}
          max={stepsMax}
          onChange={this.onStepsChange}></Box>

          {/* Heart Box */}
          <Box icon="favorite" 
          color="red" 
          value={this.state.heart} 
          unit="bpm" 
          min={heartMin} 
          max={heartMax} 
          onChange={this.onHeartChange} ></Box>

          {/* Temperature Box */}
          <Box icon="wb_sunny" 
          color="yellow" 
          value={this.state.temperature} 
          unit="°C"
          min={tempMin}
          max={tempMax}
          onChange={this.onTempChange}></Box>

        </div>
      </div>
    );
  }
}

export default App;