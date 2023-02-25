import {useGameRound } from '../context/GameRoundContext';

function DogImage() {

  const {sizeClue, correctDog, setImageLoaded} = useGameRound()

  return (
    <div className={`tile img-div is-child box ${sizeClue ? "" : ""}`}>
    <div className=" is-flex-tablet is-flex-direction-column is-justify-content-end">
    {/* <div className="box dog-img-banner"><h1 className={`${props.showCorrectName ?  "dog-banner-show" : "dog-banner-hide"}`}>{props.correctDog.name}</h1></div> */}
      <figure className="img-el">
      <img
          onLoad={() => setImageLoaded(true)}
          src={correctDog.image ? correctDog.image.url : null}
          alt=""
          className="dog-img is-align-self-center border-gradient"
        />
      </figure>
      </div>
    </div>
  );
}

export default DogImage;
