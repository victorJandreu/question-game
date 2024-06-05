import { useEffect, useState, useRef } from "react";
import initTablero from "./initTablero";
import {
  FaArrowUp,
  FaArrowRight,
  FaArrowLeft,
  FaArrowDown,
} from "react-icons/fa";

import person from "./assets/person.svg";

export default function Tablero({
  modal,
  setModal,
  setLife,
  contenido,
  maxFilas,
  setMaxFilas,
  maxColumnas,
  setMaxColumnas,
  tablero,
  setTablero,
  setDisplayModal,
  setFloor,
}) {
  // EFECTOS
  //arrow movement
  useEffect(() => {
    const presion = (e) => {
      if (e.key === "ArrowDown") {
        arrowDown();
      } else if (e.key === "ArrowRight") {
        arrowRight();
      } else if (e.key === "ArrowUp") {
        arrowUp();
      } else if (e.key === "ArrowLeft") {
        arrowLeft();
      }
    };

    if (!modal) {
      document.addEventListener("keydown", presion);
    }

    return function () {
      document.removeEventListener("keydown", presion);
    };
  }, [tablero, modal]);

  // MOVEMENT

  function arrowDown() {
    const startPosition = tablero.filter(
      (x) => x.content === contenido.character
    )[0];

    if (startPosition.x === maxFilas - 1) return;

    setTablero((prev) =>
      prev.map((casilla) => {
        if (
          casilla.x === startPosition.x + 1 &&
          casilla.y === startPosition.y
        ) {
          if (casilla.content === contenido.heart) {
            setLife((prev) => prev + 1);
            setDisplayModal(2);
            setModal(true);
          }
          if (casilla.content === contenido.gosth) {
            setModal(!modal);
          }
          if (casilla.content === contenido.escalera) {
            setFloor((prev) => prev - 1);
            setDisplayModal(3);
            setModal(true);
          }

          return {
            ...casilla,
            content: contenido.character,
          };
        }
        if (casilla.x === startPosition.x && casilla.y === startPosition.y) {
          return {
            ...casilla,
            content: contenido.visitado,
          };
        }
        return casilla;
      })
    );
  }

  function arrowUp() {
    const startPosition = tablero.filter(
      (x) => x.content === contenido.character
    )[0];

    if (startPosition.x === 0) return;

    setTablero((prev) =>
      prev.map((casilla) => {
        if (
          casilla.x === startPosition.x - 1 &&
          casilla.y === startPosition.y
        ) {
          if (casilla.content === contenido.heart) {
            setLife((prev) => prev + 1);
            setDisplayModal(2);
            setModal(true);
          }

          if (casilla.content === contenido.gosth) {
            setModal(!modal);
          }
          if (casilla.content === contenido.escalera) {
            setFloor((prev) => prev - 1);
            setDisplayModal(3);
            setModal(true);
          }

          return {
            ...casilla,
            content: contenido.character,
          };
        }
        if (casilla.x === startPosition.x && casilla.y === startPosition.y) {
          return {
            ...casilla,
            content: contenido.visitado,
          };
        }
        return casilla;
      })
    );
  }

  function arrowRight() {
    const startPosition = tablero.filter(
      (x) => x.content === contenido.character
    )[0];

    if (startPosition.y === maxColumnas - 1) return;

    setTablero((prev) =>
      prev.map((casilla) => {
        if (
          casilla.x === startPosition.x &&
          casilla.y === startPosition.y + 1
        ) {
          if (casilla.content === contenido.heart) {
            setLife((prev) => prev + 1);
            setDisplayModal(2);
            setModal(true);
          }

          if (casilla.content === contenido.gosth) {
            setModal(!modal);
          }
          if (casilla.content === contenido.escalera) {
            setFloor((prev) => prev - 1);
            setDisplayModal(3);
            setModal(true);
          }

          return {
            ...casilla,
            content: contenido.character,
          };
        }
        if (casilla.x === startPosition.x && casilla.y === startPosition.y) {
          return {
            ...casilla,
            content: contenido.visitado,
          };
        }
        return casilla;
      })
    );
  }

  function arrowLeft() {
    const startPosition = tablero.filter(
      (x) => x.content === contenido.character
    )[0];

    if (startPosition.y === 0) return;

    setTablero((prev) =>
      prev.map((casilla) => {
        if (
          casilla.x === startPosition.x &&
          casilla.y === startPosition.y - 1
        ) {
          if (casilla.content === contenido.heart) {
            setLife((prev) => prev + 1);
            setDisplayModal(2);
            setModal(true);
          }

          if (casilla.content === contenido.gosth) {
            setModal(!modal);
          }
          if (casilla.content === contenido.escalera) {
            setFloor((prev) => prev - 1);
            setDisplayModal(3);
            setModal(true);
          }
          return {
            ...casilla,
            content: contenido.character,
          };
        }
        if (casilla.x === startPosition.x && casilla.y === startPosition.y) {
          return {
            ...casilla,
            content: contenido.visitado,
          };
        }
        return casilla;
      })
    );
  }

  // STYLES
  const styl = {
    height:  "70vh",
    display: "grid",
    gridTemplateColumns: `repeat(${maxColumnas}, 1fr)`,
    gridTemplateRows: `repeat(${maxFilas}, calc(70vh / ${maxFilas}))`,
  };

  // renderizar

  const showTablero = tablero.map((x) => {
    let valor;

    if (x.content === contenido.character) {
      valor = (
        <div className="prueba">
          <img src={person} className="person" />
        </div>
      );
    } else if (x.content === contenido.visitado) {
      valor = <div className="show"></div>;
    }

    return (
      <div className="casilla" key={x.posicion} id={x.posicion}>
        {valor}
        
      </div>
    );
  });

  // <p>{x.content}</p> poner debajo de valor para comprobar las casillas

  return (
    <>
  
      <div style={styl} className="tablero">
        {showTablero}
      </div>
     
      <div className="arrowMenu">
        <button className="up" onClick={arrowUp}>
          <FaArrowUp className="icon" />
        </button>
        <button className="down" onClick={arrowDown}>
          <FaArrowDown className="icon" />
        </button>
        <button className="left" onClick={arrowLeft}>
          <FaArrowLeft  className="icon" />
        </button>
        <button className="right" onClick={arrowRight}>
          <FaArrowRight className="icon" />
        </button>
      </div>
    </>
  );
}
