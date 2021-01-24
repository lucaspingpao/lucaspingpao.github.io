import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import Homepage from './components/Homepage';
import About from './components/About';


import Coding from './components/Coding';
import CSsquared from './components/Coding/CSsquared';
import RShinyApps from './components/Coding/RShinyApps';
import WaveLearning from './components/Coding/WaveLearning';
import VotrCrowd from './components/Coding/VotrCrowd';
import PolySymph from './components/Coding/PolySymph';
import DataMatch from './components/Coding/DataMatch';


import Music from './components/Music';
import HundredSongs from './components/Music/HundredSongs';
import ElectronicComposition from './components/Music/Composition';
import Other from './components/Other';


import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <div className="App">
            <Switch>
              <Route exact path="/"><Homepage/></Route>
              <Route exact path="/about"><About/></Route>
              <Route exact path="/coding"><Coding/></Route>
                  <Route exact path="/coding/cssquared"><CSsquared/></Route>
                  <Route exact path="/coding/rshinyapps"><RShinyApps/></Route>
                  <Route exact path="/coding/wavelearning"><WaveLearning/></Route>
                  <Route exact path="/coding/votrcrowd"><VotrCrowd/></Route>
                  <Route exact path="/coding/polysymph"><PolySymph/></Route>
                  <Route exact path="/coding/datamatch"><DataMatch/></Route>
              <Route exact path="/music"><Music/></Route>
                  <Route exact path="/music/100daysongchallenge"><HundredSongs/></Route>
                  <Route exact path="/music/composition"><ElectronicComposition/></Route>
              <Route exact path="/other"><Other/></Route>
            </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
