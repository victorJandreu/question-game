import startNewGame from "../../functions/startNewGame";
import { ThemeContext } from "../../pages/Game";
import React, {  useContext } from "react";
import { Link } from "react-router-dom";

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
          <p>you have found the stairs</p>
          <button className="nextButton" onClick={newFloor}>
          go downstairs
          </button>
        </div>
      ) : (
        <div className="modal-content winner-modal">
          <p>you have left the house</p>
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
          <Link className="return" to={"/"}>Return to the main menu</Link>
        </div>
      )}
    </>
  );
}
