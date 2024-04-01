import React, { useRef } from "react";
import "../../styles/home/whatwedo.css";
import useScrollVisibility from "../../hooks/useScrollAnimation";
import { CallButton } from "../Common/index";
import data from "./data.json"

export default function WhatWeDo({nav}) {
  const sliderRef = useRef(null);
  const whatwedoTitleRef = useRef(null);
  const {isVisible} = useScrollVisibility(whatwedoTitleRef, sliderRef)
  return (
    <div className={`what-we-do ${isVisible? "appear" : ""}`} ref={whatwedoTitleRef}>
      <div className="what-we-do-text">
        <h2
          className={isVisible ? "what-we-do-text-header" : ""}
          ref={sliderRef}
        >
          {data.section2.title}
        </h2>
        <p>{data.section2.description}</p>
        <CallButton nav={nav} to={data.section2.redirect}/>
      </div>
      <div className="image-carousel-container">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
