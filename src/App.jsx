import { BrowserRouter, Route, Routes} from "react-router-dom";
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
    </Routes>
  </BrowserRouter>
  );
}


export default App;
