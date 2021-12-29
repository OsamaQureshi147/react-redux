import React from "react";
import Modal from "react-modal";
import CancelIcon from "@material-ui/icons/Cancel";
import { Button } from "../Button";
import styled from "styled-components";
import { Box } from "@material-ui/core";

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
      <IconWrapper>
        <Button
          styles={{ backgroundColor: "white" }}
          onClick={() => closeModal?.()}
        >
          <CancelIcon />
        </Button>
      </IconWrapper>
      {children}
    </Modal>
  );
};

const IconWrapper = styled(Box)`
  height: 20;
  width: 20;
  position: absolute;
  right: -17px;
  top: -15px;
  background-color: white;
  .MuiSvgIcon-root {
    :hover {
      fill: #836b6b;
    }
  }
`;
