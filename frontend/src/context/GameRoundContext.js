import { useState, useEffect, createContext, useContext } from "react";
import axios from 'axios'
// import 'dotenv/config'

const key = process.env.API_KEY
const GameRoundContext = createContext();

export const useGameRound = () => useContext(GameRoundContext);

function GameRoundContextProvider(props) {
  const [newGame, setNewGame] = useState();
  const [round, setRound] = useState(0);
  const [allDogs, setAllDogs] = useState([]);
  const [correctDog, setCorrectDog] = useState([]);
  const [correctDogImage, setCorrectDogImage] = useState()
  const [dogsInRound, setDogsInRound] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);
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
    dogNum: 0,
  });
  const [showCorrectName, setShowCorrectName] = useState(false);
  const [popup, setPopup] = useState(false);
  const [resultSound, setResultSound] = useState(0)
  const [rendered, setRendered] = useState(round);

  useEffect(() => {
    axios.get(`https://api.thedogapi.com/v1/images/search?limit=1&breed_ids=${correctDog.id}`).then((data) => {
      setCorrectDogImage(data.data[0].url)
      correctDog.url = data.data[0].url
    }).catch((err) => {
      console.log(`error getting dog image:" ${err}`)
    })
  }, [correctDog])

  // Generate New Round
  const generateRound = () => {
    setImageLoaded(false);
    const dogs = pickDogs();
    setDogsInRound(dogs);
    const correctDog = pickCorrectDog(dogs);
    setCorrectDog(correctDog);
    // retrieveDogImage(correctDog.id)
    setPreviousDogs((prevValue) => {
      return [...prevValue, correctDog];
    });
    setRound((prevValue) => {
      return prevValue + 1;
    });
    setNewGame(false);
  };

  // Clear round and generate new round
  function clearRound() {
    setDogsInRound([]);
    setCorrectDog([]);
    setFiftyFifty([]);
    setSizeClue(false);
    setSelected((prevValue) => {
      return {
        selected: false,
        correct: false,
        count: prevValue.count,
        dogNum: 0,
      };
    });
    setShowCorrectName(false);
    setPopup(false);
    setLetterClue((prevValue) => {
      return {
        used: prevValue.used,
        show: false,
        letters: [],
      };
    });
    setResultSound(0)
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
      count: 0,
      dogNum: 0,
    });
    setShowCorrectName(false);
    setPopup(false);
    setResultSound(0)
    setRound(0);
  }

  // Retrieve correct dog url 
  // const retrieveDogImage = (id) => {
  //   axios.get("https://api.thedogapi.com/v1/images/search?limit=1", {"breed_ids": id}, {"api_key": key}).then((data) => {
  //     console.log(data.data[0].url)
  //     console.log(correctDog.name)
  //     setCorrectDogImage(data.data[0].url)
  //   })
  // }

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

  // Generate User Rank
  function userRank(round) {
    switch (round) {
      case 0:
        return (
          <div>
            <b className="title is-4 dog-rank rank-desc">Newborn</b>
          </div>
        );
      case 1:
        return (
          <div>
            <b className="title is-4 dog-rank rank-desc">Rank: Pupper</b>
          </div>
        );
      case 2:
        return (
          <div>
            <b className="title is-4 dog-rank rank-desc">Rank: Doggo</b>
          </div>
        );
      case 3:
        return (
          <div>
            <b className="title is-4 dog-rank rank-desc">Rank: Good Dog</b>
          </div>
        );
      case 4:
        return (
          <div>
            <b className="title is-4 dog-rank rank-desc">Rank: Sidekick</b>
          </div>
        );
      case 5:
        return (
          <div>
            <b className="title is-4 dog-rank rank-desc">Rank: Rescue Dog</b>
          </div>
        );
      case 6:
        return (
          <div>
            <b className="title is-4 dog-rank rank-desc">
              Pack Leader <i className="fa-solid fa-crown"></i>
            </b>
          </div>
        );
      default:
        return "";
    }
  }

  // Generate User Rank Description
  function rankDescription(round) {
    switch (round) {
      case 0:
        return (
          <p className="subtitle is-6 rank-desc">
            You're still getting accustomed to your senses, but we all see big
            potential!
          </p>
        );
      case 1:
        return (
          <p className="subtitle is-6 rank-desc">
            Lot's of enthusiasm and spunk. That nose can only get sharper!
          </p>
        );
      case 2:
        return (
          <p className="subtitle is-6 rank-desc">
            Not Bad! Still lots of room to grow and sharpen those senses.
          </p>
        );
      case 3:
        return (
          <p className="subtitle is-6 rank-desc">
            You've come a long way. Starting to develop a very keen nose indeed!
          </p>
        );
      case 4:
        return (
          <p className="subtitle is-6 rank-desc">
            A reliable friend with sharp senses. Always there to lend a paw!
          </p>
        );
      case 5:
        return (
          <p className="subtitle is-6 rank-desc">
            Trustworthy and experienced. Able to sniff out trouble and save the
            day!
          </p>
        );
      case 6:
        return (
          <p className="subtitle is-6 rank-desc">
            'The Boss'. 'The Head Honcho'. You've got the sharpest nose of them
            all!
          </p>
        );
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
    // console.log(fiftyFifty);
    // console.log(round);
  }

  //Select two random letters
  function selectLetters() {
    const array = correctDog.name
      .toUpperCase()
      .replace(/[^A-Z0-9]+/gi, "")
      .split("");
    // console.log(array);
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
    // console.log(dogsLeft);
    return dogsLeft;
  }

  function handleSize() {
    setSizeClue(true);
    setSizeState(true);
  }

  function checkAnswer(dogName, number) {
    correctDog.name === dogName
      ? setSelected((prevValue) => {
          return {
            selected: true,
            correct: true,
            count: prevValue.count + 1,
            dogNum: number,
          };
        })
      : setSelected((prevValue) => {
          return {
            selected: true,
            correct: false,
            count: prevValue.count,
            dogNum: number,
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
    imageLoaded,
    setImageLoaded,
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
    userRank,
    rankDescription,
    handleFifty,
    selectLetters,
    shuffleDogs,
    handleSize,
    checkAnswer,
    togglePopup,
    rendered,
    setRendered,
    correctDogImage,
    setCorrectDogImage,
    resultSound,
    setResultSound
  };

  return (
    <GameRoundContext.Provider value={values}>
      {props.children}
    </GameRoundContext.Provider>
  );
}

export default GameRoundContextProvider;
