import { useRef } from "react";
import "../../styles/home/objectives.css";
import Image from "../../containers/Image";
import useScrollVisibility from "../../hooks/useScrollAnimation";
import data from "./data.json"
import {objectiveText} from "./asset" 


export default function Objectives() {
  const objectivesTitleRef = useRef(null);
  const sliderRef = useRef(null);
  const { isVisible } = useScrollVisibility(objectivesTitleRef, sliderRef);
  return (
    <section
      className={`home-objective-container ${isVisible ? "appear" : ""}`}
      ref={objectivesTitleRef}
    >
      <h2 className={isVisible ? "home-objective-header" : ""} ref={sliderRef}>
        {data.section3.title}
      </h2>
      <p className="home-objective-quote">
        {data.section3.description}
      </p>
      <div className="home-objective-cards-container">
        {objectiveText.map((text) => (
          <div key={text.title} className="home-objective-card">
            <div className="home-objective-card-image">
              <Image
                simple_image={text.simple_image}
                HD_image={text.image}
                alt={text.title}
              />
            </div>
            <div className="home-objective-card-text ">
              <h2>{text.title}</h2>
              <p>{text.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
