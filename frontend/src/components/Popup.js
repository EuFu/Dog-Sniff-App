import { useState, useEffect, useContext } from "react";
import Result from "./Result";
import Info from "./Info";
import {usePopUp} from "../context/PopupContext.js";
import { useGameRound } from "../context/GameRoundContext";
import DogPack from "./DogPack";

function Popup(props) {
  const {info, setInfo, dogSelected, dogCard, dogPack, toggleSelected, toggleInfo} = usePopUp()
  const {correctDog, setCorrectDog, previousDogs} = useGameRound()

  useEffect(() => {
    setInfo(false);
  }, [correctDog]);

  

  return (
      <div className= "modal is-active">
        {!info && !dogPack ? (
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
        ) : info ? (
            <Info dog={!dogPack ? correctDog : dogCard} />
        ) : (
          <DogPack />
         )}
      </div>
  );
}

export default Popup;
