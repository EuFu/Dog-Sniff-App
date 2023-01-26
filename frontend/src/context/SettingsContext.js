import { useState, createContext, useContext } from 'react'

const SettingsContext = createContext()

export const useSettings = () => useContext(SettingsContext)

function SettingsContextProvider(props) {
    const [sound, setSound] = useState(true)
    const [help, setHelp] = useState(false);
    const [expanded, setExpanded] = useState(false)

    function toggleHelp() {
        setHelp((prevValue) => {
          return !prevValue;
        });
      }

    function toggleExpanded() {
        setExpanded(prevValue => !prevValue)
    }

    function toggleSound () {
        setSound(prevValue => !prevValue)
    }

    const values = {sound, setSound, help, setHelp, expanded, setExpanded, toggleHelp, toggleExpanded, toggleSound}

    return (
        <SettingsContext.Provider value={values}>
            {props.children}
        </SettingsContext.Provider>
    )
}

export default SettingsContextProvider