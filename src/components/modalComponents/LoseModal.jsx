import startNewGame from "../../functions/startNewGame";
import { ThemeContext } from "../../pages/Game";
import React, {  useContext } from "react";

export default function LoseModal() {
  const { setModal,
    setLife,
    setNumero,
    setError,
    setStart,
    setDisplayModal} = useContext(ThemeContext)


  return (
    <div className="modal-content lose-modal">
      <p>Has perdido</p>
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
        Empezar de nuevo
      </button>
    </div>
  );
}
