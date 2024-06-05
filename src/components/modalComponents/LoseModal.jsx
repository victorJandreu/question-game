import startNewGame from "../../functions/startNewGame";

export default function LoseModal({
  setModal,
  setLife,
  setNumero,
  setError,
  setStart,
  setDisplayModal,
}) {
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
