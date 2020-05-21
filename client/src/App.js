import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import MMGB from "../src/components/NewFiles/pages/Main/MMGB";
import HappyResults from "./components/NewFiles/Results/HappyResults";
import GloomyResults from "./components/NewFiles/Results/GloomyResults";
import PumpedResults from "./components/NewFiles/Results/PumpedResults";
import RelaxedResults from "./components/NewFiles/Results/RelaxedResults";
import ResultsCard from "./components/NewFiles/Results/ResultsCard";
import ResultsPageExample from "./components/NewFiles/Results/ResultsPageExample";
import MusicResultsCard from "./components/NewFiles/Results/MusicResults";
import GameResultsCard from "./components/NewFiles/Results/GameResults";
import BookResultsCard from './components/NewFiles/Results/BookResults';


import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Navbar /> */}
          <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/mmgb" component={MMGB} />
            <Route exact path="/happy" component={HappyResults} />
            <Route exact path="/gloomy" component={GloomyResults} />
            <Route exact path="/pumped" component={PumpedResults} />
            <Route exact path="/relaxed" component={RelaxedResults} />
            <Route exact path="/results" component={ResultsCard} />
            <Route exact path="/bookresults" component={BookResultsCard} />
            <Route exact path="/gameresults" component={GameResultsCard} />
            <Route exact path="/musicresults" component={MusicResultsCard} />
            <Route exact path="/resultsex" component={ResultsPageExample} />
        </div>
      </Router>
      
    )
  }
}


export default App;
