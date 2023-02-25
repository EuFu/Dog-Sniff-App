import { use } from 'express/lib/router';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useGameRound } from '../context/GameRoundContext.js';
import NameButton from "./NameButton.js";

function DogName(props) {
  const {dogsInRound, correctDog, imageLoaded} = useGameRound()
  const [ count, setCount ] = useState(0)

  const [fetched, setFetched] = useState(false)

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

  
  // let newDogsArray = props.dogsInRound.slice(0, count).map((dog) => {
  //   return (
  //     <NameButton
  //       key={dog.id}
  //       dog={dog}
  //       correctDog={props.correctDog}
  //       fiftyFifty={props.fiftyFifty}
  //       attributeClue={props.attributeClue}
  //       sizeClue={props.sizeClue}
  //     />
  //   );
  // })
  
  // let dogsInRound = props.dogsInRound.slice(0, count).map((dog, index) => {
  //   return (
  //     <NameButton
  //       key={index}
  //       number={index}
  //       dog={dog}
  //       correctDog={props.correctDog}
  //       checkAnswer={props.checkAnswer}
  //       fiftyFifty={props.fiftyFifty}
  //       attributeClue={props.attributeClue}
  //       sizeClue={props.sizeClue}
  //       selected={props.selected}
  //       togglePopup={props.togglePopup}
  //       letterClue={props.letterClue}
  //       revealName={props.revealName}
  //     />
  //   )
  // })
  //   return (
  //     <div className={`tile is-child box dog-names ${props.attributeClue || props.sizeClue ? "" : ""}`}>
  //       {dogsInRound}
  //     </div>
  //   )

    return (
      <div className="section dog-names">
        {dogsInRound.map((dog, index) => {
          return (
          <NameButton
        key={index}
        number={index}
        dog={dog}
        // correctDog={props.correctDog}
        // checkAnswer={props.checkAnswer}
        // fiftyFifty={props.fiftyFifty}
        // attributeClue={props.attributeClue}
        // sizeClue={props.sizeClue}
        // selected={props.selected}
        // togglePopup={props.togglePopup}
        // letterClue={props.letterClue}
        // revealName={props.revealName}
      />
          )
        })}
      </div>
    )

  // return (
  //   <div className="dog-names">
  //     {props.dogsInRound.map(dog => {
  //   return (
  //     <NameButton
  //       key={dog.id}
  //       dog={dog}
  //       correctDog={props.correctDog}
  //       checkAnswer={props.checkAnswer}
  //       fiftyFifty={props.fiftyFifty}
  //       attributeClue={props.attributeClue}
  //       sizeClue={props.sizeClue}
  //       selected={props.selected}
  //       btnClassStyle={props.btnClassStyle}
  //       togglePopup={props.togglePopup}
  //     />
  //   )
  //     })}
  //   </div>
  // );
}

export default DogName;
