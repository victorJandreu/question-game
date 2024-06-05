import { useEffect, useState } from "react";
import LoseModal from "./LoseModal";
import QuestionModal from "./QuestionModal";
import HeartModal from "./HeartModal";
import FloorModal from "./FloorModal";

export default function Question({
  setModal,
  modal,
  questionData,
  setQuestionData,
  numero,
  setNumero,
  setLife,
  life,
  setStart,
  setError,
  displayModal,
  setDisplayModal,
  setMaxFilas,
  setMaxColumnas,
  floor,
}) {
  let modalContent;

  if (displayModal === 0) {
    modalContent = (
      <QuestionModal
        setNumero={setNumero}
        life={life}
        setModal={setModal}
        setDisplayModal={setDisplayModal}
        questionData={questionData}
        numero={numero}
        setQuestionData={setQuestionData}
        setLife={setLife}
      />
    );
  } else if (displayModal === 1) {
    modalContent = (
      <LoseModal
        setModal={setModal}
        setLife={setLife}
        setNumero={setNumero}
        setError={setError}
        setStart={setStart}
        setDisplayModal={setDisplayModal}
      />
    );
  } else if (displayModal === 2) {
    modalContent = (
      <HeartModal setModal={setModal} setDisplayModal={setDisplayModal} />
    );
  } else if (displayModal === 3) {
    modalContent = (
      <FloorModal
        setModal={setModal}
        setDisplayModal={setDisplayModal}
        setMaxFilas={setMaxFilas}
        setMaxColumnas={setMaxColumnas}
        floor={floor}
        setLife={setLife}
        setNumero={setNumero}
        setError={setError}
        setStart={setStart}
      />
    );
  }
  return (
    <div className="modal">
      <div className="overlay"></div>
      {modalContent}
    </div>
  );
}

/*



*/
