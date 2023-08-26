import React, { useEffect } from "react";

const Modal = ({ isModalOn, modalContent }) => {
  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
