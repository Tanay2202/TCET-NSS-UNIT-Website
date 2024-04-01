import "../../styles/about/moto.css";
import useScrollVisibility from "../../hooks/useScrollAnimation";
import { useRef } from "react";
import data from "./data.json";

export default function Moto() {
  const motoRef = useRef(null);
  const sliderRef = useRef(null);
  const { isVisible } = useScrollVisibility(motoRef, sliderRef);
  return (
    <div
      className={`moto-container ${isVisible ? "appear" : ""}`}
      ref={motoRef}
      id="what-is-nss"
    >
      <div className="moto-separator">
        <hr />
        <p>{data.section1.title}</p>
        <hr />
      </div>
      <h1 ref={sliderRef}>{data.section1.moto}</h1>
      <p>{data.section1.description}</p>
    </div>
  );
}
