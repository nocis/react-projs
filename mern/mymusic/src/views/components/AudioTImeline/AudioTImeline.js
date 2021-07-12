import React from "react";
import "./AudioTImeline.scss";
export default function AudioTImeline() {
  return (
    <div className="audioTimeline">
      <div className="bar bar--buffered" style={{ width: "50%" }} />
      <div className="bar bar--completed" style={{ width: "10%" }} />
    </div>
  );
}
