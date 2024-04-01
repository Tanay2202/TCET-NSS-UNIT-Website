import React, { useRef } from "react";
import PropTypes from "prop-types";
import data from "./data.json";
import nss_logo from "../../assets/static_images/nss_logo.svg";
import useScrollVisibility from "../../hooks/useScrollAnimation";
import "../../styles/home/whoarewe.css";
import { CallButton } from "../Common/index";

export default function WhoAreWe({ nav }) {
  const aboutUsTitleRef = useRef(null);
  const sliderRef = useRef(null);
  const { isVisible } = useScrollVisibility(aboutUsTitleRef, sliderRef);
  return (
    <section
      id="about"
      className={`about-us ${isVisible ? "appear" : ""}`}
      ref={aboutUsTitleRef}
    >
      <div className="nss-logo-container image-wrapper">
        <img src={nss_logo} alt="NSS LOGO" loading="lazy" />
      </div>
      <div className="about-us-text">
        <h2 className={isVisible ? "about-us-text-header" : ""} ref={sliderRef}>
          {data.section1.title}
        </h2>
        <p>{data.section1.description}</p>
        <CallButton nav={nav} to={data.section1.redirect}/>
      </div>
    </section>
  );
}

WhoAreWe.propTypes = {
  nav: PropTypes.func.isRequired,
};
