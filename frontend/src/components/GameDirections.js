import React, {useState, useEffect} from "react";
import axios from "axios";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import GameArea from './GameArea.js'
import { useGameRound } from "../context/GameRoundContext.js";
import { useSettings } from "../context/SettingsContext.js";
import { useSounds } from "../context/SoundsContext.js";

function GameDirections(props) {
  const {round, generateRound} = useGameRound()
  const {toggleHelp} = useSettings()
  const {playMusic, currentMusic} = useSounds()

  // useEffect(() => {
  //   playMusic("menu")
  // }, [])

  function loopAudio() {
    
  }
    return (
        <>
            <div className="modal-background" id="directions-background"></div>
            <div className="modal-card content animate__fadeInDown">
              <header className="modal-card-head">
                <h1 className="modal-card-title title is-3 directions-bold">How to play</h1>
                <button
                  className="delete"
                  aria-label="close"
                  onClick={props.type === "newGame" ? (() => {generateRound(); playMusic("main")}): toggleHelp}
                ></button>
              </header>
              <section className="modal-card-body">
                <div className="block">
                  <h4 className="directions-bold">Objective</h4>
                  <p className="has-text-left">
                    Each round, you will be presented with a picture of a dog.
                    Using your knowledge and sharp senses, select the correct name of the dog shown. There are 6 rounds in total. 
                    <br></br>Can you "sniff out" all the dogs correctly?
                  </p>
                </div>
                <h4 className="directions-bold">Hints</h4>
                <div className="block has-text-left">
                  <p>
                    You have 3 hints available at your disposal. Use them if you
                    get stuck! Be careful though, each hint can only be used
                    once...
                  </p>
                  <ul>
                    <li>
                      <b className="directions-bold">50/50</b> - Eliminate half of the choices, giving you a
                      50/50 chance.
                    </li>
                    <li>
                      <b className="directions-bold">Typical Size</b> - Reveal the typical
                      height (at shoulders/withers) and weight for each dog.
                    </li>
                    <li>
                      <b className="directions-bold">2 Letters</b> - Display two random letters that are in
                      the correct dog's name.
                    </li>
                  </ul>
                </div>
                <div className="block">
                  <h4 className="directions-bold">More</h4>
                  <p>
                    If you want to know more about the correct dog, tap the dog card shown after each round. Each dog guessed correctly will be added to your "Dog Pack", which you can access between rounds by clicking on the dog icon.
                  </p>
                </div>
                <h4 className="title is-5 directions-bold">
                  Goodluck! May your nose lead you to victory!
                </h4>
              </section>
            </div>
          </>
    )
}

export default GameDirections