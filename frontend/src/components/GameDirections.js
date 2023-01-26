import React, {useState, useEffect} from "react";
import axios from "axios";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import GameArea from './GameArea.js'
import { useGameRound } from "../context/GameRoundContext.js";
import { useSettings } from "../context/SettingsContext.js";

function GameDirections(props) {
  const {generateRound} = useGameRound()
  const {toggleHelp} = useSettings()
    return (
        <>
            <div className="modal-background" id="directions-background"></div>
            <div className="modal-card content animate__fadeInDown">
              <header className="modal-card-head">
                <h1 className="modal-card-title title is-3">How to play</h1>
                <button
                  className="delete"
                  aria-label="close"
                  onClick={props.type === "newGame" ? generateRound : toggleHelp}
                ></button>
              </header>
              <section className="modal-card-body">
                <div className="block">
                  <h4 className="">Objective</h4>
                  <p className="has-text-left">
                    Each round, you will be presented with a dog.
                    Using your knowledge and sharp senses, select the name that matches the dog picture. There are a total of 6 rounds. 
                    <br></br>Can you "sniff out" all the dogs correctly?
                  </p>
                </div>
                <h4>Hints</h4>
                <div className="block has-text-left">
                  <p>
                    There are 3 hints available at your disposal. Use them if you
                    get stuck! But be careful, each hint can only be used
                    once...
                  </p>
                  <ul>
                    <li>
                      <b>50/50</b> - Eliminate half of the choices, giving you a
                      50/50 chance.
                    </li>
                    <li>
                      <b>Typical Size</b> - Reveal the typical
                      height(shoulders/withers) and weight for each dog.
                    </li>
                    <li>
                      <b>2 Letters</b> - Receive two random letters that are in
                      the correct dog's name.
                    </li>
                  </ul>
                </div>
                <div className="block">
                  <h4 className="">More</h4>
                  <p>
                    If you want to know more about the correct dog, click "More
                    info on this dog" at the end of each round.
                  </p>
                </div>
                <h4 className="title is-5">
                  Goodluck! May your nose lead you to victory!
                </h4>
              </section>
            </div>
          </>
    )
}

export default GameDirections