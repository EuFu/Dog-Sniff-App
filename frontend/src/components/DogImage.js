import {useGameRound } from '../context/GameRoundContext';

function DogImage() {

  const {sizeClue, correctDog, setImageLoaded} = useGameRound()

  return (
    // <div className={`tile img-div is-child box ${sizeClue ? "" : ""}`}>
    <div>
      <figure className="img-el">
      <img
          onLoad={() => setImageLoaded(true)}
          src={correctDog.image ? correctDog.image.url : null}
          alt=""
          className="dog-img is-align-self-center border-gradient"
        />
      </figure>
      </div>
    // </div>
  );
}

export default DogImage;
