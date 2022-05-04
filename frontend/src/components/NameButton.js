import { useState, useEffect } from "react";

function NameButton(props) {
  const [classStyle, setClassStyle] = useState();
  const [isDisabled, setIsDisabled] = useState(false);
  
  useEffect(() => {
    setClassStyle("");
  }, [props.correctDog]);

  const names = props.fiftyFifty.map((dog) => dog.name);

  function handleClick(dog) {
    dog.id === props.correctDog.id
      ? setClassStyle("is-success animate__shakeY")
      : setClassStyle("is-danger animate__shakeX");
  }
  return (
    <div className=" level p-2 column is-vcentered section">
      <div className="name-div1 columns">
        <div className={`name-div2 ${props.sizeClue ? "column is-one-third-desktop " : "column is-half-tablet"}`}>
          <button
            className={`dog-name-btns button is-responsive is-light animate__animated animate__flipInX is-slower names.includes(${props.dog.name}) ? ${classStyle} : null`}
            disabled={names.includes(props.dog.name) ? true : false}
            onClick={() => {
              handleClick(props.dog);
              props.checkAnswer(props.dog.name);
              setTimeout(() => props.togglePopup(), 750);
            }}
          >{props.dog.name}
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
        {props.sizeClue ? (
          <div className={`${props.sizeClue ? "column is-flex-tablet is-justify-content-start is-two-thirds-desktop " : "column is-half-tablet"}`}>
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
