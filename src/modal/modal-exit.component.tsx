import "./modal.styles.scss";
import React from "react";
import Modal from "react-modal";

const ExitModal = ({
  modalIsOpen,
  closeModal,
  handleExit,
  handleNoExit,
}: {
  modalIsOpen: boolean;
  closeModal: () => void;
  handleExit: () => void;
  handleNoExit: () => void;
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
          <h1 className="header-reset">EXIT GAME</h1>
          <div className="button-containers">
            <button onClick={handleNoExit} className="button-restart">
              NO
            </button>
            <button onClick={handleExit} className="button-restart">
              YES
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ExitModal;
