import { HomeScreen } from "./components";
import { LoginScreen } from "./components/Login/LoginScreen";
import "./styles.css"
import { Route, Routes } from "react-router";
import { Page } from "./components";
import { VideoPlayer } from "./components";
import { WatchLater } from "./components/WatchLater/WatchLater";
import { History } from "./components/VideoHistory/History";
import { LikedVideos } from "./components/LikedVideos/LikedVideos";

function App() {
  return (
    <Routes>
      <Route exact path="/"><Page><HomeScreen/></Page></Route>
      <Route exact path="/video/:videoId"><Page><VideoPlayer/></Page></Route>
      <Route path="/login"><LoginScreen /></Route>
      <Route path="/search"><Page><h1>Search Results</h1></Page></Route>
      <Route path="/watchlater"><Page><WatchLater/></Page></Route>
      <Route path="/history"><Page><History /></Page></Route>
      <Route path="/liked"><Page><LikedVideos /></Page></Route>
    </Routes>
  );
}

export default App;
