import { useState, useContext } from "react";
import Game from "./Game";
import { useSettings } from "../context/SettingsContext";



function Settings(props) {

    const {expanded, setExpanded, sound, setSound, toggleExpanded, toggleSound, toggleHelp} = useSettings()

  // <i class="fa-solid fa-volume-high"></i>
  // <i class="fa-solid fa-volume-xmark"></i>
  // <i class="fa-solid fa-gear"></i>
  // <i class="fa-solid fa-circle-info"></i>

  return (
    <div>
      {expanded === true ? (
        <div id="show-settings" class="modal is-active">
          <div class="modal-background" onClick={toggleExpanded}></div>
          <div class="modal-content">
            <div>
              {sound ? (
                <i class="fa-solid fa-volume-high" onClick={toggleSound}></i>
              ) : (
                <i class="fa-solid fa-volume-xmark" onClick={toggleSound}></i>
              )}
              <i class="fa-solid fa-circle-info" onClick={toggleHelp}></i>
            </div>
          </div>
          <button
            class="modal-close is-large"
            aria-label="close"
            onClick={toggleExpanded}
          ></button>
        </div>
      ) : (
        <div>
          <i class="fa-solid fa-gear" onClick={toggleExpanded}></i>
        </div>
      )}
    </div>
  );
}

export default Settings;
