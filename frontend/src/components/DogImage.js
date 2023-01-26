import {useGameRound } from '../context/GameRoundContext';

function DogImage() {

  const {sizeClue, correctDog} = useGameRound()

  return (
    <div className={`tile is-child box ${sizeClue ? "" : ""}`}>
    <div className="img-div is-flex-tablet is-flex-direction-column is-justify-content-end">
    {/* <div className="box dog-img-banner"><h1 className={`${props.showCorrectName ?  "dog-banner-show" : "dog-banner-hide"}`}>{props.correctDog.name}</h1></div> */}
      <figure className="img-el">
      <img
          src={correctDog.image ? correctDog.image.url : null}
          alt=""
          className="dog-img is-align-self-center"
        />
      </figure>
      </div>
    </div>
  );
}

export default DogImage;
