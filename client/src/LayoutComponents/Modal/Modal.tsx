import styled from "styled-components";
import { animated, useSpring, SpringConfig } from "@react-spring/web";

const ModalBackground = styled(animated.div)`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled(animated.div)`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
  border-radius: 4px;
  transition: all 0.4s;
`;

const ModalContent = styled.div`
  & * {
    color: #4a4a4a;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
`;

const springConfig: SpringConfig = {
  duration: 40,
};

interface ModalProps {
  children: React.ReactElement;
  showModal: boolean;
  setShowModal: React.Dispatch<boolean>;
}

const Modal = ({ children, showModal, setShowModal }: ModalProps) => {
  const modalBgAnimation = useSpring({
    opacity: showModal ? 1 : 0,
    display: showModal ? "block" : "none",
    config: springConfig,
  });

  const modalBodyAnimation = useSpring({
    opacity: showModal ? 1 : 0,
    config: springConfig,
  });

  return (
    <>
      <button onClick={() => setShowModal(true)}>show</button>
      {showModal ? (
        <ModalBackground
          onClick={() => setShowModal(false)}
          style={modalBgAnimation}
        >
          <ModalBody
            onClick={(e) => e.stopPropagation()}
            style={modalBodyAnimation}
          >
            <ModalHeader>
              <button onClick={() => setShowModal(false)}>X</button>
            </ModalHeader>
            <ModalContent>{children}</ModalContent>
          </ModalBody>
        </ModalBackground>
      ) : null}
    </>
  );
};

export default Modal;
