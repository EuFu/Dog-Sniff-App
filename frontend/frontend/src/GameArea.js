import { useState, useEffect } from "react";
import DogName from "./DogName";
import DogImage from "./DogImage";
function GameArea(props) {
  return (
    <div className="game-area">
      <DogImage
        correctDog={props.correctDog}
        generateRound={props.generateRound}
        round={props.round}
      />
      <DogName
        dogsInRound={props.dogsInRound}
        correctDog={props.correctDog}
        checkAnswer={props.checkAnswer}
        answerColor={props.answerColor}
        fiftyFifty={props.fiftyFifty}
        attributeClue={props.attributeClue}
        sizeClue={props.sizeClue}
        selected={props.selected}
        btnClassStyle={props.btnClassStyle}
        togglePopup={props.togglePopup}
        letterClue={props.letterClue}
        count={props.count}
      />
      <div>
      {props.letterClue.show ? (
          <h4>Name contains "{props.letterClue.letters[0]}", "{props.letterClue.letters[1]}"</h4>
        ) : null}
      </div>
    </div>
  );
}

export default GameArea;
