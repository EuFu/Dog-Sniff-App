import { useState, useContext } from "react";
import Info from "./Info.js";
import DogPack from "./DogPack.js"
import { usePopUp } from "../context/PopupContext.js";
import { useGameRound } from "../context/GameRoundContext.js";

function Result(props) {
  const {selected, previousDogs, dogCard, round, correctDog, userLevel, resetGame, clearRound} = useGameRound()
  const correct = selected.correct;

  const {setDogCard, toggleSelected, dogPack, toggleDogPack, toggleInfo} = usePopUp()

  console.log(previousDogs);
  console.log(dogCard);
  console.log(selected.count);
  return (
    <div>
      <div className="modal-background"></div>
      <div className="modal-content tile is-ancestor">
        {!dogPack ? (  
          // Round 1-5 component //

          <div className="box popup-body tile is-parent is-vertical">
            <div className="section round-main tile is-child is-warning is-12">
      
              <h1
                className={`title block is-1 ${
                  round < 6 && correct
                    ? "animate__animated animate__pulse animate__delay-1s"
                    : round < 6 && correct === "false" ? "animate__animated animate__fadeOut animate__delay-2s animate__slower"
                    : round === 6  && correct ? "animate__animated animate__heartBeat animate__slow animate__delay-1s"
                    : "animate__animated animate__fadeOut animate__delay-2s animate__slower"
                }`}
              >
                {correct && round === 6 ? "Impeccable Senses"
                  : correct ? "Good sniff!"
                  : "Lost the scent..."}
              </h1>
              {correct ? (
                <h5 className="subtitle block is-6">
                  <b>{correctDog.name}</b> is correct!
                </h5>
              ) : (
                <h5>
                  The correct dog was <b>{correctDog.name}</b>
                </h5>
              )}
              <div className="progress-div block">
                <span>
                  Rank:{" "}
                  {correct
                    ? userLevel(round)
                    : userLevel(round - 1)}
                </span>
                {correct && round === 6 ? (
                  <span>
                    <i class="fa-solid fa-crown"></i>
                  </span>
                ) : null}
                {/* <progress
                  className={`progress ${
                    props.selected.correct ? "is-link" : "is-failure"
                  }`}
                  value={
                    props.selected.correct
                      ? props.round * 10
                      : (props.round - 1) * 10
                  }
                  max="60"
                ></progress> */}
                
              </div>
              <div>
                  <i
                    className={`fa-solid fa-bone ${
                      selected.count >= 1 ? "dog-bone-1" : "dog-bone"
                    }`}
                  ></i>
                  <i
                    className={`fa-solid fa-bone ${
                      selected.count >= 2 ? "dog-bone-1" : "dog-bone"
                    }`}
                  ></i>
                  <i
                    className={`fa-solid fa-bone ${
                      selected.count >= 3 ? "dog-bone-1" : "dog-bone"
                    }`}
                  ></i>
                  <i
                    className={`fa-solid fa-bone ${
                      selected.count >= 4 ? "dog-bone-1" : "dog-bone"
                    }`}
                  ></i>
                  <i
                    className={`fa-solid fa-bone ${
                      selected.count >= 5 ? "dog-bone-1" : "dog-bone"
                    }`}
                  ></i>
                  <i
                    className={`fa-solid fa-bone ${
                      selected.count >= 6 ? "dog-bone-1" : "dog-bone"
                    }`}
                  ></i>
                </div>
              {correct && round === 6 ? (
                <h6 className="subtitle block is-5">
                  You have 'sniffed out' all the dogs correctly!
                </h6>
              ) : null
              }
              <div>
                <button className="button is-ghost" onClick={toggleInfo}>
                  More Info
                </button>
              </div>

              <div>
                <button className="button" onClick={toggleDogPack}>
                  Your dogpack
                </button>
                {correct && round < 6 ? (
                  <button
                    className="button is-success is-light"
                    id="next"
                    onClick={clearRound}
                  >
                    <i className="fa-solid fa-arrow-right" id="next-btn"></i>
                  </button>
                ) : (
                  <button className="button is-light" onClick={resetGame}>
                    <span>
                      <span>Return Home</span>
                      <span class="icon is-small">
                        <i class="fa-solid fa-arrow-rotate-left"></i>
                      </span>
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : // Round 6 component//

        /* round === 6 && !dogPack ? (
          <div className="box">
            <div className="section">
              <h1
                className={`title block is-3 ${
                  correct
                    ? "animate__animated animate__heartBeat animate__slow animate__delay-1s"
                    : "animate__animated animate__fadeOut animate__delay-2s animate__slower"
                }`}
              >
                {correct ? "Impeccable senses!" : "Lost the scent..."}
              </h1>
              {correct ? (
                <h5 className="subtitle block is-5">
                  You have 'sniffed out' all the dogs correctly!
                </h5>
              ) : (
                <p>
                  The correct dog was <b>{correctDog.name}</b>
                </p>
              )}
              <div className="progress-div block">
                <span>
                  Rank:{" "}
                  {correct
                    ? userLevel(round)
                    : userLevel(round - 1)}
                  &nbsp;
                </span>
                {correct ? (
                  <span>
                    <i class="fa-solid fa-crown"></i>
                  </span>
                ) : null}
                <progress
                  className={`progress ${
                    selected.correct ? "is-link" : "is-failure"
                  }`}
                  value={round * 10}
                  max="60"
                ></progress>
              </div>

              <div className="block">
                <p>Can you do it again?</p>
                <button className="button" onClick={resetGame}>
                  <span>
                    <span>Return Home</span>
                    <span class="icon is-small">
                      <i class="fa-solid fa-arrow-rotate-left"></i>
                    </span>
                  </span>
                </button>
              </div>

              <div>
                <button className="button is-ghost" onClick={toggleInfo}>
                  More Info On This Dog
                </button>
              </div>
            </div>
          </div>
        ) : ( */
          // Dogpack triggered render //
        (
          <DogPack />
        )}
        )
      </div>
    </div>
  );
}

export default Result;
