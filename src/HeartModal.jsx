import heartImg from "./assets/heart.svg"

export default function HeartModal({setModal, setDisplayModal}) {

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
