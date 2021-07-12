import React from "react";
import Layout from "./Layout";
import { ThemeContextConsumer } from "./ThemeContext";

export default function ContextMain() {
  return (
    <div>
      <Layout></Layout>
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
    </div>
  );
}
