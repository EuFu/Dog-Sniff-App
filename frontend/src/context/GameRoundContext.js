import { useState, createContext, useContext } from "react";

const GameRoundContext = createContext();

export const useGameRound = () => useContext(GameRoundContext)

function GameRoundContextProvider(props) {
  const [newGame, setNewGame] = useState();
  const [round, setRound] = useState(0);
  const [allDogs, setAllDogs] = useState([]);
  const [correctDog, setCorrectDog] = useState([]);
  const [dogsInRound, setDogsInRound] = useState([]);
  const [previousDogs, setPreviousDogs] = useState([]);
  const [fiftyFifty, setFiftyFifty] = useState([]);
  const [fFState, setfFState] = useState(false);
  const [sizeClue, setSizeClue] = useState(false);
  const [sizeState, setSizeState] = useState(false);
  const [letterClue, setLetterClue] = useState({
    used: false,
    show: false,
    letters: [],
  });
  const [selected, setSelected] = useState({
    selected: false,
    correct: false,
    count: 0,
  });
  const [showCorrectName, setShowCorrectName] = useState(false);
  const [popup, setPopup] = useState(false);

  // Generate New Round
  const generateRound = () => {
    const dogs = pickDogs();
    setDogsInRound(dogs);
    const correctDog = pickCorrectDog(dogs);
    setCorrectDog(correctDog);
    setPreviousDogs((prevValue) => {
      return [...prevValue, correctDog];
    });
    setRound((prevValue) => {
      return prevValue + 1;
    });
    setNewGame(false);
    // getMoreInfo(correctDog.name);
  };

  // Clear round and generate new round
  function clearRound() {
    setDogsInRound([]);
    setCorrectDog([]);
    setFiftyFifty([]);
    // setAttributeClue(false)
    setSizeClue(false);
    setSelected((prevValue) => {
      return {
        selected: false,
        correct: false,
        count: prevValue.count,
      };
    });
    setShowCorrectName(false);
    setPopup(false);
    // setExternalLink({
    //   exist: false,
    //   source: ""
    // })
    setLetterClue((prevValue) => {
      return {
        used: prevValue.used,
        show: false,
        letters: [],
      };
    });
    generateRound();
  }

    // Reset Game
    function resetGame() {
      setCorrectDog([]);
      setDogsInRound([]);
      setPreviousDogs([]);
      setFiftyFifty([]);
      setfFState(false);
      setSizeClue(false);
      setSizeState(false);
      setLetterClue({
        used: false,
        show: false,
        letters: [],
      });
      setSelected({
        selected: false,
        correct: false,
        count: 0
      });
      setShowCorrectName(false)
      setPopup(false);
      setRound(0);
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
      switch (round) {
        case 0:
          return "Newborn";
        case 1:
          return "Pupper";
          break;
        case 2:
          return "Doggo";
          break;
        case 3:
          return "Good Dog";
          break;
        case 4:
          return "Neighborhood Favorite";
          break;
        case 5:
          return "Rescue Dog";
          break;
        case 6:
          return "Pack Leader";
          break;
        default:
          return "";
      }
    }

      //Set fiftyFifty value
  function handleFifty() {
    const dogsLeft = dogsInRound.filter((dog) => {
      return dog.name !== correctDog.name;
    });
    setFiftyFifty(shuffleDogs(dogsLeft).slice(0, 2));
    setfFState(true);
    console.log(fiftyFifty);
    console.log(round);
  }

  //Select two random letters
  function selectLetters() {
    const array = correctDog.name
      .toUpperCase()
      .replace(/[^A-Z0-9]+/gi, "")
      .split("");
    console.log(array);
    let i = array.length;
    while (i) {
      const randomIndex = Math.floor(Math.random() * i--);
      let k = array[i];
      array[i] = array[randomIndex];
      array[randomIndex] = k;
    }

    findDifferent(1);
    function findDifferent(index) {
      if (array[0] !== array[index]) {
        setLetterClue({
          used: true,
          show: true,
          letters: [array[0], array[index]],
        });
      } else {
        findDifferent(index + 1);
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

  function handleSize() {
    setSizeClue(true);
    setSizeState(true);
  }

  function checkAnswer(dogName) {
    correctDog.name === dogName
      ? setSelected((prevValue) => {
          return {
            selected: prevValue,
            correct: true,
            count: prevValue.count + 1
          };
        })
      : setSelected((prevValue) => {
          return {
            selected: prevValue,
            correct: false,
            count: prevValue.count
          };
        });
  }

  function togglePopup() {
    setPopup((prevValue) => !prevValue);
  }

  const values = {
    newGame,
    setNewGame,
    round,
    setRound,
    allDogs,
    setAllDogs,
    correctDog,
    setCorrectDog,
    dogsInRound,
    setDogsInRound,
    previousDogs,
    setPreviousDogs,
    fiftyFifty,
    setFiftyFifty,
    fFState,
    setfFState,
    sizeClue,
    setSizeClue,
    sizeState,
    setSizeState,
    letterClue,
    setLetterClue,
    selected,
    setSelected,
    showCorrectName,
    setShowCorrectName,
    popup,
    setPopup,
    generateRound,
    clearRound,
    resetGame,
    pickDogs,
    pickCorrectDog,
    userLevel,
    handleFifty,
    selectLetters,
    shuffleDogs,
    handleSize,
    checkAnswer,
    togglePopup
  };

  return (
    <GameRoundContext.Provider value={values}>
      {props.children}
    </GameRoundContext.Provider>
  );
}

export default GameRoundContextProvider;