import React, { useState } from "react";

export default function Modal({ show }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    console.log("btn click");
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button type="button" id="modalBtn" onClick={handleClick}>
        Click to open Modal
      </button>
      <div id="myModal" class="modal">
        {/* Modal content */}
        <div className="modal-content">
          <span className="close" onClick={handleModalClose}>
            &times;
          </span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    </div>
  );
}
