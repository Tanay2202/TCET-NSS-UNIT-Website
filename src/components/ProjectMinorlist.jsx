import { useState, useEffect } from "react";
import health from "../assets/projects/online-health.jpg";
import MinorModal from "./ProjectMinormodal";

export default function MinorProjectsDisplay({ projects, display_id }) {
  const [showMinorModal, setShowMinorModal] = useState({
    display: false,
    data: null
  })
  useEffect(() => {
    console.log(display_id)
    const item = projects.find(item => (item.id === parseInt(display_id)));
    console.log(item)
    if(item)
    setShowMinorModal({
      display: true,
      data: item
    })
  }, [])

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
            onClick={() => setShowMinorModal({display: true, data: project})}
          >
            <img
              src={project.image || health}
              style={{ borderRadius: "20px 0 0 20px" }}
              alt={`${project.project} ${project.domain}`}
              loading="lazy"
            />
            <div className="scale-project-text">
              <h4>{project.domain}</h4>
              <h2>{project.project.length < 20 ? project.project : project.project.substring(0, 20) + "..."}</h2>
              <p>{project.summary.substring(0,60)}.....</p>
            </div>
          </div>
        ))}
      </div>
      {showMinorModal.display && <MinorModal data={showMinorModal.data} setShowMinorModal={setShowMinorModal}/>}
    </section>
  );
}
