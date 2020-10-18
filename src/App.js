import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import Homepage from './components/Homepage';
import About from './components/About';
import Coding from './components/Coding';
import Music from './components/Music';
import Other from './components/Other';
import Navbar from './components/Navbar';
import BottomBar from './components/BottomBar';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/">
            <Navbar/>
            <Homepage/>
          </Route>
          <Route exact path="/about">
            <Navbar/>
            <About/>
          </Route>
          <Route exact path="/coding">
            <Navbar/>
            <Coding/>
          </Route>
          <Route exact path="/music">
            <Navbar/>
            <Music/>
          </Route>
          <Route exact path="/other">
            <Navbar/>
            <Other/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
