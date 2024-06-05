
import LoseModal from "./modalComponents/LoseModal";
import QuestionModal from "./modalComponents/QuestionModal";
import HeartModal from "./modalComponents/HeartModal";
import FloorModal from "./modalComponents/FloorModal";

export default function Question({displayModal}) {
  let modalContent;
  
//select the modal depeding of the number
  if (displayModal === 0) {
    modalContent = (
      <QuestionModal />
    );
  } else if (displayModal === 1) {
    modalContent = (
      <LoseModal />
    );
  } else if (displayModal === 2) {
    modalContent = (
      <HeartModal />
    );
  } else if (displayModal === 3) {
    modalContent = (
      <FloorModal />
    );
  }
  return (
    <div className="modal">
      <div className="overlay"></div>
      {modalContent}
    </div>
  );
}


