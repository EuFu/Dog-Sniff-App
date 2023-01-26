import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import GameDirections from "./GameDirections.js";
import Settings from "./Settings.js";
import SettingsContextProvider from "../context/SettingsContext"
import Game from "./Game.js";

function NewGame(props) {
  const [fade, setFade] = useState(false);
  const [inProp, setInProp] = useState(false);
  const { to, children } = props;
  const navigate = useNavigate();

  function delayRedirect(e) {
    e.preventDefault();
    setFade(true);
    setTimeout(() => navigate("/game"), 1000);
  }

  return (
    <div
      className="new-game"
    >
      <div className={`new-game-content ${
        fade ? "animate__animated animate__fadeOutLeft" : ""
      }`}>
        <div className=" section">
          <div className="new-game-logo level-item animate__animated animate__heartBeat  animate__slow animate__delay-1s py-small">
            <span className="">
              <h1 className="new-game-title">Sniff</h1>
            </span>
            <br></br>
            <span className="">
              <h1 className="new-game-title">&nbsp;Out</h1>
            </span>
          </div>
        </div>
        <div>
          {/* <h4 className="new-game-subtitle">A Dog Guessing Game</h4> */}
        </div>
        <div className="new-game-btn-div level">
          <div className="level-item">
          <SettingsContextProvider>
            <Settings 
              className="start-banner"
            />
            </SettingsContextProvider>
            <Link
              to={{
                pathname: `/game`,
                hash: `#hash`,
              }}
              onClick={delayRedirect}
              className="start-banner"
            >
              <h1>
                Start
                {/* <i
                class="fa-solid fa-angle-right"
                onClick={(e) => {
                  setInProp(true);
                }}
              ></i> */}
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewGame;
