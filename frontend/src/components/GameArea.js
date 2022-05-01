import DogName from "./DogName";
import DogImage from "./DogImage";
import Hints from "./Hints";
import NewGame from "./NewGame";

function GameArea(props) {
  return (
    <section className="game-area">
      {props.round > 0 ? (
        <div className="">
          <Hints
            fFState={props.fFState}
            handleFifty={props.handleFifty}
            attributeState={props.attributeState}
            handleAttribute={props.handleAttribute}
            sizeState={props.sizeState}
            handleSize={props.handleSize}
            selectLetters={props.selectLetters}
            letterClue={props.letterClue}
            round={props.round}
            toggleHelp={props.toggleHelp}
          />
          <div className="hero is-warning is-small mb-2">
            {props.letterClue.show ? (
              <h4 className="hero-body title is-5">
                Name contains: '{props.letterClue.letters[0]}' & '
                {props.letterClue.letters[1]}'
              </h4>
            ) : null}
          </div>
            <div className={`modal ${props.help ? "is-active" : ""}`}>
  <div className="modal-background"></div>
  <div className="modal-card content">
    <header className="modal-card-head">
      <h3 className ="modal-card-title title is-3">How to play</h3>
      <button className="delete" aria-label="close" onClick={props.toggleHelp}></button>
    </header>
    <section className="modal-card-body">
    <div className="block">
    <h4 className="">Objective</h4>
      <p className="has-text-left">Each round, you will be presented with a photo of a different dog. Using your knowledge and senses, pick the correct name to advance. There are a total of 6 rounds</p>
    </div>
      <h4>Hints</h4>
      <div className="block has-text-left">
      <p>You have 3 hints available at your disposal, use them if you get stuck! Be careful though, each hint can only be used once...</p>
      <ul>
        <li><b>50/50</b> - Eliminates half of the choices, giving you a 50/50 chance</li>
        <li><b>Typical Size</b> - Shows the typical height(shoulders/withers) and weight for each dog</li>
        <li><b>2 Letters</b> - Reveals two random letters that are in the correct dogs name</li>        
      </ul>
      </div>
      <div className="block">
      <h4 className="">More</h4>
      <p>If you want to know more about the correct dog, click "More info on this dog" at the end of each round</p>
      </div>
      <h4 className="title is-5">Goodluck! And your nose lead you to victory</h4>
    </section>
  </div>
</div>
          <div className="img-names-div columns">
            <DogImage
              correctDog={props.correctDog}
              generateRound={props.generateRound}
              round={props.round}
              sizeClue={props.sizeClue}
            />
            <DogName
              dogsInRound={props.dogsInRound}
              correctDog={props.correctDog}
              checkAnswer={props.checkAnswer}
              fiftyFifty={props.fiftyFifty}
              attributeClue={props.attributeClue}
              sizeClue={props.sizeClue}
              selected={props.selected}
              togglePopup={props.togglePopup}
              letterClue={props.letterClue}
            />
          </div>
        </div>
      ) : (
        <div
          className={`new-game ${
            props.dogsInRound.length > 0
              ? "animate__animated animate__fadeOutRight"
              : ""
          }`}
        >
        <div className="new-game-content">
        <div className="level">
            <div className="new-game-logo level-item py-small">
              <span className="animate__animated animate__backInDown">
                <h1 className="new-game-title">Sniff</h1>
              </span>
              <br></br>
              <span className="animate__animated animate__backInUp">
                <h1 className="new-game-title">&nbsp;Out</h1>
              </span>
            </div>
          </div>
          <div className="new-game-btn-div animate__animated animate__bounceInLeft animate__delay-1s animate__slow">
            <button
              className="button new-game-btn ml-3 "
              onClick={props.generateRound}
            >
            <div>
            <i class="fa-solid fa-dog fa-4x"></i>
            </div>
            <div>
            <h1 className="animate__animated animate__fadeIn animate__delay-3s">Start Game</h1>
            </div>
            </button>
          </div>
        </div>
        </div>
      )}
    </section>
  );
}

export default GameArea;
