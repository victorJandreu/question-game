import { useEffect, useState, createContext } from "react";
import "./styles/app.scss";
import Modals from "./components/Modals";
import Tablero from "./components/Tablero";
import React from "react";
import apiCall from "./functions/apiCall";
import Heart from "./components/Hearts";
import initTablero from "./functions/initTablero";

const contenido = {
  vacio: "⬜",
  heart: "💖",
  gosth: "💀",
  escalera: "⏫",
  character: "⭐",
  visitado: "v",
};
const ThemeContext = createContext(null);
function App() {
  //relate with the modal
  const [modal, setModal] = useState(false);
  const [displayModal, setDisplayModal] = useState(0);

  const [questionData, setQuestionData] = useState();
  const [error, setError] = useState(false);
  const [numero, setNumero] = useState(0);
  const [life, setLife] = useState(3);
  const [floor, setFloor] = useState(3);

  const [start, setStart] = useState(false);
  const [update, setUpdate] = useState(false);

  // relate with the board
  const [maxFilas, setMaxFilas] = useState(6);
  const [maxColumnas, setMaxColumnas] = useState(6);
  const [tablero, setTablero] = useState(() =>
    initTablero(maxFilas, maxColumnas, contenido)
  );

  //Create the board when you lose or go to a new floor
  useEffect(() => {
    if (update) {
      setTablero(() => initTablero(maxFilas, maxColumnas, contenido));
    } else {
      setUpdate(true);
    }
  }, [maxColumnas, maxFilas]);

  //prepare the board when you lose and call the API
  useEffect(() => {
    if (start) {
      if (maxFilas === 6 && maxColumnas === 6) {
        setTablero(() => initTablero(maxFilas, maxColumnas, contenido));
      } else {
        setMaxFilas(6);
        setMaxColumnas(6);
      }
      setFloor(3);
      setStart(false);
    } else {
      apiCall(setQuestionData, setError);
    }
  }, [start]);

  return (
    <ThemeContext.Provider
      value={{
        modal,
        contenido,
        setModal,
        setLife,
        maxFilas,
        maxColumnas,
        tablero,
        setTablero,
        setDisplayModal,
        setFloor,
        life,
        setNumero,
        questionData,
        setQuestionData,
        numero,
        setError,
        setStart,
        setMaxFilas,
        setMaxColumnas,
        floor,

      }}
    >
      <Heart life={life} floor={floor} />
      <Tablero
        contenido={contenido}
        maxFilas={maxFilas}
        maxColumnas={maxColumnas}
        tablero={tablero}
      />
      {modal && (
        <Modals displayModal={displayModal}/>
      )}
      {error ? <p>Lo sentimos refresque la pagina</p> : null}
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
export default App;
