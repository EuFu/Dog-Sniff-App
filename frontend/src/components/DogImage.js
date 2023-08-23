import { useState, useEffect } from 'react';
import {useGameRound } from '../context/GameRoundContext';
import axios from 'axios'
const key = process.env.API_KEY

function DogImage() {

  const {correctDog, setImageLoaded, correctDogImage, setCorrectDogImage} = useGameRound()
  const changeImageValue = () => {setImageLoaded(true); console.log(correctDog.name)}
  // const [correctDogImage, setCorrectDogImage] = useState()

  // useEffect(() => {
  //   axios.get(`https://api.thedogapi.com/v1/images/search?limit=1&breed_ids=${correctDog.id}`).then((data) => {
  //     console.log(correctDog.name)
  //     setCorrectDogImage(data.data[0].url)
  //   }).catch((err) => {
  //     console.log("error in getting image")
  //     console.log(correctDog)
  //   })
  // }, [correctDog])
  // function getImage() {
  //   console.log(correctDog.name)
  //   correctDog.reference_image_id ? console.log("getting") : console.log("nope")
  //   axios.get("https://api.thedogapi.com/v1/images/search", {"breed_ids" : correctDog.reference_image_id}).then((data) => {
  //     console.log(data.data[0].url)
  //     return data.data[0].url
  //   }).catch((err) => {
  //     console.log("error in getting image")
  //   })
  // }
  // getImage()

  return (
    <div>
      <figure className="img-el">
      <img
          onLoad={changeImageValue}
          src={correctDogImage ? correctDogImage : null}
          alt=""
          className="dog-img is-align-self-center"
        />
      </figure>
      </div>
  );
}

export default DogImage;
