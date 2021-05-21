import "./styles.css"
import { Route, Routes } from "react-router";

import { Page } from "./components";
import { HomeScreen } from "./components";
import { VideoPlayer } from "./components";
import { Register } from "./components";
import { LoginScreen } from "./components";
import { WatchLater } from "./components";
import { History } from "./components";
import { LikedVideos } from "./components";
import { TopVideos } from "./components";


function App() {
  return (
    <Routes>
      <Route exact path="/"><Page><HomeScreen/></Page></Route>
      <Route path="/video/:videoId"><Page><VideoPlayer/></Page></Route>
      <Route path="/login"><LoginScreen /></Route>
      <Route path="/register"><Register/></Route>
      <Route path="/search"><Page><h1>Search Results</h1></Page></Route>
      <Route path="/watchlater"><Page><WatchLater/></Page></Route>
      <Route path="/history"><Page><History /></Page></Route>
      <Route path="/liked"><Page><LikedVideos /></Page></Route>
      <Route path="/top"><Page><TopVideos /></Page></Route>
    </Routes>
  );
}

export default App;
