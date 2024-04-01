import arrow_left from "../../assets/static_images/arrow-left-solid.svg";
import arrow_right from "../../assets/static_images/arrow-right-solid.svg";
import { useCarousel } from "../../hooks/useCarousel";

const MajorModal = ({ dataModel, navigate }) => {
  const { page, next, back } = useCarousel([...dataModel.data.images]);
  return (
    <div className="minor-modal-container">
      <div className="major-modal">
        <div className="major-image-and-summary">
          <div className="major-image-conatiner">
            <img
              src={arrow_left}
              onClick={() => back()}
              className="image-arrowe left"
              alt="left arrow"
            />
            <img
              style={{ objectFit: "contain" }}
              src={page}
              alt="project carousel"
            />
            <img
              src={arrow_right}
              onClick={() => next()}
              className="image-arrowe right"
              alt="right arrow"
            />
          </div>
          <div className="major-modal-summary">
            <strong style={{ color: "white", fontSize: "1.3rem" }}>
              SUMMARY:
            </strong>{" "}
            {dataModel.data.summary || "loading"}
          </div>
        </div>
        <div className="major-quote-and-text">
          <p className="minor-modal-quote">“{dataModel.data.quote || "loading"}“</p>
          <h2 className="minor-project-name">{dataModel.data.project || "loading"}</h2>
          <p className="major-project-domain-name">
            Domain: {dataModel.data.domain || "loading"}
          </p>
          <div className="major-project-full">{dataModel.data.main || "loading"}</div>
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="minor-modal-close"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default MajorModal