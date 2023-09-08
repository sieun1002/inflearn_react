import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";

import Library from "./ch03/Library";
import Clock from "./ch04/Clock";

//ch03
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);

//ch04
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>,
    document.getElementById("root")
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
