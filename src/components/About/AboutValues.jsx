import "../../styles/about/values.css";
import { useRef } from "react";
import useScrollVisibility from "../../hooks/useScrollAnimation";
import { values } from "./asset";
import data from "./data.json"

export default function Values() {
  const valueRef = useRef();
  const sliderRef = useRef();
  const { isVisible } = useScrollVisibility(valueRef, sliderRef);
  return (
    <div
      className={`values-container ${isVisible ? "appear" : ""}`}
      ref={valueRef}
    >
      <h1 className={isVisible ? "about-values-title" : ""} ref={sliderRef}>
        {data.section3.title}
      </h1>
      <div className="values-animated-container">
        {values.map((value) => (
          <div className="value-card">
            <p className="value-quote">{value.quote}</p>
            <div className="value-title">{value.title}</div>
            <div className="value-separator">
              <hr />
              <img
                src={value.icon}
                className="see-more-domains"
                alt={value.title}
              />
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
