import { useEffect } from "react";
import DogCard from "./DogCard";
import { usePopUp } from "../context/PopupContext.js";
import { useGameRound } from "../context/GameRoundContext.js";
import { useSounds } from "../context/SoundsContext.js";

function Result() {
  const {
    selected,
    round,
    correctDog,
    userRank,
    rankDescription,
    resetGame,
    clearRound,
    setRendered,
  } = useGameRound();

  const correct = selected.correct;

  const { playSound, playMusic, resetMusic, click, bark, wahwah, congrats } = useSounds();
  
  const { toggleDogPack } = usePopUp();

  useEffect(() => {
    playMusic("pause");
    if (correct && round === 6) {
      playSound(congrats);
    } else if (correct) {
      playSound(bark);
    } else {
      playSound(wahwah);
    }
    // setTimeout(() => {
    //   playMusic("result")
    // }, 1500)
  }, []);

  return (
    <>
      <div className="modal-background"></div>
      <div className="result-container modal-content tile is-ancestor is-flex is-justify-content-center is-align-items-center">
        {/* // Round 1-5 component // */}

        <div className="popup-shell tile is-parent is-vertical box">
          <div className="round-main tile is-child is-warning">
            <div className="tile is-parent is-vertical">
              <div
                className={`tile is-child box ${
                  correct ? "result-correct" : "result-incorrect"
                }`}
              >
                <h1
                  className={`title block is-1 is-size-3-mobile ${
                    round < 6 && correct
                      ? "animate__animated animate__heartBeat"
                      : round < 6 && correct === "false"
                      ? "animate__animated animate__fadeOut animate__delay-2s animate__slower"
                      : round === 6 && correct
                      ? "animate__animated animate__zoomIn"
                      : "animate__animated animate__fadeOut animate__delay-2s animate__slower"
                  }`}
                >
                  {correct && round === 6
                    ? "Impeccable Senses"
                    : correct
                    ? "Good sniff!"
                    : "Lost the scent..."}
                </h1>
                {correct ? (
                  <h5 className="subtitle block is-6">You are correct!</h5>
                ) : (
                  <h5>Your guess was incorrect</h5>
                )}
                <div className="tile is-ancestor dog-card-result">
                  <DogCard dog={correctDog} />
                </div>
              </div>
              <div
                className={`tile is-child box ${
                  correct ? "result-correct" : "result-incorrect"
                }`}
              >
                <div className="progress-div ">
                  {!correct ? userRank(round - 1) : userRank(round)}
                </div>
                <div className="m-1">
                  {Array.from({ length: 6 }, (_, i) => i + 1).map((x) => (
                    <i
                      className={`fa-solid fa-bone ${
                        selected.count >= x ? "dog-bone-1" : "dog-bone"
                      }`}
                    ></i>
                  ))}
                </div>
                <div>
                  {!correct
                    ? rankDescription(round - 1)
                    : rankDescription(round)}
                </div>
              </div>

              {correct && round === 6 ? (
                <h6 className="subtitle block box is-5" id="completed-msg">
                  *Congratulations! You have 'sniffed out' all the dogs
                  correctly*
                </h6>
              ) : null}
            </div>
            <div className="block" id="result-buttons">
              <button
                className="button result-btn"
                id="dog-pack-btn"
                onClick={() => {
                  playSound(click);
                  toggleDogPack();
                }}
              >
                <i class="fa-solid fa-dog fa-lg"></i>
              </button>
              {correct && round < 6 ? (
                <button
                  className="button result-btn"
                  id="next-btn"
                  onClick={() => {
                    playSound(click);
                    resetMusic();
                    playMusic("main");
                    setRendered(false);
                    clearRound();
                  }}
                >
                  <span className="">
                    <span>Next</span>
                    <span class="icon is-small">
                      &nbsp;&nbsp;
                      <i class=" fa-solid fa-right-long fa-2x"></i>&nbsp;
                    </span>
                  </span>
                </button>
              ) : (
                <button
                  className="button is-light result-btn"
                  onClick={() => {
                    playSound(click);
                    resetMusic();
                    resetGame();
                  }}
                >
                  <span>
                    <span>Start Over</span>
                    <span class="icon is-small">
                      <i class="fa-solid fa-arrow-rotate-left"></i>
                    </span>
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Result;
