function DogImage(props) {
  return (
    <div className={`${props.sizeClue ? "column is-two-fifths-tablet is-half-desktop" : "column is-half-tablet"}`}>
      <figure className="img-el is-flex-tablet is-justify-content-end">
      <img
          src={props.correctDog.image ? props.correctDog.image.url : null}
          alt=""
          className="dog-img is-align-self-center"
        />
      </figure>
    </div>
  );
}

export default DogImage;
