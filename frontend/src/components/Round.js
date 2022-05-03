function Round(props) {
  const correct = props.selected.correct;

  return (
    <div className="columns is-mobile">
      <div className="pop-up-content column is-10-mobile is-offset-1-mobile is-8-tablet is-offset-2-tablet is-6-desktop is-offset-3-desktop animate__animated animate__fadeIn">
        {props.round < 6 ? (
          <div>
            <div className="section">
              <h1 className={`title block is-3 ${correct ? "animate__animated animate__pulse animate__delay-1s" : "animate__animated animate__fadeOut animate__delay-2s animate__slower"}`}>
                {correct ? "Good sniff!" : "Lost the scent..."}
              </h1>
              {correct ? (
                <h5 className="subtitle block is-5">
                  <b>{props.correctDog.name}</b> is correct!
                </h5>
              ) : (
                <h5>
                  The correct dog was <b>{props.correctDog.name}</b>
                </h5>
              )}
              <div className="progress-div block">
                <span>Rank: {correct ? props.userLevel(props.round) : props.userLevel(props.round - 1)}</span>
                <progress
                  className={`progress ${
                    props.selected.correct ? "is-link" : "is-failure"
                  }`}
                  value={props.selected.correct ? props.round * 10 : (props.round -1) * 10}
                  max="60"
                ></progress>
              </div>
              {correct ? (<div className="block">
                <button
                  className="button is-success is-light"
                  onClick={props.handleClick}
                >
                  <span>
                    <span>Next Round</span>
                    <span class="icon is-small">
                      <i class="fa-solid fa-arrow-right"></i>
                    </span>
                  </span>
                </button>
              </div>) : (<div className="block">
                <button
                  className="button is-light"
                  onClick={props.resetGame}
                >
                  <span>
                    <span>Return Home</span>
                    <span class="icon is-small">
                    <i class="fa-solid fa-arrow-rotate-left"></i>
                    </span>
                  </span>
                </button>
              </div>)}
              
              <div>
                <button className="button is-ghost" onClick={props.moreInfo}>
                  More Info On This Dog
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="section">
              <h1 className={`title block is-3 ${correct ? "animate__animated animate__heartBeat animate__slow animate__delay-1s" : "animate__animated animate__fadeOut animate__delay-2s animate__slower"}`}>
                {correct ? "Impeccable senses!" : "Lost the scent..."}
              </h1>
              {correct ? (
                <h5 className="subtitle block is-5">
                  You have 'sniffed out' all the dogs correctly!
                </h5>
              ) : (
                <p>
                  The correct dog was <b>{props.correctDog.name}</b>
                </p>
              )}
              <div className="progress-div block">
                <span>Rank: {correct ? props.userLevel(props.round) : props.userLevel(props.round - 1)}&nbsp;</span>
                {correct ? <span><i class="fa-solid fa-crown"></i></span> : null}
                <progress
                  className={`progress ${
                    props.selected.correct ? "is-link" : "is-failure"
                  }`}
                  value={props.round * 10}
                  max="60"
                ></progress>
              </div>

              <div className="block">
              <p>Can you do it again?</p>
                <button
                  className="button"
                  onClick={props.resetGame}
                >
                  <span>
                    <span>Return Home</span>
                    <span class="icon is-small">
                    <i class="fa-solid fa-arrow-rotate-left"></i>
                    </span>
                  </span>
                </button>
              </div>
              
              <div>
                <button className="button is-ghost" onClick={props.moreInfo}>
                  More Info On This Dog
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Round;
