import { useState, useEffect, useContext } from "react";
import Result from "./Result";
import Info from "./Info";
import {usePopUp} from "../context/PopupContext.js";
import { useGameRound } from "../context/GameRoundContext";

function Popup(props) {
  const {info, setInfo, dogSelected, dogCard, toggleSelected, toggleInfo} = usePopUp()
  const {correctDog} = useGameRound()

  useEffect(() => {
    setInfo(false);
  }, [correctDog]);

  

  return (
      <div className="modal is-active">
        {!info && !dogSelected ? (
          <Result
            // round={props.round}
            // correctDog={props.correctDog}
            // previousDogs={props.previousDogs}
            // selected={props.selected}
            // userLevel={props.userLevel}
            // clearRound={props.clearRound}
            // handleClick={handleClick}
            // toggleInfo={toggleInfo}
            // resetGame={props.resetGame}
            // dogPack={props.dogPack}
            // toggleDogPack={props.toggleDogPack}
            // setDogCard={setDogCard}
            // toggleSelected={toggleSelected}
          />
        ) : dogSelected ? (
          <Info dog={dogCard} type={"round"} />
        ) : (
          <Info dog={correctDog} type={"popup"} />
        )}
      </div>
  );
}

export default Popup;
