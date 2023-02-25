import { useState, useContext } from "react";
import Info from "./Info.js";
import DogCard from "./DogCard";
import { usePopUp } from "../context/PopupContext.js";
import { useGameRound } from "../context/GameRoundContext.js";

function Result(props) {
  const {
    selected,
    previousDogs,
    dogCard,
    round,
    correctDog,
    userLevel,
    resetGame,
    clearRound,
  } = useGameRound();
  const correct = selected.correct;

  const { setDogCard, toggleSelected, dogPack, toggleDogPack, toggleInfo } =
    usePopUp();

  console.log(previousDogs);
  console.log(selected.count);
  return (
    <div>
      <div className="modal-background"></div>
      <div className="modal-content tile is-ancestor">
        {/* // Round 1-5 component // */}

        <div className="box popup-shell tile is-parent is-vertical">
          <div className="section round-main tile is-child is-warning is-12">
            <h1
              className={`title block is-1 ${
                round < 6 && correct
                  ? "animate__animated animate__pulse animate__delay-1s"
                  : round < 6 && correct === "false"
                  ? "animate__animated animate__fadeOut animate__delay-2s animate__slower"
                  : round === 6 && correct
                  ? "animate__animated animate__heartBeat animate__slow animate__delay-1s"
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
              <DogCard 
                dog = {correctDog}
              />
              </div>
            {/* <figure class="image is-96x96 is-inline-block">
                      <img className="dog-card-img" src={correctDog.image.url} alt="Dog" />
                    </figure>
              <button className="button is-ghost" onClick={toggleInfo}>
                {correctDog.name}
              </button> */}
            <div className="progress-div block">
              <span>
                Rank: {correct ? userLevel(round) : userLevel(round - 1)}
              </span>
              {correct && round === 6 ? (
                <span>
                  <i class="fa-solid fa-crown"></i>
                </span>
              ) : null}
            </div>
            
            <div>
              {Array.from({ length: 6 }, (_, i) => i + 1).map((x) => (
                <i
                  className={`fa-solid fa-bone ${
                    selected.count >= x ? "dog-bone-1" : "dog-bone"
                  }`}
                ></i>
              ))}
              {/* <i
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
                  ></i> */}
            </div>
            {correct && round === 6 ? (
              <h6 className="subtitle block is-5">
                You have 'sniffed out' all the dogs correctly!
              </h6>
            ) : null}
            

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
                  <span>Next</span><i className="fa-solid fa-right-long" id="next-btn"></i>
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
      </div>
    </div>
  );
}

export default Result;
