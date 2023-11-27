import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { closeModal, correct, questions, isModalOpen } = useGlobalContext();
  return (
    <section
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className="modal-content">
        <h2>{`${correct > 0 ? "congrats!" : "oops!"}`}</h2>
        <p>
          you answered {((correct * 100) / questions.length).toFixed(0)}% of
          questions correctly
        </p>
        <button type="button" className="close-btn" onClick={closeModal}>
          play again
        </button>
      </div>
    </section>
  );
};

export default Modal;
