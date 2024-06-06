import { v4 as uuidv4 } from "uuid";
import { decode } from "html-entities";

export default function apiCall(metodoEstado, errorMetodo) {
  return fetch("https://opentdb.com/api.php?amount=50")
    .then((res) => {
      if (!res.ok) {
        throw new Error();
      }
      return res.json();
    })

    .then((data) => {
      const formateo = formatedObject(data);
      metodoEstado(formateo);
    })
    .catch(() => {
      setTimeout(() => {
        fetch("https://opentdb.com/api.php?amount=50")
          .then((res) => {
            if(!res.ok){
              throw new Error()
            }
            return res.json();
          })
          .then((data) =>{
            const formateo = formatedObject(data);
            metodoEstado(formateo);
          })
          .catch(() => errorMetodo(true))
      }, 6000);
    });
}

function shuffleQuestion(array, respuesta) {
  let nuevoArra = [];
  const arrayQuestion = [...array, respuesta];
  while (nuevoArra.length !== arrayQuestion.length) {
    let numero = random(arrayQuestion.length);
    if (!nuevoArra.includes(arrayQuestion[numero])) {
      nuevoArra.push(arrayQuestion[numero]);
    }
  }

  return nuevoArra.map((x) =>  ({pregunta: decode(x), estilo: null}));
}

function random(numero) {
  return Math.floor(Math.random() * numero);
}

function formatedObject(data) {
  const formateo = data.results.map((item) => {
    return {
      question: decode(item.question),
      correct_answer: decode(item.correct_answer),
      answers: shuffleQuestion(item.incorrect_answers, item.correct_answer),
      id: uuidv4(),
    };
  });
  return formateo;
}


