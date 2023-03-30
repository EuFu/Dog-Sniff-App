import { useState, useRef, createContext, useContext } from "react";
import { useSettings} from "./SettingsContext";
import { useGameRound } from "./GameRoundContext";

const SoundsContext = createContext();

export const useSounds = () => useContext(SoundsContext)

function SoundsContextProvider(props) {
    const {sound, music, expanded} = useSettings()
    const {round} = useGameRound()

    const main1 = new Audio("https://sampleswap.org/mp3/artist/421507/pipin_140-bpm-elelektro-etno-ambienc-160.mp3")
    const result = new Audio("https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/KEYS%20ORGAN%20PIANO%20LOOPS/2762[kb]120_happy-pianoish-arpeggio-light.wav.mp3")
    const click = new Audio("https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Cheesy%20Lo-Fi%20Sound%20Effects/5[kb]Fast-Mouse%20Click.wav.mp3")
    const bark = new Audio("https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Cheesy%20Lo-Fi%20Sound%20Effects/19[kb]Barks.wav.mp3")
    const congrats = new Audio("https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Cheesy%20Lo-Fi%20Sound%20Effects/59[kb]Trumpet-Fanfare.wav.mp3")
    const pop = new Audio("https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Cheesy%20Lo-Fi%20Sound%20Effects/7[kb]Cork.wav.mp3")
    const bloop = new Audio ("https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Bleeps%20Blips%20Blonks%20Blarts%20and%20Zaps/15[kb]boip.wav.mp3")
    const wahwah = new Audio ("https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Cheesy%20Lo-Fi%20Sound%20Effects/57[kb]Trombone-Wah.wav.mp3")
    const reveal = new Audio ("https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Cheesy%20Lo-Fi%20Sound%20Effects/76[kb]Echo-Harp.wav.mp3")
    const thump = new Audio ("https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/46[kb]deepzap.wav.mp3")
    const directions = new Audio ("https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/BASS%20LOOPS/832[kb]100_fingerbass-walking-the-dog.wav.mp3")

    const [currentMusic, setCurrentMusic] = useState({
        playing: "",
        mainMusic: main1,
        directionsMusic: directions,
    })

    let playing = useRef(directions)
    const [mainMusic, setMainMusic] = useState(main1)
    const [settingsMusic, setSettingsMusic] = useState(directions)
    const [resultMusic, setResultMusic] = useState(result)

    function muteMusic() {
        playing.current.pause()
    }

    function playMusic(audio) {
        if (music) {
            if (audio === "menu") {
                playing.current.pause()
                playing.current = settingsMusic
                playing.current.play()
                playing.current.loop = true;
                
            } else if (audio === "main") {
                playing.current.pause()
                playing.current = mainMusic
                playing.current.play()
                playing.current.loop = true;
            } else if (audio === "result") {
                playing.current.pause()
                playing.current = resultMusic
                playing.current.play()
                playing.current.loop = true
            } else {
                playing.current.pause()
            }
        }
    }

    function resetMusic() {
        playing.current.currentTime = 0;
        mainMusic.currentTime = 0
        settingsMusic.currentTime = 0
        resultMusic.currentTIme = 0
    }

    function playSound(audio) {
        if (sound) { audio.play()}
    }


    const values = {currentMusic, playMusic, muteMusic, resetMusic, playSound, main1, result, click, bark, congrats, pop, bloop, wahwah, reveal, thump, directions}

    return (
        <SoundsContext.Provider value={values}>
            {props.children}
        </SoundsContext.Provider>
    )
}

export default SoundsContextProvider