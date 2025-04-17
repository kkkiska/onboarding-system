import Plate from "./UI/Plate/Plate";

const Modal = ({ closeModal, children }) => {
  return (
    <>
      <div
        className="modal-bg"
        onClick={(e) => {
          e.target.classList.contains("modal-bg") && closeModal();
        }}
      >
        <Plate className="modal">
          <button className="modal-close" onClick={closeModal}>
            X
          </button>
          <div className="modal-content">{children}</div>
        </Plate>
      </div>
    </>
  );
};

export default Modal;
