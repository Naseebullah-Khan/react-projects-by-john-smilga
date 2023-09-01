import React from "react";

import { FaTimes } from "react-icons/fa";

const Modal = () => {
  return (
    <div className="modal-overlay show-modal">
      <div className="modal-container">
        <button
          // onClick={() => context.setShowModal(false)}
          type="button"
          className="close-modal-btn"
        >
          <FaTimes />
        </button>
        <h3>Modal Content</h3>
      </div>
    </div>
  );
};

export default Modal;
