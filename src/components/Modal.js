import React, { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button type="button" id="modalBtn" onClick={handleClick}>
        Click to open Modal
      </button>
      {/* pass the state to component as props */}
      {showModal ? <ModalInner closeModal={closeModal} /> : null}
    </div>
  );
}

// destructure the props
function ModalInner({ closeModal }) {
  return (
    <div id="myModal" className="modal">
      {/* Modal content */}
      <div className="modal-content">
        {/* pass the props value to the event handler */}
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
}
