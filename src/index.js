import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { LoginProvider } from "./components/Login/login-context";
import { BrowserRouter as Router } from "react-router-dom";
import { WatchLaterProvider } from "./context/watch-later-context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoginProvider>
        <WatchLaterProvider>
          <App />
        </WatchLaterProvider>
      </LoginProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
