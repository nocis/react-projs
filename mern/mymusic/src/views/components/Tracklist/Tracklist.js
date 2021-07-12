import React from "react";
import Loading from "../Loading/Loading";
import TrackCard from "../TrackCard/TrackCard";

import "./Tracklist.scss";

export default function Tracklist(props) {
  const {
    compactLayout,
    isMediaLarge,
    isPlaying,
    pause,
    play,
    selectedTrackId,
    selectTrack,
    tracklistId,
    tracks,
  } = props;

  let cardlist;
  if (tracks) {
    cardlist = tracks.map((track, index) => {
      let isSelected = track.id === selectedTrackId;
      return <TrackCard key={index} isCompact={compactLayout} track={track} />;
    });
  }

  return (
    <div className={compactLayout ? "cardlist" : "cardlist--full"}>
      {cardlist}

      <div className="loading">
        {props.displayLoadingIndicator ? <Loading /> : null}
      </div>
    </div>
  );
}
