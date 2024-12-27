import Modal from "react-modal";
import "./ImageModal.css";

Modal.setAppElement("#root");

function ImageModal({ image, onClose }) {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className="ModalContent"
      overlayClassName="ModalOverlay"
    >
      <button onClick={onClose} className="ModalCloseBtn">
        &times;
      </button>
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className="ModalImage"
      />
      <div className="ModalText">
        <p>{image.alt_description}</p>
        <p className="ModalAuthor">Author: {image.user.name}</p>
        <p className="ModalLikes">Likes: {image.likes}</p>
      </div>
    </Modal>
  );
}

export default ImageModal;
