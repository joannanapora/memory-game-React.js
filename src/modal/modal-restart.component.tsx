import React from "react";
import Modal from "react-modal";
import "./modal.styles.scss";

const ResetModal = ({
  modalIsOpen,
  closeModal,
  handleReset,
  handleNoReset,
}: {
  modalIsOpen: boolean;
  closeModal: () => void;
  handleReset: () => void;
  handleNoReset: () => void;
}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyles}
      >
        <div className="modal-restart">
          <h1 className="header-reset">RESTART GAME</h1>
          <div className="button-containers">
            <button onClick={handleNoReset} className="button-restart">
              NO
            </button>
            <button onClick={handleReset} className="button-restart">
              YES
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ResetModal;
