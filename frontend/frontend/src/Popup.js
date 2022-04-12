function Popup(props) {

    const correct = props.selected.correct
    function handleClick() {
        props.nextRound();
    }
  return (
    <div className="pop-up">
      <div className="pop-up-content">
        <h2>{correct ? "Good sniff!" : "Lost the scent..."}</h2>
        <p>
          {correct
            ? `You successfully guessed ${props.correctDog.name}`
            : `The correct dog was ${props.correctDog.name}`}
        </p>
        <button onClick={correct ? handleClick : null}>{correct ? "Next Round" : "New Game"}</button>
      </div>
    </div>
  );
}

export default Popup;
