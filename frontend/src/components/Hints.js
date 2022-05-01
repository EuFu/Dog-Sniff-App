function Hints(props) {
    return (
        <div className="">
        <h1 className="title is-4">Round: {props.round}</h1>
        <div className="hints notification is-small is-link is-light ml-6 mr-6 mb-1">
        <a href onClick={props.toggleHelp} className="is-pulled-right"><i class="fa-regular fa-circle-question"></i></a>
        <div className="">
        <button className="button is-small is-warning m-1" onClick={props.handleFifty} disabled={props.fFState ? true : false}>50/50 Clue</button>
            {/* <button className="button is-small is-warning" onClick={props.handleAttribute} disabled={props.attributeState ? true : false}>Temperament</button> */}
            <button className="button is-small is-warning m-1" onClick={props.handleSize} disabled={props.sizeState ? true : false}>Typical Size</button>
            <button className="button is-small is-warning m-1" onClick={props.selectLetters} disabled={props.letterClue.used ? true : false}>2 Letters</button>
        </div>
        </div>
        </div>
    )
}

export default Hints