import {
  FaArrowUp,
  FaArrowRight,
  FaArrowLeft,
  FaArrowDown,
} from "react-icons/fa";
import {
  arrowDown,
  arrowUp,
  arrowRight,
  arrowLeft,
} from "../functions/arrow-movement";
import { useEffect, useContext } from "react";
import { ThemeContext } from "../pages/Game";

export default function ArrowMovement() {
  const {
    modal,
    setModal,
    setLife,
    contenido,
    maxFilas,
    maxColumnas,
    tablero,
    setTablero,
    setDisplayModal,
    setFloor,
  } = useContext(ThemeContext);

  //arrow movement with keyboard
  useEffect(() => {
    const presion = (e) => {
      if (e.key === "ArrowDown") {
        arrowDown(
          tablero,
          contenido,
          maxFilas,
          setTablero,
          setLife,
          setDisplayModal,
          setModal,
          modal,
          setFloor
        );
      } else if (e.key === "ArrowRight") {
        arrowRight(
          tablero,
          contenido,
          maxColumnas,
          setTablero,
          setLife,
          setDisplayModal,
          setModal,
          modal,
          setFloor
        );
      } else if (e.key === "ArrowUp") {
        arrowUp(
          tablero,
          contenido,
          setTablero,
          setLife,
          setDisplayModal,
          setModal,
          modal,
          setFloor
        );
      } else if (e.key === "ArrowLeft") {
        arrowLeft(
          tablero,
          contenido,
          setTablero,
          setLife,
          setDisplayModal,
          setModal,
          modal,
          setFloor
        );
      }
    };

    if (!modal) {
      document.addEventListener("keydown", presion);
    }

    return function () {
      document.removeEventListener("keydown", presion);
    };
  }, [tablero, modal]);

  return (
    <div className="arrowMenu">
      <button
        className="up"
        onClick={() =>
          arrowUp(
            tablero,
            contenido,
            setTablero,
            setLife,
            setDisplayModal,
            setModal,
            modal,
            setFloor
          )
        }
      >
        <FaArrowUp className="icon" />
      </button>
      <button
        className="down"
        onClick={() =>
          arrowDown(
            tablero,
            contenido,
            maxFilas,
            setTablero,
            setLife,
            setDisplayModal,
            setModal,
            modal,
            setFloor
          )
        }
      >
        <FaArrowDown className="icon" />
      </button>
      <button
        className="left"
        onClick={() =>
            arrowLeft(
              tablero,
              contenido,
              setTablero,
              setLife,
              setDisplayModal,
              setModal,
              modal,
              setFloor
            )
        }
      >
        <FaArrowLeft className="icon" />
      </button>
      <button
        className="right"
        onClick={() =>
          arrowRight(
            tablero,
            contenido,
            maxColumnas,
            setTablero,
            setLife,
            setDisplayModal,
            setModal,
            modal,
            setFloor
          )
        }
      >
        <FaArrowRight className="icon" />
      </button>
    </div>
  );
}
