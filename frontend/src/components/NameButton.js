import { useState, useEffect, useContext } from "react";
import { useGameRound } from "../context/GameRoundContext";

function NameButton(props) {
  const [classStyle, setClassStyle] = useState();
  const [showName, setShowName] = useState("hidden");
  const [flipName, setFlipName] = useState("")
  const [isDisabled, setIsDisabled] = useState(false);
  const {correctDog, fiftyFifty, sizeClue, checkAnswer, togglePopup, setShowCorrectName} = useGameRound()
  
  useEffect(() => {
    setClassStyle("");
    setShowName("hidden");
    setFlipName("")
  }, [correctDog]);

  useEffect(() => {
    setTimeout(() => {
      setShowName("")
      setFlipName("animate__animated animate__flipInX is-slower")
    }, (props.number + 1) * 1250)
  }, [correctDog])

  const names = fiftyFifty.map((dog) => dog.name);

  function assignLetter(number) {
    switch(number) {
      case 0: return "A"
      case 1: return "B"
      case 2: return "C"
      case 3: return "D"
      default: return ""
    }
  }
  function handleClick(dog) {
    dog.id === correctDog.id
      ? setClassStyle("is-success animate__shakeY")
      : setClassStyle("is-danger animate__shakeX");
  }
  return (
    <div className="level name-div1 column is-vcentered">
      <div className="name-div2">
        <div className={`${sizeClue ? " " : ""}`}>
          <button
            type="submit"
            className={`dog-name-btns button animate__animated animate__flipInX is-slower names.includes(${props.dog.name}) ? ${classStyle} : null`}
            disabled={names.includes(props.dog.name) ? true : false}
            visibility="hidden"
            onClick={() => {
              handleClick(props.dog);
              checkAnswer(props.dog.name);
              setShowCorrectName(true);
              setTimeout(() => togglePopup(), 1500);
            }}
          ><span className={flipName} style={{"visibility": showName}}>{assignLetter(props.number)}. &nbsp; <strong>{props.dog.name}</strong></span>
          </button>{" "}
        </div>
        {/* {props.attributeClue ? (
          <div className="column hint is-one-third-desktop">
            <p>
              {props.dog.temperament
                .split(" ")
                .slice(0, 4)
                .map((dog) => dog + " ")}
            </p>
          </div>
        ) : null} */}
        {sizeClue ? (
          <div className={`${sizeClue ? "size-clue" : ""}`}>
            <h6 className="m-1">
              Height: {props.dog.height.imperial} in. /{" "}
              {props.dog.height.metric} cm.{" "}
            </h6>
            <h6 className="m-1">
              Weight: {props.dog.weight.imperial} lbs. /{" "}
              {props.dog.weight.metric} kgs.{" "}
            </h6>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default NameButton;
