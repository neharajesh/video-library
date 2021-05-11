import { HomeScreen } from "./components";
import { LoginScreen } from "./components/Login/LoginScreen";
import "./styles.css"
import { Route, Routes } from "react-router";
import { Page } from "./components";
import { VideoPlayer } from "./components";

function App() {
  return (
    <Routes>
      <Route exact path="/"><Page><HomeScreen/></Page></Route>
      <Route exact path="/video/:videoId"><Page><VideoPlayer/></Page></Route>
      <Route path="/login"><LoginScreen /></Route>
      <Route path="/search"><Page><h1>Search Results</h1></Page></Route>
    </Routes>
  );
}

export default App;
