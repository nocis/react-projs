import React from "react";
import "./ContentHeader.scss";

export default function ContentHeader({ section, title }) {
  return (
    <header className="content__header">
      <div className="content__section">
        <h4>{section}/</h4>
        <h1 className="content__title">{title}</h1>
      </div>
    </header>
  );
}
