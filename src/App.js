import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import Teaching from './pages/Teaching';
import Experience from './pages/Experience';

import SongMatch from './pages/Coding/SongMatch';
import PaosPuzzles from './pages/Coding/PaosPuzzles';
import TapJams from './pages/Coding/TapJams';
import PlayHouse from './pages/Coding/PlayHouse';
import VotrCrwd from './pages/Coding/VotrCrwd';
import RShinyApps from './pages/Coding/RShinyApps';
import CSsquared from './pages/Coding/CSsquared';

import PolySymph from './pages/Teaching/PolySymph';
import WaveLearning from './pages/Teaching/WaveLearning';

import './styles/App.css';



function App() {
  return (
		<HashRouter basename={process.env.PUBLIC_URL}>
			<Navbar />
			<main id="main">
				<Routes>
					<Route exact path="/" element={<Homepage/>} />
					<Route exact path="/projects" element={<Projects/>} />
						<Route exact path="/projects/paospuzzles" element={<PaosPuzzles/>} />
						<Route exact path="/projects/songmatch" element={<SongMatch/>} />
						<Route exact path="/projects/tapjams" element={<TapJams/>} />
						<Route exact path="/projects/playhouse" element={<PlayHouse/>} />
						<Route exact path="/projects/votrcrwd" element={<VotrCrwd/>} />
						<Route exact path="/projects/rshinyapps" element={<RShinyApps/>} />
						<Route exact path="/projects/cssquared" element={<CSsquared/>} />
					<Route exact path="/teaching" element={<Teaching/>} />
						<Route exact path="/teaching/polysymph" element={<PolySymph/>} />
						<Route exact path="/teaching/wavelearning" element={<WaveLearning/>} />
					<Route exact path="/experience" element={<Experience/>} />
				</Routes>
			</main>
			<Footer />
		</HashRouter>
	);
}

export default App;
