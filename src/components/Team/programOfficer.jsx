import React from "react";
import "../.././styles/team/programOfficer.css";
import { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import Images from "../.././assets/team/index";

const Team = () => {
  const [isFlipped, setIsFlipped] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
  });
  useEffect(() => {
    document.title = "Teams | TCET NSS UNIT";
  });

  const handleClick = (e, newVersion) => {
    setIsFlipped((prev) => {
      console.log(e, prev[e]);
      return {
        ...prev,
        [e]: !prev[e],
      };
    });
  };

  return (
    <div>
      <div id="programme-officer-container">
        <div className="po_container">
          <h1 className="po_head" id="programme-officer">
            Programme officers
          </h1>
          <p className="po_about">
            Dedicated Program Officers lead the TCET NSS Unit with passion and
            commitment, charting a course of service and impact. Their guidance
            shapes a meaningful path, motivating volunteers to actively
            contribute to the community.
          </p>
        </div>
        <div className="prog">
          <div id="prog_box">
            <div
              className="program-officer-card"
              onClick={() => handleClick("card1")}
            >
              <ReactCardFlip
                isFlipped={isFlipped.card1}
                flipDirection="horizontal"
              >
                <div className="front">
                  <div className="front_content">
                    <img
                      src={Images.Satish}
                      alt="Programme Officer-Satish Sir"
                    />
                    <div className="prog-detail">
                      <h1>Dr. Satish Singh</h1>
                      <h3>-Programme Officer</h3>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <div className="back_content">
                    <h3>FROM THE PROGRAMME OFFICER’S DESK</h3>
                    <p>
                      Having led the unit for years, I've gained valuable
                      experiences and witnessed students' growth project by
                      project. When thinking of NSS, core values like
                      discipline, punctuality, and respect resonate. Discipline
                      is crucial for societal uplift, punctuality defines NSS
                      volunteers, and compassion towards society and nature is
                      imperative. Congratulations to every TCET NSS UNIT
                      volunteer for their selfless dedication, contributing to
                      society's betterment and fostering continuous learning and
                      growth.
                    </p>
                  </div>
                </div>
              </ReactCardFlip>
            </div>
          </div>
          <div id="prog_box">
            <div
              className="program-officer-card"
              onClick={() => handleClick("card2")}
            >
              <ReactCardFlip
                isFlipped={isFlipped.card2}
                flipDirection="horizontal"
              >
                <div className="front">
                  <div className="front_content">
                    <img
                      src={Images.Vinita}
                      alt="Programme Officer Vinita maam"
                    />
                    <div className="prog-detail">
                      <h1>Dr. Vinita Agrawal</h1>
                      <h3>-Programme Officer</h3>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <div className="back_content">
                    <h3>FROM THE PROGRAMME OFFICER'S DESK</h3>
                    <p>
                      This incredible group of individuals, driven by resilience
                      and unity, inspires our college community with their
                      unwavering hope and dedication to upliftment. Deeply
                      connected to local issues, they implement innovative
                      solutions, from blood and organ donation drives to tree
                      plantations and awareness campaigns. Their efforts bring
                      hope, exposure, and excitement, nurturing the growth of
                      volunteers. We're immensely proud and grateful for their
                      tireless commitment to making a positive difference.
                    </p>
                  </div>
                </div>
              </ReactCardFlip>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Team;
