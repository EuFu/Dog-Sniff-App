import { useState, useRef, createContext, useContext } from "react";
import { useSettings } from "./SettingsContext";
import music1 from "../sounds/going_on_foot.mp3"
import music2 from "../sounds/sound_k.mp3"
import secondary from "../sounds/fingerbass.wav"
import sound1 from "../sounds/barks.wav"
import sound2 from "../sounds/mouse_click.wav"
import sound3 from "../sounds/wah_wah.wav"
import sound4 from "../sounds/deepzap.wav"
import sound5 from "../sounds/trumpet_fare.wav"

const SoundsContext = createContext();

export const useSounds = () => useContext(SoundsContext);

function SoundsContextProvider(props) {
  const { sound, music } = useSettings();

  const main1 = new Audio(music1)
  const main2 = new Audio (music2)
  const directions = new Audio(secondary)
  const bark = new Audio(sound1)
  const click = new Audio(sound2)
  const wahwah = new Audio(sound3)
  const thump = new Audio(sound4)
  const congrats = new Audio(sound5)
  


  const [currentMusic, setCurrentMusic] = useState({
    playing: "",
    mainMusic: main1,
    directionsMusic: directions,
  });

  let playing = useRef(directions);
  const [mainMusic, setMainMusic] = useState(main1);
  const [settingsMusic, setSettingsMusic] = useState(directions);
  const [resultMusic, setResultMusic] = useState(main2);

  function muteMusic() {
    playing.current.pause();
  }

  function playMusic(audio) {
    if (music) {
      if (audio === "menu") {
        playing.current.pause();
        playing.current = settingsMusic;
        playing.current.play();
        playing.current.loop = true;
      } else if (audio === "main") {
        playing.current.pause();
        playing.current = mainMusic;
        playing.current.play();
        playing.current.loop = true;
      } else if (audio === "result") {
        playing.current.pause();
        playing.current = resultMusic;
        playing.current.play();
        playing.current.loop = true;
      } else {
        playing.current.pause();
      }
    }
  }

  function resetMusic() {
    playing.current.currentTime = 0;
    mainMusic.currentTime = 0;
    settingsMusic.currentTime = 0;
    resultMusic.currentTIme = 0;
  }

  function playSound(audio) {
    if (sound) {
      audio.play();
    }
  }

  const values = {
    currentMusic,
    playMusic,
    muteMusic,
    resetMusic,
    playSound,
    main1,
    click,
    bark,
    congrats,
    wahwah,
    thump,
    directions,
  };

  return (
    <SoundsContext.Provider value={values}>
      {props.children}
    </SoundsContext.Provider>
  );
}

export default SoundsContextProvider;
