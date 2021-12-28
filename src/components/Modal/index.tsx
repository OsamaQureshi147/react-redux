import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
  },
};

Modal.setAppElement("#root");

interface Props {
  modalIsOpen: boolean;
  closeModal?: () => void;
  afterOpenModal?: () => void;
}
export const CustomModal: React.FC<Props> = ({
  modalIsOpen,
  closeModal,
  afterOpenModal,
  children,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img
        style={{
          height: 20,
          width: 20,
          position: "absolute",
          right: "20px",
          top: "15px",
        }}
        onClick={() => closeModal?.()}
        src="./close.png"
      />
      {children}
    </Modal>
  );
};
