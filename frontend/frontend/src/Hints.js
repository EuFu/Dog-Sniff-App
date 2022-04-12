function Hints(props) {
    return (
        <div>
            <button onClick={props.handleFifty} disabled={props.fFState ? true : false}>50/50 Hint</button>
            <button onClick={props.handleAttribute} disabled={props.attributeState ? true : false}>Attribute Hint</button>
            <button onClick={props.handleSize} disabled={props.sizeState ? true : false}>Size Hint</button>
            <button onClick={props.selectLetters} disabled={props.letterClue.used ? true : false}>2 Letters</button>
        </div>
    )
}

export default Hints