import { useRef } from "react";
import "../../styles/home/recent-projects.css";
import useScrollVisibility from "../../hooks/useScrollAnimation";
import data from "./data.json";
import { projectDescription } from "./asset";

export default function RecentProjects({ nav }) {
  const projectsTitleRef = useRef(null);
  const sliderRef = useRef(null);
  const { isVisible } = useScrollVisibility(projectsTitleRef, sliderRef);

  return (
    <section
      className={`recent-projects-container ${isVisible ? "appear" : ""}`}
      ref={projectsTitleRef}
    >
      <h1 className={isVisible ? "home-projects-header" : ""} ref={sliderRef}>
        {data.section7.title}
      </h1>
      <div className="prioject-class-container">
        {projectDescription.map((project, idx) => (
          <div
            key={project.title + idx}
            className="recent-project-card"
            onClick={() => nav(`../projects/${project.id}`)}
          >
            <img src={project.image} alt="project" />
            <h4 className="recent-project-domain">{project.domain}</h4>
            <h3 className="recent-project-title">{project.title}</h3>
            <p className="recent-project-short-description">
              {project.description.substring(0, 60) + "... Read More"}
            </p>
            <div className="responsive-project-text">
              <h4 className="recent-project-domain">{project.domain}</h4>
              <h3 className="recent-project-title">{project.title}</h3>
              <p className="recent-project-short-description">
                {project.description.substring(0, 60) + "... Read More"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
