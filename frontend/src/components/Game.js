import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import Header from "./Header.js"
import GameArea from "./GameArea.js"
import Popup from "./Popup.js"
import NewGame from "./NewGame.js"
import Info from "./Info.js";
import GameDirections from "./GameDirections"
import {useGameRound } from "../context/GameRoundContext.js";

function Game(props) {
  const {  
    newGame,
    setAllDogs,
    popup,} = useGameRound()
  const [isReady, setIsReady] = useState(false)
  // const [newGame, setNewGame] = useState();
  const [sound, setSound] = useState(true)
  // const [round, setRound] = useState(0);
  // const [allDogs, setAllDogs] = useState([]);
  // const [correctDog, setCorrectDog] = useState([]);
  // const [dogsInRound, setDogsInRound] = useState([]);
  // const [previousDogs, setPreviousDogs] = useState([]);
  // const [fiftyFifty, setFiftyFifty] = useState([]);
  // const [fFState, setfFState] = useState(false);
  // const [attributeClue, setAttributeClue] = useState(false)
  // const [attributeState, setAttributeState] = useState(false)
  // const [sizeClue, setSizeClue] = useState(false);
  // const [sizeState, setSizeState] = useState(false);
  // const [letterClue, setLetterClue] = useState({
  //   used: false,
  //   show: false,
  //   letters: [],
  // });
  // const [selected, setSelected] = useState({
  //   selected: false,
  //   correct: false,
  //   count: 0
  // });
  // const [showCorrectName, setShowCorrectName] = useState(false)
  // const [popup, setPopup] = useState(false);
  // const [dogPack, setDogPack] = useState(false);
  // const [externalLink, setExternalLink] = useState({
  //   exist: false,
  //   source: ""
  // })

  useEffect(() => {
    async function getDog() {
      await axios.get("/games").then((data) => {
        setAllDogs(data.data)
        console.log(data.data)
      });
    }
    getDog();
  }, []);

  // Generate New Round
  // const generateRound = () => {
  //   const dogs = pickDogs();
  //   setDogsInRound(dogs);
  //   const correctDog = pickCorrectDog(dogs);
  //   setCorrectDog(correctDog);
  //   setPreviousDogs((prevValue) => {
  //     return [...prevValue, correctDog];
  //   });
  //   setRound((prevValue) => {
  //     return prevValue + 1;
  //   });
  //   setNewGame(false);
  //   getMoreInfo(correctDog.name);
  // };


  // Clear round and generate new round
  // function clearRound() {
  //   setDogsInRound([]);
  //   setCorrectDog([]);
  //   setFiftyFifty([]);
  //   // setAttributeClue(false)
  //   setSizeClue(false);
  //   setSelected(prevValue => {
  //     return {
  //       selected: false,
  //       correct: false,
  //       count: prevValue.count
  //     }
  //   });
  //   setShowCorrectName(false)
  //   setPopup(false);
  //   // setExternalLink({
  //   //   exist: false,
  //   //   source: ""
  //   // })
  //   setLetterClue((prevValue) => {
  //     return {
  //       used: prevValue.used,
  //       show: false,
  //       letters: [],
  //     };
  //   });
  //   generateRound();
  // }

  // Reset Game
  // function resetGame() {
  //   setCorrectDog([]);
  //   setDogsInRound([]);
  //   setPreviousDogs([]);
  //   setFiftyFifty([]);
  //   setfFState(false);
  //   setSizeClue(false);
  //   setSizeState(false);
  //   setLetterClue({
  //     used: false,
  //     show: false,
  //     letters: [],
  //   });
  //   setSelected({
  //     selected: false,
  //     correct: false,
  //     count: 0
  //   });
  //   setShowCorrectName(false)
  //   setPopup(false);
  //   setRound(0);
  // }

  // // Pick 4 random dogs for round
  // const pickDogs = () => {
  //   let dogGroup = [];
  //   for (let i = 4; i > 0; i--) {
  //     const remainingDogs = allDogs.filter((item) => {
  //       return (
  //         !dogGroup.find(({ name }) => name === item.name) &&
  //         !previousDogs.find(({ name }) => name === item.name)
  //       );
  //     });

  //     const randomIndex = Math.floor(Math.random() * remainingDogs.length);
  //     dogGroup.push(remainingDogs[randomIndex]);
  //   }
  //   return dogGroup;
  // };

  // // Pick correct dog for round
  // const pickCorrectDog = (dogs) => {
  //   const randomIndex = Math.floor(Math.random() * dogs.length);
  //   return dogs[randomIndex];
  // };

  // // Generate level banner
  // function userLevel(round) {
  //   switch (round) {
  //     case 0:
  //       return "Newborn";
  //     case 1:
  //       return "Pupper";
  //       break;
  //     case 2:
  //       return "Doggo";
  //       break;
  //     case 3:
  //       return "Good Dog";
  //       break;
  //     case 4:
  //       return "Neighborhood Favorite";
  //       break;
  //     case 5:
  //       return "Rescue Dog";
  //       break;
  //     case 6:
  //       return "Pack Leader";
  //       break;
  //     default:
  //       return "";
  //   }
  // }

  // //Set fiftyFifty value
  // function handleFifty() {
  //   const dogsLeft = dogsInRound.filter((dog) => {
  //     return dog.name !== correctDog.name;
  //   });
  //   setFiftyFifty(shuffleDogs(dogsLeft).slice(0, 2));
  //   setfFState(true);
  //   console.log(fiftyFifty);
  //   console.log(round);
  // }

  // //Select two random letters
  // function selectLetters() {
  //   const array = correctDog.name
  //     .toUpperCase()
  //     .replace(/[^A-Z0-9]+/gi, "")
  //     .split("");
  //   console.log(array);
  //   let i = array.length;
  //   while (i) {
  //     const randomIndex = Math.floor(Math.random() * i--);
  //     let k = array[i];
  //     array[i] = array[randomIndex];
  //     array[randomIndex] = k;
  //   }

  //   findDifferent(1);
  //   function findDifferent(index) {
  //     if (array[0] !== array[index]) {
  //       setLetterClue({
  //         used: true,
  //         show: true,
  //         letters: [array[0], array[index]],
  //       });
  //     } else {
  //       findDifferent(index + 1);
  //     }
  //   }
  // }

  // // Shuffle remaining dogs array
  // function shuffleDogs(dogsLeft) {
  //   let i = dogsLeft.length;
  //   while (i) {
  //     const randomIndex = Math.floor(Math.random() * i--);
  //     let k = dogsLeft[i];
  //     dogsLeft[i] = dogsLeft[randomIndex];
  //     dogsLeft[randomIndex] = k;
  //   }
  //   console.log(dogsLeft);
  //   return dogsLeft;
  // }

  // // function handleAttribute() {
  // //   setAttributeClue(true)
  // //   setAttributeState(true)
  // // }

  // function handleSize() {
  //   setSizeClue(true);
  //   setSizeState(true);
  // }

  // function answerSelected() {
  //   setSelected(true);
  // }

  // function checkAnswer(dogName) {
  //   correctDog.name === dogName
  //     ? setSelected((prevValue) => {
  //         return {
  //           selected: prevValue,
  //           correct: true,
  //           count: prevValue.count + 1
  //         };
  //       })
  //     : setSelected((prevValue) => {
  //         return {
  //           selected: prevValue,
  //           correct: false,
  //           count: prevValue.count
  //         };
  //       });
  // }

  // function togglePopup() {
  //   setPopup((prevValue) => !prevValue);
  // }

  // function toggleDogPack() {
  //   setDogPack((prevValue) => !prevValue);
  // }

  // async function getMoreInfo(dog) {
  //   const dogName = dog.replace(/\s+/g, "-").toLowerCase();

  //   try {
  //     const url = "https://www.akc.org/dog-breeds/" + dogName;
  //     await axios.get(url);
  //     // await setExternalLink({
  //     //   exist: true,
  //     //   source: url
  //     // })
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

    return (
        <div className="column is-12">
        {/* <Header /> */}
          <GameArea
            // dogsInRound={dogsInRound}
            // correctDog={correctDog}
            // checkAnswer={checkAnswer}
            // fiftyFifty={fiftyFifty}
            // attributeClue={attributeClue}
            // sizeClue={sizeClue}
            // selected={selected}
            // generateRound={generateRound}
            // round={round}
            // togglePopup={togglePopup}
            // letterClue={letterClue}
            // fFState={fFState}
            // handleFifty={handleFifty}
            // attributeState={attributeState}
            // handleAttribute={handleAttribute}
            // sizeState={sizeState}
            // handleSize={handleSize}
            // selectLetters={selectLetters}
            // newGame={newGame}
            // setNewGame={setNewGame}
            // help={help}
            // toggleHelp={toggleHelp}
            // showCorrectName={showCorrectName}
            // revealName={setShowCorrectName}
          />
          {popup ? (
            <Popup
              // correctDog={correctDog}
              // previousDogs={previousDogs}
              // selected={selected}
              // clearRound={clearRound}
              // togglePopup={togglePopup}
              // round={round}
              // userLevel={userLevel}
              // resetGame={resetGame}
              // popup={popup}
              // dogPack={dogPack}
              // toggleDogPack={toggleDogPack}
            />
          ) : null}
          {newGame ? <NewGame /> : null}
          </div>
    )
}

export default Game