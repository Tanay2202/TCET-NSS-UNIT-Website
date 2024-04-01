import ProjectMajormodal  from "./ProjectsMajormodal";
import { useEffect, useState } from "react";
import Image from "../../containers/Image";

const MajorProjectsDisplay = ({ projects, proj_id, navigate }) => {
  const [showMajorModal, setShowMajorModal] = useState({
    display: false,
    data: null,
  });
  useEffect(() => {
    const item = projects.find((item) => item.id === parseInt(proj_id));
    if (item)
      setShowMajorModal({
        display: true,
        data: item,
      });
    else
      setShowMajorModal({
        display: false,
        data: null,
      });
  }, [projects, proj_id]);

  if (projects === null)
    return (
      <section className="scale-projects-container">
        <h2>No Major Projects</h2>
      </section>
    );

  return (
    <section className="scale-projects-container">
      <h2>Major Projects</h2>
      <div
        className="scale-projects-card-display"
        style={{ gridTemplateColumns: "repeat(3, minmax(32%, 1fr))" }}
      >
        {projects.map((project, idx) => (
          <div
            key={"major-project-" + idx}
            className="scale-projects-card major"
            // onClick={() => setShowMajorModal({ display: true, data: project })}
            onClick={() => {
              navigate(`../projects?id=${project.id}`);
            }}
          >
            <div style={{ borderRadius: "20px 20px 0 0" }}>
              <Image
                style={{ borderRadius: "inherit" }}
                alt={`Project ${project.id}`}
                simple_image={"#000000"}
                HD_image={project.images[0]}
              />
            </div>
            <div className="scale-project-text">
              <h4>{project.domain}</h4>
              <h2>{project.project}</h2>
              <p>{project.summary.substring(0, 80)}.....</p>
            </div>
          </div>
        ))}
      </div>
      {showMajorModal.display && (
        <ProjectMajormodal dataModel={showMajorModal} navigate={navigate} />
      )}
    </section>
  );
};

export default MajorProjectsDisplay;
