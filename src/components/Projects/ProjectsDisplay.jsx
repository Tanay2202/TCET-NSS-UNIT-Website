import { useState } from "react";
import "../../styles/projects/display.css";
import ProjectMinorlist from "./ProjectMinorlist"
import ProjectMajorlist from "./ProjectMajorlist"
import ProjectSearchbar from "./ProjectSearchbar"
import ProjectSidebaeheader from "./ProjectSidebaeheader"
import useQuery from "../../hooks/useQuery";
import { useNavigate } from "react-router-dom";
import {
  major_projects,
  minor_project,
  domain_index,
  domain_names,
} from "./asset";

const ProjectDisplay = () => {
  const query_page = useQuery();
  const navigate = useNavigate();
  const domain = query_page.get("domain");
  const proj_id = query_page.get("id");

  const [selectedDomain, setSelectedDomain] = useState(
    domain_index[domain] || 0
  );
  const [query, setQuery] = useState("");

  const filtered_major_items = major_projects.filter(
    (item) =>
      item.project.toLowerCase().includes(query.toLowerCase()) &&
      item.domain.includes(domain_names[selectedDomain].search)
  );
  const filtered_minor_items = minor_project.filter(
    (item) =>
      item.project.toLowerCase().includes(query.toLowerCase()) &&
      item.domain.includes(domain_names[selectedDomain].search)
  );
  return (
    <div className="projects-display-container" id="projects">
      <div className="domain-option-filters-containers">
        <div className="domain-option-domains">
          <ProjectSidebaeheader />
          <h3 className="domain-options-name">DOMAINS</h3>
          <ul className="domain-option-domains">
            {domain_names.map((domain, idx) => (
              <li
                key={idx}
                className={`project-option ${
                  idx === selectedDomain ? "p-active" : ""
                }`}
                onClick={() => setSelectedDomain(idx)}
              >
                <img
                  className="domain-svg-selector"
                  src={domain.icon}
                  alt={`${domain.name} icon`}
                />
                <h5>{domain.name}</h5>
              </li>
            ))}
          </ul>
        </div>
        <ProjectSearchbar query={query} setQuery={setQuery} />
      </div>
      <div className="projects-cards-side">
        <ProjectMajorlist
          proj_id={proj_id}
          projects={filtered_major_items}
          navigate={navigate}
        />
        <ProjectMinorlist
          proj_id={proj_id}
          projects={filtered_minor_items}
          navigate={navigate}
        />
      </div>
    </div>
  );
};

export default ProjectDisplay;
