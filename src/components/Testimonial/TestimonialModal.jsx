import "../../styles/testimonial/modal.css";
import Close from "../../assets/static_images/xmark-solid.svg";

const Modal = ({
  onClose,
  testimony,
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="modal-close-button" onClick={onClose}>
          <img src={Close} alt="Close Button" />
        </span>
        <div className="modal-content">
          <div className="every-details">
            <div className="image">
              <img
                src={testimony.image}
                alt="Testimony"
                className="modal-image"
                loading="lazy"
              />
            </div>

            <div className="details">
              <h1 className="name">{testimony.name}</h1>
              <p>{testimony.post}</p>
              <p>{testimony.council}</p>
            </div>
          </div>
          <p>{testimony.Testimony}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
