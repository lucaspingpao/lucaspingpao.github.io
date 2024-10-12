import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import Experience from './pages/Experience';

import CSsquared from './pages/Coding/CSsquared';
import RShinyApps from './pages/Coding/RShinyApps';
import VotrCrowd from './pages/Coding/VotrCrowd';
import PolySymph from './pages/Coding/PolySymph';
import DataMatch from './pages/Coding/DataMatch';
import PlayHouse from './pages/Coding/PlayHouse';

import './styles/App.css';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <main id="main">
          <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route exact path="/projects" element={<Projects/>}/>
                <Route exact path="/projects/cssquared" element={<CSsquared/>}/>
                <Route exact path="/projects/rshinyapps" element={<RShinyApps/>}/>
                <Route exact path="/projects/votrcrowd" element={<VotrCrowd/>}/>
                <Route exact path="/projects/polysymph" element={<PolySymph/>}/>
                <Route exact path="/projects/datamatch" element={<DataMatch/>}/>
                <Route exact path="/projects/playhouse" element={<PlayHouse/>}/>
              <Route exact path="/experience" element={<Experience/>}/>
          </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
