import health from "../../assets/projects/online-health.jpg";

const MinorProjectsDisplay = ({ setShowMinorModal, data, navigate }) => {
  return (
    <div className="minor-modal-container">
      <div className="minor-modal">
        <img src={data.image || health} alt={data.project + ", " + data.domain}/>
        <div className="minor-modal-text">
          <p className="minor-modal-quote">
            {data.quote}
          </p>
          <h2 className="minor-project-name">{data.project}</h2>
          <p className="minor-domain-name">{data.domain}</p>
          <h3 className="minor-project-summary">
            {data.summary}
          </h3>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="minor-modal-close"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default MinorProjectsDisplay