import { useRef } from "react";
import Plus from "../../assets/static_images/plus-solid.svg";
import "../../styles/home/domains.css";
import useScrollVisibility from "../../hooks/useScrollAnimation";
import { domaintext } from "./asset";
import data from "./data.json"

export default function Domains({ nav }) {
  const domainsTitleRef = useRef(null);
  const sliderRef = useRef(null);

  const { isVisible } = useScrollVisibility(domainsTitleRef, sliderRef);
  return (
    <div id="domains"
      className={`home-domains-container ${isVisible ? "appear" : ""}`}
      ref={domainsTitleRef}
    >
      <div className={isVisible ? "home-domains-header" : ""} ref={sliderRef}>
        {data.section4.title}
      </div>
      <div className="domains-chart-container">
        {domaintext.map((domain) => (
          <div
            key={domain.title}
            className="home-domains-chart"
            onClick={() => nav(`../projects?domain=${domain.search}`)}
          >
            <div className="home-domains-chart-image-container">
              <img src={domain.image} alt={domain.title} />
              <div className="see-more-domains-container">
                <img src={Plus} alt="More Info" />
              </div>
            </div>
            <div className="domains-chart-text">
              <h2 className="domains-chart-header">{domain.title}</h2>
              <hr />
              <p className="domains-chart-passage">{domain.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
