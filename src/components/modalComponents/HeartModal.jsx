import heartImg from "../../assets/heart.svg"
import { ThemeContext } from "../../App";
import React, {  useContext } from "react";

export default function HeartModal() {

  const {setModal, setDisplayModal} = useContext(ThemeContext)

    function returnQuestionModal(){
        setModal(false)
        setDisplayModal(0)
    }


  return (
    <div className="modal-content heart-modal">
      <img src={heartImg} alt="" />
      <p>Has ganado un corazon</p>
      <button className="nextButton" onClick={returnQuestionModal}>Continuar</button>
    </div>
  );
}
