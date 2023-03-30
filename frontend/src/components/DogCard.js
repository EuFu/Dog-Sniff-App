import { usePopUp } from "../context/PopupContext";
import { useSounds } from "../context/SoundsContext";

function DogCard(props) {
  const { setDogCard, toggleInfo } = usePopUp();
  const { playSound, click } = useSounds()

  return (
    <div className="tile is-child is-flex is-justify-content-center">
    <div onClick={() => {
      setDogCard(props.dog);
      playSound(click)
      toggleInfo();
    }} className="tile is-parent box dog-card">
    <div className="tile is-child box dog-card-content">
      <figure class="image is-128x128 block container">
        <img className="dog-card-img" src={props.dog.image.url} alt="Dog" />
      </figure>
      <button
        className="button is-ghost block"
      >
        {props.dog.name}
      </button>
      </div>
    </div>
    </div>
  );
}

export default DogCard;
