import React from "react";
// import { render } from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   rootElement
// );