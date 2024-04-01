import React, { useState, useRef } from "react";
import "../../styles/about/magazine.css";
import { magazineData } from "./asset";
import data from "./data.json"
import useScrollVisibility from "../../hooks/useScrollAnimation";

export default function Magazine() {
  const [focusMag, setFocusMag] = useState(null);
  const magazineRef = useRef(null)
  const sliderRef = useRef(null)
    
  const { isVisible } = useScrollVisibility(magazineRef, sliderRef);
  return (
    <div id="magazine" className={`magazine-container ${isVisible ? "appear a": ""}`} ref={magazineRef}>
      <h2 ref={sliderRef}>{data.section5.title}</h2>
      <p>
        {data.section5.description}
      </p>
      <div className="magazine-page-container">
        {magazineData.map((mag, idx) => (
          <div
            onClick={() => window.open(mag.link, '_blank')}
            onMouseEnter={() => setFocusMag(idx)}
            onMouseLeave={() => setFocusMag(null)}
            className={`magazine-image ${
              focusMag === idx ? "hover" : focusMag === null ? "" : "blacked"
            }`}
          >
            
            <img src={mag.image} alt={mag.link} />
          </div>
        ))}
      </div>
    </div>
  );
}



