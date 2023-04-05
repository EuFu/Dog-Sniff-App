import { useState, useEffect } from 'react'
import { useGameRound } from '../context/GameRoundContext.js';
import NameButton from "./NameButton.js";

function DogName() {
  const {dogsInRound, correctDog, imageLoaded} = useGameRound()
  const [ count, setCount ] = useState(0)

  useEffect(() => {
  }, [imageLoaded])

  useEffect(() => {
    setCount(0)
  }, [dogsInRound])

  useEffect(() => {
    let counter = count;
    const interval = setInterval(() => {
      if (counter >= dogsInRound.length) {
        clearInterval(interval);
      } else {
        setCount(count => count + 1);
        counter++; // local variable that this closure will see
      }
    }, 1250);
    return () => clearInterval(interval); 
  }, [dogsInRound, count, correctDog]);

    return (
      <div className="section dog-names">
        {dogsInRound.map((dog, index) => {
          return (
          <NameButton
        key={index}
        number={index}
        dog={dog}
      />
          )
        })}
      </div>
    )
}

export default DogName;
