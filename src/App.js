import React from 'react';
import './styles/App.css';
import {Switch, Route, HashRouter} from 'react-router-dom'

import Homepage from './pages/Homepage';
import About from './pages/About';


import Coding from './pages/Coding';
import CSsquared from './pages/Coding/CSsquared';
import RShinyApps from './pages/Coding/RShinyApps';
import WaveLearning from './pages/Coding/WaveLearning';
import VotrCrowd from './pages/Coding/VotrCrowd';
import PolySymph from './pages/Coding/PolySymph';
import DataMatch from './pages/Coding/DataMatch';


import Music from './pages/Music';
import HundredSongs from './pages/Music/HundredSongs';
import ElectronicComposition from './pages/Music/Composition';
import Other from './pages/Other';


import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
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
      </HashRouter>
    );
  }
}

export default App;
