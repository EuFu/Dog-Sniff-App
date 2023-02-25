import { useState, useContext } from "react";
import GameDirections from "./GameDirections";
import { useSettings } from "../context/SettingsContext";



function Settings(props) {

    const {expanded, help, setExpanded, sound, setSound, toggleExpanded, toggleSound, toggleHelp} = useSettings()

  // <i class="fa-solid fa-volume-high"></i>
  // <i class="fa-solid fa-volume-xmark"></i>
  // <i class="fa-solid fa-gear"></i>
  // <i class="fa-solid fa-circle-info"></i>

  return (
    <div>
      {expanded === true && help ? (
        <div className={`modal ${help === true ? "is-active" : null}`}>
            <GameDirections 
              
            />
          </div>
      ): expanded ? (
        <div>
        <div id="show-settings" class="modal is-active">
          <div class="modal-background" onClick={toggleExpanded}></div>
          <div class="modal-content">
            <div>
              {sound ? (
                <i class="fa-solid fa-volume-high fa-2x icon" onClick={toggleSound}></i>
              ) : (
                <i class="fa-solid fa-volume-xmark fa-2x icon" onClick={toggleSound}></i>
              )}
              <i class="fa-solid fa-circle-info fa-2x icon" onClick={toggleHelp}></i>
            </div>
          </div>
          <button
            class="modal-close is-large"
            aria-label="close"
            onClick={toggleExpanded}
          ></button>
        </div>
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
