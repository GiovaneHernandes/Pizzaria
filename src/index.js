import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/navBar";
import Principal from "./components/principal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <Principal />
  </React.StrictMode>
);
