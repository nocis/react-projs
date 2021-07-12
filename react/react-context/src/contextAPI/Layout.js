import React from "react";
import { ThemeContextConsumer } from "./ThemeContext";

export default function Layout(props) {
  return (
    <ThemeContextConsumer>
      {(context) => {
        return (
          <div>
            {context.theme}
            <button onClick={context.toggleTheme}>Toogle Theme</button>
          </div>
        );
      }}
    </ThemeContextConsumer>
  );
}
