import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import Header from "./Header.js";
import Footer from "./Footer.js";
import GameArea from "./GameArea.js";
import NewGame from "./NewGame.js"
import Popup from "./Popup.js"
// import DogImage from "./DogImage";

function App() {
  const [newGame, setNewGame] = useState()
  const [round, setRound] = useState(0);
  const [allDogs, setAllDogs] = useState([1,2]);
  const [correctDog, setCorrectDog] = useState([]);
  const [dogsInRound, setDogsInRound] = useState([]);
  const [previousDogs, setPreviousDogs] = useState([]);
  const [fiftyFifty, setFiftyFifty] = useState([]);
  const [fFState, setfFState] = useState(false)
  // const [attributeClue, setAttributeClue] = useState(false)
  // const [attributeState, setAttributeState] = useState(false)
  const [sizeClue, setSizeClue] = useState(false)
  const [sizeState, setSizeState] = useState(false)
  const [letterClue, setLetterClue] = useState({
    used: false,
    show: false,
    letters: []
  })
  const [selected, setSelected] = useState({
    selected: false,
    correct: false
  })
  const [popup, setPopup] = useState(false)
  const [help, setHelp] = useState(false)
  // const [externalLink, setExternalLink] = useState({
  //   exist: false,
  //   source: ""
  // })

  useEffect(() => {
    async function getDog() {
      await axios.get("/game").then((data) => {
        setAllDogs(data.data);
        console.log(data.data)
      });
    }
    getDog();
    
  }, []);

  // Generate New Round 
  const generateRound = () => {
    const dogs = pickDogs();
    setDogsInRound(dogs);
    const correctDog = pickCorrectDog(dogs);
    setCorrectDog(correctDog);
    setPreviousDogs((prevValue) => {
      return [...prevValue, correctDog];
    });
    setRound(prevValue => {
      return prevValue + 1
    })
    setNewGame(false)
    getMoreInfo(correctDog.name)
    console.log(correctDog)
  };

// Clear round and generate new round
  function clearRound() {
    setDogsInRound([]);
    setCorrectDog([]);
    setFiftyFifty([]);
    // setAttributeClue(false)
    setSizeClue(false)
    setSelected({
      selected: false,
      correct: false
    })
    setPopup(false)
    // setExternalLink({
    //   exist: false,
    //   source: ""
    // })
    setLetterClue(prevValue => {
      return {
        used: prevValue.used,
        show: false,
        letters: []
      }
    })
    generateRound();
  }

// Reset Game
  function resetGame() {
    setCorrectDog([])
    setDogsInRound([])
    setPreviousDogs([])
    setFiftyFifty([])
    setfFState(false)
    setSizeClue(false)
    setSizeState(false)
    setLetterClue(({
      used: false,
      show: false,
      letters: []
    }))
    setSelected({
      selected: false,
      correct: false
    })
    setPopup(false)
    setRound(0)

  }

  // Pick 4 random dogs for round
  const pickDogs = () => {
    let dogGroup = [];
    for (let i = 4; i > 0; i--) {
      const remainingDogs = allDogs.filter((item) => {
        return (
          !dogGroup.find(({ name }) => name === item.name) &&
          !previousDogs.find(({ name }) => name === item.name)
        );
      });

      const randomIndex = Math.floor(Math.random() * remainingDogs.length);
      dogGroup.push(remainingDogs[randomIndex]);
    }
    return dogGroup;
  };

  // Pick correct dog for round
  const pickCorrectDog = (dogs) => {
    const randomIndex = Math.floor(Math.random() * dogs.length);
    return dogs[randomIndex];
  };

  // Generate level banner
  function userLevel(round) {
    switch(round) {
      case 0:
        return "Newborn"
      case 1: 
        return "Pupper"
        break;
      case 2:
        return "Doggo"
        break;
      case 3:
        return "Good Dog"
        break;
      case 4:
        return "Neighborhood Favorite"
        break;
      case 5:
        return "Rescue Dog"
        break;
      case 6:
        return "Pack Leader"
        break;
      default:
        return ""
    }
  }

  // Toggle help section
  function toggleHelp() {
    setHelp(prevValue => {
      return !prevValue
    })
  }

  //Set fiftyFifty value
  function handleFifty() {
    const dogsLeft = dogsInRound.filter((dog) => {
      return dog.name !== correctDog.name;
    });
    setFiftyFifty(shuffleDogs(dogsLeft).slice(0, 2));
    setfFState(true)
    console.log(fiftyFifty);
    console.log(round)
  }

  //Select two random letters
  function selectLetters() {
    const array = correctDog.name.toUpperCase().replace(/[^A-Z0-9]+/ig, "").split("")
    console.log(array)
    let i = array.length;
    while (i) {
      const randomIndex = Math.floor(Math.random() * i--);
      let k = array[i];
      array[i] = array[randomIndex];
      array[randomIndex] = k;
    }

    findDifferent(1)
    function findDifferent(index) {
      if (array[0] !== array[index]) {
        setLetterClue({
            used: true,
            show: true,
            letters: [array[0], array[index]]
        })
      } else {
        findDifferent(index + 1)
      }
    }

  }

  // Shuffle remaining dogs array
  function shuffleDogs(dogsLeft) {
    let i = dogsLeft.length;
    while (i) {
      const randomIndex = Math.floor(Math.random() * i--);
      let k = dogsLeft[i];
      dogsLeft[i] = dogsLeft[randomIndex];
      dogsLeft[randomIndex] = k;
    }
    console.log(dogsLeft);
    return dogsLeft;
  }

  // function handleAttribute() {
  //   setAttributeClue(true)
  //   setAttributeState(true)
  // }

  function handleSize() {
    setSizeClue(true)
    setSizeState(true)
  }


  function answerSelected() {
    setSelected(true)
  }

  function checkAnswer(dogName) {
    correctDog.name === dogName
      ? setSelected(prevValue => {
        return {
          selected: prevValue,
          correct: true
        }
      })
      : setSelected(prevValue => {
        return {
          selected: prevValue,
          correct: false
        }
      })
  }

  function togglePopup() {
    setPopup(prevValue => !prevValue)
  }

  async function getMoreInfo(dog) {
    const dogName = dog.replace(/\s+/g, '-').toLowerCase()

    try {
      const url = "https://dogtime.com/dog-breeds/" + dogName
      await axios.get(url)
      // await setExternalLink({
      //   exist: true,
      //   source: url
      // })
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <div className="App">
    <img className="app-img" src="" alt="background"/>
    <div className="app-content">
    <Header />
      <GameArea
        dogsInRound={dogsInRound}
        correctDog={correctDog}
        checkAnswer={checkAnswer}
        fiftyFifty={fiftyFifty}
        // attributeClue={attributeClue}
        sizeClue={sizeClue}
        selected={selected}
        generateRound={generateRound}
        round={round}
        togglePopup={togglePopup}
        letterClue={letterClue}
        fFState={fFState}
        handleFifty={handleFifty}
        // attributeState={attributeState}
        // handleAttribute={handleAttribute}
        sizeState={sizeState}
        handleSize={handleSize}
        selectLetters={selectLetters}
        newGame={newGame}
        setNewGame={setNewGame}
        help={help}
        toggleHelp={toggleHelp}
      />
      {popup ? <Popup 
        correctDog={correctDog}
        selected={selected}
        nextRound={clearRound}
        togglePopup={togglePopup}
        round={round}
        userLevel={userLevel}
        resetGame={resetGame}
      /> : null}
      {newGame ? <NewGame  
        newGame={newGame}
      /> : null}
    </div>
     
      {/* <button onClick={generateRound}>New Round</button>
      <button onClick={selected.correct === true ? clearRound : generateRound}>{selected.correct === true ? "Next Round" : "Game Over"}</button> */}
      {/* <h4>{selected.selected ? "Answer Selected" : "Nothing Picked"}</h4> */}
      {/* <a href={externalLink} target="_blank" rel="noreferrer noopener"><h5>Learn More About This Dog</h5></a>
      <Footer /> */}
    </div>
  );
}

export default App;
