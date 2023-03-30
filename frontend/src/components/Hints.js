import { useGameRound } from "../context/GameRoundContext"
import { useSettings } from "../context/SettingsContext"
import Settings from "./Settings"
import { useSounds } from "../context/SoundsContext"

function Hints(props) {

    const {handleFifty, fFState, handleSize, sizeState, selectLetters, letterClue} = useGameRound()
    const {toggleHelp} = useSettings()
    const { playSound, thump } = useSounds()
    return (
        <div className="hints is-small is-link is-light">
              <Settings className="is-pulled-right" />
        {/* <a href onClick={toggleHelp} className="is-pulled-right pr-2 pt-2 pb-2"><i class="fa-regular fa-circle-question"></i></a> */}
        <div className="">
        <button className="button is-small hint-btn m-1" onClick={() => {playSound(thump); handleFifty(); }} disabled={fFState ? true : false}>50/50</button>
            {/* <button className="button is-small is-warning" onClick={props.handleAttribute} disabled={props.attributeState ? true : false}>Temperament</button> */}
            <button className="button is-small hint-btn m-1" onClick={() => {playSound(thump); handleSize()}} disabled={sizeState ? true : false}>Dog Size</button>
            <button className="button is-small hint-btn m-1" onClick={() => {playSound(thump); selectLetters()}} disabled={letterClue.used ? true : false}>2 Letter</button>
        </div>
        </div>
    )
}

export default Hints