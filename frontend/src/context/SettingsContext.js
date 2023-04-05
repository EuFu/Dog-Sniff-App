import { useState, createContext, useContext } from "react";

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

function SettingsContextProvider(props) {
  const [sound, setSound] = useState(true);
  const [music, setMusic] = useState(true);
  const [help, setHelp] = useState(false);
  const [expanded, setExpanded] = useState(false);

  function toggleHelp() {
    setHelp((prevValue) => {
      return !prevValue;
    });
  }

  function toggleExpanded() {
    setExpanded((prevValue) => !prevValue);
  }

  function toggleSound() {
    setSound((prevValue) => !prevValue);
  }

  function toggleMusic() {
    setMusic((prevValue) => !prevValue);
  }

  const values = {
    sound,
    music,
    setSound,
    help,
    setHelp,
    expanded,
    setExpanded,
    toggleHelp,
    toggleExpanded,
    toggleSound,
    toggleMusic,
  };

  return (
    <SettingsContext.Provider value={values}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsContextProvider;
