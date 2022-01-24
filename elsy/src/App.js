import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DefaultValues";
import DefaultValues from "./DefaultValues";
import Box from "./components/box";
import "./styles/global.css";
// import "/Users/lysianedon/Documents/KONEXIO/react/chapitre-01/elsy/src/styles/global.css";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;


class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <DefaultValues heartMin={heartMin} stepsMin={stepsMin} tempMin={tempMin} ></DefaultValues>
          {/* Water Box */}
          <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L"></Box>

          {/* Steps Box */}
          <Box icon="directions_walk" color="black" value={3000} unit="steps"></Box>

          {/* Heart Box */}
          <Box icon="favorite" color="red" value={120} unit="bpm"></Box>

          {/* Temperature Box */}
          <Box icon="wb_sunny" color="yellow" value={-10} unit="°C"></Box>
        </div>
      </div>
    );
  }
}

export default App;