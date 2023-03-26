import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import DogName from "./DogName";
import DogImage from "./DogImage";
import Hints from "./Hints";
import Popup from "./Popup.js";
import GameDirections from "./GameDirections";
import { useGameRound } from "../context/GameRoundContext";
import { useSettings } from "../context/SettingsContext";
// import mainMusic from "../sounds/game_main_music.mp3"

function GameArea(props) {
  const {
    newGame,
    setNewGame,
    round,
    setRound,
    allDogs,
    setAllDogs,
    correctDog,
    setCorrectDog,
    dogsInRound,
    setDogsInRound,
    previousDogs,
    setPreviousDogs,
    imageLoaded,
    selected,
    setSelected,
    showCorrectName,
    setShowCorrectName,
    popup,
    setPopup,
    generateRound,
    clearRound,
    fiftyFifty,
    setFiftyFifty,
    fFState,
    setfFState,
    sizeClue,
    setSizeClue,
    sizeState,
    setSizeState,
    letterClue,
    setLetterClue,
    handleFifty,
    selectLetters,
    handleSize,
  } = useGameRound();

  // const {
  //   fiftyFifty,
  //   setFiftyFifty,
  //   fFState,
  //   setfFState,
  //   sizeClue,
  //   setSizeClue,
  //   sizeState,
  //   setSizeState,
  //   letterClue,
  //   setLetterClue,
  //   handleFifty,
  //   selectLetters,
  //   handleSize,
  // } = useClues();

  const {
    sound,
    setSound,
    help,
    setHelp,
    expanded,
    setExpanded,
    toggleHelp,
    toggleExpanded,
    toggleSound,
  } = useSettings();

  useEffect(() => {
  }, [imageLoaded]);

  // useEffect(() => {
  //   playMain()
  // }, [])

  // const mainMusic = "https://sampleswap.org/mp3/artist/421507/pipin_140-bpm-elelektro-etno-ambienc-160.mp3"

  // let mainAudio = new Audio(mainMusic);
  // function playMain() {
  //   mainAudio.currentTime = 0;
  //   mainAudio.play();
  //   mainAudio.loop = true;
  // }


  return (
    <section className="game-area">
      {round > 0 ? (
        <div className="">
        <h1 className="box" id="round-banner">
        Round: {round}
      </h1>
          {/* <div className={`modal ${props.help || props.round < 1 ? "is-active" : ""}`}>
            <GameDirections 
              handleClick={props.toggleHelp}
            />
          </div> */}
          <div className="img-names-div columns tile is-parent is-vertical ">
            <DogImage />
            <div className={`modal ${help ? "is-active" : ""}`}>
              <GameDirections
                type={"info"}
                // selectClass={"animate__fadeInDown"}
              />
            </div>
            <div className="hero is-warning is-small mb-2">
              {letterClue.show ? (
                <h4 className="hero-body title is-5">
                  Name contains: '{letterClue.letters[0]}' & '
                  {letterClue.letters[1]}'
                </h4>
              ) : null}
            </div>
            <Hints />
            {imageLoaded ? <DogName /> : null}
          </div>
        </div>
      ) : (
        <div>
          <div className="modal is-active ">
            <GameDirections type={"newGame"} />
          </div>
        </div>
      )}
    </section>

    /* <section className="game-area">
        <div className="">
          <Hints
            fFState={fFState}
            handleFifty={props.handleFifty}
            attributeState={props.attributeState}
            handleAttribute={props.handleAttribute}
            sizeState={props.sizeState}
            handleSize={props.handleSize}
            selectLetters={props.selectLetters}
            letterClue={props.letterClue}
            round={props.round}
            toggleHelp={props.toggleHelp}
          />
          <div className="hero is-warning is-small mb-2">
            {props.letterClue.show ? (
              <h4 className="hero-body title is-5">
                Name contains: '{props.letterClue.letters[0]}' & '
                {props.letterClue.letters[1]}'
              </h4>
            ) : null}
          </div>
          <div className={`modal ${props.help ? "is-active" : ""}`}>
            <div className="modal-background"></div>
            <div className="modal-card content">
              <header className="modal-card-head">
                <h1 className="modal-card-title title is-3">How to play</h1>
                <button
                  className="delete"
                  aria-label="close"
                  onClick={props.toggleHelp}
                ></button>
              </header>
              <section className="modal-card-body">
                <div className="block">
                  <h4 className="">Objective</h4>
                  <p className="has-text-left">
                    Each round, you will be presented with a different dog.
                    Using your knowledge and sharp senses, match the picture
                    with the correct name. There are 6 rounds in total. Can you
                    make it to the very end?
                  </p>
                </div>
                <h4>Hints</h4>
                <div className="block has-text-left">
                  <p>
                    You have 3 hints available at your disposal, use them if you
                    get stuck! Be careful though, each hint can be used only
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
                  Goodluck! And may your nose lead you to victory!
                </h4>
              </section>
            </div>
          </div>
          <div className="img-names-div columns">
            <DogImage
              correctDog={props.correctDog}
              generateRound={props.generateRound}
              round={props.round}
              sizeClue={props.sizeClue}
            />
            <DogName
              dogsInRound={props.dogsInRound}
              correctDog={props.correctDog}
              checkAnswer={props.checkAnswer}
              fiftyFifty={props.fiftyFifty}
              attributeClue={props.attributeClue}
              sizeClue={props.sizeClue}
              selected={props.selected}
              togglePopup={props.togglePopup}
              letterClue={props.letterClue}
            />
          </div>
        </div>
      
    </section> */
  );
}

export default GameArea;
