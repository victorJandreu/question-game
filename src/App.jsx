import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import "./styles/app.scss";
import React from "react";
import Game from "./pages/Game";
import Home from "./pages/Home";



function App() {


  return (
  <BrowserRouter>
    <Routes>
      <Route path="/question-game" element={<Home />} />
      <Route path="/question-game/:dificulty" element={<Game />} />
      <Route path="*" element={<Navigate to="/question-game" />} />
    </Routes>
  </BrowserRouter>
  );
}


export default App;
