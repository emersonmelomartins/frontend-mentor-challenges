import ReactModal from "react-modal";
import { ImageGallery } from "../ImageGallery";
import { ModalContent } from "./styles";

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
        <ImageGallery />
      </ModalContent>
    </ReactModal>
  );
}
