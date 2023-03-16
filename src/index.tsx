import { render } from "react-dom";

import { App } from "./App";
import { ThemeButton } from "./themeButton";
import "./styles.css";

const body = (
  <>
    <div className="theme-button">
      <ThemeButton />
    </div>
    <div className="container">
      <App />
    </div>
  </>
);

const rootElement = document.getElementById("root");
render(body, rootElement);
