import { useState, useContext } from "react";
import GameDirections from "./GameDirections";
import { useSettings } from "../context/SettingsContext";
import { useSounds } from "../context/SoundsContext";

function Settings(props) {
  const {
    expanded,
    help,
    sound,
    music,
    toggleExpanded,
    toggleSound,
    toggleMusic,
    toggleHelp,
  } = useSettings();
  const { playMusic, muteMusic } = useSounds();

  return (
    <div>
      {expanded === true && help ? (
        <div className={`modal ${help === true ? "is-active" : null}`}>
          <GameDirections />
        </div>
      ) : expanded ? (
        <div>
          <div id="show-settings" class="modal is-active">
            <div class="modal-background" onClick={toggleExpanded}></div>
            <div class="modal-content">
              <div className="box" id="settings-shell">
                {music ? (
                  <i
                    class="fa-solid fa-music fa-2x icon"
                    onClick={() => {
                      toggleMusic();
                      muteMusic();
                    }}
                  ></i>
                ) : (
                  <i
                    class="fa-solid fa-music fa-2x icon muted"
                    onClick={() => {
                      toggleMusic();
                      playMusic("menu");
                    }}
                  ></i>
                )}
                {sound ? (
                  <i
                    class="fa-solid fa-volume-high fa-2x icon"
                    onClick={() => {
                      toggleSound();
                    }}
                  ></i>
                ) : (
                  <i
                    class="fa-solid fa-volume-xmark fa-2x icon"
                    onClick={() => {
                      toggleSound();
                    }}
                  ></i>
                )}
                <i
                  class="fa-solid fa-circle-info fa-2x icon"
                  onClick={() => {
                    toggleHelp();
                    console.log(sound);
                  }}
                ></i>
              </div>
            </div>
            <button
              class="modal-close is-large"
              aria-label="close"
              onClick={() => {
                toggleExpanded();
                playMusic("main");
              }}
            ></button>
          </div>
        </div>
      ) : (
        <div>
          <i
            class="fa-solid fa-gear"
            onClick={() => {
              toggleExpanded();
              playMusic("menu");
            }}
          ></i>
        </div>
      )}
    </div>
  );
}

export default Settings;
