
import ArrowMovement from "./ArrowMovement";
import person from "../assets/person.svg";

export default function Tablero({
  contenido,
  maxFilas,
  maxColumnas,
  tablero,
}) {
 

  // show your place in the board and the place already visited in the board
  const showTablero = tablero.map((x) => {
    let valor;

    if (x.content === contenido.character) {
      valor = (
        <div className="character-casilla">
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


   // STYLES for the board
   const styl = {
    height: "70vh",
    display: "grid",
    gridTemplateColumns: `repeat(${maxColumnas}, 1fr)`,
    gridTemplateRows: `repeat(${maxFilas}, calc(70vh / ${maxFilas}))`,
  };

  return (
    <>
      <div style={styl} className="tablero">
        {showTablero}
      </div>
      <ArrowMovement  />
    </>
  );
}
