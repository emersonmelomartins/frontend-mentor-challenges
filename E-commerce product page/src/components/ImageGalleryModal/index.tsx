import ReactModal from "react-modal";
import { ImageGallery } from "../ImageGallery";
import { ModalContent } from "./styles";

import closeSvg from "../../assets/images/icon-close.svg";

interface IImageGalleryModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function ImageGalleryModal({
  isOpen,
  setIsOpen,
}: IImageGalleryModalProps) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="react-modal"
      overlayClassName="react-modal-overlay"
    >
      <ModalContent>
        <button className="close-btn" onClick={closeModal}>
          <img src={closeSvg} alt="close icon" />
        </button>
        <ImageGallery
          enableAndShowControlGalleryButton={true}
          isModalButtonTriggerActive={false}
        />
      </ModalContent>
    </ReactModal>
  );
}
