import { HashRouter, Route, Routes, Navigate} from "react-router-dom";
import "./styles/app.scss";
import React from "react";
import Game from "./pages/Game";
import Home from "./pages/Home";



function App() {


  return (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game/:dificulty" element={<Game />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </HashRouter>
  );
}


export default App;
