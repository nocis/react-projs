import React from "react";
import { Link } from "react-router-dom";
import SvgButton from "../SvgButton/SvgButton";

import "./AppHeader.scss";

export default function AppHeader() {
  return (
    <header className="header">
      <div id="navBar">
        <div id="header__title">
          <h1>
            <Link to="/">My SoundCloud</Link>
          </h1>
        </div>
        <div id="header__actions">
          <ul>
            <li>
              <SvgButton icon="search" label="Search" />
            </li>
            <li>
              <SvgButton icon="soundCloud" label="soundCloud" />
            </li>
            <li>
              <SvgButton icon="github" label="github" />
            </li>
          </ul>
        </div>
      </div>
      <div id="searchBar" className="searchBar">
        <form className="search-form" noValidate>
          <input
            autoComplete="off"
            className="search-form__input"
            maxLength="60"
            placeholder="Search Tracks"
            tabIndex="0"
            type="text"
          />
        </form>
      </div>
    </header>
  );
}

/*
novalidate : do not do validation when submit
role: Accessibility

*/
