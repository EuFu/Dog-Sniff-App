import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Game from "./Game.js";
import NewGame from "./NewGame.js";
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
                <Routes>
                  <Route exact path="*" element={<NewGame />}></Route>
                  <Route exact path="/game" element={<Game />}></Route>
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
