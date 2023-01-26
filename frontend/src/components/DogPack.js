import { useGameRound } from "../context/GameRoundContext";
import { usePopUp } from "../context/PopupContext"

function DogPack() {

    const {selected, previousDogs, } = useGameRound()
    const {setDogCard, toggleSelected, toggleDogPack} = usePopUp()

    return (
        <div className="box">
            {selected.correct ? (
              <ul className="">
                {previousDogs.map((dog) => (
                  <li>
                    <span class="image is-96x96">
                      <img src={dog.image.url} alt="Dog"/>
                    </span>
                    <span
                      onClick={() => {
                        setDogCard(dog);
                        toggleSelected();
                      }}
                      className="button is-ghost"
                    >
                      {dog.name}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <ul>
                {previousDogs
                  .slice(0, previousDogs.length - 1)
                  .map((dog) => (
                    <li>
                      <button
                        onClick={() => {
                          setDogCard(dog);
                          toggleSelected();
                        }}
                        className="button is-ghost"
                      >
                        {dog.name}
                      </button>
                    </li>
                  ))}
              </ul>
            )}

            <button
              className="button is-ghost"
              onClick={() => {
                toggleDogPack();
              }}
            >
              Back
            </button>
          </div>
    )
}

export default DogPack