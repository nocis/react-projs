import React from "react";
import Waveform from "../Waveform/Waveform";
import AudioTimeline from "../AudioTImeline/AudioTImeline";
import "./WaveformTimeline.scss";

export default React.memo(function WaveformTimeline({
  url,
  trackId,
  displayProgress,
}) {
  let [ready, setReady] = React.useState(false);

  const setReadyCallback = React.useCallback(() => {
    setReady(true);
  }, []);

  const setReadyhelper = () => {
    setReady(true);
    // use useCallback instead vanilla callback to reduce child re-render
  };

  const clsnm =
    "waveform__timeline" +
    (ready ? " waveform__timeline--isReady" : ""); /* not null here */
  // remember do not return null when set classname!!!!
  // you will get "className=xxxnull"

  return (
    <div className={clsnm}>
      {console.log("WaveformTimeline rendered")}
      {displayProgress ? (
        <div className="wave__audiotimeline">
          <AudioTimeline />
        </div>
      ) : null}
      <Waveform
        trackId={trackId}
        url={url}
        setReadyCallback={setReadyCallback}
      ></Waveform>
    </div>
  );
});
