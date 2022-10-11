// import { div } from "@mui/material";
import "./App.css";
import Home from "./components/Home";

import styled from "styled-components";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Destination from "./components/Destination";
import DestinationModel from "./components/DestinationModel";
import Crew from "./components/Crew";

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
        </Routes>
      </Router>
    </div>
  );
};

export default App;
