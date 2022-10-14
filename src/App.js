import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Destination from "./components/destination/DestinationMain";
import DestinationModel from "./components/destination/MainDM";
import Crew from "./components/crew/MainCrew";
import Technology from "./components/technology/TechnologyMain";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/destination" element={<Destination />}></Route>
          <Route
            path="/destination/:planet"
            element={<DestinationModel />}
          ></Route>
          <Route path="/crew" element={<Crew />}></Route>
          <Route path="/technology" element={<Technology />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
