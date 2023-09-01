import React from "react";

import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { showModal, closeModal } = useGlobalContext();

  return (
    <div className={`modal-overlay ${showModal && "show-modal"}`}>
      <div className="modal-container">
        <button onClick={closeModal} type="button" className="close-modal-btn">
          <FaTimes />
        </button>
        <h3>Modal Content</h3>
      </div>
    </div>
  );
};

export default Modal;
