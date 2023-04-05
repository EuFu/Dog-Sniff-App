import {useGameRound } from '../context/GameRoundContext';

function DogImage() {

  const {correctDog, setImageLoaded} = useGameRound()

  return (
    <div>
      <figure className="img-el">
      <img
          onLoad={() => setImageLoaded(true)}
          src={correctDog.image ? correctDog.image.url : null}
          alt=""
          className="dog-img is-align-self-center"
        />
      </figure>
      </div>
  );
}

export default DogImage;
