import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import "../index.css";
// import axios from "axios";
// import Header from "./Header.js";
// import Footer from "./Footer.js";
import Game from "./Game.js"
import GameArea from "./GameArea.js";
import NewGame from "./NewGame.js";
import Popup from "./Popup.js";
import GameDirections from "./GameDirections";
// import DogImage from "./DogImage";
import {CSSTransition} from 'react-transition-group';
import PopupContextProvider from "../context/PopupContext.js";
import GameRoundContextProvider from "../context/GameRoundContext.js";
import SettingsContextProvider from "../context/SettingsContext.js";
import SoundsContextProvider from "../context/SoundsContext.js";

function App() {


  return (
    <GameRoundContextProvider>
    <PopupContextProvider>
    <SettingsContextProvider>
    <SoundsContextProvider>
    <Router>
      <div className="App columns">
        {/* <img className="app-img" src="" alt="background" /> */}
       

        {/* <button onClick={generateRound}>New Round</button>
      <button onClick={selected.correct === true ? clearRound : generateRound}>{selected.correct === true ? "Next Round" : "Game Over"}</button> */}
        {/* <h4>{selected.selected ? "Answer Selected" : "Nothing Picked"}</h4> */}
        {/* <a href={externalLink} target="_blank" rel="noreferrer noopener"><h5>Learn More About This Dog</h5></a>
      <Footer /> */}
      <Routes>
              
                 <Route exact path='*' element={< NewGame />}></Route>
                 <Route exact path="/game" element={< Game />}></Route>
                 {/* <Route exact path='/game' element={< Game />}>
                 {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={2000}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                  </div>
                </CSSTransition>
              )}
                 </Route> */}
          </Routes>
      </div>
    </Router>
    </SoundsContextProvider>
    </SettingsContextProvider>
    </PopupContextProvider>
    </GameRoundContextProvider>
  );
}

export default App;
