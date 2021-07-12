import React from "react";
import { useHistory } from "react-router-dom";
import SvgButton from "../SvgButton/SvgButton";
import AudioTimeline from "../AudioTImeline/AudioTImeline";
import WaveformTimeline from "../WaveformTimeline/WaveformTimeline";
import "./TrackCard.scss";

function TrackCard({ isCompact, track }) {
  const history = useHistory();

  return (
    <article className={"trackCard" + (isCompact ? "--compact" : "--full")}>
      <div className="card__cover">
        <img alt="track cover" src={track.artworkUrl}></img>
      </div>
      {isCompact ? (
        <div className="card__timeline">
          <AudioTimeline></AudioTimeline>
        </div>
      ) : null}

      <div className="card__main">
        <div className="card__username">{track.username}</div>
        <h1 className="card__title">{track.title}</h1>

        <div className="card__wave">
          {isCompact ? null : (
            <WaveformTimeline
              trackId={track.id}
              url={"https://wave.sndcdn.com/ZnosRClXPVqP_m.json"}
              displayProgress={true}
            />
          )}
        </div>

        <div className="card__actions">
          {isCompact ? (
            <>
              <SvgButton
                aria-label="Play"
                icon="play"
                type="button"
              ></SvgButton>
              <span className="length">07:06</span>
              <SvgButton
                aria-label="launch"
                icon="launch"
                type="button"
                onClick={() => history.push(`/user/${track.userId}/tracks`)}
              ></SvgButton>
            </>
          ) : (
            <>
              <div className="play__count">
                <SvgButton
                  aria-label="Play"
                  icon="play"
                  type="button"
                ></SvgButton>
                <span className="length">3456</span>
              </div>

              <div className="listen__count">
                <SvgButton
                  aria-label="listen"
                  icon="headset"
                  type="button"
                ></SvgButton>
                <span className="length">3456</span>
              </div>

              <div className="likes__count">
                <SvgButton
                  aria-label="likes"
                  icon="favorite-border"
                  type="button"
                ></SvgButton>
                <span className="length">3456</span>
              </div>

              <div className="launch__count">
                <SvgButton
                  aria-label="Play"
                  icon="launch"
                  type="button"
                ></SvgButton>
              </div>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export default TrackCard;
/*
const MyComponent = React.memo(function MyComponent(props) {
   // only render when props is changed(shallow compare)
});

function areEqual(prevProps, nextProps) {

  //return true if passing nextProps to render would return
  //the same result as passing prevProps to render,
  //otherwise return false
  
}
function MyComponent(props) {
     // render using props 
}
export default React.memo(MyComponent, areEqual);
*/
