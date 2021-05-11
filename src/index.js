import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { LoginProvider } from "./components/Login/login-context";
import { BrowserRouter as Router } from "react-router-dom";
import { WatchLaterProvider } from "./context/watch-later-context";
import { VideoProvider } from "./context/video-context";
import { LikedVideosProvider } from "./context/liked-videos-context";
import { VideoHistoryProvider } from "./context/video-history-context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoginProvider>
        <VideoProvider>
          <VideoHistoryProvider>
            <LikedVideosProvider>
              <WatchLaterProvider>
                <App />
              </WatchLaterProvider>
            </LikedVideosProvider>
          </VideoHistoryProvider>
        </VideoProvider>
      </LoginProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
