import { useState, useEffect } from "react";
import health from "../../assets/projects/online-health.jpg";
import ProjectMinormodal from "./ProjectMinormodal";

const MinorProjectsDisplay = ({ projects, proj_id, navigate }) => {
  const [showMinorModal, setShowMinorModal] = useState({
    display: false,
    data: null,
  });
  useEffect(() => {
    const item = projects.find((item) => item.id === parseInt(proj_id));
    if (item)
      setShowMinorModal({
        display: true,
        data: item,
      });
    else {
      setShowMinorModal({
        display: false,
        data: null,
      });
    }
  }, [proj_id, projects]);

  if (projects === null)
    return (
      <section className="scale-projects-container">
        <h2>No Minor Projects</h2>
      </section>
    );
  return (
    <section className="scale-projects-container">
      <h2>Minor Projects</h2>
      <div
        className="scale-projects-card-display minor"
        style={{ gridTemplateColumns: "repeat(2, minmax(50%, 1fr))" }}
      >
        {projects.map((project, idx) => (
          <div
            key={"minor-project-" + idx}
            className="scale-projects-card minor"
            style={{ display: "flex" }}
            onClick={() => {
              navigate(`../projects?id=${project.id}`);
            }}
          >
            <img
              src={project.image || health}
              style={{ borderRadius: "20px 0 0 20px" }}
              alt={`${project.project} ${project.domain}`}
              loading="lazy"
            />
            <div className="scale-project-text">
              <h4>{project.domain}</h4>
              <h2>
                {project.project.length < 20
                  ? project.project
                  : project.project.substring(0, 20) + "..."}
              </h2>
              <p>{project.summary.substring(0, 60)}.....</p>
            </div>
          </div>
        ))}
      </div>
      {showMinorModal.display && (
        <ProjectMinormodal data={showMinorModal.data} navigate={navigate} />
      )}
    </section>
  );
};

export default MinorProjectsDisplay;
