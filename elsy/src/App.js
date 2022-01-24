import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DefaultValues";
import DefaultValues from "./DefaultValues";
import Steps from "./components/Steps";
import "/Users/lysianedon/Documents/KONEXIO/react/chapitre-01/elsy/src/styles/global.css";

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
          <Steps></Steps>
          
        </div>
      </div>
    );
  }
}

export default App;