import { useGameRound } from "../context/GameRoundContext";
import { usePopUp } from "../context/PopupContext";
import DogCard from "./DogCard";

function DogPack() {
  const { selected, previousDogs } = useGameRound();
  const { setDogCard, toggleSelected, toggleDogPack } = usePopUp();

  return (
    <div>
      <div className="modal-background"></div>
      <div className="modal-content tile is-ancestor">
        <div className="box popup-shell tile is-parent is-vertical">
          <div className="tile is-child">
              <div className=" tile dog-card-shell is-parent is-flex is-flex-wrap-wrap">
                {selected.correct ? previousDogs.map((dog) => (
                  <DogCard dog={dog} />
                )) : previousDogs.slice(0, previousDogs.length - 1).map((dog) => (
                  <DogCard dog={dog} />
                ))}
                </div>
        </div>
        <div>
          <button
              className="button is-ghost"
              onClick={() => {
                toggleDogPack();
              }}
            >
              Back
            </button>
            </div>
          </div>
          
      </div>
    </div>
  );
}

export default DogPack;
