import React, { useEffect } from "react";
import DogName from "./DogName";
import DogImage from "./DogImage";
import Hints from "./Hints";
import GameDirections from "./GameDirections";
import { useGameRound } from "../context/GameRoundContext";
import { useSettings } from "../context/SettingsContext";

function GameArea() {
  const {
    round,
    imageLoaded,
    letterClue,
  } = useGameRound();

  const {
    help,
  } = useSettings();

  useEffect(() => {
  }, [imageLoaded]);

  return (
    <section className="game-area">
      {round > 0 ? (
        <div className="">
        <h1 className="box" id="round-banner">
        Round: {round}
      </h1>
          <div className="img-names-div columns tile is-parent is-vertical ">
            <DogImage />
            <div className={`modal ${help ? "is-active" : ""}`}>
              <GameDirections
                type={"info"}
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
  );
}

export default GameArea;
