import { useGameRound } from "../context/GameRoundContext"
import { useSettings } from "../context/SettingsContext"

function Hints(props) {

    const {handleFifty, fFState, handleSize, sizeState, selectLetters, letterClue} = useGameRound()
    const {toggleHelp} = useSettings()

    return (
        <div className="hints is-small is-link is-light">
        <a href onClick={toggleHelp} className="is-pulled-right pr-2 pt-2 pb-2"><i class="fa-regular fa-circle-question"></i></a>
        <div className="">
        <button className="button is-small is-warning m-1" onClick={handleFifty} disabled={fFState ? true : false}>50/50</button>
            {/* <button className="button is-small is-warning" onClick={props.handleAttribute} disabled={props.attributeState ? true : false}>Temperament</button> */}
            <button className="button is-small is-warning m-1" onClick={handleSize} disabled={sizeState ? true : false}>Typical Size</button>
            <button className="button is-small is-warning m-1" onClick={selectLetters} disabled={letterClue.used ? true : false}>2 Letter</button>
        </div>
        </div>
    )
}

export default Hints