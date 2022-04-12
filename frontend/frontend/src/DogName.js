import { use } from 'express/lib/router';
import { useState, useEffect } from 'react'
import NameButton from "./NameButton.js";

function DogName(props) {
  const [ count, setCount ] = useState(0)
  const [newArray, setNewArray] = useState([])

  useEffect(() => {
    setCount(0)
  }, [props.dogsInRound])

  useEffect(() => {
    let counter = count;
    const interval = setInterval(() => {
      if (counter >= props.dogsInRound.length) {
        clearInterval(interval);
      } else {
        setCount(count => count + 1);
        counter++; // local variable that this closure will see
      }
    }, 1500);
    return () => clearInterval(interval); 
  }, [props.dogsInRound, count, props.correctDog]);

  
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
  
  let dogsInRound = props.dogsInRound.slice(0, count).map(dog => {
    return (
      <NameButton
        key={dog.id}
        dog={dog}
        correctDog={props.correctDog}
        checkAnswer={props.checkAnswer}
        fiftyFifty={props.fiftyFifty}
        attributeClue={props.attributeClue}
        sizeClue={props.sizeClue}
        selected={props.selected}
        btnClassStyle={props.btnClassStyle}
        togglePopup={props.togglePopup}
        letterClue={props.letterClue}
      />
    )
  })
    return (
      <div className="dog-names columns">
        {dogsInRound}
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
