import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../App";


export default function QuestionModal({


}) {
 
  const {  life,
    setNumero,
    setModal,
    setDisplayModal,
    questionData,
    numero,
    setQuestionData,
    setLife} = useContext(ThemeContext)

    //setLose
  const [check, setCheck] = useState(false);
  const [alreadyAnswer, setAlreadyAnswer] = useState(false);
  const actualQuestion = questionData[numero];

  function checkAnswer(e) {
    if (alreadyAnswer) return;

    const contenido = e.target.textContent;
    if (contenido === actualQuestion.correct_answer) {
      // ADD style to correct answer
      setQuestionData((prev) =>
        prev.map((item, index) => {
          if (index === numero) {
            return {
              ...item,
              answers: item.answers.map((preguntas) =>
                contenido === preguntas.pregunta
                  ? { ...preguntas, estilo: true, cursorEstilo: true }
                  : { ...preguntas, cursorEstilo: true, notHover: true }
              ),
            };
          } else {
            return item;
          }
        })
      );
    } else {
      //you fail the answer
      setLife((prev) => prev - 1);
      // ADD style correct and wrong answer
      setQuestionData((prev) =>
        prev.map((item, index) => {
          if (index === numero) {
            return {
              ...item,
              answers: item.answers.map((preguntas) => {
                // ADD style to correct answer
                if (contenido === preguntas.pregunta) {
                  return { ...preguntas, estilo: false, cursorEstilo: true };
                }
                // ADD STYLE WRONG answer
                else if (actualQuestion.correct_answer === preguntas.pregunta) {
                  return { ...preguntas, estilo: true, cursorEstilo: true };
                } else {
                  return { ...preguntas, cursorEstilo: true, notHover: true };
                }
              }),
            };
          } else {
            return item;
          }
        })
      );
      //
    }

    setAlreadyAnswer(true);
  }

  const respuestas = actualQuestion.answers.map((x, index) => {
    let colorEstilo;
    let cursoStyle;
    if (x.cursorEstilo) {
      cursoStyle = "auto";
    }
    if (x.estilo === true) {
      colorEstilo = "linear-gradient(to left, #0ccb19e0, lime)";
    } else if (x.estilo === false) {
      colorEstilo = "linear-gradient(to left, #cb0c0cdf, #ff582e)";
    }
    return (
      <button
        className={x.notHover ? "notHover" : ""}
        style={{ background: colorEstilo, cursor: cursoStyle }}
        onClick={(e) => checkAnswer(e)}
        key={index}
      >
        {x.pregunta}
      </button>
    );
  });

  useEffect(() => {
    if (life === 0) {
      setModal(true);
      setDisplayModal(1);
    }
  }, [check]);

  function closeModal() {
    setNumero((prev) => prev + 1);
    setCheck(!check);
    if (life === 0) return;
    setModal(false);
  }

  return (
    <div className="modal-content">
      <h2>{actualQuestion.question}</h2>
      <div className="btn-group">{respuestas}</div>
      <button
        className={`close ${alreadyAnswer ? "closeActive" : "closeDesactive"}`}
        onClick={closeModal}
      >
        X
      </button>
    </div>
  );
}
