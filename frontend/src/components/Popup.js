import { useEffect } from "react";
import Result from "./Result";
import Info from "./Info";
import { usePopUp } from "../context/PopupContext.js";
import { useGameRound } from "../context/GameRoundContext";
import DogPack from "./DogPack";

function Popup() {
  const { info, setInfo, dogCard, dogPack } = usePopUp();
  const { correctDog } = useGameRound();

  useEffect(() => {
    setInfo(false);
  }, [correctDog]);

  return (
    <div className="modal is-active">
      {!info && !dogPack ? (
        <Result />
      ) : info ? (
        <Info dog={!dogPack ? correctDog : dogCard} />
      ) : (
        <DogPack />
      )}
    </div>
  );
}

export default Popup;
