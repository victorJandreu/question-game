
export function arrowDown(tablero, contenido, maxFilas, setTablero, setLife, setDisplayModal, setModal, modal, setFloor){

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


export function arrowUp(tablero, contenido, setTablero, setLife, setDisplayModal, setModal, modal, setFloor) {
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

export function arrowRight(tablero, contenido, maxColumnas, setTablero, setLife, setDisplayModal, setModal, modal, setFloor) {
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

export function arrowLeft(tablero, contenido, setTablero, setLife, setDisplayModal, setModal, modal, setFloor) {
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