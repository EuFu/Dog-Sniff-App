import { usePopUp } from "../context/PopupContext";

function DogCard(props) {
  const { setDogCard, toggleInfo } = usePopUp();

  return (
    <div onClick={() => {
      setDogCard(props.dog);
      toggleInfo();
    }} className="tile is-parent box dog-card  ">
    <div className="tile is-child box dog-card-content">
      <figure class="image is-96x96 block container">
        <img className="dog-card-img" src={props.dog.image.url} alt="Dog" />
      </figure>
      <button
        className="button is-ghost block"
      >
        {props.dog.name}
      </button>
      </div>
    </div>
  );
}

export default DogCard;
