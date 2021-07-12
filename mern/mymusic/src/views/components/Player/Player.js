import React from "react";
import SvgButton from "../SvgButton/SvgButton";
import AudioTImeline from "../AudioTImeline/AudioTImeline";
import "./Player.scss";

export default function Player({ isPlaying }) {
  return (
    <div className="player">
      <div className="player__timeline">
        <AudioTImeline></AudioTImeline>
      </div>
      <div className="player__controls">
        <SvgButton icon="skip-previous"></SvgButton>
        <SvgButton
          className="btn--control"
          icon={isPlaying ? "pause" : "play"}
        ></SvgButton>
        <SvgButton icon="skip-next"></SvgButton>

        <div className="player__timer">00:05 / 04:13</div>
        <div className="player__track">Celaeno – GuZheng</div>

        <SvgButton icon="volumeDown">-</SvgButton>
        <span className="volume">1.0</span>
        <SvgButton icon="volumeUp">+</SvgButton>
      </div>
    </div>
  );
}
