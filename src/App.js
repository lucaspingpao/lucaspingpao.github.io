import React from 'react';
import './styles/App.css';
import {Switch, Route, HashRouter} from 'react-router-dom'

import Homepage from './pages/Homepage';
import About from './pages/About';


import Coding from './pages/Coding';
import CSsquared from './pages/Coding/CSsquared';
import RShinyApps from './pages/Coding/RShinyApps';
import VotrCrowd from './pages/Coding/VotrCrowd';
import PolySymph from './pages/Coding/PolySymph';
import DataMatch from './pages/Coding/DataMatch';
import PlayHouse from './pages/Coding/PlayHouse';


import Music from './pages/Music';
import HundredSongs from './pages/Music/HundredSongs';
import Composition from './pages/Music/Composition';
import DJing from './pages/Music/DJing';
import Production from './pages/Music/Production';

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
                  <Route exact path="/coding/votrcrowd"><VotrCrowd/></Route>
                  <Route exact path="/coding/polysymph"><PolySymph/></Route>
                  <Route exact path="/coding/datamatch"><DataMatch/></Route>
                  <Route exact path="/coding/playhouse"><PlayHouse/></Route>
              <Route exact path="/music"><Music/></Route>
                  <Route exact path="/music/100daysongchallenge"><HundredSongs/></Route>
                  <Route exact path="/music/composition"><Composition/></Route>
                  <Route exact path="/music/djing"><DJing/></Route>
                  <Route exact path="/music/production"><Production/></Route>
              <Route exact path="/other"><Other/></Route>
            </Switch>
        </div>
      <Footer/>
      </HashRouter>
    );
  }
}

export default App;
