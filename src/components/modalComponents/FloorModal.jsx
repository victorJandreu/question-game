import startNewGame from "../../functions/startNewGame";
import { ThemeContext } from "../../pages/Game";
import React, {  useContext } from "react";

export default function FloorModal() {

  const { setModal,
    setDisplayModal,
    setMaxFilas,
    setMaxColumnas,
    floor,
    setLife,
    setNumero,
    setError,
    setStart} = useContext(ThemeContext)


  function newFloor() {
    setModal(false);
    setDisplayModal(0);
    setMaxFilas((prev) => prev + 2);
    setMaxColumnas((prev) => prev + 2);
  }

  // depends on the floor, select next floor modal or winner modal
  return (
    <>
      {floor !== 0 ? (
        <div className="modal-content nextFloor-modal">
          <p>Has encontrado la escalera</p>
          <button className="nextButton" onClick={newFloor}>
            Bajar a la siguiente planta
          </button>
        </div>
      ) : (
        <div className="modal-content winner-modal">
          <p>Has salido</p>
          <button
            className="nextButton"
            onClick={() =>
              startNewGame(
                setModal,
                setLife,
                setNumero,
                setDisplayModal,
                setError,
                setStart
              )
            }
          >
            Empezar nueva partida
          </button>
        </div>
      )}
    </>
  );
}
