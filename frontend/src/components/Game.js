import React, { useState, useEffect } from "react";
import axios from "axios";
import GameArea from "./GameArea.js";
import Popup from "./Popup.js";
import NewGame from "./NewGame.js";
import { useGameRound } from "../context/GameRoundContext.js";

function Game(props) {
  const { setAllDogs, popup } = useGameRound();

  useEffect(() => {
    async function getDog() {
      await axios.get("/games").then((data) => {
        setAllDogs(data.data);
        // console.log(data.data);
      });
    }
    getDog();
  }, []);

  return (
    <div className="column is-12">
      <GameArea />
      {popup ? <Popup /> : null}
      {/* {newGame ? <NewGame /> : null} */}
    </div>
  );
}

export default Game;
