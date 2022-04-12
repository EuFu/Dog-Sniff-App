import { useState, useEffect } from "react";

function NameButton(props) {
  const [classStyle, setClassStyle] = useState();
  const [greyOut, setGreyOut] = useState(false);
  const [displayNames, setDisplayNames] = useState(false);
  const [newDogsArray, setNewDogsArray] = useState([]);
  useEffect(() => {
    setClassStyle("")
  }, [props.correctDog]);

  const names = props.fiftyFifty.map((dog) => dog.name);

  function handleClick(dog) {
    dog.id === props.correctDog.id
      ? setClassStyle("correctGuess")
      : setClassStyle("incorrectGuess");
  }
  return (
    <div className="dog-name-btns column">
      <button
        className={`button is-light names.includes(${props.dog.name}) ? "greyOut" : ${classStyle}`} 
        disabled={names.includes(props.dog.name) ? true: false}
        onClick={() => {
          handleClick(props.dog);
          props.checkAnswer(props.dog.name);
          setTimeout(() => props.togglePopup(), 500)
        }}
      >
        <h4 className="animate__animated animate__flipInX animate__slow">{props.dog.name}</h4>
      </button>{" "}
      
        {props.attributeClue ? (
          <p className="hint">Temperament: {props.dog.temperament}</p>
        ) : null}
        {props.sizeClue ? (
          <span className="hint">
          <h6>Height: {props.dog.height.imperial} in. / {props.dog.height.metric}{" "}
            cm. </h6>
          <h6>Weight: {props.dog.weight.imperial} lbs. /{" "}
            {props.dog.weight.metric} kgs.{" "}</h6>
          </span>
        ) : null}
        
    </div>
  );
}

export default NameButton;
