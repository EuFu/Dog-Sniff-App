function Info(props) {
  return (
    <div>
      <figure>
        <img
          src={props.correctDog.image.url}
          alt={`${props.correctDog.name}`}
        />
        <figcaption>{props.correctDog.name}</figcaption>
      </figure>
      
      {props.correctDog.temperament ? (<p>{props.correctDog.temperament}</p>) : null}
      {props.correctDog.height ? (<p>Height: {props.correctDog.height.imperial} in. /{" "}
              {props.correctDog.height.metric} cm.{" "}</p>) : null}
      {props.correctDog.weight ? (<p>Weight: {props.correctDog.weight.imperial} lbs. /{" "}
              {props.correctDog.weight.metric} kgs.{" "}</p>) : null}
      {props.correctDog.life_span ? (<p>Lifespan: {props.correctDog.life_span}</p>) : null}
      {props.correctDog.country_code ? (<p>Country: {props.correctDog.country_code}</p>) : null}
      {props.correctDog.bred_for ? (<p>Bred for: {props.correctDog.bred_for}</p>) : null}
      {props.correctDog.breeding_group ? (<p>Breeding group: {props.correctDog.breeding_group}</p>) : null}

    </div>
  );
}

export default Info;
