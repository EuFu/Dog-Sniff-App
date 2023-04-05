import { useState, useEffect } from "react";
import { useGameRound } from "../context/GameRoundContext";
import { useSounds } from "../context/SoundsContext";

function NameButton(props) {
  const [classStyle, setClassStyle] = useState();
  const [showName, setShowName] = useState("hidden");
  const [flipName, setFlipName] = useState("");
  const {
    correctDog,
    fiftyFifty,
    sizeClue,
    selected,
    checkAnswer,
    togglePopup,
    setShowCorrectName,
  } = useGameRound();
  const { playSound, click } = useSounds();

  useEffect(() => {
    setClassStyle("");
    setShowName("hidden");
    setFlipName("");
  }, [correctDog]);

  useEffect(() => {
    setTimeout(() => {
      setShowName("");
      setFlipName("animate__animated animate__flipInX is-slower");
    }, (props.number + 1) * 1250);
  }, [correctDog]);

  const names = fiftyFifty.map((dog) => dog.name);

  function assignLetter(number) {
    switch (number) {
      case 0:
        return "A";
      case 1:
        return "B";
      case 2:
        return "C";
      case 3:
        return "D";
      default:
        return "";
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
            disabled={
              names.includes(props.dog.name) ||
              (selected.selected && props.number !== selected.dogNum)
                ? true
                : false
            }
            visibility="hidden"
            onClick={
              !selected.selected
                ? () => {
                    handleClick(props.dog);
                    checkAnswer(props.dog.name, props.number);
                    setShowCorrectName(true);
                    playSound(click);
                    setTimeout(() => togglePopup(), 1500);
                  }
                : null
            }
          >
            <span className={flipName} style={{ visibility: showName }}>
              {assignLetter(props.number)}. &nbsp;{" "}
              <strong>{props.dog.name}</strong>
            </span>
          </button>{" "}
        </div>
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
