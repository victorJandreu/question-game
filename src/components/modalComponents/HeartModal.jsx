import heartImg from "../../assets/heart.svg"
import { ThemeContext } from "../../pages/Game";
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
      <p>you´ve found a heart</p>
      <button className="nextButton" onClick={returnQuestionModal}>Continue</button>
    </div>
  );
}
