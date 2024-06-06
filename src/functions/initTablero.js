export default function initTablero(maxFilas, maxColumnas, contenido, dificulty) {


  let goshtNumber

  if(dificulty === "hard") {
    goshtNumber = Math.round(maxFilas + maxColumnas / 2) + 4 ;
  } else if(dificulty === "easy") {
    goshtNumber = Math.round(maxFilas + maxColumnas / 2) -5;
  } else{
    goshtNumber = Math.round(maxFilas + maxColumnas) - 4;
  }



  const arr = [];

  for (let i = 0; i < maxFilas; i++) {
    for (let j = 0; j < maxColumnas; j++) {
      arr.push({ content: contenido.vacio, posicion: [i, j], x: i, y: j });
    }
  }

  const detectiveIndex = randomInBorder(maxFilas, maxColumnas);
  arr.forEach((x) => {
    if (
      x.posicion[0] === detectiveIndex[0] &&
      x.posicion[1] === detectiveIndex[1]
    ) {
      x.content = contenido.character;
    }
    if (x.posicion[0] === maxFilas - 1 && x.posicion[1] === maxColumnas - 1) {
      addemoji(arr, goshtNumber, contenido.gosth);
      addemoji(arr, 1, contenido.escalera);
      addemoji(arr, 1, contenido.heart);
    }
  });

  return arr;

  function addemoji(arrr, cantida, emoji) {
    let cantidad = cantida;
    while (cantidad > 0) {
      const randomIndex = random(maxFilas, maxColumnas);
      arrr.forEach((x) => {
        if (
          x.posicion[0] === randomIndex[0] &&
          x.posicion[1] === randomIndex[1] &&
          x.content === contenido.vacio
        ) {
          x.content = emoji;
          cantidad--;
        }
      });
    }
  }

  function random(filas, columnas) {
    let arr = [null, null];
    arr[0] = Math.floor(Math.random() * filas);
    arr[1] = Math.floor(Math.random() * columnas);
    return arr;
  }

  function randomInBorder(filas, columnas) {
    let arr = [null, null];
    while (
      arr[0] !== 0 &&
      arr[0] !== filas - 1 &&
      arr[1] !== 0 &&
      arr[1] !== columnas - 1
    ) {
      arr[0] = Math.floor(Math.random() * filas);
      arr[1] = Math.floor(Math.random() * columnas);
    }
    return arr;
  }
}
