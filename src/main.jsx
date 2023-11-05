import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PokeProvider } from "./context/PokeProvider.jsx";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <PokeProvider>
        <App />
      </PokeProvider>
    </HashRouter>
  </React.StrictMode>
);
