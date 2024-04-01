import React, { useState, useRef } from "react";
import "../../styles/about/magazine.css";
import { magazineData } from "./asset";
import data from "./data.json"
import useScrollVisibility from "../../hooks/useScrollAnimation";

export default function Magazine() {
  const [focusMag, setFocusMag] = useState(null);
  const handleDownload = (title) => {
    const downloadLink = document.createElement("a");
    downloadLink.href = `/pdf/${title}`;
    downloadLink.download = `NSS ${title}`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  const magazineRef = useRef(null)
  const sliderRef = useRef(null)
    
  const { isVisible } = useScrollVisibility(magazineRef, sliderRef);
  return (
    <div id="magazine" className={`magazine-container ${isVisible ? "appear": ""}`} ref={magazineRef}>
      <h2 ref={sliderRef}>{data.section5.title}</h2>
      <p>
        {data.section5.description}
      </p>
      <div className="magazine-page-container">
        {magazineData.map((mag, idx) => (
          <div
            onClick={() => handleDownload(mag.title)}
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



