import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { WatchLaterProvider } from "./context/watch-later-context";
import { VideoProvider } from "./context/video-context";
import { LikedVideosProvider } from "./context/liked-videos-context";
import { VideoHistoryProvider } from "./context/video-history-context";
import { UserProvider } from "./context/user-context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <VideoProvider>
          <VideoHistoryProvider>
            <LikedVideosProvider>
              <WatchLaterProvider>
                <App />
              </WatchLaterProvider>
            </LikedVideosProvider>
          </VideoHistoryProvider>
        </VideoProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
