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
          <div id="show-settings" className="modal is-active">
            <div className="modal-background" onClick={toggleExpanded}></div>
            <div className="modal-content">
              <div className="box" id="settings-shell">
                {music ? (
                  <i
                    className="fa-solid fa-music fa-2x icon"
                    onClick={() => {
                      toggleMusic();
                      muteMusic();
                    }}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-music fa-2x icon muted"
                    onClick={() => {
                      toggleMusic();
                      playMusic("menu");
                    }}
                  ></i>
                )}
                {sound ? (
                  <i
                    className="fa-solid fa-volume-high fa-2x icon"
                    onClick={() => {
                      toggleSound();
                    }}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-volume-xmark fa-2x icon"
                    onClick={() => {
                      toggleSound();
                    }}
                  ></i>
                )}
                <i
                  className="fa-solid fa-circle-info fa-2x icon"
                  onClick={() => {
                    toggleHelp();
                  }}
                ></i>
              </div>
            </div>
            <button
              className="modal-close is-large"
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
            className="fa-solid fa-gear"
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
