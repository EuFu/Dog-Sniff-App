import { useGameRound } from "../context/GameRoundContext";
import { usePopUp } from "../context/PopupContext";
import { useSounds } from "../context/SoundsContext";
import DogCard from "./DogCard";

function DogPack() {
  const { selected, previousDogs } = useGameRound();
  const { setDogCard, toggleSelected, toggleDogPack } = usePopUp();
  const { playSound, click } = useSounds()


  return (
    <>
      <div className="modal-background"></div>
      <div className="modal-content tile is-ancestor is-flex is-justify-content-center is-align-items-center">
        <div className="box dog-pack-shell tile is-parent is-vertical">
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
              className="button result-btn back-btn"
              onClick={() => {
                playSound(click)
                toggleDogPack();
              }}
            ><i class="fa-solid fa-left-long"></i>&nbsp;
              Back
            </button>
            </div>
          </div>
          
      </div>
    </>
  );
}

export default DogPack;
