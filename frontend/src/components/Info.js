import { usePopUp } from "../context/PopupContext";

function Info(props) {

  const {toggleInfo, toggleSelected} = usePopUp()

  return (
    <>
        <div className="modal-background "></div>
          <div className="modal-content tile is-ancestor is-flex is-justify-content-center is-align-items-center">  
          <div className="box dog-info-shell tile is-parent">
          <div className="tile is-child">
          <div className="card-image">
              <figure>
                <img
                  src={props.dog.image.url}
                  alt={`${props.dog.name}`}
                  className="info-dog-img"
                />
                <figcaption>
                  <b>{props.dog.name}</b>
                </figcaption>
              </figure>
            </div>
            <div className="dog-info block">
              {props.dog.temperament ? (
                <p>{props.dog.temperament}</p>
              ) : null}
              {props.dog.height ? (
                <p>
                  Height: {props.dog.height.imperial} in. /{" "}
                  {props.dog.height.metric} cm.{" "}
                </p>
              ) : null}
              {props.dog.weight ? (
                <p>
                  Weight: {props.dog.weight.imperial} lbs. /{" "}
                  {props.dog.weight.metric} kgs.{" "}
                </p>
              ) : null}
              {props.dog.life_span ? (
                <p>Lifespan: {props.dog.life_span}</p>
              ) : null}
              {props.dog.country_code ? (
                <p>Country: {props.dog.country_code}</p>
              ) : null}
              {props.dog.bred_for ? (
                <p>Bred for: {props.dog.bred_for}</p>
              ) : null}
              {props.dog.breed_group ? (
                <p>Breed group: {props.dog.breed_group}</p>
              ) : null}
              <div className="block mt-3">
              <button
                className="button result-btn back-btn"
                onClick={toggleInfo}
              >
                <i class="fa-solid fa-left-long"></i>&nbsp;
              Back
              </button>
              </div>
            </div>
            </div>
          </div>
            
          </div>
        </>
      )}

export default Info;
