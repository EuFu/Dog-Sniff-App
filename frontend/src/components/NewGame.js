import React, { useState } from "react";
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
    <div className="new-game animate__animated animate__slideInRight">
      <div
        className={`new-game-content ${
          fade ? "animate__animated animate__fadeOutLeft" : ""
        }`}
      >
        <div className=" section">
          <div className="new-game-logo level-item py-small">
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
        </div>
        <div className="new-game-btn-div level">
          <div className="level-item">
              <Settings className="start-banner" />
            <Link
              to={{
                pathname: `/game`,
                hash: `#hash`,
              }}
              onClick={delayRedirect}
              className="start-banner"
            >
              <div className="start"> Start <i className="fa-solid fa-chevron-right"></i></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewGame;
