import { useState, createContext, useContext } from "react"

const PopupContext = createContext({})

export const usePopUp = () => useContext(PopupContext)

function PopupContextProvider (props) {

    const [info, setInfo] = useState(false);
    const [dogSelected, setDogSelected] = useState(false)
    const [dogCard, setDogCard] = useState({})
    const [dogPack, setDogPack] = useState(false);

    function toggleSelected() {
        setDogSelected(prevValue => !prevValue)
      }
    
      function toggleInfo() {
        setInfo((prevValue) => !prevValue);
      }
    
      function toggleDogPack() {
        setDogPack((prevValue) => !prevValue);
      }

    const value = {info, setInfo, dogSelected, setDogSelected, dogCard, setDogCard, toggleInfo, toggleSelected, dogPack, setDogPack, toggleDogPack}

    return (
        <PopupContext.Provider value={value}>
            {props.children}
        </PopupContext.Provider>
    )
}

export default PopupContextProvider
