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
      <p className="over">Game over</p>
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
        Start a new game
      </button>
    </div>
  );
}
