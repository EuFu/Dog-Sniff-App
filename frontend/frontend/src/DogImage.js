function DogImage(props) {
    
    return (
        <figure className="img-el is-square">
            {props.round === 0 ? <div>
                <i className="fa-solid fa-paw fa-7x"></i>
                <br></br>
                <button className="button is-large" onClick={props.generateRound}><h2>New Game</h2></button>
            </div> : null}
            <img 
                src={props.correctDog.image ? props.correctDog.image.url : null}
                alt=""
                className="dog-img"
            />
        </figure>
    )
}

export default DogImage