import React from "react";
import "../.././styles/team/chairperson.css";
import { useEffect } from "react";

import Images from "../.././assets/team/index";

const Team = () => {
  useEffect(() => {
    document.title = "Teams | TCET NSS UNIT";
  });

  return (
    <div>
      <div id="chairperson-container">
        <div className="chairperson-content" id="chairperson">
          <div className="table">
            <div id="chairperson">
              <img src={Images.bk_mishra} alt="harsh-mishra" />
            </div>
            <div className="detail_chairperson">
              <div className="chairman_detail">
                <h1>Dr. B.K. Mishra</h1>
                <h3>-Chairperson TCET NSS UNIT</h3>
              </div>
              <div className="principals_desk">
                TCET prioritizes holistic student development, notably through
                the NSS unit established in 2005. The unit engages undergraduate
                students voluntarily in diverse social service activities,
                contributing to socio-economic progress. Students gain social
                awareness, respecting community challenges and cultivating a
                sense of dignity in labor. The NSS unit, known for its proactive
                planning, conducts weekly projects showcasing commendable
                punctuality and discipline. The website initiative empowers
                volunteers to voice social issues, fostering a sense of
                responsibility. Kudos to TCET NSS UNIT and POs for their
                efforts. Congratulations to the dedicated volunteers!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
