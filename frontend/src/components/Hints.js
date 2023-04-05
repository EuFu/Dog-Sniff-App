import { useGameRound } from "../context/GameRoundContext";
import Settings from "./Settings";
import { useSounds } from "../context/SoundsContext";

function Hints(props) {
  
  const {
    handleFifty,
    fFState,
    handleSize,
    sizeState,
    selectLetters,
    letterClue,
  } = useGameRound();

  const { playSound, thump } = useSounds();

  return (
    <div className="hints is-small is-link is-light">
      <Settings className="is-pulled-right" />
      <div className="">
        <button
          className="button is-small hint-btn m-1"
          onClick={() => {
            playSound(thump);
            handleFifty();
          }}
          disabled={fFState ? true : false}
        >
          50/50
        </button>
        <button
          className="button is-small hint-btn m-1"
          onClick={() => {
            playSound(thump);
            handleSize();
          }}
          disabled={sizeState ? true : false}
        >
          Dog Size
        </button>
        <button
          className="button is-small hint-btn m-1"
          onClick={() => {
            playSound(thump);
            selectLetters();
          }}
          disabled={letterClue.used ? true : false}
        >
          2 Letter
        </button>
      </div>
    </div>
  );
}

export default Hints;
