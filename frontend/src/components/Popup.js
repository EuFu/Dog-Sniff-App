import { useState, useEffect } from "react";
import Round from "./Round";
import Info from "./Info";

function Popup(props) {
  const [info, setInfo] = useState(false);

  useEffect(() => {
    setInfo(false);
  }, [props.correctDog]);

  const correct = props.selected.correct;
  function handleClick() {
    props.nextRound();
  }

  function moreInfo() {
    setInfo(true)
  }

  return (
    <div className="pop-up">
      {!info ? (
        <Round 
          round={props.round}
          correctDog={props.correctDog}
          selected={props.selected}
          userLevel={props.userLevel}
          nextRound={props.nextRound}
          handleClick={handleClick}
          moreInfo={moreInfo}
          resetGame={props.resetGame}

        />
      ) : (
        <div className="columns is-mobile is-vcentered">
          <div className="pop-up-content column is-10-mobile is-offset-1-mobile is-8-tablet is-offset-2-tablet is-6-desktop is-offset-3-desktop">
            <div className="card-image">
              <figure>
                <img
                  src={props.correctDog.image.url}
                  alt={`${props.correctDog.name}`}
                  className="info-dog-img"
                />
                <figcaption>
                  <b>{props.correctDog.name}</b>
                </figcaption>
              </figure>
            </div>
            <div className="dog-info block">
              {props.correctDog.temperament ? (
                <p>{props.correctDog.temperament}</p>
              ) : null}
              {props.correctDog.height ? (
                <p>
                  Height: {props.correctDog.height.imperial} in. /{" "}
                  {props.correctDog.height.metric} cm.{" "}
                </p>
              ) : null}
              {props.correctDog.weight ? (
                <p>
                  Weight: {props.correctDog.weight.imperial} lbs. /{" "}
                  {props.correctDog.weight.metric} kgs.{" "}
                </p>
              ) : null}
              {props.correctDog.life_span ? (
                <p>Lifespan: {props.correctDog.life_span}</p>
              ) : null}
              {props.correctDog.country_code ? (
                <p>Country: {props.correctDog.country_code}</p>
              ) : null}
              {props.correctDog.bred_for ? (
                <p>Bred for: {props.correctDog.bred_for}</p>
              ) : null}
              {props.correctDog.breed_group ? (
                <p>Breed group: {props.correctDog.breed_group}</p>
              ) : null}
              <div className="block mt-3">
              <button
                className="button is-small"
                onClick={() => setInfo(false)}
              >
                <i class="fa-solid fa-arrow-left"></i> Back
              </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
